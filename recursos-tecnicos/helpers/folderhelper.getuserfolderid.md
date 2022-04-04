# folderHelper.GetUserFolderId

{% tabs %}
{% tab title="Descripción" %}
Obtiene el Folder Id de un agente
{% endtab %}

{% tab title="Parámetros" %}
* agentId – Es el identificador del agente.
{% endtab %}

{% tab title="Respuesta" %}
* Retorna un string con el Folder Id del agente.
{% endtab %}

{% tab title="Ejemplo" %}
```
var folder= folderHelper.GetUserFolderId("55e0951a-929d-4c73-983e-cc57c7a0c429");
```
{% hint style="info" %}
**Nota:** Para hacer referencia al agente firmado se utiliza la siguiente expresión contextService.get("request:agentId")
{% endhint %}
{% endtab %}
{% endtabs %}
