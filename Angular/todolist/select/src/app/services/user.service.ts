import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient:HttpClient) { }
  getUser():Observable<User[]>{
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users')
  }




}
