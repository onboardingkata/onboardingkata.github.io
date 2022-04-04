# Trabajo en equipo por medio de GIT

Como se mencionaba en el punto anterior el diseñador de producto no permite el trabajo colaborativo, al utilizar cache del equipo de cómputo el último en dar clic en el botón guardar será la versión que se guarde en el servidor.

Para mitigar una parte de la problemática se cuenta con unas herramientas que permite que el código de las funciones de cambio de estado se almacene en GIT y por medio de la integración continua se envíen al producto financiero, esto nos permite que más de una persona pueda trabajar en el código y al final integrarlas para su validación.

Las recomendaciones para el uso de GIT son las siguientes.

1. Utilizar GitFlow para el manejo de las ramas, la rama develop es la rama principal y crear ramas con el prefijo feature cuando es un requerimiento y bugfix cuando es la atención de bugs.
2. Integrar el código por medio de Pull Request, realizar la revisión de pares nos permitirá aprender de nuestros compañeros y enseñarles mejores prácticas, es importante realizar revisiones objetivas donde la finalidad siempre sea mejorar o evitar la deuda técnica.
3. Archivos adicionales versionados. Es probable que la implementación utilice archivos json externos, archivos de plantillas para generar algún reporte visual o xslt de reglas del conector, si bien ahora estos códigos no están automatizados para su publicación es importante mantenerlos en el control de versiones para su resguardo y trazabilidad en sus cambios. 
4. No utilizar el diseñador para crear código de cambios de estados. Si ya optaron por utilizar las herramientas para utilizar git y gestionar el código de cambios de estados, es importante ya no utilizar el diseñador ya que cuando se mande la información de git al producto este sobrescribirá la información y si se tenía código generado en ese medio que no esté en GIT se perderá.
