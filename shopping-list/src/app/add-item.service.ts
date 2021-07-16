import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListItem} from "./list-item";

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  private http: HttpClient;
  public url: string = "http://localhost:4269/allItems"

  constructor(http: HttpClient) {
    this.http = http;
  }

  addItem(item: ListItem) {
    return this.http.post(this.url, item)
  }

  deleteItem(itemId: string) {
    return this.http.delete(this.url+"/"+itemId)
  }

}
