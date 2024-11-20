import { Injectable } from '@angular/core';
import {Cloudinary} from "@cloudinary/url-gen";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CdnImageService {
  private cld = new Cloudinary({cloud: {cloudName: environment.ID_CLOUDNARY}});

  getCloudNary(): Cloudinary {
    return this.cld;
  }
}
