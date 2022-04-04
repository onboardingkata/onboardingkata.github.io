# varRepoHelper.save

{% tabs %}
{% tab title="Descripción" %}
Permite almacenar una variable en el cache de engine para el tenant, el guardado de la variable tiene una vigencia.
{% endtab %}

{% tab title="Parámetros" %}
* variableName – Nombre de la variable como se estará guardando en el cache
* variableValue – Valor que se desea almacenar.
* Duration – Vigencia en minutos de la variable, después de la vigencia ya no se retornara el valor.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta.
{% endtab %}

{% tab title="Ejemplo" %}
```
await varRepoHelper.save('VarTestDemo', "123", 1);
```
{% hint style="info" %}
**Nota:** La duración comienza en la ejecución del helper, en caso de que se vuela a almacenar se toman los nuevos valores almacenados y se reinicia el tiempo.
{% endhint %}
{% endtab %}
{% endtabs %}
