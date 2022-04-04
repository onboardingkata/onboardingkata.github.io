# folderHelper.GetFullFolderFromAgentId

{% tabs %}
{% tab title="Descripción" %}
Permite obtener la información de la carpeta y agente.
{% endtab %}

{% tab title="Parámetros" %}
* agentId – Identificador del agente al cual se desea obtener la información.
{% endtab %}

{% tab title="Respuesta" %}
* Objeto compuesto con la información del folder y agente.
```
{
  isDefaultFolder: false,
  folderId: 'E318295C-86CE-4AD3-A388-1F41BA20334A',
  rolesId: [
    '7f47c6f6-8097-4e09-80a5-be22c50c05b9',
    '08aee38f-68bd-4a71-9150-a017382ffb14'
  ],
  assignedAgentId: '55e0951a-929d-4c73-983e-cc57c7a0c429',
  parentGroup: {
    parentId: '50B0CC88-29AE-4561-9EE0-A404A4C236D9',
    groupFolderId: '50B0CC88-29AE-4561-9EE0-A404A4C236D9',
    groupResponsible: '2f9260b3-c7e8-43ab-b48a-72dbc2b7d5e4'
  },
  tags: [ 'Amigables', 'Buzon', 'Soluciones', 'review' ],
  agentData: {
    idEstado: 0,
    nombres: 'QA6',
    apellidoPaterno: 'QA6',
    apellidoMaterno: 'QA6',
    puesto: 'ARQUITECTO',
    oficina: 'ENGINE',
    region: 'ENGINE',
    telefono: '123456789',
    nombreCompleto: 'QA6',
    noFolders: 0,
    roles: [
      '7f47c6f6-8097-4e09-80a5-be22c50c05b9',
      '08aee38f-68bd-4a71-9150-a017382ffb14'
    ],
    agentId: '55e0951a-929d-4c73-983e-cc57c7a0c429',
    fullName: 'qa6',
    name: 'qa6',
    lastName: '',
    jobName: '',
    active: true,
    email: 'qa6@fdlmb2c.onmicrosoft.com',
    labels: [ 'ETIQUETA' ],
    inactivities: []
  },
  nodeId: '9E06D5FD-7C12-4CDF-A819-4DC51410BBC8',
  nodeType: 0,
  folderName: 'QA6'
}
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var fullAgent= folderHelper.GetFullFolderFromAgentId("55e0951a-929d-4c73-983e-cc57c7a0c429");
```
{% endtab %}
{% endtabs %}
