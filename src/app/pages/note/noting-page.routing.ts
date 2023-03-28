import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HierarchyComponent} from './components/hierarchy/hierarchy.component';

const routes: Routes = [
  {
    path: 'angular-tree',
    component: HierarchyComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotingPageRouting {}
