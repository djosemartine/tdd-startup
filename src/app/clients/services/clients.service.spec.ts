import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { testClients } from '../testing/test-clients';

describe('ClientsService', () => {
  let httpMock: HttpTestingController;
  const clientsEndpoint = 'http://localhost:4100/api/clients.json';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    const service: ClientsService = TestBed.get(ClientsService);
    expect(service).toBeTruthy();
  });

  it('Should get Clients', () => {
    const service: ClientsService = TestBed.get(ClientsService);
    service.getClients().subscribe(
      (result) => expect(result).toEqual(testClients),
      () => fail('Clients were expected')
    );
    const request = httpMock.expectOne(clientsEndpoint);
    expect(request.request.method).toEqual('GET');
    request.flush(testClients);
  });
});
