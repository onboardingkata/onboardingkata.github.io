# Funciones parciales

Las funciones parciales nos permitirán ejecutar una pequeña rutina de código para llamar a un servicio externo que nos permita obtener información para llenar datos del formulario que estamos utilizando, utiliza las siguientes recomendaciones para construir tus funciones.

1. Los valores son de captura. Los valores que vas a obtener para tu función parcial son de captura, estos valores se obtienen de la siguiente forma, getValueByFullName(containerId, fullName, onlyDescriptions = false, useAutoSave = true), donde el cuarto parámetro indica que se debe buscar en el autosave, lo que se captura en el formulario va al autosave, cuando procesamos cambia al values.
2. No sobrepases el alcance. Las funciones parciales están diseñadas para llenar el formulario donde se llama, si bien puedes llamar otras tareas por medio de helpers puede que no te funcione.
3. Utiliza las prácticas de los servicios externos. Utiliza las prácticas de los servicios externos, try catch, manejarlo como función.
4. Utiliza un campo de error para los fallos. En caso de que la ejecución de tu función parcial falle, muéstrale al usuario en un campo de error el resultado para que tenga visibilidad de que, si se ejecutó, pero algo fallo.
La estructura de la función parcial es la siguiente.

```
(async function (_value) {
    let filtroBusqueda = getValueByFullName(_value.containerId, "buscarFisicaPor", false, true)[0];
    let valorBusqueda = getValueByFullName(_value.containerId, "nombre", false, true);

    let headerServicioLogicoTenant = variableHelper.GetVariable("headerServicioLogicoTenant");
    let headerServicioLogicoKata = variableHelper.GetVariable("headerServicioLogicoKata");
    let urlServicioLogico = variableHelper.GetVariable("urlServicioLogico");

    let headers = {
        "Tenant": headerServicioLogicoTenant,
        "Kata": headerServicioLogicoKata,
    }

    switch (filtroBusqueda) {
        case "NOMBRE":
            let jsonServicio = {
                "fullName": valorBusqueda
            };

            try {
                let respuesta = service.MakePost(urlServicioLogico + "AhorroMambu/BusquedaNombre", jsonServicio, headers);

                let vectorClientes = [];
                let encontroResultados = false;

                customLogger.Error("AhorroInversion", "200", "BuscarclientePorNombre", "Respuesta", JSON.stringify(respuesta));

                if ((Array.isArray(respuesta.result)) && (respuesta.result.length > 0)) {
                    encontroResultados = true;
                    respuesta.result.forEach(element => {
                        vectorClientes.push({
                            isSelected: false,
                            encodedKey: element.encodedKey,
                            idCliente: element.id,
                            nombrecompleto: element.firstName + " " + element.lastName,
                            emailCliente: element.emailAddress,
                            telefonoCelular: element.mobilePhone,
                            fechaNacimiento: element.birthDate,
                            curpCliente: element._Datos_Personales_Clientes.CURP_Datos_Personales_Cliente
                        });

                    });
                }

                await saveValueHelper(_value.containerId, {
                    vectorClientes: vectorClientes,
                    encontroResultados: encontroResultados,
                    clienteNoEnLista: encontroResultados,
                    encodedKeySelected: "",
                    mostrarError: false
                });
            } catch (ex) {
                let textoError = "Servicio Logico error respuesta: " + ex.message + " : " + ex.stack;
                logHelper.AddErrorEntry(textoError);
                customLogger.Error("AhorroInversion", "500", "SerivicioLogicoIntegracion", textoError, JSON.stringify(jsonServicio));
                await saveValueHelper(_value.containerId, {
                    campoError: textoError,
                    mostrarError: true
                });
            }

            break;
    }

    customLogger.Error("AhorroInversion", "200", "BuscarclientePorNombre", "Finaliza busqueda");
})(_v_);
```