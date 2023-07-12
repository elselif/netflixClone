import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import {Observable} from 'rxjs';
import { MovieModel } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  baseurl = "https://api.themoviedb.org/3";

  constructor(
    private http:HttpClient,
  ) { }



  //bannerapidata

  getPopularMovies(options : MovieModel) : Observable<any>
  {
    return this.http.get<any>(`${this.baseurl}/movie/popular?page=${options.page}`)
  }

  getMovieDetail(data:any) : Observable<any>
  {

    return this.http.get<any>(`${this.baseurl}/movie/${data}`);
  }




}
