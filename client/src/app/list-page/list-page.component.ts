import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { APIResult } from '../interfaces/APIResult.interface';
import { setParameter } from '../utils/url';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less']
})
export class ListPageComponent implements OnInit {
  baseAPIUrl = 'http://localhost:8080/v1'
  page: Number = 0;
  pageSize: Number = 10;
  query: string = '';
  pages: Array<Number> = []

  result: APIResult | undefined;

  constructor(private http: HttpClient) {
  }

  paginate(page: Number) {
    this.page = page
    this.search()
  }

  nextPage() {
    if (this.result) {
      this.paginate(this.result.currentPage + 1)
    }
  }

  previousPage() {
    if (this.result) {
      this.paginate(this.result.currentPage - 1)
    }
  }

  search() {
    let url = `${this.baseAPIUrl}/beers?`

    if (this.query) {
      url = setParameter(url, 'query', this.query)
    }
    url = setParameter(url, 'page', String(this.page))
    url = setParameter(url, 'pageSize', String(this.pageSize))

    this.page = 0
    const token = localStorage.getItem('token');
    const yourHeader: HttpHeaders = new HttpHeaders({
      Authorization: `bearer ${token}`
    });

    let headers = new HttpHeaders().set('header-name', 'header-value');
    headers = headers.set("Authorization", `bearer ${token}`);

    this.http
      .get<APIResult>(url, {
        headers: yourHeader,
      })
      .subscribe((data: APIResult) => {
        this.result = data
        this.result.beers.map(beer => {
          const maxLength = 100
          if (beer.description.length >= maxLength) {
            beer.description = beer.description.slice(0, maxLength) + "..."
          }
        })
        this.buildPagination()
      })
  }

  buildPagination() {
    this.pages = []
    if (this.result) {
      this.pages.push(this.result.currentPage)

      for (let i = this.result.currentPage - 1; i >= 0 && i >= this.result.currentPage - 3; i--) {
        this.pages.unshift(i)
      }

      for (let i = this.result.currentPage + 1; i <= this.result.totalPages - 1 && i <= this.result.currentPage + 3; i++) {
        this.pages.push(i)
      }
    }
  }

  async ngOnInit() {
    this.search()
  }
}