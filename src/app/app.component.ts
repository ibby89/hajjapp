
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BookPage } from '../pages/book/book';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = BookPage;
  private toc: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events : Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  selectToc(content){
    this.events.publish('select:toc', content);
    this.nav.pop();
  }
}

