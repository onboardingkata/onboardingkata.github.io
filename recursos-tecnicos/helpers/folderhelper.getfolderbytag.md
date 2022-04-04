# folderHelper.GetFolderByTag

{% tabs %}
{% tab title="Descripción" %}
Permite realizar búsqueda de folders por medio de etiquetas.
{% endtab %}

{% tab title="Parámetros" %}
* Etiquetas – Son las etiquetas por las cuales se desean buscar los folders, por cada etiqueta adicional se manda como un parámetro adicional.
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos de tipo folder.
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
  },
  {
    Id: '6C320AD0-C623-446F-8801-FE3DDC428AB0',
    Name: 'Buzon SA',
    Status: null,
    NoRequisitos: '0',
    Tags: [ 'Amigables', 'Buzon', 'Soluciones' ],
    AgentId: 'c097b2b1-1688-4e28-9357-3f8a9fa641a0',
    FolderId: '317265F6-450C-4D40-BEC5-2BE2411B7B3C'
  }
]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var foldersxEtiquetas= folderHelper.GetFolderByTag("Amigables");
```
{% hint style="info" %}
**Nota:** El operador aplicado para las etiquetas es un or, retornara todos los folders donde se encuentre una o todas las etiquetas enviadas como parametros.
{% endhint %}
{% endtab %}
{% endtabs %}
