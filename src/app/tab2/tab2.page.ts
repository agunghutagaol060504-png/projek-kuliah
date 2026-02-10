import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  laporan: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadLaporan();
  }

  loadLaporan() {
    this.api.ambilLaporan().subscribe((res: any) => {
      console.log('Data dari API:', res);
      this.laporan = res;
    }, err => {
      console.log('Error ambil data', err);
    });
  }
}
