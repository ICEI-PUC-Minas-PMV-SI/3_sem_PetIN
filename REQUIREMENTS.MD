# 1. Requisitos


## 1.1 - Requisitos funcionais:

| Código | Funcionalidade           | Descrição                                                                                                                                                       |
| ------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF1    | Gerenciar Anúncio        | Processamento de Inclusão, Alteração, Exclusão e Consulta de anúncios de pets.                                                                                  |
| RF2    | Gerenciar Usuário        | Processamento de Inclusão, Alteração, Exclusão e Consulta de usuários pelo administrador.                                                                       |
| RF3    | Gerenciar Testemunho     | Processamento de Inclusão, Alteração, Exclusão e Consulta de testemunhos sobre casos de sucesso.                                                                |
| RF4    | Gerenciar Perfil Próprio | Alteração de informações pessoais e eventual exclusão de perfil próprio do usuário.                                                                             |
| RF5    | Demonstrar Interesse     | Demonstrar interesse em um anúncio permite ao usuário acompanhar alterações no status do mesmo.                                                                 |
| RF6    | Login de Usuário         | Login de usuário com email e senha, senha esta que pode ser recuperada com uma “pergunta secreta”.                                                              |
| RF7    | Buscar Anúncio           | Busca por animais com ordenação por distância do usuário e filtros pré-estabelecidos.                                                                           |
| RF8    | Comentar anúncios        | Comentários feitos em anúncios para dúvidas e afins, que podem ser respondidos pelo dono do animal.                                                             |
| RF9    | Emitir Notificações      | Notificar usuários quanto à atividade de comentários em seus anúncios, respostas aos seus comentários e alterações no status de anúncios em que haja interesse. |
| RF10   | Consultar Parceiros      | Consulta de parceiros, como médicos veterinários e petshops, cadastrados pelo administrador, após preenchimento do formulário de solicitação de inclusão.       |
| RF11   | Compartilhar Anúncios    | Permitir o compartilhamento de anúncios em redes sociais, a fim de aumentar o tráfego no site e consequentemente as chances de sucesso em uma adoção.           |
| RF12   | Aprovar Conteúdo         | Novos anúncios e novos testemunhos requerem aprovação do administrador para serem ativos.                                                                       |
&nbsp;


## 1.2 Requisitos não funcionais:

| Código |   Restrição    |                                                                            Descrição                                                                             |
| :----: | :------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  RNF1  |    Ambiente    |                                                             O Sistema deverá rodar em ambiente web.                                                              |
|  RNF2  |   Segurança    |                                                    O acesso a anúncios deve ser restrito a usuários logados.                                                     |
|  RNF3  |  Usabilidade   |                                       O design deve possuir uma navegabilidade entre as páginas intuitiva para o usuário.                                        |
|  RNF5  |   Desempenho   |                                                          Deve processar requisições em até 3 segundos.                                                           |
|  RNF6  | Infraestrutura |                                      O módulo de back-end deve ser desenvolvido com Node.JS, implementando uma API RESTful.                                      |
|  RNF7  | Implementação  |                                           Os dados da aplicação devem ser persistidos em um banco de dados relacional.                                           |
|  RNF8  | Confiabilidade |                                                       A aplicação deverá ser coberta por testes unitários.                                                       |
|  RNF9  |   Identidade   |                                                     O site deve seguir a identidade visual proposta à marca                                                      |
| RNF10  | Infraestrutura |                                                     O login deve ser mantido como um token no Local Storage.                                                     |
| RNF11  |   Segurança    |                              Privilégios de administrador só podem ser concedidos através de intervenção direta no banco de dados.                               |
| RNF12  |  Usabilidade   | A aplicação deverá seguir princípios, como o uso do HTML semântico, para auxiliar na acessibilidade do site, facilitando o uso com leitores de tela por exemplo. |

&nbsp;

## 1.3 Usuários
|  #  |     Ator      |                                                              Definição                                                              |
| :-: | :-----------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  1  | Administrador | Gerente do sistema como um todo, responsável pela aprovação de novos anúncios e pelo controle geral dos demais usuários do sistema. |
|  2  |    Usuário    |        Cria, gerencia e interage com os anúncios de animais para adoção, além de contar casos de sucesso envolvendo a Petin.        |
|     |               |                                                                                                                                     |
