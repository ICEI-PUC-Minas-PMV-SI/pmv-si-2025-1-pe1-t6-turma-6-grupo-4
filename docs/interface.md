
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

```mermaid
flowchart TD
    A[Cadastro de usuário] --> B{Landing}
    B --> | Ver todos os jogos / recomendações / avaliados por mim| C[Lista de jogos]
    C --> | Filtra e clica em um jogo | D[Página do jogo]
    B --> | Criar jogo | E[Cadastro de jogo]
    E --> D
    D --> | Clica em avaliar | F[Avaliar jogo com estrelas]
 

```

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

### Login
![Desktop - 1](https://github.com/user-attachments/assets/e2795823-0276-4c25-a384-3fe39d7dd143)

### Página Inicial
![Desktop - 2](https://github.com/user-attachments/assets/7161867a-914a-4b86-b973-e5b53027de3d)

### Lista de Jogos
![Desktop - 3](https://github.com/user-attachments/assets/71b144ad-e8eb-48f3-a2e0-2a5d3f621e78)

### Página de Jogo
![Desktop - 4](https://github.com/user-attachments/assets/516c3fa2-7054-414e-82fb-895d6c7b9db3)

### Cadastrar jogo
![Desktop - 5](https://github.com/user-attachments/assets/71783ef9-cae7-4deb-8396-40a40a9be289)


 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
