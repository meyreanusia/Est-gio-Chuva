import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {
  showMais: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMais() {
    this.showMais = !this.showMais;
  }
}
