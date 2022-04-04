# saveValueHelper

{% tabs %}
{% tab title="Descripción" %}
Permite asignar el valor en un dato de un contenedor, el valor asignado afectara autosave y values
{% endtab %}

{% tab title="Parámetros" %}
* containerId - Identificador del contenedor donde se encuentra el dato.
* values – objeto compuesto con los datos que se van a modificar para el caso de los valores simples la representación es llave valor, para el caso de los compuestos debe ser llave valor, donde valor puede ser otra representación de tipo llave valor.

Asignación simple 
```
{  “Nombre” : “Valor” }
```
Asignacion compuesta 
```
{ “Compuesto” : {  “Nombre” : “Valor” } } 
```
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta de retorno.
{% endtab %}

{% tab title="Ejemplo" %}
```
await saveValueHelper("IdContainer", { "Observacion": "Valor" });
await saveValueHelper("IdContainer", { HtmlResumen: { Url: "valor" } });
```
{% hint style="info" %}
**Nota:** Es necesario utilizar el await para hacer uso del helper.
{% endhint %}
{% endtab %}
{% endtabs %}
