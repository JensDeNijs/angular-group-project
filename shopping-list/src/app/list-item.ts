export class ListItem {
  public itemName:string
  public quantity:string
  public category:string
  public id:number


  constructor(itemName: string, quantity: string, category: string) {
    this.itemName = itemName;
    this.quantity = quantity;
    this.category = category;
    this.id = Math.floor((Math.random() * 10000) + 1);
  }
}
