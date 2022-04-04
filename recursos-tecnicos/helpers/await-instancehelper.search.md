# await instanceHelper.search

{% tabs %}
{% tab title="Descripción" %}
Devuelve una colección de Instancias de acuerdo a los parámetros que ingresen a la función.
{% endtab %}

{% tab title="Parámetros" %}
* filters. Es una colección de valores y nombres de datos que indican las coincidencias esperadas dentro de los datos pertenecientes a los containers.
* sortFields (opcional). Es una colección que indica los campos por los que se ordenarán los resultados, y el sentido del ordenamiento por cada uno (ascendente o descendente).
* limit (opcional). Es un dato numérico que delimita el tamaño de la colección resultado. 
{% hint style="info" %}
**Nota:** Para volverlos opcionales, les asignaremos un valor null.
{% endhint %}
Devuelve un arreglo reducido de las solicitudes que coincidieron con la búsqueda.
Si no encontrara alguno, el arreglo regresa vacío.
{% endtab %}

{% tab title="Respuesta" %}

{% endtab %}

{% tab title="Ejemplo" %}
Ejemplo
```
instanceHelper.search({
    "filters": [
        {
            "containerId": "ED64A5F1-66C9-4262-B65A-A4FFA6F38F27",
            "fields": [
                {
                    "field": "NumeroDocumento",
                    "data": "\"12345678\""
                }
            ]
        }
    ],
    "sortFields": [
        {
            "field": "initialDate",
            "order": -1
        }
    ],
    "limit": 10
});
```
Salida
```
[
    {
        "documentId": "04B82567-07BA-4400-9D5C-9558DB058E15",
        "containers": {
            "ED64A5F1-66C9-4262-B65A-A4FFA6F38F27": {
                "PaisExpedicion": {
                    "keyName": "ExpeditionCountry",
                    "fullName": "PaisExpedicion",
                    "value": null,
                    "selection": [
                        {
                            "key": "México",
                            "value": "Mexico",
                            "parentKey": null
                        }
                    ]
                },
                "NumeroDocumento": {
                    "keyName": "NumeroCedula",
                    "fullName": "NumeroDocumento",
                    "value": "12345678"
                },
                "HayError": {
                    "keyName": "Bool",
                    "fullName": "HayError",
                    "value": null
                }
            }
        }
    }
]
```
{% endtab %}
{% endtabs %}
