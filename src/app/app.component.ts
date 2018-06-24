
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BookPage } from '../pages/book/book';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BookPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events : Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();
    });
  }

}

