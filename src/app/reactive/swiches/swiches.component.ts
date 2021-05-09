import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-swiches',
  templateUrl: './swiches.component.html',
  styles: [],
})
export class SwichesComponent implements OnInit {
  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, terminos: false });
  }
  constructor(private fb: FormBuilder) {}

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true],
    terminos: [false, Validators.requiredTrue],
  });

  guardar() {
    if (this.miFormulario.invalid) {
      return;
    }
    const formValue = this.miFormulario.value;
    console.log(formValue);
  }

  persona = {
    genero: 'F',
    notificaciones: true,
  };
}
