import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListstuProvider } from '../../providers/liststu/liststu'
import { Subscription } from 'rxjs/Subscription'
import { AlertController } from 'ionic-angular'
import { resMsg } from '../../models/resMsg';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sub : Subscription;
  errorMessage : String;
  val1 : String;
  val2 : String;
  sta : any;

  constructor(public navCtrl: NavController,private stuPro : ListstuProvider,public alertCtrl:AlertController) {
  }

  insertDataToHttp(){
    var resMsg2 = new resMsg("","");
    this.sub = this.stuPro.insertStudentPost(this.val1,this.val2).subscribe(
      (res) => {
        resMsg2 = res;
        this.ShowAlert(resMsg2.Status,resMsg2.Message)
        console.log("Insert Success !!!");
      },
        (error) => {
          this.errorMessage = <any> error;
          console.log("Can't Insert !!!");
        }

    );

    console.log('Hello StudentDataProvider Provider00000');

  }

  

  ShowAlert(titlea:string,subtitleb:string){
    const alert = this.alertCtrl.create({
      title: titlea,
      subTitle: subtitleb,
      buttons: ['OK']
    });
    alert.present();
  }

}
