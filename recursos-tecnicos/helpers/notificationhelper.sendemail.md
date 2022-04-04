# notificationHelper.SendEmail

{% tabs %}
{% tab title="Descripción" %}
Permite enviar un correo electrónico a un destinatario.
{% endtab %}

{% tab title="Parámetros" %}
* To – Correo del destinatario que recibira la notificación.
* Content – contenido del correo electrónico, se soporta HTML.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta
{% endtab %}

{% tab title="Ejemplo" %}
```
notificationHelper. SendEmail ("correo@correo.com","<b>Le informamos que su crédito ha sido aprobado");
```
{% hint style="info" %}
**Nota:** Es necesario que el tenant que utiliza el envio de correo tenga configurada una cuenta SMTP.
{% endhint %}
{% endtab %}
{% endtabs %}
