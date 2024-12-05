import { Routes } from '@angular/router';
import { HomeComponent } from './SparePart/home/home.component';
import { DetailsComponent } from './SparePart/details/details.component';
import { CreateComponent } from './SparePart/create/create.component';
import { EditComponent } from './SparePart/edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];
