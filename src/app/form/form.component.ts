import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Product, ProductsService } from '../services/productServices';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  customVal(campo: FormControl) {
    if (campo.value === 'Other') {
      return { error: true };
    }
    else { return null; }
  }

  prohibitName(name: FormControl){
    if (name.value === 'prohibido'){
      return { error : true}
    }
    else { return null; }
  }

  nombre: FormControl = new FormControl('', [this.prohibitName, Validators.required]);//Validators.pattern(/^(?!.*hitler).*$/)
  apellido1: FormControl = new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]);
  apellido2: FormControl = new FormControl('');
  email: FormControl = new FormControl('', [Validators.pattern(/^[a-zA-Z0-9._%+-]{4,20}@[a-zA-Z0-9.-]{4,}\.[a-zA-Z]{2,}$/), Validators.required]);
  plan: FormControl = new FormControl('', [this.customVal, Validators.required]);
  accept: FormControl = new FormControl('', Validators.required);
  fnacimiento: FormControl = new FormControl('', Validators.required);
  phone: FormControl = new FormControl('', [Validators.minLength(9), Validators.pattern(/^(\d{3}\s\d{2}\s\d{2}\s\d{2}|\d{9})$/), Validators.required]);// Validators.maxLength(9) Validators.pattern(/^(\d{3}\s\d{2}\s\d{2}\s\d{2}|\d{9})$/)
  IBAN: FormControl = new FormControl('', [Validators.pattern(/^[A-Z]{2}\d{2}(\s?\d{4}){5}$/), Validators.required]);
  DNI: FormControl = new FormControl('', [Validators.pattern(/^\d{8}[A-Z]$/), Validators.required]);

  MyNewForm: FormGroup = new FormGroup({
    nombre: this.nombre,
    apellido1: this.apellido1,
    apellido2: this.apellido2,
    email: this.email,
    plan: this.plan,
    accept: this.accept,
    fnacimiento: this.fnacimiento,
    phone: this.phone,
    IBAN: this.IBAN,
    DNI: this.DNI
  });

  resetForm() {
    //this.MyNewForm.reset();
  }

  /*@Output() datosEnviados = new EventEmitter<any>();
  i = 0;

  datos = [
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" },
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" },
    { nombre: "", apellido1: "", apellido2: "", email: "", plan: "", accept: "", fnacimiento: "", 
    phone: "", IBAN: "", DNI: "" }
  ]
  enviarDatos() {
    const datosString = JSON.stringify(this.datos); 
    localStorage.setItem('datos', datosString); 
    console.log(datosString)
    this.i++;
  }*/

  ngOnInit() { }
  Clic(datos: FormGroup) {
    /*const datosJSON = JSON.stringify(datos);
    console.log(datosJSON);
    const nombreArchivo = "datos.json";*/
    alert("DATA SENT CONRRECTLY");
    console.log(datos);
  }

  products:Product[] = [ ];
  productName: String = "";
  productSurname1: String = "";
  productSurname2: String = "";
  productEmail: String = "";
  productBirthdate: String = "";
  productPhone: String = "";
  productPlan: String = "";
  productIBAN: String = "";
  productDNI: String = "";
  @ViewChild("it1") name!: ElementRef;
  @ViewChild("it2") surname1!: ElementRef;
  @ViewChild("it3") surname2!: ElementRef;
  @ViewChild("it4") email2!: ElementRef;
  @ViewChild("it5") birthdate2!: ElementRef;
  @ViewChild("it6") phone2!: ElementRef;
  @ViewChild("it7") plan2!: ElementRef;
  @ViewChild("it8") iban!: ElementRef;
  @ViewChild("it9") dni!: ElementRef;


  constructor(private productService:ProductsService){
  }

  public addProduct(){
    this.productService.sendProducts(this.name.nativeElement.value,
                        this.surname1.nativeElement.value,
                        this.surname2.nativeElement.value,
                        this.email2.nativeElement.value,
                        this.birthdate2.nativeElement.value,
                        this.phone2.nativeElement.value,
                        this.plan2.nativeElement.value,
                        this.iban.nativeElement.value,
                        this.dni.nativeElement.value
                        );

      console.log(this.products);
  }

}
