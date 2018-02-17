import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { ContactManagerAppComponent } from './contactmanager-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


const routes: Routes = [
  {
    path: '', component: ContactManagerAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactManagerAppComponent, MainContentComponent, ToolbarComponent, SidenavComponent]
})
export class ContactmanagerModule { }
