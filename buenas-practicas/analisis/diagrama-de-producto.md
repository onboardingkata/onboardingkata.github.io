# Diagrama de Producto

El diagrama de producto nos da una visión de cómo estará compuesto a alto nivel nuestro producto financiero y el flujo general que van a seguir las tareas utiliza las siguientes recomendaciones para documentar tu diagrama de producto.


1. Diseña de mayor a menor, nombra primero tu producto o flujo, ejemplo crédito individual, identifica que etapas de manera global tienen, evaluación, otorgamiento, por ejemplo, no trates de tener muchas etapas, recuerda que los requisitos también agrupan, identifica que requisitos tendrás por etapa, y por último define las tareas, trata de generar el menor número de requisitos y etapas, ya que tener muchas aumenta la complejidad al programar y mantener tantos agrupadores.
2. Realiza agrupaciones en base al flujo y niveles de escalamiento.  No generes demasiadas agrupaciones, las agrupaciones que definas deben ser en base al flujo, por ejemplo, tienes una parte en tu flujo donde solicitas y almacenas información, otro parte del flujo es investigarlo y validar que la información proporcionada es verídica, otra parte del flujo es validación por parte de un comité, como podemos identificar es necesario terminar una parte del flujo para seguir, así genera tus agrupaciones.
3. Define tareas en base a pequeños avances del flujo. Por ejemplo, es necesario contar con toda la información del cliente para validar su central de crédito y si la central es aprobada entonces necesito subir documentos digitales, ahí tenemos un ejemplo de 3 tareas, en ocasiones podemos tener el escenario que es necesario capturar 200 campos, si esos campos son necesarios para avanzar en el flujo no los dividas, al usuario no le va a generar sentido capturar 100 y procesar, ya que en muchas ocasiones al ser la misma parte del flujo tienen que regresar a modificar algún dato, eso te puede complejizar la programación en el avance y retroceso en el flujo.
4. Valida tu producto conforme al flujo de negocio, como mencionamos, las tareas deben otorgarnos un avance en el flujo, si tu flujo está incompleto agrega más tareas para lograrlo, si en tu flujo encuentras una tarea que no genera un avance, considera eliminarla e identifica en que tarea debe ir la información que pensaste.