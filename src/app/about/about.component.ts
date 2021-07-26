import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  @Input() public about;
  constructor() {}

  ngOnInit(): void {}
}
