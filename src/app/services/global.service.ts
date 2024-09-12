import { Injectable } from '@angular/core';
export interface Clinic {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  images: string[]; // O el tipo adecuado para las imágenes
  services: string[]; // O el tipo adecuado para los servicios
  // Otros campos que sean necesarios
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  specialists: any[] = [];
  clinicSelected: Clinic = {
    id: 0,
    name: '',
    address: '',
    phoneNumber: '',
    images: [], // Inicializa con un array vacío
    services: []
  };
  activeRoute="login";
  constructor() { }
  setRoute(route:string){
    this.activeRoute=route;
  }
  viewClinic(clinic:any){
    this.clinicSelected=clinic;
    this.activeRoute="clinicdetail";
  }
}
