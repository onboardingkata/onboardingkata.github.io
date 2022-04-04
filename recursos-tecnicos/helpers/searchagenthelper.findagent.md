# searchAgentHelper.FindAgent

{% tabs %}
{% tab title="Descripción" %}
Permite obtener el detalle del agente. de uno o varios agentes por correo, nombre completo, código de empleado o id de agente.
{% endtab %}

{% tab title="Parámetros" %}
* email – Correo del agente que se desea buscar.
* fullName – Nombre completo del agente.
* employeeCode – Numero de empleado del agente
* agentIdentifier – Id del agente.
{% endtab %}

{% tab title="Respuesta" %}
* Arreglo de objetos con la estructura completa del agente.
```
[
  {
    "_id": "cd03d0b3-7569-435b-9b2d-857c640979de",
    "agents": {
      "AgentId": "25d16993-4155-4bc5-b555-2bc147af19f9",
      "FullName": "QA2",
      "Name": "QA2",
      "LastName": "",
      "JobName": "",
      "Active": true,
      "PhotoUrl": null,
      "Photo": null,
      "Email": "qa2@fdlmb2c.onmicrosoft.com",
      "Labels": [
        "QA",
        "Otra",
        "otra2",
        "COMUNAL"
      ],
      "Office": null,
      "Inactivities": [
        {
          "IdFolderDelegada": "A477AA5B-C624-43EF-89D2-8A6242BEEA36",
          "InitialValue": "2019-09-25T05:00:00Z",
          "FinalValue": "2019-10-02T05:00:00Z",
          "Status": false,
          "Motivo": "AMBIENTE QA"
        }
      ],
      "CodigoEmpleado": "3333333",
      "IdEstado": 0,
      "Nombres": "QA2",
      "ApellidoPaterno": "A",
      "ApellidoMaterno": "B",
      "Puesto": "QA",
      "Oficina": "QA",
      "Region": "QA",
      "Telefono": "4543645654",
      "NombreCompleto": "QA2 A B",
      "NoFolders": 0,
      "Roles": [
        "0d12453e-29c6-4a36-a6ec-0cecec6d5420",
        "08aee38f-68bd-4a71-9150-a017382ffb14",
        "dc8975a7-9fdf-4831-84a9-506785636b5b"
      ],
      "associatedFolder": [
        "2A928FD6-1838-423B-A21D-093463768873",
        "79AA4BFF-296C-4F5F-89A7-F565D8B9C2AC"
      ]
    }
  }
]
```
{% endtab %}

{% tab title="Ejemplo" %}
```
var resultado = searchAgentHelper.FindAgent("correo@correo.com", "Nombre Completo Agente", "56889", "53434...");
```
{% hint style="info" %}
**Nota:** En caso de enviar mas de un parámetro la búsqueda se realizara siendo un OR, por lo que puede retornar mas de un agente.
{% endhint %}
{% endtab %}
{% endtabs %}
