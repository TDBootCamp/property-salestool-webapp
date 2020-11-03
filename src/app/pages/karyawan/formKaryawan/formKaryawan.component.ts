import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KotaKab } from 'src/app/model/kotaKab';
import { KaryawanService } from '../karyawan.service';

@Component({
  selector: 'app-form',
  templateUrl: './formKaryawan.component.html',
  providers: [KaryawanService]
})
export class FormKaryawanComponent implements OnInit {

  id: String;
  listKotaKab : KotaKab[];
  addKaryawanForm: FormGroup;

  constructor(private karyawanService: KaryawanService,
              private route: ActivatedRoute, 
              private router: Router) {

    this.addKaryawanForm = new FormGroup({
      idKotaKab: new FormControl(null,[Validators.required])
    })

    this.karyawanService.listKotaKab().subscribe((data)=>{
      console.log(data);
      this.listKotaKab=data;
      }, error => {
          console.log(error);
      })

   }

  ngOnInit(): void {
    
  }

  

}
