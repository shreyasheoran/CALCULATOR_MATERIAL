import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatSnackBarModule} from '@angular/material/snack-bar'

const MaterialComponents = [MatButtonModule,MatInputModule,MatFormFieldModule,MatIconModule,MatTooltipModule,MatSnackBarModule];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
