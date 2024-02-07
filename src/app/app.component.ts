import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterModule,RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';




@Component({
  selector: 'app-root',
  standalone:true,
  imports :[HomeComponent, RouterModule,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}