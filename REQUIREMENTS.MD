# 1. Requisitos


## 1.1 - Requisitos funcionais:

| Código | Funcionalidade           | Descrição
| ------ | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF1    | Gerenciar Anúncio        | Processamento de Inclusão, Alteração, Exclusão e Consulta de anúncios de pets.                                                                                  |
| RF2    | Gerenciar Perfil Próprio | Alteração de informações pessoais e eventual exclusão de perfil próprio do usuário.                                                                             |
| RF3    | Demonstrar Interesse     | Demonstrar interesse em um anúncio permite ao usuário acompanhar alterações no status do mesmo.                                                                 |
| RF4    | Login de Usuário         | Login de usuário com email e senha, senha esta que pode ser recuperada com uma “pergunta secreta”.                                                              |
| RF5    | Buscar Anúncio           | Busca por animais com ordenação por distância do usuário e filtros pré-estabelecidos.                                                                           |
| RF6    | Comentar anúncios        | Comentários feitos em anúncios para dúvidas e afins, que podem ser respondidos pelo dono do animal.                                                              |
| RF7   | Compartilhar Anúncios    | Permitir o compartilhamento de anúncios em redes sociais, a fim de aumentar o tráfego no site e consequentemente as chances de sucesso em uma adoção.           |
&nbsp;


## 1.2 Requisitos não funcionais:

| Código |   Restrição    |                                                                            Descrição                                                                             |
| :----: | :------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  RNF1  |    Ambiente    |                                                             O Sistema deverá rodar em ambiente web.                                                              |                                                 |
|  RNF2  |  Usabilidade   |                                       O design deve possuir uma navegabilidade entre as páginas intuitiva para o usuário.                                        |
|  RNF3  |   Desempenho   |                                                          Deve processar requisições em até 3 segundos.                                                           |
|  RNF4  | Implementação  |                                           Os dados da aplicação devem ser persistidos no próprio navegador via localStorage/sessionStorage                     |
|  RNF5  |   Identidade   |                                                     O site deve seguir a identidade visual proposta à marca                                                      |
| RNF6  | Infraestrutura |                                                     O login deve ser mantido através de dados em localStorage                                                     |
| RNF7  |  Usabilidade   | A aplicação deverá seguir princípios, como o uso do HTML semântico, para auxiliar na acessibilidade do site, facilitando o uso com leitores de tela por exemplo. |

&nbsp;

## 1.3 Usuários
|  #  |     Ator      |                                                              Definição                                                              |
| :-: | :-----------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|  1  |    Usuário    |        Cria, gerencia e interage com os anúncios de animais para adoção, além de contar casos de sucesso envolvendo a Petin.        |
|     |               |                                                                                                                                     |
