import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NavComponent } from "./nav/nav.component";
import { SecondaryFeaturesComponent } from "./home/secondary-features/secondary-features.component";
import { PrimaryFeaturesComponent } from "./home/primary-features/primary-features.component";
import { AboutComponent } from "./home/about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactComponent } from "./home/contact/contact.component";
import { SliderComponent } from './home/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SecondaryFeaturesComponent,
    PrimaryFeaturesComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    SliderComponent,
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule, CarouselModule ,BrowserAnimationsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
