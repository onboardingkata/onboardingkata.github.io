# folderHelper.GetFolderByAgentId

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el o los objetos folder asociados a un agente por medio de su identificador
{% endtab %}

{% tab title="Parámetros" %}
* agentId – Identificador del agente del cual se desea obtener el detalle de los folders.
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos de tipo folder, retornara todos los folders que tenga asignado el agente.
```
[
  {
    Id: '9E06D5FD-7C12-4CDF-A819-4DC51410BBC8',
    Name: 'QA6',
    Status: null,
    NoRequisitos: '0',
    Tags: [ 'Amigables', 'Buzon', 'Soluciones', 'review' ],
    AgentId: '55e0951a-929d-4c73-983e-cc57c7a0c429',
    FolderId: 'E318295C-86CE-4AD3-A388-1F41BA20334A'
  }
]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var folders= folderHelper.GetFolderByAgentId("55e0951a-929d-4c73-983e-cc57c7a0c429");
```
{% endtab %}
{% endtabs %}
