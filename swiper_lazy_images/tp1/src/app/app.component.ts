import { Component, OnInit } from '@angular/core';
import { EmblemesCreditsEnum } from './__models/emblemes.enum';
import { AppComponentsEnum } from './__models/misc.enum';
import { BreviareCharlesVImgEnum, BreviareCharlesVImgSmallEnum, GalerieMazarinImgEnum, HoffenbachImgEnum, SalonLouisXVImgEnum } from './__models/pictures.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'tp1';
  imgMap = new Map<{component:string,img:string,small?:string}, string>();
  imgPath = "";
  currentComponent: AppComponentsEnum = AppComponentsEnum.BREVIAIRE_CHARLES_V;
  listComponent: {key:string,value:string}[]= [] ;
  ngOnInit(): void {
    Object.keys(AppComponentsEnum).forEach((elm,index)=>{
      if(['ACCUEIL','CAMPAGNE_DON','TERMES','CERCLE_RICHELIEU','RESULTATS_RECHERCHE','SALLE_OVALE'].indexOf(elm) == -1)
        this.listComponent.push({key:elm,value:Object.values(AppComponentsEnum)[index]})
    });
    this.initImg();
console.log(this.imgMap)
  }

  change(elm:any){
    this.imgMap.clear();
    this.currentComponent = elm.target.value;
    this.initImg();
  }
  private initImg(): void {
    if (AppComponentsEnum.GALERIE_MAZARIN === this.currentComponent) {
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_0}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_1}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_2}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_3}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_4}, EmblemesCreditsEnum.ELIE_LUDWIG);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_5}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        this.imgMap.set({component:this.currentComponent,img:GalerieMazarinImgEnum.IMG_6}, EmblemesCreditsEnum.GUILLAUME_MURAT);
        this.imgPath = "assets/images/carousel/galerie-mazarin/";
    } else if (AppComponentsEnum.SALON_LOUIS_XV === this.currentComponent) {
        Object.values(SalonLouisXVImgEnum).forEach((value) => {
            this.imgMap.set({component:this.currentComponent,img:value}, EmblemesCreditsEnum.JEAN_CHRISTOPHE);
        });
        this.imgPath = "assets/images/carousel/salon-louis-xv/";
    } else if (AppComponentsEnum.BREVIAIRE_CHARLES_V === this.currentComponent) {
        this.imgMap.set({component:this.currentComponent,img:BreviareCharlesVImgEnum.IMG_0,small:BreviareCharlesVImgSmallEnum.IMG_0}, EmblemesCreditsEnum.ANTOHNY_VOISIN);
        this.imgMap.set({component:this.currentComponent,img:BreviareCharlesVImgEnum.IMG_1,small:BreviareCharlesVImgSmallEnum.IMG_1}, EmblemesCreditsEnum.ANTOHNY_VOISIN);
        this.imgMap.set({component:this.currentComponent,img:BreviareCharlesVImgEnum.IMG_2,small:BreviareCharlesVImgSmallEnum.IMG_2}, EmblemesCreditsEnum.ANTOHNY_VOISIN);
        this.imgMap.set({component:this.currentComponent,img:BreviareCharlesVImgEnum.IMG_3,small:BreviareCharlesVImgSmallEnum.IMG_3}, EmblemesCreditsEnum.ANTOHNY_VOISIN);
        this.imgPath = "assets/images/carousel/breviare_charles_v/";
    } else if (AppComponentsEnum.HOFFENBACH === this.currentComponent) {
        this.imgMap.set({component:this.currentComponent,img:HoffenbachImgEnum.IMG_0}, EmblemesCreditsEnum.DPT_DE_LA_MUSIC);
        this.imgMap.set({component:this.currentComponent,img:HoffenbachImgEnum.IMG_1}, EmblemesCreditsEnum.DPT_DE_LA_MUSIC);
        this.imgMap.set({component:this.currentComponent,img:HoffenbachImgEnum.IMG_2}, EmblemesCreditsEnum.DPT_DE_LA_MUSIC);
        this.imgMap.set({component:this.currentComponent,img:HoffenbachImgEnum.IMG_3}, EmblemesCreditsEnum.DPT_DE_LA_MUSIC);
        this.imgMap.set({component:this.currentComponent,img:HoffenbachImgEnum.IMG_4}, EmblemesCreditsEnum.DPT_DE_LA_MUSIC);
        this.imgPath = "assets/images/carousel/hoffenbach/";
    }
}
}
