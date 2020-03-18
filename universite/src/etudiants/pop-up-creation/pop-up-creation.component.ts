import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EtudiantsService } from '../services/etudiants.service';
import { EtudiantsComponent } from '../etudiants.component';
import { Etudiants } from 'src/shared/models/etudiants';

@Component({
  selector: 'app-pop-up-creation',
  templateUrl: './pop-up-creation.component.html',
  styleUrls: ['./pop-up-creation.component.scss']
})
export class PopUpCreationComponent{

  constructor(
    public dialogRef: MatDialogRef<PopUpCreationComponent>, private EtudiantService: EtudiantsService, private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Etudiants) {}
  
    Etu: Etudiants = new Etudiants();
    etuComp: EtudiantsComponent;
    alert(message1: string, message2: string) {
      this.snackBar.open(message1, message2, {duration: 4000});
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  AjouterEtudiant(nom: string, prenom: string, filiereId: number) {
    if (nom ==="" || prenom === "") {
      this.alert('Champs vide', ' ');

    } else {
    this.Etu.nom = nom;
    this.Etu.prenom = prenom;
    this.Etu.filiereId = filiereId;
    this.EtudiantService.post(this.Etu).subscribe(() => {
      this.alert('Etudiant Ajouté', ' ');
      this.dialogRef.close();
    });
    }
  }

}
