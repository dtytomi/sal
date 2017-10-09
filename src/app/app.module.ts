import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
<<<<<<< HEAD

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
=======
import { HttpModule } from '@angular/http';
import { StreamingMedia } from '@ionic-native/streaming-media';

import { MyApp } from './app.component';
import { Configuration } from './app.constants';
import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { VideosProvider } from '../providers/videos/videos';
>>>>>>> 42adac054fc052a6de02367cd223ec124309eeff

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage
  ],
  imports: [
    BrowserModule,
=======
    HomePage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
>>>>>>> 42adac054fc052a6de02367cd223ec124309eeff
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
    HomePage,
    VideosPage
>>>>>>> 42adac054fc052a6de02367cd223ec124309eeff
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
=======
    VideosProvider,
    Configuration,
    StreamingMedia,
>>>>>>> 42adac054fc052a6de02367cd223ec124309eeff
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
