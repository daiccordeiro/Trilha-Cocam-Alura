# Evoluindo com Formulários e Roteamento - Angular 17 | Indexa 

> Projeto de estudos desenvolvido durante o curso **Angular: Evoluindo com Formulários e Roteamento**, aprendendo como construir formulários reativos no Angular e a como implementar validações dos campos utilizando as classes de validação do próprio Angular. E também aprender a como configurar o roteamento da aplicação e navegar facilmente entre as telas

---

## O que foi estudado

### Aula 1 – Explicando o formulário
> Objetivo: Estruturar a classe e o template de um formulário reativo utilizando `FormGroup` e `FormControl`.
	
- Comandos do Angular CLI usados:	  
  ```	
  - npm install -g @angular/cli@17.0.0
  - npm i
  - ng serve --open
  - ng g c paginas/formulario-contato
  ```
  
- O que foi feito:
  - Utilização do projeto `Indexa` - **Agenda de Contatos** do curso anterior como base;
  - Criação do layout HTML base para o formulário de cadastro de contatos;
  - Escolha da abordagem de formulários reativos do Angular;
  - Mapeamento dos campos do formulário (nome, telefone, etc.) na classe TypeScript usando `FormControl`.
				
- Conceitos apresentados:
  - `ReactiveForms`: abordagem onde a estrutura e a validação do formulário são geridas na classe TypeScript, mantendo a regra de negócio centralizada.
  - `FormGroup`: classe que agrupa vários controles de formulário `FormControl` em um único objeto manipulável.
  - `FormControl`: menor unidade básica de um formulário que controla o valor e o estado de validação de um campo individual.
  - `Asserção não nula (!)`: recurso do TypeScript para informar ao compilador que uma propriedade será inicializada, evitando erros de tipo nulo na compilação.	
---

### Aula 2 – Aplicando as diretivas
> Objetivo: Conectar a estrutura do formulário reativo ao template HTML e capturar a submissão dos dados.

- O que foi feito:		
  - Vinculação do formulário do HTML com a classe TypeScript via `formGroup` e `formControlName`;
  - Captura da submissão do formulário utilizando a diretiva de evento `ngSubmit`;
  - Associação do evento de envio ao método de salvamento na classe do componente.	

- Conceitos apresentados:
  - `formControlName`: diretiva que liga um campo HTML `<input>` ao seu respectivo `FormControl` declarado no TypeScript.
  - `ngSubmit`: evento especial do Angular utilizado em elementos `<form>` para capturar e gerenciar a submissão de formulários, permitindo disparar métodos de salvamento de forma limpa e controlada.
  - `Data Binding`: é o processo de sincronização contínua de dados entre a classe TypeScript (modelo) e o template HTML (view).
  - `Interpolação` - `{{ valor }}`: exibe o valor de uma propriedade da classe do componente diretamente no template HTML.
  - `Property Binding` - `[propriedade]="valor"`: envia dados da classe TypeScript para atualizar uma propriedade de um elemento ou atributo HTML.
  - `Event Binding` - `(evento)="metodo()"`: escuta ações ou eventos do usuário no template (como cliques ou teclas pressionadas) e dispara funções correspondentes na classe.
  - `Two-way Binding` - `[(ngModel)]="propriedade"`: combina Property e Event Binding para manter a sincronização em tempo real e de mão dupla entre a interface e a variável do componente.
---

### Aula 3 – Implementando validações
> Objetivo: Adicionar regras de validação aos campos do formulário e criar feedback visual condicional para o usuário.

- O que foi feito:
  - Aplicação de regras de validação nos campos (`nome`, `telefone`, `email`) utilizando a classe `Validators`;
  - Exibição condicional de mensagens de erro no template utilizando a diretiva `@if`;
  - Estilização dinâmica do botão de salvar utilizando a diretiva `[ngClass]` com base no estado do formulário.

- Conceitos apresentados:
  - `Validators`: classe utilitária do Angular com funções prontas (como `required`, `email`, `minLength`) para impor regras nos campos reativos.
  - `@if`: estrutura nativa de controle de fluxo do Angular para exibir ou ocultar elementos com base em uma condição.
  - `ngClass`: diretiva que adiciona ou remove classes CSS dinamicamente com base em condições lógicas.
---

### Aula 4 – Integrando as rotas
> Objetivo: Configurar o sistema de roteamento da aplicação para permitir a navegação entre diferentes páginas.

