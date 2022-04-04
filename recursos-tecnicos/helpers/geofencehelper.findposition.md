# geofenceHelper.FindPosition

{% tabs %}
{% tab title="Descripción" %}
Permite realizar la búsqueda de una posición en el catalogo de poligons, este helper solo regresa las etiquetas del polígono en donde se encuentre.
{% endtab %}

{% tab title="Parámetros" %}
* Position – Objeto posición con la latitud y la longitud que se desea buscar.
```
{
  latitude: "000",
  longitude: "000"
}
```
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos con etiquetas
```
[
  [“tag”,”tag”]
]
```

{% endtab %}

{% tab title="Ejemplo" %}
```
var geofenceFound=geofenceHelper.FindPosition({
  latitude: "000",
  longitude: "000"
}
);

```
{% hint style="info" %}
**Nota:** Solo se retornara las etiquetas de los poligonos donde se encuentre la posicion.
{% endhint %}
{% endtab %}
{% endtabs %}
