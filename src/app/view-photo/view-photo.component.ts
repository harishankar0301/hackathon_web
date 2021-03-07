import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  imageURL = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, byblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxErkJggg==");
  ngOnInit(): void {
    let sessioninfo = JSON.parse(sessionStorage.getItem('info'));
    this.http.get<{ resp: string }>(`http://localhost:3000/api/view/${sessioninfo["email"]}`).subscribe(
      (res) => {
        console.log(res);
        this.imageURL = this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64," + res['resp']);
        // this.imageURL = 'data:image/png;base64,' + new Buffer(res[0]['image'], 'binary').toString('base64')

      },
      (err) => console.log(err)
    );
  }


}
