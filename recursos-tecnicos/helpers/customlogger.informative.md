# customLogger.Informative

{% tabs %}
{% tab title="Descripción" %}
Permite agregar una pista al log de manera manual de tipo informativo
{% endtab %}

{% tab title="Parámetros" %}
* module – Modulo de la auditoria.
* operationCode – Codigo de la auditoria
* operation – Operacion de la auditoria
* message – Mensaje de la auditoria
* payload – String del objeto de la auditoria.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta
{% endtab %}

{% tab title="Ejemplo" %}
```
customLogger.Informative("Modulo", "999", "Operacion", "Mensaje", "{}")
```
{% endtab %}
{% endtabs %}
