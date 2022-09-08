import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'taco-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cart: CartService;

  constructor(cart: CartService) {
    this.cart = cart;
  }

  ngOnInit(): void {
    /*$(document).ready(function () {
      $("nav").find("li").on("click", "a", function () {
        $('#navbarSupportedContent').collapse('hide');
      });
    });*/
  }

}
