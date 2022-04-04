# await xmlToJsonHelper.ParseXml

{% tabs %}
{% tab title="Descripción" %}
Convierte un documento XML en un objeto JSON.
{% endtab %}

{% tab title="Parámetros" %}
xmlBody – Nombre de la variable, de tipo string, que contiene el documento XML.
{% endtab %}

{% tab title="Respuesta" %}
Cuando existiera un error durante la ejecución del helper, éste lanza una excepción atrapable por medio de un try-catch, que nos permitiría su procesamiento correcto. Por ejemplo, si el documento XML está mal formado, el mensaje recibido en el catch, indica una leyenda como tal.

En caso de una conversión exitosa, devuelve un string con el cuerpo de un objeto JSON conteniendo los valores y atributos separados en dos conjuntos dentro de la respuesta: 
* “_” contendrá los valores que sean mencionados en el objeto y 
* “$” contendrá los atributos mencionados en el objeto.

Nota: Revisar los dos ejemplos, es importante para entender los dos posibles casos de transformación.
{% endtab %}

{% tab title="Ejemplo" %}
Ejemplo 1
```
var _testParse = async function () {
        try { 
            var a = await xmlToJsonHelper.ParseXml ('<foo>' + 
        '<cliente tipo="Cedula" idTipo="1">123</cliente>' + 
        '<cliente tipo="NIT" idTipo="1">124</cliente>' +
        <cliente tipo="Pasaporte" idTipo="1">125</cliente>' +
        '</foo>'); 

            console.log('success: ', a); 
        } catch(e) { 
            console.log('error:', e.message); 
        }
    } 

```
Salida 
```
{
  "foo":{
    "cliente":[{
      "_":"123",
      "$":{
        "tipo":"Cedula",
        "idTipo":"1"
      }
    },{
      "_":"124",
      "$":{
        "tipo":"NIT",
        "idTipo":"1"
      }
    },{
      "_":"125",
      "$":{
        "tipo":"Pasaporte",
        "idTipo":"1"
      }
    }]
  }
} 

```
Segundo ejemplo:  También puede darse el caso de que el documento XML no contenga atributos en su cuerpo, para este caso puede darse un ejemplo como el siguiente:
```
<foo>
  <cliente>
    <nombre>David</nombre>
    <documento>123</documento> 
    <fechaNacimiento>30/01/2000</fechaNacimiento> 
  </cliente>
  <obligacion>
    <mora>true</mora>
    <credito>CRE123</credito> 
  </obligacion>
  <hijos>
     <hijo>Andres</hijo>
     <hijo>Karla</hijo>
  </hijos>
</foo>
```
Salida
```
{
  "foo":{
    "cliente":{
      "nombre":"David",
      "documento":"123",
      "fechaNacimiento":"30/01/2000"
    },
    "obligacion":{
      "mora":"true",
      "credito":"CRE123"
    },
    "hijos":{
      "hijo":["Andres","Karla"]
    }
  }
}
```
{% endtab %}
{% endtabs %}
