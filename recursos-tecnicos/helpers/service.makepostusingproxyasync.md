# service.MakePostUsingProxyAsync

{% tabs %}
{% tab title="Descripción" %}
Realiza una llamada http POST utilizando el proxy que tenga la máquina de estados en la configuración.
{% endtab %}

{% tab title="Parámetros" %}
* url – URL del servicio que se quiere consumir.
* requestData – PayLoad o Body que se enviara al consumir el servicio.
* Headers – Encabezado para realizar la llamada http.
{% endtab %}

{% tab title="Respuesta" %}
* Objeto compuesto con la siguiente información.
```
{
  status: 400,
  error: '400 - Bad Request',
  response: 'body de la respuesta'
}
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var htmlResumen = service. MakePostUsingProxyAsync ("https://www.misitio.com/reporte ", { “parámetro” : ”Parametro”},{ “token”:”abcd…”});
```
{% hint style="info" %}
**Nota:** En las llamadas HTTP utilizar try catch derivado de los errores que el servicio pueda generar o respuestas inesperadas.
El wrapper retornara el status de código http y error en caso de error.
{% endhint %}
{% endtab %}
{% endtabs %}
