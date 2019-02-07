import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsComponent } from './clients.component';
import { testClients } from './testing/test-clients';
import { ClientsService } from './services/clients.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let clientsServiceMock: jasmine.SpyObj<ClientsService>;

  beforeEach(async(() => {
    const clientsServiceSpy = jasmine.createSpyObj('ClientsService', ['getClients']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ClientsComponent],
      providers: [
        { provide: ClientsService, useValue: clientsServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    clientsServiceMock = TestBed.get(ClientsService);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get clients', () => {
    clientsServiceMock.getClients.and.returnValues(of(testClients));
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.clients).toEqual(testClients);
  });
});
