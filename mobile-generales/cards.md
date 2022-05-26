# Órdenes en cards

- Basados en el flujo de la versión anterior, se utiliza una navegación jerárquica que permite al usuario en una primera vista tener los indicadores generales de la orden.​

- Se maneja la información (Auxiliares) en bloques pares para dar estabilidad y mejor legibilidad.​

- Se eligieron un máximo de 6 por la visualización en dispositivos.​

**​Información que se mostrará sin la necesidad de desplegar card** 
(información vista rápida, Card normal) será la siguiente:  

1. Título
1. Subtitulo
1. Dos auxiliares si el usuario lo requiere
1. Marca para las órdenes que sean persistentes y doble persistentes 


![Card no desplegada.jpg](/assets/Card%20no%20desplegada-d82b814e-c3c7-414f-9b9d-6df150263224.jpg)

**Información que mostrará la card desplegada:**
1.  Máximo 6 auxiliares más Fecha de expiración
1.  Etapa, Si ha sido sincronizada o no
1.  Mínimo 1 auxiliar 

Dentro de “Etapa” se podrá visualizar la etapa correspondiente a la orden la cual puede ser: a)No iniciada, b) Parcial c) Gestionada o última gestión. 

La etapa **“Gestionada**” se utilizará para **las órdenes tipo “Ordinarias”** y la etapa **“última gestión”** se deberá de usar para **las órdenes tipo “Persistentes /doble persistentes”**  


## **indicadores**

Al despligar la card además de visualizar los auxiliares se presentan **tres indicadores:**
1. **Expiración:** Se pone en primer lugar por la prioridad de resolución de estas órdenes.
1. **Etapa**: Muestra sólo el estado de resolución de la orden, si tiene un guardado previo o se ha gestionado por completo.
1. **Sincronización**: indicador que apoya al usuario a conocer si su información fue subida correctamente.
![Diapositiva1.png](/assets/Diapositiva1-36c16a5a-c872-42cd-b056-8370efff37ce.png)
NOTA: Cuando el cliente NO solicite una configuración especial para los auxiliares a mostrar en la card el aplicativo deberá de mostrar por default la siguiente información: 

- Identificador: El cual mostrará el External ID  
- Tipo: El cual mostrará el External Type 
- Colonia: Mostrará la colonia a la que pertenece la orden 
- C.P: mostrará el Código postal correspondiente a la orden  


# Menú en cada órden

- Vista previa: Permite observar información preliminar de la órden.​
- Responder: Comenzar a contestar la orden.​
- Ver en mapa: Permite al usuario geolocalizar el punto de la orden.​
- Eliminar: Sólo aplicable a las creadas en campo.

![Diapositiva1.PNG](/assets/Diapositiva1-ec8d0d4d-edee-4d81-8372-074b7b11a715.PNG)