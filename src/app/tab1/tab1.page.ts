import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab1Page {

  judul: string = '';
  deskripsi: string = '';
  kategori: string = '';

  constructor(private api: ApiService) {}

  simpan() {
  const data = {
    judul: this.judul,
    deskripsi: this.deskripsi,
    kategori: this.kategori
  };

  console.log('Data dikirim:', data);

  this.api.tambahLaporan(data).subscribe((res: any) => {
    console.log('Respon dari API:', res);
    alert('Laporan berhasil disimpan');
  }, err => {
    console.error('Error API:', err);
    alert('Gagal simpan data');
  });
}

}
