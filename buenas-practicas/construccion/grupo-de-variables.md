# Grupo de variables

Los grupos de variables nos permiten configurar valores del sistema que utilizaremos en nuestro flujo, estas constantes del sistema nos darán la flexibilidad de realizar cambios sin necesidad de modificar o versionar el producto, para definir tus variables sigue las siguientes recomendaciones.

1. Identifica que es una variable. Como mencionamos estas variables son como configuraciones del sistema a nivel ambiente que nos permitirá consultar el valor al momento de avanzar en el flujo de la solicitud, pero no todo puede ser una variable, las variables como mencionamos son valores fijos que si pueden llegar a cambiar pero no de manera frecuente, por ejemplo el IVA, o un % de un impuesto, o una URL de un servicio, como puedes observar algunos valores van a cambiar por diferentes condiciones, por ejemplo la URL hay una URL desarrollo, otra QA, otra producción, llevarlo en una variable te ayudara a tener despliegues más sencillos.
2. Agrupaciones inteligentes. En nuestra implementación podemos tener distintos tipos de variables a configurar, ejemplo de integración o financieras, genera grupos de manera inteligente para que al momento de dar mantenimiento te sea más fácil ubicar la configuración.
3. Nombres descriptivos. Nombra a tus variables de manera descriptiva, de esa forma identificaras su funcionalidad en el flujo de trabajo. 
