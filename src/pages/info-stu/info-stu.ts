import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListstuProvider } from '../../providers/liststu/liststu'
import { resMsg } from '../../models/resMsg';
import { AlertController } from 'ionic-angular'
import { Subscription } from 'rxjs/Subscription'

@IonicPage()
@Component({
  selector: 'page-info-stu',
  templateUrl: 'info-stu.html',
})
export class InfoStuPage {

  stuValID : string;
  stuValName : string;
  errorMessage: String;
  sub: Subscription;
  val1 : String;
  val2 : String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,private ListstuProvider:ListstuProvider) {
    this.stuValID = this.navParams.get('stuValID');
    this.stuValName = this.navParams.get('stuValName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoStuPage');
  }

  upStu(stuID:string,stuName:string){
    console.log("Update");    
    console.log(this.val1);
    console.log(this.val2);
    var resMsg2 = new resMsg("","");

    this.sub = this.ListstuProvider.updateStudentGet(this.stuValID,this.val2).subscribe(
      (res) => {
        resMsg2 = res;
        this.ShowAlert(resMsg2.Status,resMsg2.Message)
      },
      (error) => this.errorMessage = <any> error
    );
      
  }

  ShowAlert(titlea:string,subtitleb:string){
    const alert = this.alertCtrl.create({
      title: titlea,
      subTitle: subtitleb,
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
