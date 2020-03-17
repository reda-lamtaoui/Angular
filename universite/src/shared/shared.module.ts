import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UniversiteToolbarComponent } from './components/universite-toolbar/universite-toolbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [UniversiteToolbarComponent, NotFoundComponent],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    CommonModule,
  ],
  exports : [
    NotFoundComponent,
    UniversiteToolbarComponent
  ]
})
export class SharedModule { }
