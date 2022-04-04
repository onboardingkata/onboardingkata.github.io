# Mobile y Engine

Este tipo de implementación el ciclo de vida de la solicitud ocurre en ambas plataformas, comúnmente inicien en Mobile y para autorizaciones o verificaciones ocurren en Engine, en este tipo de implementaciones considera lo siguiente.

* Campos homologados en ambas plataformas. Utiliza los mismos nombres para los campos en ambas plataformas, de esa forma te será fácil ubicar que el campo almacena la misma información.
* Valida la entrada de datos en Engine. Engine cuenta con dos mecanismos de interacion primero el envio de datos que ya cuenta con su propia validación y el segundo el procesamiento, para validar que toda la información llego, genera una función donde leas los campos que son obligatorios para el proceso y en caso de que alguno falte genera un throw para que este se mande al conector.
* Envia todos los errores a Mobile antes de cambiar de estado. Si en el flujo se llama a un servicio y alguno falla, es importante retornar el error a mobile por medio del throw, los usuarios que envían la información por mobile no entran a Engine, contar con un campo y estado que muestre el erro no les será útil, pero con un throw este se mostrara como una alerta en el dispositivo.
* Configuración del CORS para imágenes o archivos. Si las imágenes o archivos son almacenados desde Mobile, las direcciones para mostrarlas en Engine comúnmente fallaran ya que la política de CORS no esta habilitada, es importante contactar a AMS para solicitar la configuración.

{% hint style="info" %}
En este tipo de implementación se utiliza el conector para enviar la información a Engine o de Engine a Mobile, el conector implementa el guardado parcial y procesamiento.
{% endhint %}