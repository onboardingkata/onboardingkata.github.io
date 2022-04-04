# calendarHelper.GetDays(1)

{% tabs %}
{% tab title="Descripción" %}
Obtiene los días de la semana que no son laborables en base a la configuración del tenant.
{% endtab %}

{% tab title="Parámetros" %}
* Valor fijo 1 para días no laborables
{% endtab %}

{% tab title="Respuesta" %}
* Objeto con los días de la semana no laborables.
```
{"Sun":{}}
```
{% endtab %}

{% tab title="Ejemplo" %}
```
calendarHelper.GetDays(1)
```
{% endtab %}
{% endtabs %}
