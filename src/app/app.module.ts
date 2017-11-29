import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//modulos agregados
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { HomecaresComponent } from './components/homecares/homecares.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdoptComponent } from './components/adopt/adopt.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    HomecaresComponent,
    UsersComponent,
    ContactComponent,
    AdoptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
