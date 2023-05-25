import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {EmpireDto} from "@stellarismeta24.com/types";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmpireService {
  constructor(
    private http: HttpClient,
  ) {
  }

  findAll(): Observable<EmpireDto[]> {
    return this.http.get<EmpireDto[]>(`${environment.apiUrl}/empires`);
  }

  findOne(id: string): Observable<EmpireDto> {
    return this.http.get<EmpireDto>(`${environment.apiUrl}/empires/${id}`);
  }
}
