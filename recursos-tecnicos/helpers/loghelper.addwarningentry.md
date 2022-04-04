# logHelper.AddWarningEntry

{% tabs %}
{% tab title="Descripción" %}
Permite agregar una entrada  la auditoria del contenedor
{% endtab %}

{% tab title="Parámetros" %}
* Mensaje – Mensaje de texto que se almacenar aen la auditoria del contenedor
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta
{% endtab %}

{% tab title="Ejemplo" %}
```
logHelper.AddWarningEntry("Mensaje")
```
{% hint style="info" %}
**Nota:** El nivel warning se almacena a nivel modelo de datos, pero para el front muestra lo mismo.
{% endhint %}
{% endtab %}
{% endtabs %}
