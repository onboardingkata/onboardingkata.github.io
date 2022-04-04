# associatePdfHelper.Associate

{% tabs %}
{% tab title="Descripción" %}
Permite generar un PDF a partir de una plantilla que se encuentre registrada en el catalogo de plantillas.
{% endtab %}

{% tab title="Parámetros" %}
* NombreDocumento – Es el nombre con el cual se va a generar el documento
* Identificadorplantilla – Es el nombre con el cual se registro la plantilla
* documentJson.pdfIds – constante debe ir el valor fijo documentJson.pdfIds
* Valores – Objeto que contiene los parámetros llave valor que se realizaron en el registro del PDF.
{% endtab %}

{% tab title="Respuesta" %}
* No hay respuesta, genera un archivo asociado a la solicitud.
{% endtab %}

{% tab title="Ejemplo" %}
```
documentJson.pdfIds = associatePdfHelper.Associate("CaratulaCredito", "resumencreditosencillo_ejemplo", documentJson.pdfIds, {
            "simple_name": nombre + " " + primerApellido + " " + segundoApellido,
            "simple_nproducto": "Crédito Mi Banca Especial",
            "simple_tcredito": "Individual Sencillo",
            "simple_CAT": '25.35',
            "simple_tasa": tasa,
            "simple_cmonto": monto,
            "simple_tmonto": mensualidad,
            "simple_cplazo": cuotas
        });
```
{% hint style="info" %}
**Nota:** El helper requiere que previamente se encuentre registrada la plantilla.
{% endhint %}
{% endtab %}
{% endtabs %}
