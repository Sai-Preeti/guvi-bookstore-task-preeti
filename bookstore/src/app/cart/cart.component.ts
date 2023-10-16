import { Component,Input,Output,EventEmitter } from '@angular/core';

interface Book
{
  ISBN: number;
  title:string;
  author:string;
  summary:string;
  image:string;
  price:{
    currency: string;
      value:number;
      displayValue:string;
  }
}

interface Cart{
  b:Book;
  quantity:number;
 }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() item: Cart | any;
  @Output() removeFromCart : EventEmitter<number> = new EventEmitter();
  @Output() increase : EventEmitter<any> = new EventEmitter();
  @Output() decrease : EventEmitter<any> = new EventEmitter();
  removeProduct(id:number){
    this.removeFromCart.emit(id)
  }
  reduceQuantity(item:Cart)
  {
    this.decrease.emit(item)
  }
  
  
  addQuantity(item:Cart)
  {
    this.increase.emit(item)
  }
 
}
