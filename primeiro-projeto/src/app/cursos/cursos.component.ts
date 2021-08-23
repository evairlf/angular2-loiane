import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  //injeção de dependencia via construtor angular
  constructor(private cursosService: CursosService) { 
    this.nomePortal = 'https://loiane.training/';
    this.cursos = this.cursosService.getCursos();
  }
  ngOnInit(): void {
  }

}
