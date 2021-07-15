export class ListItem {
  public itemName:string
  public quantity:string
  public category:string


  constructor(itemName: string, quantity: string, category: string) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.category = category;
  }
}
