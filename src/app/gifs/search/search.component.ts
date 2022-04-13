import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'gif-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search(): void {
    const value = this.textSearch.nativeElement.value;

    if (value.trim().length === 0) {
      return;
    }
    
    this.gifsService.searchGifs(value);

    this.textSearch.nativeElement.value = '';
  }
}
