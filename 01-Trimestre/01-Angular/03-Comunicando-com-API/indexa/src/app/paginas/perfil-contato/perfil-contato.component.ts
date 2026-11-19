import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '23/10/1989',
    redes: ''
  }
}
