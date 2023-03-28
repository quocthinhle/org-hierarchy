import {NgModule} from '@angular/core';
import {HierarchyComponent} from './components/hierarchy/hierarchy.component';
import {NotingPageRouting} from './noting-page.routing';
import {PrimengModule} from '../../shared/modules/primeng.module';
import {CommonModule} from '@angular/common';
import {PipeModule} from 'src/app/shared/pipes/pipe.module';
import {SharedDirectivesModule} from 'src/app/shared/directives/shared-directives.module';

@NgModule({
  declarations: [
    HierarchyComponent
  ],
  imports: [
    CommonModule,
    NotingPageRouting,
    PrimengModule,
    PipeModule,
    SharedDirectivesModule,
  ],
})
export class NotingPageModule {}
