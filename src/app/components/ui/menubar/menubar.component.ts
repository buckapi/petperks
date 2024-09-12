import { Component } from '@angular/core';
import { GlobalService } from '@app/services/global.service';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
constructor(
  public global:GlobalService
){}
}
