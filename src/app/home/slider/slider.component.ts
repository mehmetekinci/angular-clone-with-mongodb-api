import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"],
})
export class SliderComponent implements OnInit {
  @Input() public slider;

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
    navClass: ["owl-prev", "owl-next"],
    navText: [
      `<i class="fa fa-caret-left slider-btn" aria-hidden="true"></i>`,
      `<i class="fa fa-caret-right slider-btn" aria-hidden="true"></i>`,
    ],
  };

  ngOnInit() {}
}
