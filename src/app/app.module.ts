import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({ // @데코레이터 아래 클래스를 모듈로 만들어 주겠다는 선언
  declarations: [
    AppComponent,
    HelloComponent,
    XyzComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //서비스가 아닌 
  bootstrap: [AppComponent] //AppComponent를 부팅했다.
})
export class AppModule { }
