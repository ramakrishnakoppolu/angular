/**
 * Very simple component that renders a list of heroes
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'widget-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsListComponent {
  @Input() news;
  @Output() addNews = new EventEmitter<any>();
  @Output() editNews = new EventEmitter<any>();
}
