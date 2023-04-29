import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
    public gifList: Gif[] = []
    private _tagsHistory: string[] = []
    private apiKey: string = '2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr'
    private serviceUrl: string = 'http://api.giphy.com/v1/gifs/'

    // 'search?api_key=2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr&q=valorant&limit=10'
    constructor(private http: HttpClient) {
        this.LoadLocalStorage()
     }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    organizeHistory(tag: string) {
        tag.toLocaleLowerCase();
        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag)
        this._tagsHistory = this._tagsHistory.splice(0, 10)
        this.saveLocalStorage()

    }
    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }
    private LoadLocalStorage(): void {
        if (!localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
        
        if(this._tagsHistory.length===0)return;
        this.searchTags(this._tagsHistory[0])
    }

    searchTags(tag: string): void {
        if (tag.length === 0) return
        this.organizeHistory(tag)
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('q', tag)
            .set('limit', '10')

        // `http://api.giphy.com/v1/gifs/search?api_key=2GS7HSLOvI1NDEAnpgKJQdjqZ83c7TMr&q=${tag}&limit=10`
        this.http.get<SearchResponse>(`${this.serviceUrl}search`, { params })
            .subscribe(res => {
                this.gifList = res.data;
                console.log({ gif: this.gifList });
            })
    }
}



