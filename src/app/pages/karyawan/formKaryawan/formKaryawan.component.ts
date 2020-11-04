import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Karyawan } from 'src/app/model/karyawan';
import { KotaKab } from 'src/app/model/kotaKab';
import { KaryawanService } from '../karyawan.service';
declare let $: any;

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
      idKaryawan: new FormControl(null,[Validators.required]),
      kodeNpk: new FormControl(null,[Validators.required]),
      namaKaryawan: new FormControl(null,[Validators.required]),
      tanggalMasukStaff: new FormControl(null,[Validators.required]),
      idKantor: new FormControl(null,[Validators.required]),
      idDepartmen: new FormControl(null,[Validators.required]),
      nik: new FormControl(null,[Validators.required]),
      noTelp: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      alamatTinggal: new FormControl(null,[Validators.required]),
      kotaLahir: new FormControl(null,[Validators.required]),
      kodeMarketing: new FormControl(null,[Validators.required]),
    })

    this.karyawanService.listKotaKab().subscribe((data)=>{
      console.log(data);
      this.listKotaKab=data;
      }, error => {
          console.log(error);
      })

   }

  ngOnInit(): void {
    $('.select2').select2(); 
  }

  simpanKaryawan(): void{
    console.log(this.addKaryawanForm.value);
    let kar = new Karyawan();
    kar.idKaryawan = this.addKaryawanForm.value.idKaryawan;
    kar.kodeNpk = this.addKaryawanForm.value.kodeNpk;
    kar.namaKaryawan = this.addKaryawanForm.value.namaKaryawan;
    kar.tanggalMasukSataff = this.addKaryawanForm.value.tanggalMasukSataff;
    kar.idKantor = this.addKaryawanForm.value.idKantor;
    kar.idDepartmen = this.addKaryawanForm.value.idDepartmen;
    kar.nik = this.addKaryawanForm.value.nik;
    kar.noTelp = this.addKaryawanForm.value.noTelp;
    kar.email = this.addKaryawanForm.value.email;
    kar.alamatTinggal = this.addKaryawanForm.value.alamatTinggal;
    kar.kotaLahir = this.addKaryawanForm.value.kotaLahir;
    kar.kodeMarketing = this.addKaryawanForm.value.kodeMarketing;
    this.karyawanService.insertKaryawan(kar).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/data-karyawan']);
    });
  }

}
