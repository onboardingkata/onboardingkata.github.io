# geofenceHelper.FindLabel

{% tabs %}
{% tab title="Descripción" %}
Permite realizar búsquedas en el catalogo de polígonos mediante etiquetas.
{% endtab %}

{% tab title="Parámetros" %}
* labels – texto con las etiquetas separadas por coma.
{% endtab %}

{% tab title="Respuesta" %}
•	Arreglo de objetos con etiquetas
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
