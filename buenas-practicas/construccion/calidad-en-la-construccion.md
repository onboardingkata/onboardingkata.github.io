# Calidad en la construcción

La calidad en la construcción ayudara a que se realice menos retrabajo o esfuerzo por corrección de bugs, la calidad la podemos lograr utilizando buenas prácticas y realizando validaciones obre la construcción, utiliza las siguientes prácticas para realizar tus validaciones.

1. Define al menos un conjunto de pruebas. Como implementador contar con un conjunto de pruebas para validar el flujo es de suma importancia de esa forma identificas que al menos el camino feliz se cumple.
2. Automatiza tus pruebas. La automatización de las pruebas disminuye el tiempo de validación, Engine utiliza una serie de APIS para guardar valores y procesar, puedes utilizar estas API’s para automatizar tus pruebas.

A continuación, un ejemplo de API’s de Engine en formato CURL.

Autenticación del usuario

```
curl --location --request POST 'https://login.microsoftonline.com/{{tenantId}}/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: fpc=AjSDhenjErdPn66BeO3fAxCHD0p8AwAAANhuEtgOAAAA' \
--data-urlencode 'client_id={{clientId}}' \
--data-urlencode 'password={{password}}' \
--data-urlencode 'username={{usuario}}' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_secret={{clientSecter}}' \
--data-urlencode 'resource={{resource}}'
```
La información la puedes solicitar al área de AMS para que te la proporcione.

Crear solicitud
```
curl --location --request POST 'https://{{urlengine}}/api/instances' \
--header 'Authorization: Bearer eyJ0e….' \
--header 'Content-Type: application/json' \
--data-raw '{
    "definitionId": "{{definitionId}}"
}'
```

Guardar valores.
```
curl --location --request PUT 'https://{{urlengine}}/api/instances/putValue' \
--header 'Authorization: Bearer easdf…' \
--header 'Content-Type: application/json' \
--data-raw '{
    "instanceId": "{{instanceID}}",
    "containerId": "{{containerId}}",
    "values": {
        "correoEletronico": "correo@correo.com",
        "telefonoMovil": "1234567890",
        "telefonoDomicilio": "1234567890",
        "calle": "Calle",
        "entreCalles": "Entre Calles",
        "numeroExt": "Num Ext",
        "numeroInt": "Num Int",
        "referenciaUbicacion": "Referncia Ubicacion",
        "codigoPostal": "55555",
        "estadoDireccion": "Estado",
        "coloniaDireccion": "Colonia",
        "ciudadDireccion": "Ciudad",
        "municipioDireccion": "DelegacionMunicipio",
        "direccionAceptada": true,
        "numSucursal" : "57",
        "correoAgenteAsignado" : "agente1Sucursal57@camedev.onmicrosoft.com" 
    }
}'
```

Procesamiento
```
curl --location --request PUT 'https://{{urlEngine}}/api/instances/putProcessInstance' \
--header 'Authorization: Bearer eyJ0eXAiO…' \
--header 'Content-Type: application/json' \
--data-raw '{
    "instanceId": "{{instanceId}}",
    "containerId": "{{containerId}}"
}'
```