# await varRepoHelper.getVariable

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el valor de una variable almacenada en cache previamente.
{% endtab %}

{% tab title="Parámetros" %}
* variableName – Nombre de la variable que se desea obtener su valor.
{% endtab %}

{% tab title="Respuesta" %}
* Si la variable no existe, se retornara undefined.
* En caso de que la variable exista se retorna un objeto compuesto indicando el nombre de la variable, valor solo si esta vigente y un indicador si aun es valido.
```
{ name: 'VarTestDemo', value: '123', isValid: true }

{ name: 'VarTestDemo', value: '', isValid: false }
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var variableCacheRetorno = await varRepoHelper.getVariable('VarTestDemo');
```
{% endtab %}
{% endtabs %}
