import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-home',
  templateUrl: '/home.html'
})
export class HomePage {

 public number: any;

   data: any;
   validation: any;
   carrier: any;
   cntrycode: any;
   cntryname: "";
   locale: any;
   linetype: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    
  }

  locate(){
    this.http.get("http://apilayer.net/api/validate?access_key=abf8d42dd9a6863788beaa5036713b1b" + "&number=" + this.number)

      .map(data => data.json())

      .subscribe(res =>{

        this.data = res;

        console.log(this.data.carrier);
        
        this.navCtrl.push(DetailsPage,{

        validation: this.data.valid,
        carrier : this.data.carrier,
        linetype: this.data.line_type,
        cntrycode : this.data.country_code,
        cntryname : this.data.country_name,
        locale : this.data.location

        })


        console.log(this.data);
      })

    console.log(this.number);
  }

}
