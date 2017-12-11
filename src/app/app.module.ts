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

//
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './Services/admin.guard';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
//importar nuestro nuevo modulo 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    HomecaresComponent,
    LoginComponent,
    RegistroComponent,
    UserEditComponent,
    AnimalDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AdminModule //se carga los modulos creados x nosotros
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
