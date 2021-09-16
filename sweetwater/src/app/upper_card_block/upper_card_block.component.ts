import { Component } from "@angular/core";

@Component({
    selector: 'app_upper_card_block',
    templateUrl: 'upper_card_block.component.html',
    styleUrls: ['upper_card_block.component.css']
})
export class UpperCardBlockComponent {
    cardname: string = "Guitars";
    cardsrc: string = "https://media.sweetwater.com/api/i/f-webp__h-200__w-200__q-80__ha-279f725ca11da3dc__hmac-9a6456d8fc700289aded7d5647d0642cd40fde45/home/cats/ENCTEBGH.png.auto.webp";
    title: string = "Popular Catagories";
}