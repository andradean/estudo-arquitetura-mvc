# API DINDIN

# enunciado
HEY, PRONTOS PARA O DESAFIO?

Nosso objetivo de hoje é criar uma api para manipular os cursos do projeto Din
Din

Requisitos
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
Endpoints
GET /cursos
Deverá listar todos os cursos cadastrados no json presente no nosso banco de
dados, e retornar um status 200.
Lembre-se: Somente o model pode acessar uma camada de dados diretamente,
então devemos criar uma função acesse o json e retorne as informações
POST /cursos
Irá receber as seguintes propriedades do curso: título, professor e descrição.
Você deverá efetuar um cadastro dessas informações dentro do JSON de
listagem de cursos.
Caso alguma informação venha vazia, devemos retornar um erro com o status
400 informando que não foram enviados todos os parâmetros da forma correta.
Caso o cadastro seja feito com sucesso devemos retornar um status 204.
DELETE /cursos/:id
Irá receber um id do curso a ser deletado via parâmetro de rota, devemos usar
esse id para deletar o item.
Caso ocorra com sucesso devemos retornar o status 204;
