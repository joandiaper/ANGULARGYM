import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormComponent } from './../form/form.component';
import { FormGroup } from '@angular/forms';
import { Product, ProductsService } from '../services/productServices';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  /*@Input() datosRecibidos: any;
  datos: any;
  constructor() {
    const datosString = localStorage.getItem('datos');
    if (datosString !== null) {
       this.datos = JSON.parse(datosString);
      }
    }*/

  products: Product[] = [];
  productName: any = "";
  productSurname1: any = "";
  productSurname2: any = "";
  productEmail: any = "";
  productBirthdate: any = "";
  productPhone: any = "";
  productPlan: any = "";
  productIBAN: any = "";
  productDNI: any = "";
  constructor(private productService: ProductsService, private changeDetection: ChangeDetectorRef) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.productService.sendProducts(
      this.productName,
      this.productSurname1,
      this.productSurname2,
      this.productEmail,
      this.productBirthdate,
      this.productPhone,
      this.productPlan,
      this.productIBAN,
      this.productDNI).subscribe((products: Product[]) => {
        this.products = products;
        this.products = this.productService.products;
      });
  }

  
  search = '';

  get data() {
    return this.products.filter(products => {
      return products.name.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  /*myForm: FormGroup;

  constructor(private formComponent: FormComponent) {
    this.myForm = this.formComponent.MyNewForm;
  }*/

}
