# getValueByFullName

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el valor de un dato definido en un contenedor.
{% endtab %}

{% tab title="Parámetros" %}
* containerId – Identificador del contenedor donde se encuentra el dato.
* fullName – Nombre completo del campo, si es un campo compuesto debe ir de la siguiente forma compuesto.dato, si no es compuesto con el nombre.
* onlyDescriptions = false – Indicador que funciona para los datos de tipo restringido, por defecto es falso para retornar el valor del dato, si el parámetro es verdadero, retornara la descripcon del valor restringido.
* useAutoSave = false – Indicador del tipo de obtención del valor de dato, por defecto es falso y busca en el nodo values del contenedor, si el valor es verdadero el valor a retornar se obtendrá del nodo autosave.
{% endtab %}

{% tab title="Respuesta" %}
* Para los restringidos retornara un arreglo con los valores que almacena el dato restringido \[“Valor”], si el restrigido se compone de varios catalogos retornara los valores almacenados \[“Valor”, “Valor”]
* Para los tipos simples se retornara un string.
* No es posible obtener el valor de un compuesto ya que no contiene un valor fijo, para obtener los valores se debe acceder de manera directa.
* No es posible obtener los valores de un vector con este helper para ello existe GetAll que es para manipulación de un vector.
{% endtab %}

{% tab title="Ejemplo" %}
```
var observacionesRef = getValueByFullName(“IDContenedor”, "Compuesto.DatoUno");
var direccionReferencia = getValueByFullName(“IDContenedor”, "DatoSimple");
```
{% endtab %}
{% endtabs %}
