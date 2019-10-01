import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatGridListModule,  
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatSortModule,
  MatDialogModule } from '@angular/material';
  

const MaterialComponents = [MatInputModule,
                            MatSelectModule,
                            MatFormFieldModule,
                            MatGridListModule,
                            MatButtonModule,
                            MatTableModule,
                            MatIconModule,
                            MatSortModule,
                            MatDialogModule];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
