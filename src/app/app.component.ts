
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { BookPage } from '../pages/book/book';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BookPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private screenOrientation: ScreenOrientation, public events : Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();

      if (this.platform.is('mobile') && (!this.platform.is('mobileweb'))) {
        // This will only print when on mobile
        console.log('I am a mobile device!');
        // set to landscape
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
        // This will only print if the orientation is locked
        console.log('Locked to portrait');
      }
    });



  }

}

