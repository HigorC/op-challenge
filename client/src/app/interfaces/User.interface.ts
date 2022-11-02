import { Beer } from "../beer/beer.entity"

export interface User {
    username: String
    favbeers: Beer[]
}