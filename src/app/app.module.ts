import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {TabsModule} from './tabs/tabs.module';
import {NewsModule} from './news/news.module';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [AppComponent, AComponent, BComponent],
  imports: [BrowserModule, TabsModule, NewsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
