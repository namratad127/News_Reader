import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsReadingService {

  constructor(public httpClient:HttpClient) { }
  
  API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-21&sortBy=publishedAt&apiKey=900feb0b813a4d00b5f04df1b10ea82d";

  getNewsList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL)
  }
}
