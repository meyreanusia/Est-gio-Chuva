import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discurssoes',
  templateUrl: './discurssoes.component.html',
  styleUrls: ['./discurssoes.component.scss']
})
export class DiscurssoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCriarDircurssoes = true;
  mostrarCriarNovaDiscurssao = false;
  formularioSubmetido = false;

  toggleDivs() {
    this.mostrarCriarDircurssoes = false;
    this.mostrarCriarNovaDiscurssao = true;
  }

  enviarFormulario(event: Event) {
    event.preventDefault();
    this.mostrarCriarNovaDiscurssao = false;
    this.formularioSubmetido = true;
  }

  criarNovoTopico() {
    this.mostrarCriarDircurssoes = true;
    this.mostrarCriarNovaDiscurssao = false;
    this.formularioSubmetido = false;
  }

  mostrarRespostas = false;
  
  toggleRespostas() {
      this.mostrarRespostas = !this.mostrarRespostas;
    }


}
