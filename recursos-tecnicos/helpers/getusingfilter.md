# GetUsingFilter

{% tabs %}
{% tab title="Descripción" %}
Permite obtener los valores de un vector a partir de un filtro.
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el vector (FormEdit)
* formEditName – Nombre del dato vector (FormEdit).
* filter – filtro por el cual se va a realizar la búsqueda, compuesto por el nombre del dato y valor a buscar ejemplo { “Socio” : “ValoraBuscar”}
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos. Se retornará un arreglo de objetos con las filas que tengan coincidencia en la búsqueda..
```[
{
  "1":{}
},
{
  "3":{}
}
]
```
* Donde el numero representa el índice solicitado
{% endtab %}

{% tab title="Ejemplo" %}
```
GetUsingFilter("IDcontainer","ForEditName", { PrimerNombre: "BRR" })
```
{% endtab %}
{% endtabs %}
