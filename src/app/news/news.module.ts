import {NewsService} from './news.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsListComponent} from './news-list.component';
import { HttpModule } from '@angular/http';
//import {NewsEditComponent} from './news-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,HttpModule,NgxPaginationModule],
  declarations: [NewsListComponent],
  providers: [NewsService],
  exports: [NewsListComponent],
})
export class NewsModule {}
