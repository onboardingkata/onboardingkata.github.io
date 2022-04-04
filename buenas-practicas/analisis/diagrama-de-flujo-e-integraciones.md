# Diagrama de flujo e integraciones

El diagrama de flujo e integraciones documentara los puntos en los que se necesita consumir un servicio externo, utiliza las siguientes recomendaciones para documentar tu diagrama de flujo e integraciones.

1. Diagrama tu flujo en general, el negocio no. El diagrama de flujo es para tener una visión global del flujo y en qué puntos se interactúa con sistemas externos, en engine por cada tarea tenemos dos momentos la captura de información y el procesamiento, identifica en que momento requieres la integración.
2. Identifica tu tipo de integración. Si requieres una integración en la captura del formulario es una función parcial, si requieres una integración en el procesamiento es por medio de un helper.
3. Servicio lógico si, ¿integración directa? si no hay otra opción. La capa de servicios lógicos encapsula las integraciones y puede crear una fachada de varias llamadas secuenciales como una sola, es recomendable integrarnos a la capa de servicios, pero si no es factible puedes usar los helpers.
