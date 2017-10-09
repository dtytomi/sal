import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { VideosPage } from '../videos/videos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	skills : string;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.skills = "Art_&_Craft";
  }

  video(skill) {
    // body...
    this.navCtrl.push(VideosPage, {
      videoCategory: skill
    });
  }
}