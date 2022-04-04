# Tipos de Datos

Los tipos de datos nos permitirán validar las entradas de datos de la información que se almacenara en la solicitud, utiliza las siguientes recomendaciones en tus tipos de datos.

1. Utiliza nombres descriptivos. Nombrar a tus tipos de datos de manera descriptiva te ayudara a identificar su finalidad.
2. No dupliques tipos de datos. Los nombres descriptivos te ayudaran a identificar si el tipo de dato ya existe, trata de reutilizar los existentes, ya que crear duplicados a futuro requiere mayor esfuerzo para mantenerlos y mayor descontrol.
3. No modifiques la finalidad de un tipo de dato. Si en un requerimiento es necesario cambiar las validaciones de nuestro tipo de dato es recomendable crear otro tipo de dato para mantener la consistencia con el nombre, imagina un tipo de dato que diga Numerico10 y resulta que te acepta valores de texto y con una longitud de 50, puede llegar a ser confuso para su mantenimiento.
4. Si existen campos informativos que no se modifican en Engine y son suministrados por otro sistema, se sugiere definirle un tipo de dato sin validaciones, si se tiene garantía que el sistema externo (Ej: Mobile, Core Financiero, CRM) nos entrega la información validada. Lo anterior es para reducir el alto costo de tener sincronizados los ajustes de validaciones de los datos. Las funciones de validación de los tipos de datos tienen la siguiente estructura.

Las funciones de validación de los tipos de datos tienen la siguiente estructura.

```
(function (_value) {
   //contenido de la validacion    
   //retorno de la validacion.
    return true/false;
})(_v_);
```

Las funciones de validación son las encargadas de validar que le contenido sea válido, retornar verdadero nos indica que el valor ingresado es correcto.

Las funciones de transformación de los tipos de datos tienen la siguiente estructura.

```
(function (_value) {
   //_value es el valor original
   //lógica de transformación de datos
   //retorno del valor transformado
    return (transform);
})(_v_);
```

La función de transformación es para tener consistente la información que ingresamos, por ejemplo, si deseamos transformar un sí a un verdadero o por si la entrada son muchos decimales y necesitamos redondearlos.
