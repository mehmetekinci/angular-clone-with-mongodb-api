import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-secondary-features",
  templateUrl: "./secondary-features.component.html",
  styleUrls: ["./secondary-features.component.css"],
})
export class SecondaryFeaturesComponent implements OnInit {
  @Input() public feature;

  constructor() {}

  ngOnInit(): void {}
}
