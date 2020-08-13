import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebReqService {

  private ROOT_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  get(uri:string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  };

  post(uri: string, payload) {
    return this.http.post<any>(`${this.ROOT_URL}/${uri}`, payload);
  };

  patch(uri: string, payload){
    return this.http.patch<any>(`${this.ROOT_URL}/${uri}`, payload);
  };

  delete(uri: string) {
    return this.http.delete<any>(`${this.ROOT_URL}/${uri}`);
  }
}
