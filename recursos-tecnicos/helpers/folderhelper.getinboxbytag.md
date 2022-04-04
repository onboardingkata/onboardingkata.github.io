# folderHelper.GetInboxByTag

{% tabs %}
{% tab title="Descripción" %}
Permite obtener buzones por etiquetas
{% endtab %}

{% tab title="Parámetros" %}
* Etiquetas – se recibe una etiqueta por parámetro.
{% endtab %}

{% tab title="Respuesta" %}
* Retrona un arreglo de objetos de tipo buzon con la información general de los buzones uqe tengan esas etiquetas.
```
[
  {
    Id: 'DAD3C329-2E9B-4327-9579-D1D8B96985BF',
    Name: 'Buzon Aprobacion',
    Status: null,
    NoRequisitos: '0',
    Tags: [ 'SolicitudesAprobacion' ],
    AgentId: null,
    FolderId: '929420B8-40AB-4F91-9740-D0195B96EFFD'
  }
]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var buzonesId= folderHelper.GetInboxByTag("SolicitudesAprobacion");
```
{% endtab %}
{% endtabs %}
