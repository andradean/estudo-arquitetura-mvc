# API DINDIN

# enunciado
HEY, PRONTOS PARA O DESAFIO?

Nosso objetivo de hoje é criar uma api para manipular os cursos do projeto Din
Din.

Requisitos:
Você deverá criar um projeto de uma api para manipular um json contendo as
informações do cursos. Seu projeto irá precisar usar arquitetura MVC junto com
as rotas.

Será necessário, criar uma pasta chamada database com um arquivo cursos.json
com a seguinte estrutura:

[
{"titulo":"curso 1","descricao":"teste","professor":"vinny"}
]

Além disso, você deverá criar um model, com funções que permitam a
manipulação dos dados desse json de acordo com cada endpoint.

Endpoints:

GET /cursos
Deverá listar todos os cursos cadastrados no json presente no nosso banco de
dados, e retornar um status 200.

POST /cursos
Irá receber as seguintes propriedades do curso: título, professor e descrição.
Você deverá efetuar um cadastro dessas informações dentro do JSON de
listagem de cursos.

DELETE /cursos/:id
Irá receber um id do curso a ser deletado via parâmetro de rota, devemos usar
esse id para deletar o item.

