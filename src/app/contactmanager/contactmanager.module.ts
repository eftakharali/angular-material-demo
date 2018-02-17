import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { ContactManagerAppComponent } from './contactmanager-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserService } from './components/services/user.service';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    UserService
  ],
  declarations: [
    ContactManagerAppComponent,
    MainContentComponent,
    ToolbarComponent,
    SidenavComponent
  ]
})
export class ContactmanagerModule { }
