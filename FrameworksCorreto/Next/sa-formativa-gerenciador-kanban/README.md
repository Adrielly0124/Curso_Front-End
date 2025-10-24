# Gerenciador de Tarefas para Times (Estilo Kanban) - Formativa

## Briefing
O projeto consiste no desenvolvimento de um Gerenciador de Tarefas no formato de uma aplicação web. O objetivo é organizar e centralizar o fluxo de trabalho de equipes, fornecendo uma visão clara das tarefas que precisam ser feitas, das que estão em andamento e das já concluídas, através de um quadro Kanban.

## Objetivos do Projeto
 - Gerenciar projetos e tarefas de forma centralizada.

 - Permitir o CRUD de projetos.

 - Permitir o CRUD de tarefas (título, descrição, projeto associado, membro atribuído, status).

 - Visualizar tarefas em um quadro Kanban.

 - (Bônus) Implementar drag-and-drop para movimentação de tarefas entre colunas.

## Público-Alvo
- Gerente de Projeto.
- Membro da Equipe.

## Levantamento de Requisitos do Projeto
- ### Requisitos Funcionais
 - RF01 – Login e autenticação de usuários com JWT.

 - RF02 – Gestão de usuários (Admin pode criar/editar/remover e definir papéis).

 - RF03 – Controle de acesso por perfis (Técnico, Gerente, Admin).

 - RF04 – CRUD de equipamentos.

 - RF05 – CRUD de ordens de serviço (abertura, edição, fechamento).

 - RF06 – Fluxo de status das ordens (Aberta, Em andamento, Concluída, etc).

 - RF07 – Dashboard com histórico de manutenções.

 - RF08 – Visualização em quadro Kanban das ordens de serviço
    
- ### Requisitos Não Funcionais
 - RNF01 – Segurança: senhas criptografadas (bcrypt), autenticação via JWT e HTTPS.

 - RNF02 – Usabilidade: interface simples, responsiva e intuitiva.

 - RNF03 – Performance: respostas rápidas nas consultas (até 500ms em média).

 - RNF04 – Manutenibilidade: código organizado em TypeScript, uso de boas práticas.

 - RNF05 – Disponibilidade: sistema acessível em navegadores modernos (Chrome, Edge, Firefox).

 - RNF06 – Backup: dados armazenados em MongoDB com rotina de backup.

## Recursos do Projeto
- ### Tecnológicos 
    - Framework de Desenvolvimento Next/ React (App Router)
    - Linguagem de Programação: TypeScript
    - Banco de Dados: Não Relacional (MongoDB = Mongoose)
    - JWT Authentication
    - SCSS
    - Drag & Drop com @dnd-kit/core
    - GitHub
    - VsCode
    - Figma

## Startar o projeto
 - npm install
 - npm run dev

## Análise de Risco

### Riscos Técnicos
 - R1 – Falhas de Autenticação/Autorização
Impacto: alto — pode expor dados sensíveis.
Mitigação: uso de JWT, bcrypt e testes de segurança.

 - R2 – Perda de Dados no Banco (MongoDB)
Impacto: alto — perda de histórico de ordens de serviço.
Mitigação: backups regulares e ambiente de teste separado.

 - R3 – Baixa Performance em Consultas
Impacto: médio — sistema lento para usuários.
Mitigação: índices no MongoDB e otimização de queries.

### Riscos de Projeto
 - R4 – Escopo Muito Amplo
Impacto: médio — risco de não entregar no prazo.
Mitigação: foco no MVP (CRUDs, Kanban básico, autenticação).

 - R5 – Falta de Testes
Impacto: alto — bugs em produção.
Mitigação: testes manuais + unitários básicos antes da entrega.

### Riscos de Usabilidade
 - R6 – Interface Complexa
Impacto: médio — usuários não adotam a solução.
Mitigação: design simples e responsivo, foco em usabilidade.

## Diagramas

1. ### Diagrama de classe 
Descreve o Comportamento das Entidades de um Projeto (Aquelas informações que serão armazenadas no banco de dados)

    - Usuário (User)
        - Atributos: id, nome, email, senha, função
        - Métodos: CRUD, login, logout

    - Projeto
        - Atributos: id, modelo, marca, localiza, status, numero/Série
        - Métodos: CRUD

    - Ordem de Serviço (OrdemServico)
        - Atributos: id, titulo, descrição, tipoManutenção, status, idTecnico, IdEquipamento


