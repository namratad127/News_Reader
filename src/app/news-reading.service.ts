import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsReadingService {

  constructor(public httpClient:HttpClient) { }
  
  API_URL = "https://gnews.io/api/v4/search?q=example&apikey=26e0b7f76fc1f3801061dbc6e8da3138"

  getNewsList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_URL)
  }
}
