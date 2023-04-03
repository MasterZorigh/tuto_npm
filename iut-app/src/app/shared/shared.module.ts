import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenericPopupComponent } from './components/generic-popup/generic-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [GenericPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
