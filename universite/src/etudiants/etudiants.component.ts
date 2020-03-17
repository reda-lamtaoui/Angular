import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog } from '@angular/material/dialog';
import { Etudiants } from 'src/shared/models/etudiants';
import { EtudiantsService } from './services/etudiants.service';
import { PopUpModificationComponent } from './pop-up-modification/pop-up-modification.component';
import { PopUpCreationComponent } from './pop-up-creation/pop-up-creation.component';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiant$: Observable<Etudiants[]>;

  etudiants: Etudiants[];
  filiereId: string;
  displayedColumns: string[] = ['id', 'nom', 'prenom','supprimer'];
  dialogRef;
  
  // tslint:disable-next-line: max-line-length
  constructor(private EtudiantService: EtudiantsService, public dialog: MatDialog, private snackBar: MatSnackBar, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.filiereId = this.route.snapshot.paramMap.get("id");
    this.etudiant$ = this.EtudiantService.get(this.filiereId);
    console.log(this.etudiant$);
    this.etudiant$.subscribe({
      next: result => {
        this.etudiants = result;
        console.log(result);
       },
      error: err => {console.log(err); },
      complete: () => {console.log('finish'); }
});
  }
  alert(message1: string, message2: string) {
    this.snackBar.open(message1, message2, {duration: 4000});
  }
  SupprimerFiliere(id: number) {
    this.EtudiantService.delete(id).subscribe(() => {
      this.alert('Filiére supprimé', ' ');
      this.ngOnInit();
    });
  }
  AjouterEtudiant() {
    this.dialogRef = this.dialog.open(PopUpCreationComponent, {
      data: {id: this.filiereId}
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  ModifierEtudiant(id: number, nom: string, prenom: string) {
    this.dialogRef = this.dialog.open(PopUpModificationComponent, {
      data: {id:id,nom: nom, prenom :prenom, filiereId: this.filiereId}
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  }


