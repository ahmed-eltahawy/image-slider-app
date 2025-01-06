import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../../core/models/slide.model';
import { GrayscaleDirective } from '../../../../shared/directives/grayscale.directive';

@Component({
  selector: 'app-slider-main',
  standalone: true,
  imports: [CommonModule, GrayscaleDirective],
  template: `
    <div class="relative h-full">
      <!-- Background decorative element -->
      <div class="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-lg before:absolute before:inset-1 before:rounded-md before:border-2  before:border-blue-600"></div>
      
      <!-- Main image container -->
      <div class="relative h-full overflow-hidden rounded-lg  shadow-lg">
        <img 
          [src]="slide.image" 
          [alt]="slide.title"
          [appGrayscale]="!isSelected"
          class="w-full h-full object-cover transition-all duration-1000"
          [class.scale-105]="isSelected"
        >
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class SliderMainComponent {
  @Input() slide!: Slide;
  @Input() isSelected = false;
}

