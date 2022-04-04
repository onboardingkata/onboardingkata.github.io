# GetAll

{% tabs %}
{% tab title="Descripción" %}
Permite obtener los valores almacenados en un vector (FormEdit)
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el vector (FormEdit)
* formEditName – Nombre del dato vector (FormEdit).
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos. Se retornara un arreglo de objetos con la siguiente estructura.
```
[
{
  "0":{}
},
{
  "1":{}
}
]
```
Donde el numero representa el índice 

{% endtab %}

{% tab title="Ejemplo" %}
```
var vectorFE = GetAll("IdContenedor", "TableFE");

//valor retornado 
//[{"0":{"NombreSocio":"Uno","TipoDocumento":["Cédula de Identificación"],"Participacion":"12","isSelected":null}},
{"1":{"NombreSocio":"Dos","TipoDocumento":["Pasaporte"],"Participacion":"22",
"isSelected":null}}]
```
{% endtab %}
{% endtabs %}
