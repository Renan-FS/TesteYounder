import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  maskCelular = {
    mask: "(00) 90000-0000",
  };

  maskTelefone = {
    mask: "(00) 0000-0000",
  };

  maskCEP = {
    mask: "00000-000",
  };

}
