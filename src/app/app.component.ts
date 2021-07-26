import { Component, Input } from "@angular/core";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-clone-with-mongodb-api";

  @Input() public header: object[] = [];
  @Input() public slider: object[];
  @Input() public features: [[]];
  @Input() public about: object;
  @Input() public contact: object;
  @Input() public footer: string;

  public article;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDetails().subscribe((data) => {
      this.article = data[0];

      this.header = data[0].header;
      this.slider = data[0].slider;
      this.features = data[0].features;
      this.about = data[0].about;
      this.contact = data[0].contact;
      this.footer = data[0].footer;

      console.log(this.article);
      console.log(this.header);
      console.log(this.features);
      console.log(this.about);
      console.log(this.contact);
      console.log(this.footer);
    });
  }
}
