import {Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';



const routesConfig : Routes= [
  {
    path : '' , component :HomeComponent,
    title : 'Home Page'
  },
  {
    path :'details/:id', component :DetailsComponent,
    title : 'home Details'
  },
] ;
export default routesConfig;