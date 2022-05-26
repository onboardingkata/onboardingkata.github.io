<!DOCTYPE html>  
1. [Formiik Documentation](/Confluence)
2. [Bienvenido a la documentación de Formiik](/Confluence/Inicio)
3. [Documentación Funcional](/Confluence/Inicio/Doc%20Funcional)
4. [Funcionalidad Web](/Confluence/Inicio/Doc%20Funcional/Func%20Web)
5. [Menú Web](/Confluence/Inicio/Doc%20Funcional/Func%20Web/Menu%20Web)
6. [Menú Web Monitoreo](/Confluence/Inicio/Doc%20Funcional/Func%20Web/Menu%20Web/Menu%20Web%20Monitoreo)
7. [Reporte de Supervisión](/Confluence/Inicio/Doc%20Funcional/Func%20Web/Menu%20Web/Menu%20Web%20Monitoreo/Reporte%20de%20Supervision)
 
#   Formiik Documentation : Mejoras al reporte de supervisión
 
_Created by Marco Rodriguez , last modified on Jan 08, 2015_
 
| Target release | 1.0 |
| --- | --- |
| Epic | [FOR-3462](https://formiik.atlassian.net/browse/FOR-3462)  |
| --- | --- |
| Document status | DRAFT |
| --- | --- |
| Document owner | [Marco Rodriguez](https://formiik.atlassian.net/wiki/people/557058:aaa335e5-c7ab-4414-9131-cf1b2d555ab9?ref=confluence)  |
| --- | --- |
| Designer | [Marco Rodriguez](https://formiik.atlassian.net/wiki/people/557058:aaa335e5-c7ab-4414-9131-cf1b2d555ab9?ref=confluence) |
| --- | --- |
| Developers | [Marco Rodriguez](https://formiik.atlassian.net/wiki/people/557058:aaa335e5-c7ab-4414-9131-cf1b2d555ab9?ref=confluence) |
| --- | --- |
| QA | [Esperanza Medina](https://formiik.atlassian.net/wiki/people/557058:5e5ffe86-9360-415a-92c8-f5dcde646534?ref=confluence), [Sandra Cervantes](https://formiik.atlassian.net/wiki/display/~sandra)  |
| --- | --- |
| Reviewers | [David Cruz](https://formiik.atlassian.net/wiki/display/~dx), [Héctor Obregón](https://formiik.atlassian.net/wiki/display/~hobregon), [Gregorio Marciano](https://formiik.atlassian.net/wiki/display/~gregor),  [Erándini Brizuela Herrera](https://formiik.atlassian.net/wiki/display/~erandini), [Carlos Maya](https://formiik.atlassian.net/wiki/display/~cha) |
| --- | --- |

## Goals

- Optimizar el rendimiento del Reporte de Supervisión cuando el numero de usuarios y de sincronizaciones aumenta de manera considerable


## Background and strategic fit

1. Mayor velocidad de carga de la información del mapa del Reporte


## Assumptions

- El tamaño de la tabla de base de datos donde se almacena la información de los eventos de sincronización es muy grande y tendiente a crecer
- Las limitaciones de los navegadores en cuanto al numero de peticiones asíncronas para recabar la información del mapa
- El crecimiento del reporte en cuanto a nuevos puntos a graficar en el mapa


## Requirements

| # | Title | User Story | Importance | Notes |
| --- | --- | --- | --- | --- |
| 1 | Guardar las posiciones de sincronización de una manera más consultable (En otra tabla destinada solo a estos puntos, esta se llamara SynchronizeEvents) | Optimizar la velocidad para recabar la información del reporte | Alta |   |
| 2 | Hacer al menos dos rutas por consulta (que el numero de rutas a solicitar sea parametrizable como una variable en la configuración del producto) | Hacer parametrizable en las peticiones asíncronas cuantas rutas procesar | Alta |   |
| 3 | Cambiar el nombre de puntos de sincronización por puntos de tracking | Utilizar un cache de consulta rápida para mostrar la información al usuario | Alta |   |
|   |   |   |   |   |



## User interaction and design



## Questions

Below is a list of questions to be addressed as a result of this requirements document:

| Question | Outcome |
| --- | --- |
| <ul><li>Considerar si con un indice se mejora el rendimiento</li></ul> |  |

## Not Doing

-
   
_Migrate on Thursday, 23 April 2020 09:32 with [Atlassian2DevOps Tool](https://github.com/etgregor/atlassian2devops)._