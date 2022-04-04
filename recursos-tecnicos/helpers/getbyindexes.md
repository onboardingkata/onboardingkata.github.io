# GetByIndexes

{% tabs %}
{% tab title="Descripción" %}
Permite obtener las filas con los indices que se mandan como parámetro dentro del vector (formedit)
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el vector (FormEdit)
* formEditName – Nombre del dato vector (FormEdit).
* indexes – Arreglo con los índices que se desean obtener.
{% endtab %}

{% tab title="Respuesta" %}
•	Arreglo de objetos. Se retornara un arreglo de objetos con las filas solicitadas siguiente estructura.
```[
{
  "1":{}
},
{
  "3":{}
}
]
```
Donde el numero representa el índice solicitado
{% endtab %}

{% tab title="Ejemplo" %}
```
var vectorFE = GetByIndexes("IdContendor", "TableFE", [1]);
```
{% endtab %}
{% endtabs %}
