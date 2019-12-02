import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class NewsService {
  constructor(private http: Http) { }
  getNews(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .pipe(map((res: Response) => res.json()));
   
  }
}
