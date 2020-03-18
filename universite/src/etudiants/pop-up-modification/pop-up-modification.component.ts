import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Filieres } from 'src/shared/models/Filieres';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EtudiantsService } from '../services/etudiants.service';
import { EtudiantsComponent } from '../etudiants.component';
import { Etudiants } from 'src/shared/models/etudiants';

@Component({
  selector: 'app-pop-up-modification',
  templateUrl: './pop-up-modification.component.html',
  styleUrls: ['./pop-up-modification.component.scss']
})
export class PopUpModificationComponent{

  
  constructor(
    public dialogRef: MatDialogRef<PopUpModificationComponent>, private EtudiantService: EtudiantsService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Etudiants) {}
  
    Etu: Etudiants = new Etudiants();
    etuComp: EtudiantsComponent;
    alert(message1: string, message2: string) {
      this.snackBar.open(message1, message2, {duration: 4000});
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ModifierEtudiant(id: number, nom: string, prenom: string , filId: number) {
    if (nom ==="" || prenom === "") {
      this.alert('Champs vide', ' ');

    } else {
    this.Etu.nom = nom;
    this.Etu.prenom = prenom;
    this.Etu.id = id;
    this.Etu.filiereId = filId;
    this.EtudiantService.update(this.Etu).subscribe(() => {
      this.alert('Etudiant Ajouté', ' ');
      this.dialogRef.close();
    });
  }

}

}
