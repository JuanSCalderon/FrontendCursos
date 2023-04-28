import { Component, OnInit } from '@angular/core';
import { CursoService } from './../curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: any[] = [];
  selectedCurso: any = {
    id: null,
    nombre: '',
    fecha_inicio: '',
    fecha_fin: ''
  };

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe(response => {
      console.log(response.data); 
      this.cursos = response.data;
    });
  }

  getCurso(id: number) {
    this.cursoService.getCurso(id).subscribe(data => {
      console.log(data);
    });
  }

  createCurso(curso: any) {
    this.cursoService.createCurso(curso).subscribe(data => {
      this.getCursos();
    });
  }

  updateCurso(id: number, curso: any) {
    this.cursoService.updateCurso(id, curso).subscribe(data => {
      this.getCursos();
    });
  }

  deleteCurso(id: number) {
    this.cursoService.deleteCurso(id).subscribe(data => {
      this.getCursos();
    });
  }

  onSubmit() {
    if (this.selectedCurso.id === null) {
      this.createCurso(this.selectedCurso);
    } else {
      this.updateCurso(this.selectedCurso.id, this.selectedCurso);
    }
    this.selectedCurso = {
      id: null,
      nombre: '',
      fecha_inicio: '',
      fecha_fin: ''
    };
  }

  onEdit(curso: any) {
    this.selectedCurso = curso;
  }

  onDelete(id: number) {
    this.deleteCurso(id);
  }

}
