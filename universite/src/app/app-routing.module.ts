import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilieresComponent } from 'src/filieres/filieres.component';
import { EtudiantsComponent } from 'src/etudiants/etudiants.component';

const routes: Routes = [
  { path: 'filieres', component: FilieresComponent},
  { path: 'etudiants/:id', component: EtudiantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
