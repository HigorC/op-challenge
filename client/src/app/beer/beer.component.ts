import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from './beer.entity';

@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.less']
})
export class BeerComponent implements OnInit {
  @Input()
  beer!: Beer;

  @Input()
  fav: boolean = false;

  baseAPIUrl = 'http://localhost:8080/v1'

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  addOnFavourites(beerID: string) {
    let url = `${this.baseAPIUrl}/users/favbeers`

    const token = localStorage.getItem('token');

    this.http
      .post<any>(`${url}/${beerID}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/favbeers'])
      })
  }
}