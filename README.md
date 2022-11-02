# Objective Platform Challenge

## Installation client (front-end)

```bash
$ npm install
```

## Running the app

Starts the mongodb locally.

```bash
$ docker-compose up
```

Starts the Angular application.

```bash
$ npm run start
```

## How to use the API/Client:

The interaction with most backend functions can be done through the implemented front-ent. So, here I'll just explain what I didn't have time to implement on the front, and it needs to be done right on the backend.

### Ad favourite beers
To add favorite beers, you need to be logged in (use the front-ent to create and log in) and have your JWT Token (available at localStorage.token).

So just make a POST request to `/v1/users/favbeers/:beerID` passing the ID of your favourite beer:

```bash
curl --request POST \
  --url http://localhost:8080/v1/users/favbeers/BEERID \
  --header 'Authorization: Bearer YOURTOKENHERE' \
```

To see your favorite drinks, just make a GET request to `/v1/users/favbeers`:

```bash
curl --request GET \
  --url http://localhost:8080/v1/users/favbeers \
  --header 'Authorization: Bearer YOURTOKENHERE' \
```

## Backlog
The points I noticed that need improvement and/or need to be implemented:

__To be implemented__

- Front-end
  - Route to view favorite drinks.

- Back-end
  - E2E tests should exist to cover the working of the routes;
  - Implement CORS to unlock frontend local development;
  - A Swagger could be implemented to facilitate the visualization of the routes;
  - A cache policy could be implemented so that the API/DB receives as few hits as possible from the frontend.
- Both
  - Unit tests;
  - Logger: to monitor the application more reliably.

__Improvement__

- Some classes (e.g. WebSecurityConfig) are tightly coupled to libraries (e.g. Bcrypt), which shouldn't be. The correct thing would be classes depend only on interfaces, and use dependency injection and inversion.
 
- The password, even if encrypted, should not be returned by the API.

- Several configs are hardcoded in application.properties and in some Classes, this should be in a protected file, like an .env.