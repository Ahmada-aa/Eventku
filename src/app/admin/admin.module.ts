import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { KontakComponent } from './kontak/kontak.component';
import { TentangComponent } from './tentang/tentang.component';
import { MusicComponent } from './music/music.component';
import { ArtComponent } from './art/art.component';
import { SportComponent } from './sport/sport.component';
import { EtcComponent } from './etc/etc.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { SportDetailComponent } from './sport-detail/sport-detail.component';
import { EtcDetailComponent } from './etc-detail/etc-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'kontak',
        component: KontakComponent
      },
      {
        path:'tentang',
        component: TentangComponent
      },
      {
        path:'music',
        component: MusicComponent
      },
      {
        path:'art',
        component: ArtComponent
      },
      {
        path:'sport',
        component: SportComponent
      },
      {
        path:'etc',
        component: EtcComponent
      },
    ]
  }
  
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    KontakComponent,
    TentangComponent,
    MusicComponent,
    ArtComponent,
    SportComponent,
    EtcComponent,
    MusicDetailComponent,
    ArtDetailComponent,
    SportDetailComponent,
    EtcDetailComponent,
    FormsModule
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
