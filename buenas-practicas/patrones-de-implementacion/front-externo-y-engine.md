# Front externo y Engine

Este tipo de implementación es similar a la de Mobile con Engine,  la diferencia es que el front externo o sistema externo tiene que implementar la autenticación, guardado parcial y procesamiento, en este tipo de implementaciones considera las recomendaciones de Mobile Engine y también las siguientes.

* En el front externo maneja un control de errores en la comunicación, las API’s de Engine manejan una respuesta genérica, si el status es cero la petición ocurrio de manera correcta, si el status es 3 es que ocurrio un error y se mandara una propiedad message con el error que ocurrio, las peticiones exitosas como las erróneas llegan con un http status 200.
* No avanzar en el flujo del front si no se obtiene un status 0 en las peticiones. El seguir avanzando en el flujo generar una inconsistencia entre ambas plataformas y no se podrá concluir la solicitud, es importante que ambos equipos identifiquen los puntos de conexión y los fallos que pueden ocurrir, asi como la implicación del reintento.
