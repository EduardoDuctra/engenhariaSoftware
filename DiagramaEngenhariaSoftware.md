
## Grupo

**Alunos:** Eduardo, Luiza, Talia e Sthefany

## Histórias de usuário (casos de uso)

1. Entra na página inicial e vai para página Login
2. Entra na página de login
3. Informa e-mail e senha e clica no botão login
4. Entra na página do usuário (página principal). Mostra os cursos que o usuário tem acesso em tabela
5. Clica no curso e vai para a página com uma lista e o nome dos alunos matriculados no curso. Da para filtrar por ano. Uma tabela com o % de alunos com média menor que 7.0
6. Clica no aluno e vai para uma página com dados dele e notas das disciplinas, faltas tbm

## Custos
1. Página Inicial: 4
2. Página de Login:
3. Página Principal do Usuário:
4. Página do Curso:
5. Página do Aluno: 


   
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

