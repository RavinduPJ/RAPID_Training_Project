import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const routes: Routes = [
  { path: '', component: UploadFilesComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UploadFilesComponent, TableComponent]
