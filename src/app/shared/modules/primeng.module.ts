import {NgModule} from '@angular/core';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ButtonModule} from 'primeng/button';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  exports: [
    OrganizationChartModule,
    ButtonModule,
    ContextMenuModule,
    TooltipModule,
  ],
})
export class PrimengModule {

}
