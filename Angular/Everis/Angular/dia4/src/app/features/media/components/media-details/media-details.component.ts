import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {

    /* variable que guardará la búsqueda del contenido multimedia */
    mediaSearch: any;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
  ) { }

  ngOnInit(): void {

    // se guarda el id del contenido multimedia
    const id = this.route.snapshot.paramMap.get('id');

    // se obtiene búsqueda con los detalles del contenido multimedia del id anterior
    this.mediaService.getMediaDetails(id).subscribe(
      (response) => {
        this.mediaSearch = response;

        console.log('---> response media details:');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
