
## Grupo

**Alunos:** Eduardo, Luiza, Talia e Sthefany

## Histórias de usuário (casos de uso)

1. Entra na página inicial e vai para página Login
2. Entra na página de login
3. Informa e-mail e senha e clica no botão login
4. Entra na página do usuário (página principal). Mostra os cursos que o usuário tem acesso em tabela
5. Clica no curso e vai para a página com uma lista e o nome dos alunos matriculados no curso. Da para filtrar por ano. Uma tabela com o % de alunos com média menor que 7.0
6. Clica no aluno e vai para uma página com dados dele e notas das disciplinas, faltas tbm

   ### Após reunião do grupo em 29 de Maio

1. Entra na página inicial e vai para página Login
2. Na página de login informa e-mail e senha e clica no botão login. Usuário tipo coordenador de curso
4. Entra na página do usuário (página principal). Mostra os cursos (dependendo do nível de acesso do usuário) que o usuário tem acesso em gráfico (filtro), e pode selecionar os dados por ano. Por exemplo, o coordenador do CT pode ver todos os cursos do centro ou apenas o que 1 ou n cursos que desejar. Esses dados vão aparecer no gráfico, conforme o que ele selecionar. Pode navegar em um curso especifico e é redirecionado para outra página 
5. Clica no curso e vai para a página, onde pode fazer uma pesquisa por aluno. Mostra um gráfico com o % do aluno ao longo do ano
6. Clica no aluno e vai para uma página com dados dele e notas das disciplinas, faltas tbm

## Custos
1. Página Inicial: 3h
2. Página de Login: 3h
3. Página Principal do Usuário: 4,5h
4. Página do Curso: 5h
5. Página do Aluno: 5h

   ### Após reunião do grupo em 29 de Maio
   1. Página Inicial: 3h
   2. Página de Login: 3h
   3. Página Principal do Usuário: 6h
   5. Página do Aluno: 5h


   
## Diagramas

```mermaid
flowchart TD

subgraph software["Software"]

filtrar["Filtrar os dados de acordo com o nível do usuário"]

mostrar["Mostra os cursos que o usuário tem acesso em tabela"]

mostrarB["Lista os nomes dos alunos matriculados no curso e uma tabela com alunos com média inferior a 7"]

mostrarC["Lista os dados do aluno: notas e faltas das disciplinas"]

end

adm["Administrador"] --> filtrar

coordenador["Coordenador de Curso"] --> filtrar

coordenadorCentro["Coordenador de Centro"] --> filtrar

filtrar -.-> mostrar
filtrar -.-> mostrarB
filtrar -.-> mostrarC

