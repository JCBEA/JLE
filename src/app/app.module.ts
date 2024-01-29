import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './pages/modal/modal.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"jlenterprises-39b61","appId":"1:114648574006:web:8f3da0487c2b421f639097","databaseURL":"https://jlenterprises-39b61-default-rtdb.firebaseio.com","storageBucket":"jlenterprises-39b61.appspot.com","apiKey":"AIzaSyCNYfqZs-oEz2-cZsxHOadlk0v1O7UN1_o","authDomain":"jlenterprises-39b61.firebaseapp.com","messagingSenderId":"114648574006"})), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
