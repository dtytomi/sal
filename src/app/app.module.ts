import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SAL } from './app.component';
import { Configuration } from './app.constants';
import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { VideosProvider } from '../providers/videos/videos';

@NgModule({
  declarations: [
    SAL,
    HomePage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SAL)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SAL,
    HomePage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideosProvider,
    Configuration,
    SocialSharing,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
