const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGFhYWVhMjhjNjNjZjY1NWIyY2ZjZGZmZWYwNTBiYSIsInN1YiI6IjYyYTNiOTk3ZDU1Njk3MDA5YzVlN2MyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgeGZv93w_7shKELgiWsyDXf6sBls3a3VS10f0m4WrI",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
