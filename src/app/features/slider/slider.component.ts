import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderService } from '../../core/services/slider.service';
import { SliderMainComponent } from './components/slider-main/slider-main.component';
import { SliderContentComponent } from './components/slider-content/slider-content.component';
import { SliderThumbnailsComponent } from '../../features/slider/components/slider-thumbnail/slider-thumbnail.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
    SliderMainComponent,
    SliderContentComponent,
    SliderThumbnailsComponent
  ],
  template: `
    <div class="h-screen bg-gray-100 p-4 md:p-6 lg:p-8 flex flex-col">
      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 flex-1">
        <app-slider-main 
          [slide]="sliderService.currentSlide()" 
          [isSelected]="true"
          class="w-full lg:w-2/3 h-[45vh] lg:h-full"
        ></app-slider-main>
        
        <app-slider-content 
          [slide]="sliderService.currentSlide()"
          class="w-full lg:w-1/3 h-[35vh] lg:h-full overflow-auto"
        ></app-slider-content>
      </div>
      
      <!-- Thumbnails -->
      <app-slider-thumbnails
        [slides]="sliderService.allSlides()"
        class="h-[15vh] mt-4"
      ></app-slider-thumbnails>
    </div>
  `
})
export class SliderComponent {
  constructor(public sliderService: SliderService) {}
}