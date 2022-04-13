import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styles: [],
})
export class GifListComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.results;
  }

  ngOnInit(): void {}
}
