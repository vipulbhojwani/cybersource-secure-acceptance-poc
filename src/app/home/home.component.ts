import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MainService) { }

  model = {
    access_key: '2c09f29af9fe3fa48be72ad836824764',
    profile_id: '48D89AA1-E22D-40D3-A03A-DA4A5DEF28E0',
    transaction_uuid: uuid.v4(),    
    signed_field_names: 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
    unsigned_field_names: '',
    signed_date_time: moment().utc().format('YYYY-MM-DD[T]hh:mm:ss[Z]'),
    locale: 'en',
    transaction_type: 'authorization',
    reference_number: new Date().getTime(),
    amount: '100.00',
    currency: 'USD',
    signature: ''
  }

  ngOnInit() {
  }

  generateSignature(){

    this.service.encode(this.model).subscribe(data => {
      console.log(data);
      this.model.signature = data.signature;
    });
    
  }

  onSubmit() {

    const formData = new FormData();
    for(var key in this.model)
    {
      formData.append(key, this.model[key]);
    }




    this.service.redirectToCyberSource(this.model);

  }



}
