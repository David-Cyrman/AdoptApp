import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

//componentes

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

//Servicios
import { AdminGuard } from '../Services/admin.guard';
import { UserService } from '../Services/user.service';
import { AnimalService } from '../Services/animal.service';
import { uploadService } from '../Services/upload.service';

@NgModule({

    declarations: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    providers: [
        UserService,
        AdminGuard,
        AnimalService,
        uploadService
    ]
})

export class AdminModule { }