# Job (Linear Flow)

Los Job (Linear flow) son rutinas de código que nos permiten organizar llamadas a servicios externos, para el uso correcto de los Job’s, utiliza las siguientes recomendaciones.

1. Agrupa tus parámetros de entrada. Trata de generar pocas funciones para obtener los datos de entrada, ya que generar muchas funciones hará que la ejecución sea más demorada debido a que la ejecución y evaluación es individual.
2. No interactúes con los contenedores en tu job. El job es para tener una lógica aislada debido a eso su estructura es recibir parámetros de entrada y salida, en la rutina de respuesta satisfactoria o con error ahí si puedes interactuar con los contenedores.
3. Define tu escenario de ejecución satisfactoria y ejecución con error. Como mencionamos el Job es para llamar o agrupar distintas llamadas a servicios, estos servicios pueden fallar y debes tener una rutina para tomar acciones de reintento en caso de fallar.
4. Tu Job debe poder reprocesarse. En un Job al tener varias llamadas de servicios externos uno de ellos puede fallar por disponibilidad, timeout, es necesario que tu código esté preparado para volver a ejecutarse sin que falle la parte que si avanzo.

La estructura del Job se compone de la siguiente forma.

Parámetros de entrada
```
(function (contenedor) {
  let resultado=null;
   //codigo para obtener datos y armar los parámetros de entrada del job.
 let resultado.validar=false;
    return resultado;
})(_v_);
```
Job (Linea flow)
```
(async function (entrada) {
   //rutina para llamar los servicios y armar la respuesta
  //se retorna la respuesta.
    return resultado;
})(_v_);
```
Respuesta satisfactoria.
```
(async function (salida) {
    //rutina para usar la respuesta del Job, asignarlos a los campos de los contenedores o evaluar la respuesta.
})(_v_);
```
Respuesta con error.
```
(async function (salida) {
    //rutina para usar la respuesta del Job con error, asignarlos a los campos de los contenedores o evaluar la respuesta
})(_v_);
```

Al día de hoy, Engine cuenta con una capa de servicios Lógicos que pueden agrupar y contar con lógica para llamar a varios servicios, el mantenimiento a estos servicios es más fácil que mantener un Job, recomendamos priorizar la utilización de un servicio lógico que un Job.