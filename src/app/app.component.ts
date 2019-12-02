import {Component, OnInit} from '@angular/core';
import {NewsService} from './news/news.service';

@Component({
  selector: 'app-root',
  template: `
   <ngx-tabs>
    <ngx-tab tabTitle="Container">
    <widget-news [news]="news"></widget-news>
    <app-a></app-a>
      </ngx-tab>
    <ngx-tab tabTitle="Posts">
         <widget-news [news]="news"></widget-news>
      </ngx-tab>
      <ngx-tab tabTitle="Data Sharing ">
      
        <app-a></app-a>
      </ngx-tab>
    </ngx-tabs>`,
})
export class AppComponent implements OnInit {
  news;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
    });
  }
}
