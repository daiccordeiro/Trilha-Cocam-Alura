# Angular: componentização e design com Angular Material - Angular 16 | JonadaMilhas

> Projeto de estudos desenvolvido durante o curso **Angular: Componentização e design com Angular Material**, focado na estruturação da aplicação, aplicando boas práticas de componentização, estilização com SCSS e componentes visuais do Angular Material.

---

## O que foi estudado

### Aula 1 – Iniciando a Jornada da Componetização
| Objetivo: Criar a estrutura inicial do projeto e estilizar componentes compartilhados utilizando Angular Material e SCSS.
	
	- Comandos do Angular CLI usados:	
	```
	- ng new JornadaMilhas
	- ng g c shared/header
	- ng g c shared/footer
	- ng g c shared/banner
	- ng g c shared/card

	- ng add @angular/material
	```
  
	- O que foi feito:
		- Criação do projeto `JornadaMilhas` e instalação do `@angular/material`;
		- Geração dos componentes base na pasta shared: `header`, `footer`, `banner` e `card`;
		- Construção do cabeçalho com o `mat-toolbar` e botões estilizados com o `mat-button`;
				
	- Conceitos apresentados:
		- `Angular Material`: Coleção de componentes visuais prontos (botões, menus, cards) mantida pelo próprio Angular.
		- `SCSS`: Uma extensão do CSS que permite colocar regras dentro de regras (aninhamento), evitando repetição de código.
		- `mat-toolbar`: Componente do Angular Material usado como barra de ferramentas ou cabeçalho da página.
		- `mat-button`: Diretiva do Angular Material que transforma um botão HTML comum em um botão estilizado.
---

### Aula 2 – Criando componentes reutilizáveis
| Objetivo: Construir componentes e containers flexíveis e reutilizáveis utilizando a diretiva `ng-content` e o Angular Material.
	
	- Comandos do Angular CLI usados:	
	```
	- ng g c shared/container	
	- ng g c shared/card-busca
	- ng g c shared/card-depoimento
	- ng g c pages/home
	```

	- O que foi feito:
		- Geração dos componentes de página `home` e de interface compartilhada: `container`, `card-busca`, `card-depoimento`;
		- Implementação de componentes com conteúdo flexível, como o `banner` e o `título` da página;
		- Um container flexível com a diretiva `ng-content`;
		- `Cards` reaproveitáveis com variação de estilos;
		- Card de busca utilizando o `mat-card` do Angular Material.
	
	- Conceitos apresentados:
		- `ng-content` (Projeção de Conteúdo): Funciona como um "espaço reservado" para encaixar qualquer HTML ou outro componente vindo de fora.
		- Componentes Reutilizáveis: Peças visuais genéricas que você cria uma única vez e reaproveita em várias telas mudando apenas o conteúdo.
		- `mat-card`: Um modelo pronto de cartão visual do Angular Material usado para organizar informações e botões em um único bloco.

---

### Aula 3 – Criando o formulário de busca
| Objetivo: 
	
	- Comandos do Angular CLI usados:
	```
	
	```

	- O que foi feito:

	- Conceitos apresentados:

---

### Aula 4 – Criando o modal
| Objetivo: 
	
	- Comandos do Angular CLI usados:
	```
	
	```

	- O que foi feito:

	- Conceitos apresentados:

---

## Preview do projeto
<p align="center">
	<img src="./images/JonadaMilhas.gif" alt="Demonstração JonadaMilhas" width="100%"/>
</p>
<img src="./Print-JonadaMilhas.png" alt="Tela JonadaMilhas" width="500"/>

## Tecnologias
- [Angular 16.0.0](https://angular.dev/)
- Typescript
- HTML / CSS
- JSON
- Node.js v18.18.2
- [Figma (Desing da aplicação)] (https://www.figma.com/design/PnbYDKjKLouCOAwY4GRxYv/Jornada-Milhas?node-id=0-1&p=f)


## Como executar
```
- npm install
- ng serve
- Acesse no navegador: http://localhost:4200
```
---

## Anotações importantes
