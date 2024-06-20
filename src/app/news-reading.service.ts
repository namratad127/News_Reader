import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsReadingService {

  constructor(public httpClient:HttpClient) { }
  
  API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-20&sortBy=publishedAt&apiKey=1aa1e26a1c284cfa96a28a1b3147d912";

  getNewsList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL)
  }
}
