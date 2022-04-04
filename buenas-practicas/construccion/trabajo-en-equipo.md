# Trabajo en equipo

El diseñador de producto no cuenta con la opción de un trabajo colaborativo, al editar el producto se guarda en la memoria del explorador y al guardar no sabe que ocurre en los demás y quien guarda el cambio es el último que dio clic en guardar, para trabajar en equipo puedes seguir estas recomendaciones.

1. Reducir, reutilizar y reciclar. Identifica que funciones puedes reutilizar y encapsúlala en clases, utiliza la característica de librerías externas que te provee Engine
2. Divide y vencerás. Organizar y dividir el trabajo nos permitirá tener un avance más sólido sobre lo terminado, estas son las recomendaciones para la división de trabajo.
* Librerías externas. Más de una persona puede modificar las librerías externas, pero debe existir un responsable que apruebe los cambios que se aceptaran en la librería.
* Contenedores medianos y pequeños. Es recomendable que una sola persona atienda un contenedor, la configuración y el código que lleva un contenedor no es mucho y que dos personas la trabajen puede hacer que sea más complicado definir qué parte le toca a cada quien.
* Contenedores grandes. En un contenedor grande existirán reglas en el Front y la función de cambio de estado. Una integrante puede trabajar en el Front (esto sobre Engine) y otro integrante del equipo en la función de cambio de estado utilizando Visual Studio Code para posteriormente pegar el código correspondiente.
* Mucha comunicación. Es necesario contar con mecanismos de comunicación para evitar problemas de entendimiento o con el versionamiento de los cambios, utilicen Microsoft Teams como canal de comunicación y SharePoint para compartir documentos.
* Un subproducto por persona o por mini equipo. Para el caso de contenedores medianos y pequeños es recomendable que se trabaje en una copia del producto por cada integrante que lo requiera, para el caso de contenedores grandes definir un subproducto para las personas que harán los cambios ahí, de esa forma todos los equipos pueden trabajar hasta que llegue la hora de hacer la unión (merge).
* No tocar el producto principal. No trabajar directo en el producto principal, ya que al hacer una unión del trabajo puede que ese trabajo directo se pierda.
3. La unión hace la fuerza. La división de trabajo nos permitirá avanzar en paralelo, pero llegara el punto donde necesitemos unir ese trabajo, estas son las recomendaciones para conjuntar el trabajo.
* Definir periodos de corte.  El periodo de corte nos permitirá unir el avance de nuestro equipo en el producto principal, definan el periodo y horario para hacer la actividad.
* Versionar antes de unir. Antes de realizar la unión de los trabajos realiza el versionamiento del producto para poder regresar a una versión funcional anterior en caso de una falla que no se pueda arreglar.
* Un responsable de hacer la unión. Al momento de tener el corte solo una persona debe hacer la unión esta la puede hacer por base de datos o por API.
* Unión de contenedores completos. El unir contenedores completos facilitará el trabajo de la unión y el disminuirá el periodo de tiempo para hacerlo, ya que no se tiene que comparar que se agregó de nuevo, simplemente se sustituye.
* Uniones pequeñas para su validación. Obtén y reemplaza la información de un solo contenedor y valida que el producto siga siendo editable, en caso de que no sea editable puede que la unión se realizó mal o falte un tipo de dato, si al editar el producto ves todo bien, continua con el siguiente contenedor hasta finalizar con la misma mecánica de validación.
* Repartir la actualización. Terminada la unión de todos los integrantes es necesario que los subproductos de cada uno se actualicen con la versión unificada, para ello pasa los siguientes nodos a sus productos, structure, datatypes, containers, executionPlan y partialFunctions. 
* Validar la unión de manera funcional. El responsable de la unión tendrá que validar por medio de un flujo lineal que el producto siga funcionando, en caso de identificar un fallo tendrá que notificar al responsable de esa sección, hacer los ajustes y realizar una unión rápida con los involucrados hasta que el producto pueda concluir el flujo de manera correcta.
4. Controlar y versionar. Llevar un control de versiones nos ayudara a regresar a un estado anterior en caso de una falla, Engine cuenta con un control de versiones de los productos, estos, estas son las recomendaciones para el versionamiento.
* Versionar antes de hacer la unión. Esto nos permitirá regresar a la versión anterior por si algo falla.
* Versionar la versión que se envía a Pruebas (QA). Este versionamiento lo realiza de manera automática Engine, en caso de que QA falle realiza el cambio en DEV y mándalo por medio de la publicación de Engine para que genere el versionamiento, no realices cambios directos en QA por que se pueden perder con una versión nueva que no tenga ese cambio.

{% hint style="info" %}
El código de las clases externas se lleva por GIT, utiliza las buenas prácticas de gitflow para mantener tu código.
{% endhint %}
