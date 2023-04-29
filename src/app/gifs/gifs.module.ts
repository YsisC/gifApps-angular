import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HomePageComponent } from './pages/home/home.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/card/gifs-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  HomePageComponent,
  SearchBoxComponent,
  CardListComponent,
  GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
   
  ]
})
export class GifsModule { }
