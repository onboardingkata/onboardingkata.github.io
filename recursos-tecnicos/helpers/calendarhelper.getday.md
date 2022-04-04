# calendarHelper.GetDay

{% tabs %}
{% tab title="Descripción" %}
Objeto para obtener la información del dia de la semana en base a la fecha
{% endtab %}

{% tab title="Parámetros" %}
* String de fecha en formato DD/MM/YYYY, en base a la fecha obtiene el dia de la semana y retorna si es laborable o no y el horario.
{% endtab %}

{% tab title="Respuesta" %}
* Objeto compuesto con el dia de la semana y su detalle.
```
{
  "key": "Tue",
  "value": {
    "businessHours": [
      {
        "from": "08:00",
        "to": "12:00"
      },
      {
        "from": "12:00",
        "to": "18:00"
      }
    ]
  }
}
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var diaLaborable = calendarHelper.GetDay("21/04/2020");
```
{% endtab %}
{% endtabs %}
