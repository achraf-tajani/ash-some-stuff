import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SwiperModule } from "swiper/angular";
import { LazyImageDirective } from './__directives/lazy-img.directive';
@NgModule({
  declarations: [
    AppComponent,
    LazyImageDirective
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
