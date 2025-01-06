import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../../core/models/slide.model';
import { SliderService } from '../../../../core/services/slider.service';
import { GrayscaleDirective } from '../../../../shared/directives/grayscale.directive';

@Component({
  selector: 'app-slider-thumbnails',
  standalone: true,
  imports: [CommonModule, GrayscaleDirective],
  template: `
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
      @for (slide of slides; track slide.id) {
        <button 
          (click)="onThumbnailClick(slide.id)"
          class="relative group overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <img 
            [src]="slide.thumbnailImage" 
            [alt]="slide.title"
            [appGrayscale]="!isSelected(slide.id)"
            class="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover transition-all duration-500"
          >
          <div 
            class="absolute inset-0 bg-gradient-to-l from-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"
            [class.scale-x-100]="isSelected(slide.id)"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 p-1 md:p-2 text-white text-xs md:text-sm text-center bg-black/50">
            {{ slide.title }}
          </div>
        </button>
      }
    </div>
  `
})
export class SliderThumbnailsComponent {
  @Input() slides!: Slide[];

  constructor(private sliderService: SliderService) {}

  onThumbnailClick(id: number) {
    this.sliderService.setCurrentSlide(id);
  }

  isSelected(id: number): boolean {
    return this.sliderService.isCurrentSlide(id);
  }
}

