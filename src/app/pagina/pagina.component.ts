import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { ApiGetDate } from '../models/apiGetDate.model';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  public apiGreeting = '';
  public apiGetDate: ApiGetDate;
  public textToBeShowed: string;
  public textReturnFromApi: string;


  constructor(
    private apiService: ApiService
  ) { }
  sendFrase() {
    console.log(this.textToBeShowed);
    this.apiService.sendFraseApi(this.textToBeShowed).subscribe((response) => {
      this.textReturnFromApi = response
    });
  }
  ngOnInit(): void {

    this.apiService.getDate().subscribe(
      (response) => {

        this.apiGetDate = response;
      });

    this.apiService.getHello().pipe(
      catchError((err) => {
        this.apiGreeting = 'Falha na comunicação com o servidor.';
        return [];
      })
    ).subscribe((response) => {
      if (response) {
        this.apiGreeting = response.mensagem;
      }
    });
  }

}
