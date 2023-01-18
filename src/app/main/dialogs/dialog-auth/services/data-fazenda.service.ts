import { Farm } from "./../../../../models/farm.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataFazendaService {
  constructor(private http: HttpClient) {}

  makeHeader() {
    new HttpHeaders();
  }

  getDataFarm(): Observable<Farm> {
    return this.http.get<Farm>("https://job.datafarm.app/api/farm");
  }
  // https://job.datafarm.app/api/
}
