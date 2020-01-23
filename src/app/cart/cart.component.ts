import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;


  constructor( private cartService: CartService,  private formBuilder: FormBuilder, ) {

    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

   }

   onSubmit(customerData) {
    
    /*if(this.items.product_type === 'bike'){
   
    }*/

      var i = 0;
      var cnt = 0;
      for (i = 0; i < this.items.length; i++) {

        if(this.items[i].product_type === 'bike'){
          
          cnt++;
           /*window.alert('Your order has been submitted');
            this.items = this.cartService.clearCart();
            this.checkoutForm.reset();*/

        }
        else 
        {
         
        }
      
      }
      

      if(cnt >= 1){

        window.alert('Your order has been submitted');
            this.items = this.cartService.clearCart();
            this.checkoutForm.reset();
      }
      else{
           window.alert('Only Accessories in Your Cart, Please Add Bikes to Continue');

      }
     

  }


  ngOnInit() {
  	 this.items = this.cartService.getItems();
  }

}
