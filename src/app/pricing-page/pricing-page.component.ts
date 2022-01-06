import { Component, OnInit } from '@angular/core';

interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  priceTable: IPriceItem[] = [
    {name: "Free", price: 0, btnText: "Ingyenes regisztráció", 
      options: ["10 tanuló", "2 GB tárhely", "Email támogatás", "Dokumentáció"] },
    {name: "Pro", price: 15, btnText: "Kezdő lépések", 
      options: ["20 tanuló", "10 GB tárhely", "Kiemelt email támogatás", "Dokumentáció"] },
    {name: "Enterprise", price: 29, btnText: "Kontakt", 
      options: ["100 tanuló", "100 GB tárhely", "Telefonos és email támogatás", "Dokumentáció"] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
