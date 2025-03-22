import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/angular/standalone';
import {MovieService} from "../services/movie.service";
import {ApiResult, MovieResult} from "../services/interfaces";
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {catchError, finalize} from "rxjs";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonSkeletonText,
    IonAlert,
    IonLabel,
    DatePipe,
    RouterLink,
    IonBadge,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  ],
})
export class HomePage {
  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = false;
  public movies: MovieResult[] = [];
  public imageUrl = 'https://image.tmdb.org/t/p';
  public dummyArray  = new Array(5);

  constructor() {
    this.loadMovies();
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.isLoading = true;
    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(() => this.isLoading = false),
      catchError((error: any) => this.loadMoviesError(error))
    )
      .subscribe({
        next: (result) => this.loadMoviesSuccess(result)
      });
  }

  loadMoreDetails(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

  private loadMoviesSuccess(result: ApiResult, event?: InfiniteScrollCustomEvent) {
    this.movies.push(...result.results);
    event?.target.complete();
    if (event) {
      event.target.disabled = result.total_pages === this.currentPage;
    }
  }

  private loadMoviesError = (err: any) => {
    this.error = err.error.status_message;
    return [];
  };
}
