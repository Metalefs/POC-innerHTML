import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }
  getData(id = 'BFFBCC16-9499-492C-9619-01B25B497FE9') {
    return this._http.get(`https://termo-seguro-api.web.interligados.tec.br/patient_terms/${id}`).pipe(
      map(res => res as {data:{content:string}})
    )
  }
}
