import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Karyawan } from 'src/app/model/karyawan';
import { KaryawanService } from './karyawan.service';

@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.component.html',
  providers: [KaryawanService]
})
export class KaryawanComponent implements OnInit {

  listKaryawan: Karyawan[]

  constructor(private karyawanService: KaryawanService,
              private route: ActivatedRoute, 
              private router: Router) {

    this.karyawanService.listKaryawan().subscribe((data)=>{
      console.log(data);
      this.listKaryawan=data;
    }, error => {
          console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
