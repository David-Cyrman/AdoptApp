import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { UsersComponent } from './components/users/users.component';
import { HomecaresComponent } from './components/homecares/homecares.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdoptComponent } from './components/adopt/adopt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'pets', component: PetsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'homecare', component: HomecaresComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'adopt', component: AdoptComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
