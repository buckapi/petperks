import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigService } from '@app/services/config.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: any[] = [];
  selectedService: string = '';  // Almacena el nombre del servicio seleccionado

constructor(  public config: ConfigService){
  this.services = Object.values(this.config.getServicesByCategory('salud_general'));

}
showServiceAlert(serviceName: string) {
  this.selectedService = serviceName;  // Actualiza el servicio seleccionado
  alert(`Servicio seleccionado: ${serviceName}`);
}
}
