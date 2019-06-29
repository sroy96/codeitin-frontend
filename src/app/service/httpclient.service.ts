import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
  public id: string,
  public content: string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

     getEmployees() {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/blog/aboutall');
  }

  // public deleteEmployee(employee) {
  //   return this.httpClient.delete<Employee>('http://localhost:8080/blog/' + employee.empId);
  // }
  //
  // public createEmployee(employee) {
  //   return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  // }



}
