import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Tutorial {
  constructor(
  public topic: string,
  public store: string,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class SpringclientService {

 constructor(
    private httpClient: HttpClient
  ) {}

      getTutorial() {
    console.log('test call');
    return this.httpClient.get<Tutorial[]>('http://localhost:8080/blog/storage');
  }

   public createadder(tutorial) {
    console.log('test create');
    return this.httpClient.post<Tutorial>('http://localhost:8080/blog/add', tutorial);
  }
}
