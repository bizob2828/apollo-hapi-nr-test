## Apollo Hapi New Relic Test

This app uses `apollo-hapi-server` to create a simple graphql server that makes an api call to the NASA near earth objects api.

You will need to provide the following env variables:

- NEW_RELIC_HOST
- NEW_RELIC_LICENSE_KEY
- NASA_API_KEY

You can generate a `NASA_API_KEY` [here](https://api.nasa.gov/)

OR

use `DEMO_KEY` as the `NASA_API_KEY` value which limits the number of calls you can make.

run: `node index.js`

server will be accessible at `http://locahost:6000`

example query:
```
query GetRoids {
  asteroids(date: "2020-08-12") {
    id,
    name,
    miss_distance_km,
    close_approach_date,
    relative_velocity_km_per_hour,
  }
}
```