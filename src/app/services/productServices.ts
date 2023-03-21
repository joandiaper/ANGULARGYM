import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductsService {
    constructor() { }

    products: Product[] = [];

    public sendProducts(name: string, surname1: string, surname2: string, email: string, birthdate: string, phone: string, plan: string, IBAN: string, DNI: string): Observable<Product[]> {
        if (name != "" && surname1 != "") {
            this.products.push({
                name: name, 
                surname1: surname1,
                surname2: surname2,
                email: email,
                birthdate: birthdate,
                phone: phone,
                plan: plan,
                IBAN: IBAN,
                DNI: DNI
            });
        }
        return of(this.products);
    }

}
export interface Product { 
    name: string; 
    surname1: string; 
    surname2: string; 
    email: string; 
    birthdate: string; 
    phone: string; 
    plan: string; 
    IBAN: string; 
    DNI: string;
}
