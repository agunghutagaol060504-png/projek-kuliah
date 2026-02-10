import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost/api_pengaduan/';

  constructor(private http: HttpClient) {}

  tambahLaporan(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'tambah_laporan.php', data);
  }

  ambilLaporan(): Observable<any> {
    return this.http.get(this.baseUrl + 'ambil_laporan.php');
  }

  editLaporan(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'edit_laporan.php', data);
  }

  updateStatus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'update_status.php', data);
  }
}
