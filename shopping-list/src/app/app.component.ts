import {Component, OnInit} from '@angular/core';
import {ListItem} from "./list-item";
import {AddItemService} from "./add-item.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping List';
  public data = ["Deep-frozen", "Dairy", "Drinks", "Vegetables", "Fruits", "Snacks", "Household-items", "Others"];
  public listItem = new ListItem("", "", "", "");
  public regx = "^[A-Za-z0-9 ]+$";
  private addItem: AddItemService;
  public allItems: ListItem[] = [];
  public img = [];
  public promises: Promise<any>[] = [];

  constructor(addItem: AddItemService,) {
    this.addItem = addItem;
  }

  ngOnInit(): any {
    this.asyncItems(this.addItem.url)
  }

  assignImage(a: string, b: string, url: string) {
    this.allItems.forEach(item => {
      if (item.category === a && item.itemName === b) {
        item.imgLink = url;
      }
    })
  }

  async getImageUrl(a: string, b: string) {
    await fetch("https://api.unsplash.com/search/photos/?client_id=VOJXzlRqwEETDcYsOzwNmQhf6Pw0MhFGDNute2IGIBc&query=" + a + "+" + b)
      .then(response => response.json())
      .then(data => {
        this.assignImage(a, b, data.results[0].urls.small)
      });
  }

  creatPromises() {
    this.allItems.forEach(item => (this.promises.push(this.getImageUrl(item.category, item.itemName))))
  }

  submitItem() {
    console.log(this.listItem)
    this.addItem.addItem(this.listItem).subscribe(data => {
      console.log('It worked', data),
        this.asyncItems(this.addItem.url)
    }, error => console.log('It did not worked', error))
    this.listItem = new ListItem("", "", "", "");
  }

  deleteItem(id: string) {
    this.addItem.deleteItem(id).subscribe(data => {
      console.log('It worked', data);
      this.asyncItems(this.addItem.url);
    }, error => console.log('It did not worked', error));
  }

  public async asyncItems(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      this.allItems = [];
      this.allItems = data;
      this.creatPromises();
    });
  }
}
