import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilieresComponent } from './filieres.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilieresService } from './services/filieres.service';


import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopUpCreateComponent } from './pop-up-create/pop-up-create.component';

@NgModule({
  declarations: [FilieresComponent, PopUpComponent, PopUpCreateComponent],
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
    FilieresComponent
  ],
  providers: [
    FilieresService
  ]
})
export class FilieresModule { }
