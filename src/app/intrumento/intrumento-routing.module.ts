import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntrumentoAddComponent } from './intrumento-add/intrumento-add.component';
import { IntrumentoListComponent } from './intrumento-list/intrumento-list.component';


const routes: Routes = [
  { path: 'intrumento-add', component: IntrumentoAddComponent },
  { path: 'intrumento-add/:id', component: IntrumentoAddComponent },
  { path: 'intrumento-list', component: IntrumentoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntrumentoRoutingModule { }
