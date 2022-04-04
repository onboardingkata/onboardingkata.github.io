# notificationHelper.SendSms

{% tabs %}
{% tab title="Descripción" %}
Permite enviar una notificación via SMS a un destinatario.
{% endtab %}

{% tab title="Parámetros" %}
* To – Numero con lada internacional del destinatario ejemplo + 52 55 12345678
* Content – Contenido del mensaje de texto que se enviara.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta
{% endtab %}

{% tab title="Ejemplo" %}
```
notificationHelper.SendSms("+525512345678","Le informamos que su crédito fue aprobado");
```
{% hint style="info" %}
**Nota:** Es necesario que el tenant que utilizara el envio de SMS tenga configurada una cuenta de Twilio
{% endhint %}
{% endtab %}
{% endtabs %}