- Comandos do Angular CLI usados:
  ```
  - ng g c paginas/lista-contatos
  ```
  
- O que foi feito:
  - Criação do componente de listagem de contatos `lista-contatos`;
  - Configuração do arquivo de rotas para gerenciar os caminhos da aplicação;
  - Implementação da diretiva `<router-outlet>` para renderizar os componentes de forma dinâmica;
  - Utilização da propriedade `pathMatch` nas rotas e de `routerLink` para os links de navegação.

- Conceitos apresentados:
  - `router-outlet`: espaço reservado no layout principal onde o Angular carrega dinamicamente o componente correspondente à rota ativa.
  - `pathMatch`: propriedade usada nas rotas para definir como o Angular deve comparar a URL (ex: `"full"` para correspondência exata).
  - `routerLink`: diretiva usada nos links HTML para navegar entre as rotas da aplicação sem recarregar a página.
---

### Aula 5 – Selecionando service e injeção de dependências
> Objetivo: Centralizar a lógica de negócios e persistência de dados utilizando serviços e armazenamento local.

- Comandos do Angular CLI usados:
  ```
  - ng g s services/contato
  ```

- O que foi feito:
  - Implementação da persistência de dados utilizando o `localStorage` do navegador;
  - Criação do serviço `contato.service.ts` utilizando o decorador `@Injectable`;
  - Utilização do ciclo de vida `OnInit` para carregar dados iniciais do serviço.

- Conceitos apresentados:
  - `localStorage`: recurso nativo do navegador para salvar dados localmente de forma persistente.
  - `@Injectable`: decorador que marca uma classe como um serviço elegível para ser injetado em outras partes da aplicação.
  - `OnInit`: é executado logo após a inicialização do componente.
  - `Injeção de dependências`: é um mecanismo automático do Angular para fornecer instâncias de serviços onde forem necessárias.
  - `Services`: são classes criadas para centralizar lógicas reutilizáveis e regras de negócio, mantendo os componentes limpos.		
---

### Aula 6 – Produzindo novos contatos
> Objetivo: Finalizar o fluxo de cadastro integrando a criação de novos contatos e o redirecionamento automático após o salvamento.

- Comandos do Angular CLI usados:
  ```
  - ng g i componentes/contato/contato
  ```

- O que foi feito:
  - Implementação da lógica para inserir novos contatos na lista através do serviço `contato.service.ts`;
  - Criação de uma `interface` para padronizar e tipar os dados do contato;
  - Configuração do redirecionamento utilizando `navigateByUrl` para retornar à página lista-contatos após salvar.

- Conceitos apresentados:
  - `Interface`: contrato estrutural no TypeScript que define os tipos de dados que um objeto deve possuir, garantindo maior segurança.
  - `navigateByUrl`: método do serviço de rotas (Router) que permite navegar entre páginas via código TypeScript com controle total do fluxo.
---

## Preview do projeto
<p align="center">
	<img src="./images/IndexaFormulario.gif" alt="Demonstração Indexa Formulario" width="100%"/>
</p>
<img src="./Print-IndexaFormulario.png" alt="Tela Indexa Formulario" width="500"/>

## Tecnologias
- [Angular 17.0.0](https://angular.dev/)
- Typescript
- HTML / CSS
- JSON
- Node.js v18.18.2
- [Figma](https://www.figma.com/pt-br/comunidade/file/1412831285939806835/angular-evoluindo-com-formularios-e-roteamento-indexa)


## Como executar
```
- npm install
- ng serve
- Acesse no navegador: http://localhost:4200
```
---

## Anotações importantes
- A abordagem reativa `(ReactiveForms)` oferece maior controle e facilidade na validação e testes unitários em comparação aos formulários guiados por template.
- O uso de `Validators` em conjunto com o `@if` garante que o usuário receba feedbacks claros e imediatos sobre erros de preenchimento.
- O sistema de `rotas` do Angular proporciona uma navegação rápida sem recarregar a página.
- Centralizar a manipulação de dados em um `Service` desacopla a regra de negócio da interface e viabiliza o uso do localStorage de forma organizada.
- O uso de tipagem com `Interfaces` combinado com o roteamento programático `(navigateByUrl)` fecha o ciclo de fluxo de dados de um CRUD completo na aplicação.
