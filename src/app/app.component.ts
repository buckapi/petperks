import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptLoaderService } from './services/script-loader.service';
import { CommonModule } from '@angular/common';
import { LoadStyleService } from './services/load-style.service';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ServicesComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'pets';
  menuState: string = 'close'; // Valor inicial del menú
  constructor( 
  public scriptLoader: ScriptLoaderService,
  private loadStyleService: LoadStyleService
  // public auth:PocketAuthService,
  // public pocketbase: PocketbaseService,
  // public global: GlobalService
) {
 
}
ngOnInit(): void {
  // Cargar estilos de forma dinámica

this.themeTwo()
}
themeOne(){

  this.loadStyleService.loadStyle('assets/css/vendors/iconsax.css');
  this.loadStyleService.loadStyle('assets/css/vendors/bootstrap.css');
  this.loadStyleService.loadStyle('assets/css/vendors/swiper-bundle.min.css');
  this.loadStyleService.loadStyle('assets/css/style.css');


  this.scriptLoader
        .loadScripts([
          'assets/js/iconsax.js',
          'assets/js/bootstrap.bundle.min.js',
          'assets/js/sticky-header.js',
          'assets/js/swiper-bundle.min.js',
          // 'assets/js/custom-swiper.js',
          'assets/js/template-setting.js',
          'assets/js/script.js',      
        ])
        .then((data) => {
          console.log('Todos los scripts se han cargado correctamente', data);
        })
        .catch((error) => console.error('Error al cargar los scripts', error));
}
themeTwo(){




  this.loadStyleService.loadStyle('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css');
  this.loadStyleService.loadStyle('assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css');
  // this.loadStyleService.loadStyle('assets/css/vendors/swiper-bundle.min.css');
  this.loadStyleService.loadStyle('assets/vendor/grouploop-master/examples/css/styles.css');
  this.loadStyleService.loadStyle('assets/css/style.css');





  this.scriptLoader
        .loadScripts([
          // 'assets/js/jquery.js',
          // 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
          // 'assets/vendor/swiper/swiper-bundle.min.js',
          // 'assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
          // 'assets/vendor/grouploop-master/dist/grouploop-1.0.3.min.js',
          // 'assets/js/dz.carousel.js',
          // 'assets/js/settings.js',      
          // 'assets/js/custom.js',      
          // 'index,js',      
        ])
        .then((data) => {
          console.log('Todos los scripts se han cargado correctamente', data);
        })
        .catch((error) => console.error('Error al cargar los scripts', error));
}

}
