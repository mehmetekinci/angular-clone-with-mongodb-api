import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NavComponent } from "./nav/nav.component";
import { SecondaryFeaturesComponent } from "./secondary-features/secondary-features.component";
import { PrimaryFeaturesComponent } from "./primary-features/primary-features.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ContactComponent } from "./contact/contact.component";

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
  ],
  imports: [BrowserModule, MDBBootstrapModule.forRoot(), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
