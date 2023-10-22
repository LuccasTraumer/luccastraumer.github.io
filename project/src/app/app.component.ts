import {Component, OnInit} from '@angular/core';
import {Cloudinary} from '@cloudinary/url-gen'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Luccas Traumer';

  ngOnInit(): void {
    //TODO: Incluir CDN
    const cld = new Cloudinary({cloud: {cloudName: 'dfixlnbhd'}});

    const ima = cld.image('nomeImagem');
  }
}
