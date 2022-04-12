import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifListComponent } from './gif-list/gif-list.component';



@NgModule({
  declarations: [
    SearchComponent,
    GifsPageComponent,
    GifListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent,
  ]
})
export class GifsModule { }
