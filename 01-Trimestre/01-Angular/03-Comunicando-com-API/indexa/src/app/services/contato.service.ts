import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Daiane", "telefone": "17 981146771", "email": "daiane@teste.com"},
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');

    if (contatosLocalStorageString) {
      // Se já existe algo no localStorage, carrega os contatos a partir dele
      this.contatos = JSON.parse(contatosLocalStorageString);
    } else {
      // If/Else para inicializar o localStorage com o contato padrão [Daiane] caso esteja vazio, pois estava dando erro por estar null
      //const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
      //this.contatos = contatosLocalStorage || null;

      // Se o localStorage está totalmente vazio, inicializa com o contato padrão [Daiane] e salva
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    // Garantia de segurança caso o array esteja vazio - não é estritamente necessário, mas é uma boa prática
    if (!this.contatos) {
      this.contatos = [];
    }

    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}

