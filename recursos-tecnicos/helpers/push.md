# Push

{% tabs %}
{% tab title="Descripción" %}
Permite agrear un elemento al vector.
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el vector (FormEdit)
* formEditName – Nombre del dato vector (FormEdit).
* value – objeto con la estructura del vector para insertarlo al final del registros.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta.
{% endtab %}

{% tab title="Ejemplo" %}
```
Push("IDcontainer","ForEditName",{ "Dato" : "Valor", "DatoDos" : "ValorDos"  });
```
{% endtab %}
{% endtabs %}
