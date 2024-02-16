import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NxTreeGleUseComponent} from "./components/nx-tree-gle-use/nx-tree-gle-use.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'home',
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    title: 'nx-tree-gle',
    path: 'nx-tree-glee',
    component: NxTreeGleUseComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
