# Update

{% tabs %}
{% tab title="Descripción" %}
Reemplaza el valor de un registro del vector por otro valor nuevo, el reemplazo es de la línea completa.
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el vector (FormEdit)
* formEditName – Nombre del dato vector (FormEdit).
* Index – índice en donde se reemplazará el elemento.
* value – objeto con la estructura del vector para reemplazar el elemento anterior.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta.
{% endtab %}

{% tab title="Ejemplo" %}
```
Update("IDcontainer","ForEditName",1,{ "Dato" : "Valor", "DatoDos" : "ValorDos"  });
```
{% endtab %}
{% endtabs %}
