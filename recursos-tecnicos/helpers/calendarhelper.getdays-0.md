# calendarHelper.GetDays(0)

{% tabs %}
{% tab title="Descripción" %}
Obtiene los días de la semana que son laborables en base a la configuración del tenant
{% endtab %}

{% tab title="Parámetros" %}
* Valor fijo 0 para días laborables
{% endtab %}

{% tab title="Respuesta" %}
* Objeto compuesto JSON con los días de la semana que son laborables y los horarios que son laborables por dia.
```
{
  "Mon": {
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
  },
  "Tue": {
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
  },
  "Wed": {
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
  },
  "Thu": {
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
  },
  "Fr": {
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
  },
  "Sat": {
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
var diasLaborables = calendarHelper.GetDays(0);
```
{% endtab %}
{% endtabs %}
