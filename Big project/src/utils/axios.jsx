import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjRjYjhhZmM5NzYzY2UxZDZlYmVkOTllMGEzZjI4YSIsInN1YiI6IjY2MjI1NjVmMGQxMWYyMDE2NDAyMWZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Up6D1XuzBt1TD29Jc1_tZouejSq1QOAmJhT7d1ws4o",
  },
});

export default instance;
