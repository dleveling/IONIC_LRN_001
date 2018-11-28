import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListstuProvider } from '../../providers/liststu/liststu'
import { Subscription } from 'rxjs/Subscription'
import { Student } from '../../models/student'
import { AlertController } from 'ionic-angular'
import { resMsg } from '../../models/resMsg';
import { InfoStuPage } from '../../pages/info-stu/info-stu'

@IonicPage()
@Component({
  selector: 'page-showlt',
  templateUrl: 'showlt.html',
})
export class ShowltPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  sub: Subscription
  stuListDB: Student[];
  errorMessage: String;
  //res: Response;

  constructor(public navCtrl: NavController, public navParams: NavParams,private ListstuProvider:ListstuProvider,public alertCtrl:AlertController) {

    this.getStudentFromDB();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowltPage');
  }

  viewProfile(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ShowltPage, {
      item: item
    });
  }

  getStudentFromDB(){
    this.sub = this.ListstuProvider.myStudent().subscribe(
      (res) => this.stuListDB = res,
      (error) => this.errorMessage = <any> error
    );
  }

  deleteRowStu(event,item){
    console.log("Delete");    
    console.log(item.studentID);
    var resMsg2 = new resMsg("","");

    this.sub = this.ListstuProvider.deleteStudentGet(item.studentID).subscribe(
      (res) => {
        resMsg2 = res;
        this.ShowAlert(resMsg2.Status,resMsg2.Message)
      },
      (error) => this.errorMessage = <any> error
    );

    let index = this.stuListDB.indexOf(item);

    if(index > -1){
      this.stuListDB.splice(index, 1);
    }

  }

  moreRowStu(id, name){
    console.log("More");
    this.navCtrl.push(InfoStuPage, {
      stuValID:id,
      stuValName:name});
  }

  ShowAlert(titlea:string,subtitleb:string){
    const alert = this.alertCtrl.create({
      title: titlea,
      subTitle: subtitleb,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter(){
    this.getStudentFromDB();
    console.log("Enter eiei");
  }

}
