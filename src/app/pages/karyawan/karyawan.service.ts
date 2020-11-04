import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Karyawan } from 'src/app/model/karyawan';
import { KotaKab } from 'src/app/model/kotaKab';
import { environment } from 'src/environments/environment';

@Injectable()
export class KaryawanService {
    constructor(private httpKlien: HttpClient){

    }

    listKotaKab( ): Observable<KotaKab[]> {
        return this.httpKlien.get(environment.baseUrl +'/listkotakabjson')
        .pipe(map(data => <KotaKab[]> data));
    }

    listKaryawan( ): Observable<Karyawan[]> {
        return this.httpKlien.get(environment.baseUrl +'/listkaryawanjson')
        .pipe(map(data => <Karyawan[]> data));
    }

    insertKaryawan(karyawan: Karyawan): Observable<any> {
        return this.httpKlien.post(environment.baseUrl +'/savekaryawanjson' , karyawan)
        .pipe(map(data => data));
    }
}