# Diccionario de Datos

El diccionario de datos contendrá todos los campos y características para almacenar la información de las solicitudes, utiliza las siguientes recomendaciones para documentar tu diccionario de datos.
1. Apóyate del cliente. Asumir que sabemos cómo va la información es un error, el cliente conoce su negocio, y es más fácil que el cliente nos apoye con un documento de diccionario básico para construir uno más robusto que utilizaremos en Engine.
2. Identifica y estandariza los tipos de datos. En el artefacto de entrada del cliente algo que solicitamos es el tipo de dato y longitud, estos tipos y datos conviértelos a tipos de datos que usarías en Engine, de esa forma identificaras cuantos y de que tipos necesitas crear para la construcción del producto financiero. 
3. Organiza los campos por tarea. En base a las tareas definidas en el diagrama de producto ordena que campos van en cada tarea.
4. Estandariza los nombres de los campos. Recomendamos que los nombres de los campos sean descriptivos, y utilices un estándar camel case para los nombres, ejemplo apellidoPaterno.
5. No dupliques nombres de campos. Los campos en Engine se definen a nivel tarea y en diferentes tareas podemos usar el mismo nombre de campo, pero evita hacer eso a menos que el campo sea de lo mismo, a veces necesitamos recorrer digamos el nombre del cliente a la tarea de comité, el contexto del campo es el mismo, ahí si recomendamos usar el mismo nombre, pero supongamos que tenemos el nombre del cliente y nombre del aval, ambos están en su tarea correspondiente, si utilizamos “nombre” para identificar el campo será difícil saber a qué nombre hacemos referencia, en este caso nómbralo así, “nombreCliente”, y “nombreAval” de esa forma es más fácil de identificarlo.
6. Utiliza sufijos en los nombres si es necesario. En el inciso anterior mencionábamos el ejemplo del nombre en aval y cliente, un sufijo facilitara ver qué conjunto de datos pertenecen a una entidad ejemplo el cliente o aval.
7. Define el tipo de entrada que será el campo. Los campos están definidos para que almacenen información, en base al tipo de dato define qué tipo de control utilizaras.

{% hint style="info" %}
* Textos Cortos. Control de campos de texto de una sola línea.
* Textos muy largos. Control de campos de texto mixtilíneas.
* Fechas.  Control selector de fechas
* Valores lógicos (Si/No). Botón de Radio.
* Catálogos Simples (Un Nivel). Lista de selección.
* Catálogos anidados (Dos a cuatro niveles). Grupo de lista de selección.
* Imágenes. Control de imagen.
* Archivos. Control de archivo adjunto.
* HTML. Control de HTML.
* Coordenadas. Control de Mapa.
{% endhint %}