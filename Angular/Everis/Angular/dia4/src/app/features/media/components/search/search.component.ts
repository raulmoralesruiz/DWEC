import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  /* variable que guardará el nombre del contenido multimedia */
  mediaName: string;

  /* variable que guardará la búsqueda del contenido multimedia */
  mediaSearch: any;

  // pruebas para poder buscar varias películas seguidas
  mySubscription: any;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,

    // pruebas para poder buscar varias películas seguidas
    public router: Router,
  ) {
    // pruebas para poder buscar varias películas seguidas
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // pruebas para poder buscar varias películas seguidas
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {

    // se obtiene el nombre del contenido multimedia
    this.mediaName = this.route.snapshot.paramMap.get('title');

    // se realiza búsqueda
    this.mediaService.getMediaInfo(this.mediaName).subscribe(
      (response) => {
        this.mediaSearch = response;

        console.log('---> response media:');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  // pruebas para poder buscar varias películas seguidas
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
