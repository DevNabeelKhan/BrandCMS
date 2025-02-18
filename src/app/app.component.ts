import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BrandCMS';

  constructor(public store:StorageService,private route:Router){}
  ngOnInit(){
    if(!this.store.getItem("User")){
      // this.route.navigate(['/login']);
    }   
  }
}
