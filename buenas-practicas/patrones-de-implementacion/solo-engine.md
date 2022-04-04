# Solo Engine

La implementación de solo Engine son aquellas que tendran una originacion en la plataforma y continuaran todo el flujo hasta finalizarlo en el mismo, en este tipo de implementación los puntos que debes considerar son los siguientes.

* Validación de entrada en las vistas. Todas las vistas deben contar con la configuración de campos requeridos y reglas visuales para solicitar o no solicitar cierto grupo de datos dependiendo de las reglas de negocio que se tengan.
* Apertura y cierre de tareas. Es importante identificar que tareas se cerraran o abrirán para que el usuario tenga identificado que se esta avanzando en el flujo.
* Estados personalizados descritivos. Utiliza estados personalizados que ayuden a identificar de manera fácil en que parte del flujo esta la solicitud.
* Campos y estados con los errores. Durante el flujo es probable