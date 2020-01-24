import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {



  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080';
  cyberSourceUrl = "https://testsecureacceptance.cybersource.com/pay";

  encode(data): Observable<any> {

    
    let signed_field_names: string = data.signed_field_names;
    let split_signed_field_names: string[] = signed_field_names.split(',');
    let commaSeperatedString = '';

    split_signed_field_names.forEach(field=>{
      commaSeperatedString += field + '=' + data[field] + ',';
    })

    var a = commaSeperatedString.substr(0, commaSeperatedString.length - 1);

    // for (var key in data) {
    //   commaSeperatedString += key + '=' + data[key] + ',';
    // }
    // commaSeperatedString.substr(0, commaSeperatedString.length - 2);

    return this.http.get(this.url + '/encode/' + a);

  }

  redirectToCyberSource(model){


    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Sec-Fetch-User': '?1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        // 'Sec-Fetch-Site': 'cross-site',
        // 'Sec-Fetch-Mode': 'navigate'
      })

  };

  
  

    this.http.post(this.cyberSourceUrl, model, options).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );


      // return this.http.post(this.url + '/cybersource/', model);

     // return this.http.post(this.cyberSourceUrl, model);

  }


}
