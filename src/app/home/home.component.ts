import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() public slider;
  @Input() public features = [];
  @Input() public about;
  @Input() public contact;

  ngOnInit() {}
}
