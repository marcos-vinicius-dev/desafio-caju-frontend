# Caju Front End Teste

Este é um teste para demonstrar habilidades como desenvolvedor front-end. A aplicação consiste em um Dashboard para gerenciar admissões e um Formulário para adicionar novas admissões.

## Especificações

### Dashboard

- [x] **Implementar `GET`**: Carregar dados ao abrir a página e ao pesquisar por `CPF`.
- [x] **Filtrar Cards**: Filtrar os cards exibidos por coluna, usando o status.
- [x] **Implementar `PUT` - Reprovar**: Alterar o status para `REPROVED` ao clicar em Reprovar.
- [x] **Implementar `PUT` - Aprovar**: Alterar o status para `APPROVED` ao clicar em Aprovar.
- [x] **Implementar `PUT` - Revisar Novamente**: Alterar o status para `REVIEW` ao clicar em Revisar novamente.
- [x] **Implementar `DELETE`**: Excluir o registro ao clicar na lixeira no card.
- [x] **Loading**: Exibir uma indicação de loading enquanto as requisições estão em andamento.
- [x] **Pesquisa por CPF**: Realizar requisição automaticamente ao preencher um CPF válido completo.
- [x] **Atualização de Dados**: Refazer a requisição ao clicar no ícone de atualizar.
- [x] **Máscara de CPF**: Adicionar máscara de CPF no campo de pesquisa.

### Formulário

- [x] **Validação de Email**: Aceitar apenas emails válidos.
- [x] **Validação de Nome Completo**: Aceitar pelo menos um espaço, no mínimo duas letras e garantir que a primeira letra não seja um número.
- [x] **Validação de CPF**: Aceitar apenas CPFs válidos e adicionar uma máscara de CPF ao campo.
- [x] **Implementar `POST`**: Enviar dados ao preencher todos os campos corretamente.
- [x] **Redirecionamento**: Redirecionar para `/dashboard` após criar uma nova admissão.

## Regras de Negócio

- [x] **Tipagem Correta e Enums**: Utilizar TypeScript com tipagem correta e enums.
- [x] **Modal de Confirmação**: Exibir um modal de confirmação para todas as ações que modificam dados.
- [x] **Notificações**: Mostrar uma notificação de sucesso ou erro após cada requisição.
- [x] **Visibilidade dos Botões**:
  - O botão de `Reprovar` e `Aprovar` deve aparecer somente para registros com status `REVIEW`.
  - O botão `Revisar novamente` deve aparecer somente para registros com status `REPROVED` ou `APPROVED`.

## Extras (Opcional)

- [ ] **Testes Unitários e de Integração**: Implementar testes para verificar o funcionamento das unidades e integrações.
- [ ] **Testes End-to-End (E2E)**: Implementar testes que simulem o comportamento esperado do usuário.
- [ ] **Documentação Detalhada**: Utilizar Storybook e Docusaurus para documentação detalhada.
- [ ] **CI/CD**: Configurar pipeline de CI/CD com deploy automatizado.

## Dicas e Sugestões

- [x] **Custom Hooks**: Criar custom hooks para separar a lógica da camada de UI.
- [x] **Lib de Validação**: Utilizar uma biblioteca de validação para o formulário.
- [ ] **Testes de Comportamento**: Criar testes que simulem o comportamento esperado do usuário.

## Desenvolvimento

1.  **Clone o Repositório**

```shell
    git clone https://github.com/marcos-vinicius-dev/desafio-caju-frontend
    cd desafio-caju-frontend
```

2.  **Instale as Dependências**

```shell
    yarn install
```

3.  **Inicie o JSON Server**

```shell
    yarn init:db
```

4.  **Inicie o Projeto React**

```shell
    yarn dev
```

5.  **Acesse a Aplicação**

    Abra seu navegador e vá para [http://localhost:3001/](http://localhost:3001/).

6.  **Acesse o JSON Server**

    O JSON Server estará disponível em [http://localhost:3000/](http://localhost:3000/).
