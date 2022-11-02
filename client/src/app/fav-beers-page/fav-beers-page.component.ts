import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../beer/beer.entity';

@Component({
  selector: 'app-fav-beers-page',
  templateUrl: './fav-beers-page.component.html',
  styleUrls: ['./fav-beers-page.component.less']
})
export class FavBeersPageComponent implements OnInit {
  baseAPIUrl = 'http://localhost:8080/v1'
  beers: Array<Beer> | undefined;
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    let url = `${this.baseAPIUrl}/users/favbeers`

    const token = localStorage.getItem('token');

    this.http
      .get<any>(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .subscribe((data) => {
        this.beers = data.map((beer: Beer) => {
          const maxLength = 100
          if (beer.description.length >= maxLength) {
            beer.description = beer.description.slice(0, maxLength) + "..."
          }
          return beer
        })
        console.log(data);
      })
  }
}
