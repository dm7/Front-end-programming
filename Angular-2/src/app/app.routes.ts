import {DirectoryComponent} from "./directory/directory.component";
import {HomeComponent} from "./home/home.component";
//import {provideRouter} from "@angular/router";
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

// Route configuration
export const routes:Routes = [
  /* Each route will be an object {}*/
  {path: 'directory', component: DirectoryComponent},
  {path: '',          component: HomeComponent}

];

// Deprecated
/*export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES);
];*/

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
