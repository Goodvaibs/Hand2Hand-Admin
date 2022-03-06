import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpclient:HttpClient) { }

  getNewsList(){
    let headers = this.getheaders();
    return this.httpclient.get<any>(`${environment.apiUrl}news`,
      {headers:headers}
    ).pipe(map((result:any)=> {
      //console.log({result})
      return result;
    }))
  }

  getNews(newsId:any){
    let headers = this.getheaders();
    return this.httpclient.get<any>(`${environment.apiUrl}news/${newsId}`,
      {headers:headers}
    ).pipe(map((result:any)=> {
      return result;
    }))
  }

  deleteNews(newsId:any){
    let headers = this.getheaders();
    return this.httpclient.delete<any>(`${environment.apiUrl}news/${newsId}`,
      {headers:headers}
    ).pipe(map((result:any)=> {
      return result;
    }))
  }

  addNews(formData:any){
    console.log(formData);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.httpclient.post<any>(`${environment.apiUrl}news`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }


  updateNews(formData:any, newsId:any){
    console.log(formData);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    return this.httpclient.patch<any>(`${environment.apiUrl}news/${newsId}`, formData, {
      headers: headers
    })
    .pipe(map((result: any) => {
        return result;
    }));
  }

  getheaders(){
    let headers = new HttpHeaders();
    headers.append('content-Type','application/json');
    headers.append('Accept','application/json');
    return headers;
  }

  getNewCount(){
    let headers = this.getheaders();
    return this.httpclient.get<any>(`${environment.apiUrl}news/total/count`,
      {headers:headers}
    ).pipe(map((result:any)=> {
      return result;
    }))
  }
}
