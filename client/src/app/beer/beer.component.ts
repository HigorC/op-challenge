import { Component, Input, OnInit } from '@angular/core';
import { Beer } from './beer.entity';

@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.less']
})
export class BeerComponent implements OnInit {
  @Input()
  beer!: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
