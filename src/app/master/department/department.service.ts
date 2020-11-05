import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from 'src/app/model/department';
import { environment } from 'src/environments/environment';

@Injectable()
export class DepartmentService {

    constructor(private httpKlien: HttpClient){

    }

    listDepartment( ): Observable<Department[]> {
        return this.httpKlien.get(environment.baseUrl +'/listdepartmentjson')
        .pipe(map(data => <Department[]> data));
    }

}