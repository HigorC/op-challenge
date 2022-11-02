import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  baseAPIUrl = 'http://localhost:8080/v1'
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let url = `${this.baseAPIUrl}`
    this.http
      .post<any>(`${url}/users/login`, { "username": this.username, "password": this.password })

      .subscribe((data) => {
        if (data && data.token) {
          console.log(`Logged! Token saved on localStorage: ${data.token}`);
          
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home'])
        }
      })
  }

  create() {
    let url = `${this.baseAPIUrl}`
    this.http
      .post<any>(`${url}/users/create`, { "username": this.username, "password": this.password })

      .subscribe((data) => {
        console.log(data);
      })
  }

}
