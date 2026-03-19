import { Component } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  habitaciones = [
    {
      nombre: 'Habitación Estándar',
      descripcion: 'Cómoda habitación con servicios básicos.',
      precio: 120000,
      imagen: 'assets/img/HabitacionEstandar.jpg'
    },
    {
      nombre: 'Habitación Deluxe',
      descripcion: 'Mayor espacio, cama king y vista panorámica.',
      precio: 220000,
      imagen: 'assets/img/HabitacionDeluxe.jpg'
    },
    {
      nombre: 'Suite Premium',
      descripcion: 'Lujo total con jacuzzi y servicio exclusivo.',
      precio: 350000,
      imagen: 'assets/img/SuitePremium.jpg'
    }
  ];

  caracteristicas = [
    {
      nombre: 'Estándar',
      capacidad: '2 personas',
      servicios: 'WiFi, TV, baño privado'
    },
    {
      nombre: 'Deluxe',
      capacidad: '4 personas',
      servicios: 'WiFi, TV, minibar, balcón'
    },
    {
      nombre: 'Suite',
      capacidad: '2 personas',
      servicios: 'WiFi, jacuzzi, servicio al cuarto'
    }
  ];

  reservar(nombre: string) {
    alert(`Has seleccionado la ${nombre}`);
  }
}