``` mermaid 
classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +Enum funcao
        +login()
        +logout()
        +CRUD()
    }

    class Projeto{
        +String id
        +String nome
        +String descricao
        +Date dataCriacao
        +CRUD()
    }

    class Tarefa{
        +String id
        +String titulo
        +String descricao
        +Enum status
        +Date dataCriacao
        +String idUsuario
        +String idProjeto
        +CRUD()
        +atualizarStatus()
        +atribuirUsuario()
    }

    Usuario "1"--"1+" Tarefa: "Usuário pode ter várias tarefas atribuídas"
    Projeto "1"--"1+" Tarefa: "Projeto contém várias tarefas"

```

2. ### Caso de Uso
Ilustra as interações dos diferentes tipos de usuários (Atores) com as funcionalidades do sistema

    - Técnico: Gerenciar Ordens de Serviço (CRUD) e acessar o dashboard;
    - Gerente: Funções do técnico + Gerenciamento de Equipamentos (CRUD);
    - Admin: Gerenciar os Usuários do Sistema e acessar o Dshboard

    Fazer o login -> Antes de qualquer ação

```mermaid

graph TD

    subgraph "Gerenciador de Tarefas Kanban"
        caso1([Fazer login])
        caso2([Gerenciar Projetos - CRUD])
        caso3([Gerenciar Tarefas - CRUD])
        caso4([Atribuir Tarefas])
        caso5([Visualizar Tarefas])
        caso6([Mover/Atualizar Status da Tarefa])
    end

    GP([Gerente de Projeto])
    ME([Membro da Equipe])

    GP --> caso1
    GP --> caso2
    GP --> caso3
    GP --> caso4

    ME --> caso1
    ME --> caso5
    ME --> caso6

    caso1 -.-> caso2
    caso1 -.-> caso3
    caso1 -.-> caso4
    caso1 -.-> caso5
    caso1 -.-> caso6

```

3. ### Fluxo
Detalha o passo a passo para realizar uma ação no sistema

- Login: Todos os usuários devem se autenticar antes de qualquer ação.
- Gerente de Projeto:
 - Pode criar, editar e excluir projetos.
 - Gerencia tarefas dentro de cada projeto (CRUD).
 - Atribui tarefas a membros da equipe, que recebem notificações.
    - O sistema verifica as Credenciais 
        - se sim: gera um JWT (Token) => Dashboard
        - se não: manda uma mensagem de erro - Permanece na tela de Login
- Membro da Equipe:
 - Visualiza tarefas atribuídas no dashboard.
 - Move tarefas entre os status: A Fazer → Em Progresso → Concluído.

```mermaid

graph TD
    %% Início do sistema
    A[Inicio] --> B{Login}
    B --> C{Usuario e Gerente de Projeto?}
    
    %% Fluxo do Gerente de Projeto
    C -- Sim --> D[Acessar Dashboard do Projeto]
    D --> E[Gerenciar Projetos]
    E --> F{Criar/Editar/Excluir Projeto?}
    F -- Criar --> G[Cadastrar Projeto]
    F -- Editar --> H[Editar Projeto]
    F -- Excluir --> I[Excluir Projeto]
    F -- Nao --> J[Selecionar Projeto Existente]

    J --> K[Gerenciar Tarefas do Projeto]
    K --> L{Criar/Editar/Excluir Tarefa?}
    L -- Criar --> M[Cadastrar Nova Tarefa]
    L -- Editar --> N[Editar Tarefa]
    L -- Excluir --> O[Excluir Tarefa]
    L -- Nao --> P[Atribuir Tarefa a Membro]

    P --> Q[Notificar Membro da Tarefa]
    Q --> R[Fim do Fluxo Gerente]

    %% Fluxo do Membro da Equipe
    C -- Nao --> S[Acessar Dashboard do Membro]
    S --> T[Visualizar Tarefas Atribuidas]
    T --> U{Mover Tarefa entre Status?}
    U -- Sim --> V[Selecionar Tarefa]
    V --> W{Atualizar Status}
    W -- A Fazer --> X[Tarefa em A Fazer]
    W -- Em Progresso --> Y[Tarefa em Progresso]
    W -- Concluido --> Z[Tarefa em Concluido]
    %% Permite atualizar outras tarefas
    W --> T 
    U -- Nao --> AA[Fim do Fluxo Membro]

    %% Conexão final
    X --> AA
    Y --> AA
    Z --> AA
```
## Prototpagem:

https://www.figma.com/design/FWrVwPT4uMzOLoJ1YaAW2I/Untitled?node-id=1-2&t=80cVgdVjHQmZ5zoq-0