# Front Externo, Mobile y Engine

Este tipo de implementaciones son similares a las anteriores, debes considerar los puntos anteriores y de manera adicional los siguientes.

* Engine como orquestador. Utiliza a Engine como sistema de orquestación, que el producto financiero integre los sistemas para el avance del flujo y sea quien reciba como sistema centra la información de ambos.
* Definir puntos de integración e interaccion. Es necesario que se defina quien iniciara el flujo y cuando tendrían participación, ejemplo la captura inical en mobile posterior en el front externo y al final en Engine.
* Documentar la orquestación y compensaciones. Al igual que en desarrollo el patrón de orquestación tiene que contar con compensaciones, es decir, si en parte del flujo necesito regresar a un estado anterior, debes identificar las comensaciones para hacer un rollback correcto y notificar a los sistemas involucrados para que el flujo este sincronizado, uno de los problemas es que se ha llamado a un servicio y al no compensar al retomar el flujo este falla, para un mejor mantenimiento la documentación ayudara a identificar las problemáticas y tomar acciones de manera mas eficiente.
