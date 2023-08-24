import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Pagination, Autoplay, EffectFade, Controller, Thumbs} from 'swiper';
import { SwiperOptions } from 'swiper';

SwiperCore.use([Navigation,Pagination, Controller, Thumbs]);
Swiper.use([Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  config: SwiperOptions = {
    slidesPerView: 'auto',
    navigation: false,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  }

}
