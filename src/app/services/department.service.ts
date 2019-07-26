import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Department } from 'src/app/models/deartment-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  constructor(private http: HttpClient) { }

  readonly API_URL = "http://localhost:8081/";

  getDeptList(): Observable<Department[]>{
    return this.http.get<Department[]>(this.API_URL+'departments');
  }


}
