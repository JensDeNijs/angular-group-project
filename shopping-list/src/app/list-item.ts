import {uid} from "uid";

export class ListItem {
  public itemName: string
  public quantity: string
  public category: string
  public id: string
  public imgLink:string

  constructor(itemName: string, quantity: string, category: string, imgLink:string) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.category = category;
    this.id = uid();
    this.imgLink=imgLink;
  }
}
