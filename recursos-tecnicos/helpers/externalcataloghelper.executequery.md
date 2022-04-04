# externalCatalogHelper.ExecuteQuery

{% tabs %}
{% tab title="Descripción" %}
Permite la ejecución de una consulta externa registrada en el catalogo de fuentes externas.
{% endtab %}

{% tab title="Parámetros" %}
* CatalogName - nombre del catalogo
* parameter – condiciones de la busqueda
* take – numero de elementos a retornar
{% endtab %}

{% tab title="Respuesta" %}
* Retorna un objeto del resultado de la búsqueda, el valor es dinamico.
{% endtab %}

{% tab title="Ejemplo" %}
```
externalCatalogHelper.ExecuteQuery("miCatlogo", "campo == 1",10)
```
{% endtab %}
{% endtabs %}
