import {Component,OnInit} from '@angular/core';
import {ListItem} from "./list-item";
import {AddItemService} from "./add-item.service";
import {uid} from "uid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shopping List';
  public data = ["Deep-frozen", "Dairy", "Drinks", "Vegetables", "Fruits", "Snacks", "Household-items", "Others"];
  public listItem = new ListItem("", "", "");
  public regx = "^[A-Za-z0-9 ]+$";
  private addItem:AddItemService;
  public allItems:any;


  constructor(addItem: AddItemService) {
    this.addItem = addItem;
  }

  ngOnInit(): any {
    this.asyncItems(this.addItem.url)
  }

  submitItem(){
    console.log(this.listItem)
    this.addItem.addItem(this.listItem).subscribe(data => console.log('It worked', data),error => console.log('It did not worked', error))
    this.asyncItems(this.addItem.url)
  }

  deleteItem(id:number){
    this.addItem.deleteItem(id).subscribe(data => console.log('It worked', data),error => console.log('It did not worked', error))
    this.asyncItems(this.addItem.url)
  }

  public async asyncItems(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => {
      return response.json()
    }).then(data => (this.allItems = data));
  }

}
