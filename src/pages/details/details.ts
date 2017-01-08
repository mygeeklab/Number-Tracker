import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  valid: any;
  carrier: any;
  locale: any;
  countryname: any;
  countrycode: any;
  type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.valid = this.navParams.get("validation"),
      this.carrier = this.navParams.get("carrier"),
      this.locale = this.navParams.get("locale"),
      this.type = navParams.get("linetype"),
      this.countrycode = this.navParams.get("cntrycode"),
      this.countryname = this.navParams.get("cntryname")

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
