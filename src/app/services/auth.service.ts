import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { 
    console.log("estoy en el servicio");
  }
}
