import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[];
}
interface Favoritos {
  id: number;
  juego: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego!: string;
  juegosFavoritos: Persona = {
    nombre: 'Mauricio',
    favoritos: [
      {
        id: 1,
        juego: 'Call Of Duty Mobile',
      },
      {
        id: 2,
        juego: 'Call Of Duty Warzone',
      },
      {
        id: 3,
        juego: 'Banana Kong',
      },
    ],
  };

  constructor() {}

  guardar() {
    console.log('formulario posteado');
  }

  agregarJuego() {
    const nuevoFavorito: Favoritos = {
      id: this.juegosFavoritos.favoritos.length + 1,
      juego: this.nuevoJuego,
    };
    this.juegosFavoritos.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminarFavorito(index: number) {
    const { favoritos } = this.juegosFavoritos;
    favoritos.splice(index, 1);
  }
}
