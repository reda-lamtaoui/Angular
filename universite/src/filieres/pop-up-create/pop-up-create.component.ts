import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Filieres } from 'src/shared/models/Filieres';
import { FilieresService } from '../services/filieres.service';
import { FilieresComponent } from '../filieres.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pop-up-create',
  templateUrl: './pop-up-create.component.html',
  styleUrls: ['./pop-up-create.component.scss']
})
export class PopUpCreateComponent{

  constructor(
    public dialogRef: MatDialogRef<PopUpCreateComponent>, private FiliereService: FilieresService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Filieres) {}
  
    Fil: Filieres = new Filieres();
    filcomp: FilieresComponent;
    alert(message1: string, message2: string) {
      this.snackBar.open(message1, message2, {duration: 4000});
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  AjouterFiliere(title: string) {
    this.Fil.title = title;
    this.FiliereService.post(this.Fil).subscribe(() => {
      this.alert('Filiére Ajouté', ' ');
      this.dialogRef.close();
    });
  }

}
