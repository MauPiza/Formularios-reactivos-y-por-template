import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  //  Forma tradicional o sencilla de hacer un formulario con form controls
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(15000),
  //   existencia: new FormControl(0),
  // });

  //  Forma robusta de crear controles de formularios

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencia: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Laptop ASUS',
      precio: 5000,
      existencia: 3900,
    });
  }

  campoNoValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
