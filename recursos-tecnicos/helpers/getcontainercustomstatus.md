# getContainerCustomStatus

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el estado personalizado de un contenedor de la solicitud.
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor del cual se va a obtener su estado personalizado.
{% endtab %}

{% tab title="Respuesta" %}
* Número, se devolverá el valor almacenado para el contenedor el cual es numérico.
{% endtab %}

{% tab title="Ejemplo" %}
```
var statusContenedor = getContainerCustomStatus("IDContenedor");
```
{% endtab %}
{% endtabs %}
