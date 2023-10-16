import { Component,EventEmitter,Input,Output } from '@angular/core';

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
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() book:Book|any;
  @Output() addBook:EventEmitter<Book>=new EventEmitter(); 
  addToCart(book:Book)
  {
    this.addBook.emit(book);
  }

}
