import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-primary-features",
  templateUrl: "./primary-features.component.html",
  styleUrls: ["./primary-features.component.css"],
})
export class PrimaryFeaturesComponent implements OnInit {
  @Input() public feature;
  constructor() {}

  ngOnInit(): void {}
}
