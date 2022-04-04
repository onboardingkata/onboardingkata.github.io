# folderHelper.GetInboxById

{% tabs %}
{% tab title="Descripción" %}
Obtiene el folder id a partir del id del buzon
{% endtab %}

{% tab title="Parámetros" %}
* InboxId – Identificador del buzon que se desea buscar
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de un elemento de tipo texto con el folder id del buzon que se busco.
```
[ '929420B8-40AB-4F91-9740-D0195B96EFFD' ]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var buzonId = folderHelper.GetInboxById("DAD3C329-2E9B-4327-9579-D1D8B96985BF");
```
{% endtab %}
{% endtabs %}
