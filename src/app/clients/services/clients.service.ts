import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseURL = 'http://localhost:4100/api';
  constructor(private readonly httpClient: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}/clients.json`);
  }
}
