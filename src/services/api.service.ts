import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getDetails() {
    return this.httpClient.get(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-rgebk/service/deroostermakers/incoming_webhook/get_api"
    );
  }
}
