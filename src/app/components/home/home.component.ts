import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigService } from '@app/services/config.service';
import { CategoriesComponent } from '../categories/categories.component';
import { ServicesComponent } from '../services/services.component';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CategoriesComponent,ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  specialists: any[] = [];

  activeRoute="home";
constructor(
  public global:GlobalService,
  public configService:ConfigService){}

 
}
