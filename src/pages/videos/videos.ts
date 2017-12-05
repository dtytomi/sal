import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

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
    public videosProvider:  VideosProvider, private streamingMedia: StreamingMedia,
    public loadingCtrl: LoadingController) {

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

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo(videoUrl, options);
  }

}
