import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { FormsModule } from '@angular/forms';
import { ListPageComponent } from './list-page/list-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    ListPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: ListPageComponent},
      {path: 'login', component: LoginPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
