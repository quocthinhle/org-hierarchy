import {NgModule} from '@angular/core';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
    DragDropModule,
    TextFieldModule,
    MatInputModule,
  ]
})
export class MaterialModule {}
