import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Filieres } from 'src/shared/models/Filieres';
import { FilieresService } from '../services/filieres.service';
import { FilieresComponent } from '../filieres.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>, private FiliereService: FilieresService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Filieres) {}
  
    Fil: Filieres = new Filieres();
    filcomp: FilieresComponent;
    alert(message1: string, message2: string) {
      this.snackBar.open(message1, message2, {duration: 4000});
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ModifierFiliere(id: number, title: string) {
    this.Fil.id = id;
    this.Fil.title = title;
    this.FiliereService.update(this.Fil).subscribe(() => {
      this.alert('Filiére modifié', ' ');
      this.dialogRef.close();
    });
  }

}
