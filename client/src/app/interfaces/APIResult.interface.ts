import { Beer } from "../beer/beer.entity";

export interface APIResult {
    "totalItems": number,
    "beers": Beer[],
    "totalPages": number,
    "currentPage": number
  }