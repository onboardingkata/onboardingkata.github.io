# ¿Cómo construir un producto financiero en Engine?

Construir un producto financiero requiere de una serie de pasos o requisitos previos para que este funcione, a continuación, listamos las recomendaciones para realizarlo.

1. Registra todos tus roles. En base al artefacto “Matriz de asignación por tarea y estado personalizado” identificamos todos los roles, realiza el registro de los roles para que en tus funciones de asignación si los necesitas los puedas utilizar, puede que consideres que no es necesario construir más de un rol ya que los permisos son iguales, aun así recomendamos no hacer esa práctica, puede que en el futuro un rol necesite tener un permiso menor o como mencionamos en las funciones de asignación serán más fáciles de identificar. 
2. Registra tus usuarios de pruebas. Todo lo que configuremos, desarrollemos o implementemos, será necesario validar en el ambiente de desarrollo y QA, la cantidad de usuario que necesites para pruebas va a partir de tus roles, como recomendación registra al menos dos usuarios por cada rol, eso te permitirá validar que tu flujo funciona para distintos usuarios, sin embargo, puede existir que un rol no requiera de dos usuarios como por ejemplo el gerente, pero en los roles donde puede existir más de un usuario registra al menos dos.
Para el nombre del usuario utiliza un término descriptivo, por ejemplo, gerentesucursaluno, de esa forma al ver el usuario identificaras que rol tiene en el flujo sin tener que consultar más información.
3. Configura tu jerarquía. Para construir la jerarquía es necesario validarla con el cliente para preguntar cómo es la estructura jerarquía de los roles, para identificarla, realiza las siguientes preguntas.
* ¿Quién depende de qué?
* ¿Cuál rol es el de más arriba?
* ¿Existe otro rol de más alto nivel?
Puede que en la explicación identifiques roles que no interactúan en el flujo, sería importante validar con el cliente si en el futuro esos roles van a interactuar o no, en caso de que, si considéralos en tu jerarquía, si identificas un rol que si participa y no está documentado actualiza tu documento de “Matriz de asignación por tarea y estado personalizado”. Con tu jerarquía configurada asigna los usuarios correspondientes a las carpetas.
Si en tu flujo hay una sección donde cualquier persona del rol puede atender la solicitud, utiliza un buzón en ese nivel de la jerarquía, los buzones permiten que varias personas puedan ver las solicitudes, pero solo una pueda atenderla.
4. Registra todos tus catálogos. Para definir los tipos de datos restringidos es necesario tener los catálogos, la cantidad de catálogos estará definido en el documento “Diccionario de Datos”.
5. Registra todos tus tipos de datos. La cantidad de tipo de datos que utilizaremos estará definida en el documento “Diccionario de Datos”, antes de construir registra todos los que tienes identificados para su uso en el producto.
6. Construye tu producto. Con todo lo anterior configurado podemos construir nuestro producto financiero, utiliza las siguientes recomendaciones.
* Define todos tus contenedores (etapas, requisitos, tareas)
* Define todos los estados personalizados que tiene el producto.
* Define tus planes de ejecución.

{% hint style="info" %}
Seguir los pasos anteriores permitirá que tengas la estructura completa, lo siguiente será que agregues los campos y diseñes los formularios con las reglas de negocio de cada tarea para programar las funciones de cambio de estado.
{% endhint %}