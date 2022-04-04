# Log y buenas trazas

Engine cuenta con helpers que te permiten guardar trazas en la bitácora del front o en el log del sistema, te recomendamos hacer uso de estas trazas de la siguiente forma.

1. No utilices las trazas de manera exagerada. Generar tantas trazas consume recursos de procesamiento y espacio, así como dificultad de revisarlas.
2. Define la estructura de tu traza de manera inteligente.  Genera agrupaciones por Modulo y operaciones, de esta forma te será más fácil filtrar o identificar donde sucedió esa traza.

Estos son unos ejemplos de trazas.
```
//traza para guardar respuesta de un servicio
customLogger.Error("AhorroInversion", "200", "BuscarclientePorNombre", "Respuesta", JSON.stringify(respuesta));

//traza para guardar que fallo la llamada a un servicio
customLogger.Error("AhorroInversion", "500", "SerivicioLogicoIntegracion", textoError, JSON.stringify(jsonServicio));
```

{% hint style="info" %}
Organizando bien nuestras trazas podemos buscar las trazas de error para diagnosticar y tomar acciones correctivas.
{% endhint %}
