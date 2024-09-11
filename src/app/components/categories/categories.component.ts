import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfigService } from '@app/services/config.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  // categories: any[] = [];
  get categories() {
    return Object.entries(this.config.defaultConfig.categories);
  }
constructor(  public config: ConfigService){
  
}
selectCategory(categoryKey: string) {
  this.config.selectCategory(categoryKey as keyof typeof this.config.defaultConfig.categories);
}
}
