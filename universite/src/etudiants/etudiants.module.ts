import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EtudiantsService } from './services/etudiants.service';


import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopUpCreationComponent } from './pop-up-creation/pop-up-creation.component';
import { PopUpModificationComponent } from './pop-up-modification/pop-up-modification.component';



@NgModule({
  declarations: [EtudiantsComponent, PopUpCreationComponent, PopUpModificationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    EtudiantsComponent
  ],
  providers: [
    EtudiantsService
  ]
})
export class EtudiantsModule { }
