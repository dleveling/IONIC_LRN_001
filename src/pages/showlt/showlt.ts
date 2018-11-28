import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListstuProvider } from '../../providers/liststu/liststu'
import { Subscription } from 'rxjs/Subscription'
import { Student } from '../../models/student'

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private ListstuProvider:ListstuProvider) {

    this.getStudentFromDB();

    /*this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowltPage');
  }

  itemTapped(event, item) {
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

}
