# folderHelper.GetAgentByFolderId

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el objeto Agente a partir de un Folder Id
{% endtab %}

{% tab title="Parámetros" %}
* folderId – Identificador del folder del cual se desea obtener el detalle del Agente asignado.
{% endtab %}

{% tab title="Respuesta" %}
* Objeto de tipo Agente, retorna todas las propiedades registradas para el agente.
```
{
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
}
```
{% endtab %}

{% tab title="Ejemplo" %}
```
Var objetoAgente = folderHelper.GetAgentByFolderId("E318295C-86CE-4AD3-A388-1F41BA20334A");
```

{% endtab %}
{% endtabs %}
