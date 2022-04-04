# Integración con servicios externos y lógicos

Engine al ser un componente de orquestación va a integrar llamadas a servicios externos, para la llamada de servicios externos utiliza las siguientes recomendaciones.

1. Identifica donde realizaras la llamada. Si la llamada es sencilla y única puedes hacerlo desde tu función de cambio de estados, si tu llamada requiere un payload muy grande y realizaras una secuencia de llamadas para obtener un resultado realízalo como un job(linearflow).
2. Encapsúlalo en una función. Encapsular en una función la llamada al servicio permitirá darle un mejor mantenimiento y crecimiento, también tu código estará más ordenado.
3. Utiliza siempre un try catch. Las llamadas a servicios al utilizar un mecanismo de comunicación y son servidores externos que pueden fallar, cacha el error y guárdalo en el log y bitácora para mostrarlo al usuario final.
4. Guarda trazas. Guarda una traza antes de la llamada con el cuerpo que se va a enviar y una traza con la respuesta o error en caso de ocurrir.
5. Utiliza variables. Para los valores de URL y si hay encabezados trata de guardarlos en variables de Engine, ya que esos valores entre ambientes pueden variar y de esa forma no tendrás que modificar el código para apuntar al ambiente correspondiente.


Este es un ejemplo de cómo llamar a un servicio.
```
//funcion para notificar la aprobacion a Kata Builder en caso de que ya no se necesite la aprobación por CCC
    function notificaAprobacion(aceptada, vectorBeneficiario) {
        //se obtiene la configuración de conexion a kata builder
        let kBIndividualUrl = variableHelper.GetVariable("KBIndividualUrlAprobacionRechazo");
        let kBIndividualUserName = variableHelper.GetVariable("KBIndividualUserName");
        let kBIndividualPassword = variableHelper.GetVariable("KBIndividualPassword");
        let kBIndividualCompany = variableHelper.GetVariable("KBIndividualCompany");

        //se construye el payload para notificar a kata builder
        let jsonAprobacion = {
            "Username": kBIndividualUserName,
            "Password": kBIndividualPassword,
            "CompanyId": kBIndividualCompany,
            "Params": {
                "engineIdInstancia": documentJson.documentId,
                "aprobado": aceptada,
                "CAMEBeneficiarios": vectorBeneficiario
            }
        };

        try {
            //se raeliza la notificacion a KB se guarda el log antes y despues de la peticion
            customLogger.Error("CameIndividual", "200", "KBIntegracion", "Aprobacion KB peticion " + kBIndividualUrl, JSON.stringify(jsonAprobacion));
            let kbRespuesta = service.MakePost(kBIndividualUrl, jsonAprobacion, {});
            logHelper.AddErrorEntry("kbRespuesta " + JSON.stringify(kbRespuesta));
            customLogger.Error("CameIndividual", "200", "KBIntegracion", "Aprobacion KB respuesta " + kBIndividualUrl, JSON.stringify(kbRespuesta));


            if (kbRespuesta) {
                //se valida si obtenemos respuesta de KB
                if (kbRespuesta.status.toLowerCase() === "error") {
                    //si se obtiene respuesta con status de error se corta el flujo
                    let textoError = "Aprobacion KB respuesta obtenida con error " + JSON.stringify(kbRespuesta);
                    logHelper.AddErrorEntry(textoError);
                    customLogger.Error("CameIndividual", "500", "KBIntegracion", textoError, JSON.stringify(jsonAprobacion));
                    throw new Error(textoError);
                }
            } else {
                //en caso de no obtener respuesta se corta el flujo
                let textoError = "Aprobacion KB no se recibio respuesta ";
                throw new Error(textoError);
            }

        } catch (exKB) {
            //en caso de que falle la comunicación se guarda un log y se corta la comunicación.
            let textoError = "Kata Builder Aprobacion error respuesta: " + exKB.message + " : " + exKB.stack;
            logHelper.AddErrorEntry(textoError);
            customLogger.Error("CameIndividual", "500", "KBIntegracion", textoError, JSON.stringify(jsonAprobacion));
            throw new Error(textoError);
        }
    }
```