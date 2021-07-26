import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
