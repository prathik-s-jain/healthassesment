import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewComponent } from './view/view.component';

import { RouterModule,Routes } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes =[    

  {path:'Appointment' , component:AppComponent},
  {path:'View', component:ViewComponent},
  {path:'Welcome', component: WelcomeComponent},
  {path:'Place', component: PlaceComponent},
  {path:'Contact', component: ContactComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ViewComponent,
    PlaceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
