import { Component, OnInit } from '@angular/core';
import { testClients } from './testing/test-clients';
import { ClientsService } from './services/clients.service';
import { Client } from './models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  constructor(private readonly clientsService: ClientsService) { }

  ngOnInit() {
    this.clients = testClients;
    this.clientsService.getClients().subscribe((result) => this.clients = result);
  }

}
