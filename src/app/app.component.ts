import { Component, OnInit } from '@angular/core';
import { NewsReadingService } from './news-reading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'task_management';
  newsFeed : any = []
  constructor(public httpGet:NewsReadingService) {}

  ngOnInit() {
    this.httpGet.getNewsList().subscribe(
      (response :any) => {this.newsFeed = response.articles}
    )
  }

  openArticle(url:string){
    window.open(url, '_blank')
  }
}


