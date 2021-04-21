import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaModel } from 'src/model/social-media.model';
import { Constantes } from 'src/utils/Constantes';

import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('deve validar os inputs da social medias sendo instagram', () => {
    component.inputSocialMedia = 'instagram';

    let socialMedia = new SocialMediaModel();
    socialMedia.linkSocialMedia = Constantes.LINK_INSTAGRAM;
    socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_INSTAGRAM;
    socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_INSTAGRAM;

    component.selectSocialMedia();
    fixture.detectChanges();

    expect(component.socialMedia.linkSocialMedia).toBe(socialMedia.linkSocialMedia);
    expect(component.socialMedia.pathImageWhite).toBe(socialMedia.pathImageWhite);
    expect(component.socialMedia.pathImageBlack).toBe(socialMedia.pathImageBlack);
  });

  test('deve validar os inputs da social medias sendo instagram', () => {
    component.inputSocialMedia = 'email';

    let socialMedia = new SocialMediaModel();
    socialMedia.linkSocialMedia = Constantes.PERSONAL_EMAIL;
    socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_EMAIL;
    socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_EMAIL;

    component.selectSocialMedia();
    fixture.detectChanges();

    expect(component.socialMedia.linkSocialMedia).toBe(socialMedia.linkSocialMedia);
    expect(component.socialMedia.pathImageWhite).toBe(socialMedia.pathImageWhite);
    expect(component.socialMedia.pathImageBlack).toBe(socialMedia.pathImageBlack);
  });

  test('deve validar os inputs da social medias sendo instagram', () => {
    component.inputSocialMedia = 'github';

    let socialMedia = new SocialMediaModel();
    socialMedia.linkSocialMedia = Constantes.LINK_GITHUB;
    socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_GITHUB;
    socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_GITHUB;

    component.selectSocialMedia();
    fixture.detectChanges();

    expect(component.socialMedia.linkSocialMedia).toBe(socialMedia.linkSocialMedia);
    expect(component.socialMedia.pathImageWhite).toBe(socialMedia.pathImageWhite);
    expect(component.socialMedia.pathImageBlack).toBe(socialMedia.pathImageBlack);
  });

  test('deve validar os inputs da social medias sendo instagram', () => {
    component.inputSocialMedia = 'linkedin';

    let socialMedia = new SocialMediaModel();
    socialMedia.linkSocialMedia = Constantes.LINK_LINKEDIN;
    socialMedia.pathImageWhite = Constantes.PATH_ICON_WHITE_LINKEDIN;
    socialMedia.pathImageBlack = Constantes.PATH_ICON_BLACK_LINKEDIN;

    component.selectSocialMedia();
    fixture.detectChanges();

    expect(component.socialMedia.linkSocialMedia).toBe(socialMedia.linkSocialMedia);
    expect(component.socialMedia.pathImageWhite).toBe(socialMedia.pathImageWhite);
    expect(component.socialMedia.pathImageBlack).toBe(socialMedia.pathImageBlack);
  });
});
