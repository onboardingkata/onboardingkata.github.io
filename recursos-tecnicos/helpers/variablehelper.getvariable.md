# variableHelper.GetVariable

{% tabs %}
{% tab title="Descripción" %}
Obtiene el valor de una variable definida en el catálogo de variables, en el caso de variables de tipo valor, retorna el valor capturado, para variables de tipo formula, calcula los valores y si se hace referencia a otras variables obtiene los valores necesarios para calcular los valores, en el caso de rango retorna los valores mínimo y máximo definidos.
{% endtab %}

{% tab title="Parámetros" %}
* Nombre de la variable, es el nombre de la variable con el que está registrado en el catálogo.
{% endtab %}

{% tab title="Respuesta" %}
* Retorna un string cuando la variable es de tipo valor.
* Para el caso de las variables de tipo calculadas, si la operación es numérica retornara un número.
* Para el caso de rangos retornara un objeto con los valores mínimos y máximos {"min":"1","max":"10"}
{% endtab %}

{% tab title="Ejemplo" %}
```
var cantidad = variableHelper.GetVariable("VariableCantidad");
```
{% hint style="info" %}
**Nota:** Las variables de tipo valor soportan caracteres especiales como diagonales.
Las variables de tipo formula interpretaran los caracteres especiales como signos para hacer calculo por lo que mal empleados pueden generar un error como la diagonal, si se usa un texto con diagonal ocurrirá un error.
{% endhint %}
{% endtab %}
{% endtabs %}
