# Funciones de cambios de estados

Las funciones de cambio de estados nos permiten definir las condiciones para avanzar en el flujo para una tarea, requisito, etapa y producto, utiliza las siguientes recomendaciones para definir y construir una función de cambio de estado.

1. Comenta tu código. Los comentarios son una guía rápida de lo que hace un fragmento de código, agrega comentarios de que historias incluye, las funciones que objetivo tienen, si asignas valores de otros contenedores el por qué, una pequeña descripción de las condiciones.
2. Ejecuta rutinas que son del ámbito del contenedor. Supongamos que tengo estoy en un contenedor que para cerrarse debe notificar a un sistema, y el siguiente contenedor tiene que mostrar documentos que se tienen que traer de un servicio, no programes la rutina de los documentos en tu contenedor, ya que no es un criterio generar el documento para avanzar en esta parte del flujo, agrega la rutina en el contenedor que te va a mostrar los archivos, ya que si llega a fallar, puedes manejar un estado intermedio que solo necesite obtener los archivos y no tener problemas con la notificación al otro sistema.
3. No utilices eval. Los evales nos ayudan a evaluar código en tiempo real pero no es una práctica recomendada, anteriormente se utilizó el eval para reutilizar código, hoy en día contamos con las librerías externas.
4. Utiliza try catch. En las rutinas de código que pueden fallar, agrega un try catch para que puedas controlar el flujo de error.
5. Agrega trazas de log. Agregar trazas de logs ayuda a dar seguimiento al flujo cuando está operativo, agrégalas donde las consideres más importante.
6. Maneja flujos de error. Como mencionamos si tienes rutinas que pueden fallar, con certeza van a fallar, es importante que cuando fallen cortes el flujo, ya sea por un throw o un estado de error y que tu código esté preparado para volver ejecutarse una vez la conexión o motivo de falle este cubierto. Si tu código no se puede volver a ejecutar esta mal, ya que no siempre vamos a tener el camino feliz y tenemos que programar para retomar en el punto en que fallo.

Las funciones de cambio de estado utilizan la siguiente estructura.
```
(async function (_value) {
    // Funcion de cambio de estado Mati
    //historias:
    //Area de definicion de custom status
    const pendiente = 0;
    const enProceso = 1;
    const terminado = 2;

   //area para definir interaccion con otros contenedores
    const idDireccionCliente = 'fb81f8fb-c93e-206c-89e5-035aa321b16f';
    const estadoDireccionAceptada = 1;
    const estadoDireccionCliente = getContainerCustomStatus(idDireccionCliente);
    const idCameOriginacionCreditosIndividual = 'f8c20aeb-2034-dcfb-865d-3af389a851c8';
    const canceladoPorVigencia = 19;

    //area de funciones
    function validaCampos() {
        let textoErrorValidacion = "";
        customLogger.Error("Producto Financiero", "500", "Nombre tarea", "la funcion retorno");
        return textoErrorValidacion;
    }

    //logica de cambio de estados
    switch (estadoActual) {
        case pendiente:
                //condiciones para cambioa de estado
                //se valida que A sea igual a B para cambiar
                estadoActual = enProceso;
            break;
        case enProceso:
               //condiciones para cambioa de estado
               estadoActual = terminado;
            break;
        case terminado:
            break;
    }
    //Retorno del estado resultante
    return estadoActual;
})(_v_)
```