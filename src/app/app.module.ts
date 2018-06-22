import { BrowserModule } from '@angular/platform-browser';
import { Pro } from '@ionic/pro';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BookPage } from '../pages/book/book';
import { TocPage } from '../pages/toc/toc';
import { SettingsPage } from '../pages/settings/settings';

Pro.init('f9f2f3cc', {
  appVersion: '1.0'
})

@NgModule({
  declarations: [
    MyApp,
    BookPage,
    TocPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookPage,
    TocPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
