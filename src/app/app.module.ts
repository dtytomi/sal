import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { StreamingMedia } from '@ionic-native/streaming-media';

import { MyApp } from './app.component';
import { Configuration } from './app.constants';
import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { VideosProvider } from '../providers/videos/videos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideosProvider,
    Configuration,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
