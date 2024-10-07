import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personas: any[] = []; // Lista de todas las personas
  persona: any = {
  };
  isEditing: boolean = false;

  constructor(private apiService :ApiService) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.apiService.getData().subscribe(data => {
      this.personas = data;
    });
  }

  addPersona(): void {
    this.apiService.addPersona(this.persona).subscribe(data => {
      this.personas.push(data);
      this.resetForm();
    });
  }

  editPersona(persona: any): void {
    
    this.persona = { ...persona }; // Asignar los datos de la persona seleccionada al formulario
    this.isEditing = true;
  }

  updatePersona(): void {
    this.apiService.updatePersona(this.persona.kjrt_id, this.persona).subscribe(() => {
      this.getPersonas();
      this.resetForm();
    });
  }

  deletePersona(id: number): void {
    this.apiService.deletePersona(id).subscribe(() => {
      this.getPersonas();
    });
  }

  savePersona(): void {
    if (this.isEditing) {
      this.updatePersona();
    } else {
      this.addPersona();
    }
  }

  resetForm(): void {
    this.persona = {
      kjrt_nombre: '',
      kjrt_apellido: '',
      kjrt_Direccion: '',
      kjrt_Edad: '',
      kjrt_Cedula: '',
      kjrt_Telefono: '',
      kjrt_correo: ''
    };
    this.isEditing = false
  }
}
