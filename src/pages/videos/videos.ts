import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ActionSheetController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { SocialSharing } from '@ionic-native/social-sharing';

import { VideosProvider } from '../../providers/videos/videos';


/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage  implements OnInit {

  skill: string;
  loading: any; 
  videos: any = [];

  constructor(public navCtrl: NavController, private navParams: NavParams,
    public videosProvider:  VideosProvider, private inAppBrowser: InAppBrowser,
    public loadingCtrl: LoadingController, private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController ) {

    this.loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });

    this.skill = this.navParams.get('videoCategory');
  }

  ngOnInit(): void {

    this.videosProvider.getVideosBySkill(this.skill)
    .subscribe(data  => {
      
      this.videos = data;
      console.log(this.videos);
      this.loading.dismiss();
    });
  }

  startVideo(videoUrl) {
     
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      mediaPlaybackRequiresUserAction: 'no',
      hardwareback: 'no',
      toolbar: 'no'

    }

    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(videoUrl, '_blank', options);
  }

  openVideoShare(video: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + video.title,
      buttons: [
        {
          text: 'Share via WhatsApp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp("I just learnt how to" + video.title + "on Skill Acquisition Lab", video.thumbnail, null)
            .then(function(result) {
              // Success!
              console.log("Shared to app: " + result.app);
            }, function(err) {
              // An error occurred. Show a message to the user
              console.log("Sharing failed with message: " + err);
            });
          }
        },
        {
          text: 'Share via Facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook("I just learnt how to" + video.title + "on Skill Acquisition Lab", video.thumbnail, null)
            .then(function(result) {
              // Success!
              console.log("Shared to app: " + result.app);
            }, function(err) {
              // An error occurred. Show a message to the user
              console.log("Sharing failed with message: " + err);
            });
          }
        },
        {
          text: 'Share via Twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter("I just learnt how to" + video.title + "on Skill Acquisition Lab", video.thumbnail, null)
            .then(function(result) {
              // Success!
              console.log("Shared to app: " + result.app);
            }, function(err) {
              // An error occurred. Show a message to the user
              console.log("Sharing failed with message: " + err);
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

}
