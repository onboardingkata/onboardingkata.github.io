# Diseño de pantallas

El diseñador de formularios es una herramienta visual que nos permitirá darle un orden y formato a los campos que el usuario podrá capturar, para construir tus formularios utiliza las siguientes recomendaciones.

1. Utiliza las cuatro columnas. El datafront permite agrupar en una sola fila hasta cuatro campos, si los campos son del mismo contexto trata de agruparlos esto ayudara a que se genere menos scroll y el usuario tenga visible más datos.
2. Evita la recursividad entre funciones. A los elementos se les pueden aplicar scripts para ajustar el formulario dinámicamente, evita hacer llamadas recursivas, ejemplo Campo A, afecta al Campo B, el Campo B afecta al C y Campo C afecta al A, esto generara una recursividad que terminara bloqueando el formulario.
3. Evita recursividad con una sección. Una sección cuenta con la opción de tener una función de campo, al hacer la referencia asegúrate que el campo no pertenezca a la misma sección, si bien al pertenecer a la misma sección funcionara de manera interna se genera una ejecución infinita entre la sección y el campo, ya que al ocultarse la sección los campos ejecutan sus referencias y se genera un bucle que consumirá memoria y afectara la experiencia del usuario dando la impresión de que la pantalla es lenta, el error lo puedes encontrar en la consola del explorador con el texto “Maximum call stack size exceeded”

A continuación, un ejemplo de una función de campo.
```
var result = [];
result['show'] = this.personalidadJuridica === "Persona Moral";
result['required'] = this.personalidadJuridica === "Persona Moral";
return result;
```