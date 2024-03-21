import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NxTreeGleUseComponent} from "./components/nx-tree-gle-use/nx-tree-gle-use.component";
import {
  NxDraggableCarouselUseComponent
} from "./components/nx-draggable-carousel-use/nx-draggable-carousel-use.component";

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
    title: 'nx-tree',
    path: 'nx-tree',
    component: NxTreeGleUseComponent,
    pathMatch: 'full'
  },
  {
    title: 'nx-draggable-carousel',
    path: 'nx-draggable-carousel',
    component: NxDraggableCarouselUseComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
