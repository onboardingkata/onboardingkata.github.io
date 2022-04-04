# folderHelper.GetParentFolderById

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el nivel superior de un folder
{% endtab %}

{% tab title="Parámetros" %}
* folderId – Identificador del folder del cual se desea obtener su nivel superior
{% endtab %}

{% tab title="Respuesta" %}
* Retorna un objeto de tipo string con el valor del folder superior.
{% endtab %}

{% tab title="Ejemplo" %}
```
var parentFolder= folderHelper.GetParentFolderById("E318295C-86CE-4AD3-A388-1F41BA20334A");
```
{% endtab %}
{% endtabs %}
