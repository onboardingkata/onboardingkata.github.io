# service.MakeGet

{% tabs %}
{% tab title="Descripción" %}
Realiza una llamada HTTP Get
{% endtab %}

{% tab title="Parámetros" %}
* url – URL del servicio que se quiere consumir.
* Headers – Parametro opcional, encabezado para realizar la llamada http, en caso de no enviar agregara uno genérico que utiliza engine para llamar servicios internos.
{% endtab %}

{% tab title="Respuesta" %}
* Si la respuesta por parte del servicio es JSON se retorna un objeto.
* Si la respuesta por parte del servicio no es JSON se retorna la respuesta en modo texto.
{% endtab %}

{% tab title="Ejemplo" %}
```
var htmlResumen = service. MakeGet("https://www.misitio.com/reporte ",{ “token”:”abcd…”});
```
{% hint style="info" %}
**Nota:** El encabezado genérico se componen de tenantId, Authorization, ipaddress y channel.
{% endhint %}
{% endtab %}
{% endtabs %}
