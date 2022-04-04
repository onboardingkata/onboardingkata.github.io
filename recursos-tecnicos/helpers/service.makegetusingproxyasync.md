# service.MakeGetUsingProxyAsync

{% tabs %}
{% tab title="Descripción" %}
Realiza una llamada http GET utilizando el proxy que tenga la máquina de estados en la configuración.
{% endtab %}

{% tab title="Parámetros" %}
* url – URL del servicio que se quiere consumir.
* Headers – Encabezado para realizar la llamada http.
{% endtab %}

{% tab title="Respuesta" %}
* Si la respuesta por parte del servicio es JSON se retorna un objeto.
* Si la respuesta por parte del servicio no es JSON se retorna la respuesta en modo texto.
{% endtab %}

{% tab title="Ejemplo" %}
```
var htmlResumen = service. MakeGetUsingProxyAsync ("https://www.misitio.com/reporte/12", { “token”:”abcd…”});
```
{% hint style="info" %}
**Nota:** En las llamadas HTTP utilizar try catch derivado de los errores que el servicio pueda generar o respuestas inesperadas.
{% endhint %}
{% endtab %}
{% endtabs %}
