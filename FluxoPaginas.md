```mermaid
sequenceDiagram
    participant Tela Inicial
    participant Tela Login
    participant Tela Centro e Curso
    participant Página Aluno

   
  
    Tela Inicial->>Tela Login: Clica em Login
    Tela Login->>Tela Centro e Curso: Clica em Login, redireciona
    Tela Centro e Curso->>Página Aluno: Clica no filtro para a página do aluno


    Página Aluno -->>Tela Centro e Curso: Voltar


    Tela Centro e Curso -->>Tela Inicial: Sair
    Página Aluno -->>Tela Inicial: Sair
```