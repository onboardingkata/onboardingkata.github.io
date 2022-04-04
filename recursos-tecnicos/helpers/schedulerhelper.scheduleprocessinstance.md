# schedulerHelper.ScheduleProcessInstance

{% tabs %}
{% tab title="Descripción" %}
Permite programar la ejecución automática de un contenedor en determinada fecha.
{% endtab %}

{% tab title="Parámetros" %}
* instanceId – Identificador de la instancia a la cual se le programara la ejecución automática.
* containerId – Identificador del contendor de la instancia, este contenedor es el que se va a ejecutar.
* scheduledTime – Horario en el que se va a ejecutar la tarea, el horario debe estar en UTC.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta.
{% endtab %}

{% tab title="Ejemplo" %}
```
var scheduledTime = moment().tz("America/Mexico_City").add("minutes", 5).format('YYYY-MM-DDTHH:mm:ssZ');
schedulerHelper.ScheduleProcessInstance(documentJson.documentId, _value.containerId, scheduledTime);
```
{% hint style="info" %}
**Nota:** Se utiliza la libreria moment para manejar horarios en base al horario local para asi representarlo en tiempo local y que lo transforme en UTC.
{% endhint %}
{% endtab %}
{% endtabs %}
