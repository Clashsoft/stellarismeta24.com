import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CreateEmpireDto, EmpireDto, FilterEmpireDto} from "@stellarismeta24.com/types";
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

  findAll(filter?: FilterEmpireDto): Observable<EmpireDto[]> {
    if (filter) {
      for (const [key, value] of Object.entries(filter)) {
        if (!value) {
          // @ts-ignore
          delete filter[key];
        }
      }
    }
    return this.http.get<EmpireDto[]>(`${environment.apiUrl}/empires`, {
      params: filter,
    });
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
