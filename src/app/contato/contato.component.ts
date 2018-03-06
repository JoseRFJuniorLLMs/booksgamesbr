import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { ContatoService } from './contato.service';
import { Contato } from './contato-model';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  contatos: Observable<Contato[]>;
  nome: string;
  email: string;
  celular: string;
  mensagem: string;
  area: string;
  id?: string;
  time: number;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatos = this.contatoService.getSnapshot();
  }

  createContato() {
    this.contatoService.create(this.nome, this.email, this.celular, this.mensagem, this.area);
    this.nome = '';
    this.email = '';
    this.celular = '';
    this.mensagem = '';
    this.area = '';
  }
}