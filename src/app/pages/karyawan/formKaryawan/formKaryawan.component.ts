import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/master/department/department.service';
import { Department } from 'src/app/model/department';
import { Karyawan } from 'src/app/model/karyawan';
import { KotaKab } from 'src/app/model/kotaKab';
import { KaryawanService } from '../karyawan.service';
declare let $: any;

@Component({
  selector: 'app-form',
  templateUrl: './formKaryawan.component.html',
  providers: [KaryawanService, DepartmentService]
})

export class FormKaryawanComponent implements OnInit {

  id: String;
  listKotaKab : KotaKab[];
  listDepartment : Department[];
  addKaryawanForm: FormGroup;

  constructor(private karyawanService: KaryawanService,
              private departmentService: DepartmentService,
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

    this.departmentService.listDepartment().subscribe((data)=>{
      console.log(data);
      this.listDepartment=data;
      }, error => {
          console.log(error);
      })

   }

  ngOnInit(): void {
    $('.select2').select2(); 
    $('.select2').on('change', function() {
      var data = $(".select2 option:selected").val();
      $("#test").val(data);
      console.log(data);
    })

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' })

    //Date range picker
    $('#reservationdate').datetimepicker({
      format: 'L'
  });
  //Date range picker
  $('#reservation').daterangepicker()
  //Date range picker with time picker
  $('#reservationtime').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    locale: {
      format: 'MM/DD/YYYY hh:mm A'
    }
  })

  //Timepicker
  $('#timepicker').datetimepicker({
    format: 'LT'
  })
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
