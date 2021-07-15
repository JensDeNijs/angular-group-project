import {Component} from '@angular/core';
import {ListItem} from "./list-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  public data = ["deep-frozen", "dairy", "drinks", "vegetables", "fruits", "snacks", "household-items", "others"];
  public listItem = new ListItem("", "", "");
  public regx = "^[A-Za-z0-9 ]+$";

}
