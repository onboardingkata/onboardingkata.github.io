# folderHelper.GetFolderByRol

{% tabs %}
{% tab title="Descripción" %}
Permite obtener los folderID por la búsqueda de un rol en especifico
{% endtab %}

{% tab title="Parámetros" %}
* RolId – Identificador del rol por el cual se desea buscar la información.
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de strings con los folderId encontrados.
```
[
  '39F8ED12-711C-4C7D-9F76-F09D81BB1336',
  '46261BBC-AC55-43A2-B954-198723873208',
  'EF7F6096-EE64-46FF-AD28-2C65376377D7',
  '79F172E2-79C1-4992-9508-DCA7401BEAE1',
  'B7BECFB8-478F-4A0E-B65A-CB5369D860A8',
  '1B6DD29A-F9AD-4B95-849B-7CC3C83048C0',
  'CE36B161-07B4-47C8-AB69-4636E714E4AE',
  '1C2CC859-4472-4E22-86C4-3686C605AF9D',
  'BCA2DA84-16CE-4A51-9047-402C3B05DC40',
  'E318295C-86CE-4AD3-A388-1F41BA20334A'
]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var foldersIdByRol = folderHelper.GetFolderByRol("7f47c6f6-8097-4e09-80a5-be22c50c05b9");
```
{% endtab %}
{% endtabs %}
