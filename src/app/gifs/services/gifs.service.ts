import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey = 'jyARoOcvhlq97dst9sIfLl2qj9sYckq8';
  private _history: string[] = [];
  private _results: Gif[] = [];

  get history(): string[] {
    return [...this._history];
  }

  get results(): any[] {
    return [...this._results];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this._results = JSON.parse(localStorage.getItem('gifs')!) || [];
  }

  searchGifs(query: string = ''): void {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      const historyStr = JSON.stringify(this._history);
      localStorage.setItem('history', historyStr);
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((res) => {
        this._results = res.data;
        const resultsStr = JSON.stringify(res.data);
        localStorage.setItem('gifs', resultsStr);
      });
  }
}
