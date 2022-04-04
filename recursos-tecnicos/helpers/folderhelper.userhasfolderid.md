# folderHelper.UserHasFolderId

{% tabs %}
{% tab title="Descripción" %}
Permite validar si un agente pertenece a un folder
{% endtab %}

{% tab title="Parámetros" %}
* agentId – Identificador del agente.
* folderIds – Arreglo de strings con los folders donde se desea comprobar si el usuario esta asignado.
{% endtab %}

{% tab title="Respuesta" %}
* Valor lógico, regresa verdadero si el agente pertenece a alguna carpeta, si no pertenece a alguna carpeta de las que se enviaron por parámetro, regresa falso.
{% endtab %}

{% tab title="Ejemplo" %}
```
var usuarioEstaEnFolder=folderHelper.UserHasFolderId("IdAgente", ["folder1","Folder2","...."])
```
{% endtab %}
{% endtabs %}
