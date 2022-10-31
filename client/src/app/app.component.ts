import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { APIResult } from './interfaces/APIResult.interface';
import { setParameter } from './utils/url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
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

    this.http
      .get<APIResult>(url)
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
