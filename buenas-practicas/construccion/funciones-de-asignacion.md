# Funciones de asignación

Las funciones de asignación son pequeños scripts que permiten asignar una acción de una tarea/requisito a un folder o buzón, utiliza las siguientes recomendaciones para definir y construir tus funciones de asignación.

1. Identifica cuantas asignaciones tienes de manera global. Identificar cuantas asignaciones tienes te permitirá reutilizarlas, auxíliate del documento de “Matriz de asignación por tarea y estado personalizado” para identificar cuantas asignaciones requieres.
2. Reutiliza los valores obtenidos. No ejecutes tu función de asignación muchas veces, siempre te dará el mismo resultado, puedes ejecutar tu función de asignación en la primera tarea y guardar el valor en un campo, que tener el script en todos los lugares donde la necesitas, así tu función de asignación puede consultar el campo y reducir la carta de la ejecución de búsquedas y cálculos que retornaran el mismo valor.
3. Las funciones de asignación no son async. Las funciones de cambio de estado requieren el async, pero las de asignación no.
4. No actives acciones que no vas a usar. Es común que cuando agregamos un estado personalizado activamos la edición, ver y validación, donde la acción de validación no está operativa, si tu función de asignación en edición y ver es lo mismo, el ver sale sobrando, ya que la edición tiene mayor prioridad sobre la vista y ambas funciones tendrán el mismo valor, una acción sin función de asignación por defecto se asignara a quien está procesando.
Las funciones de estado asignación utilizan la siguiente estructura.

Las funciones de estado asignación utilizan la siguiente estructura.
```
(function (productId, requirementId, operationType, folders, candidatesFolderId) {
    //lógica para obtener la carpeta o buzón a asignar
    //retorno de la carpeta, debe ir en forma de arreglo, sin importar que el retorno sea un elemento
    return [idCarpetaEncargada]
}(_v1_, _v2_, _v3_, _v4_, _v5_))
```