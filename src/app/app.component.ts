import { Component } from '@angular/core';
import { SliderComponent } from './features/slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderComponent],
  template: `
    <app-slider></app-slider>
  `
})
export class AppComponent { }
