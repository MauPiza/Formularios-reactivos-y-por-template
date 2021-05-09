import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  validarProducto(): boolean {
    return (
      this.miFormulario?.controls.productos?.invalid &&
      this.miFormulario?.controls.productos?.touched
    );
  }
  validarPrecio(): boolean {
    return (
      this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0
    );
  }

  guardar() {
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }
}
