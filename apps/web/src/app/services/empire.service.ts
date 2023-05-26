import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CreateEmpireDto, EmpireDto} from "@stellarismeta24.com/types";
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

  create(empire: CreateEmpireDto): Observable<EmpireDto> {
    return this.http.post<EmpireDto>(`${environment.apiUrl}/empires`, empire);
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/empires/tags`);
  }
}
