import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from './layouts/app-layout/app-layout.component';
import {HomeComponent} from './pages/home/components/home/home.component';

const routes: Routes = [
  {
    path: 'note',
    canActivate: [],
    component: AppLayoutComponent,
    loadChildren: () => import('./pages/note/noting-page.module').then(m => m.NotingPageModule),
  },
  {
    path: 'app',
    canActivate: [],
    component: AppLayoutComponent,
    loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: '/app/home',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
