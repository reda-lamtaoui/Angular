import { Component, OnInit } from '@angular/core';
import { FilieresService } from './services/filieres.service';
import { Observable } from 'rxjs';
import { Filieres } from 'src/shared/models/Filieres';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpCreateComponent } from './pop-up-create/pop-up-create.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.scss']
})
export class FilieresComponent implements OnInit {

  filiere$: Observable<Filieres[]>;

  filieres: Filieres[];

  displayedColumns: string[] = ['id', 'title','list', 'supprimer'];
  dialogRef;
  
  constructor(private FiliereService: FilieresService, public dialog: MatDialog, private snackBar: MatSnackBar, private route: Router) {  }

  ngOnInit(): void {
    this.filiere$ = this.FiliereService.get();
    console.log(this.filiere$);
    this.filiere$.subscribe({
      next: result => {
        this.filieres = result;
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
    this.FiliereService.delete(id).subscribe(() => {
      this.alert('Filiére supprimé', ' ');
      this.ngOnInit();
    });
  }
  AjouterFiliere() {
    this.dialogRef = this.dialog.open(PopUpCreateComponent);
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  ModifierFiliere(id: number, title: string) {
    this.dialogRef = this.dialog.open(PopUpComponent, {
      data: {id:id,title: title}
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
  versEtudiant(id: number) {
    this.route.navigateByUrl('/etudiants/' + id);
}

  }


