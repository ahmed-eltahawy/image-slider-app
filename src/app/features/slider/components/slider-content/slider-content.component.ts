import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../../core/models/slide.model';

@Component({
  selector: 'app-slider-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="h-full space-y-4 md:space-y-6 p-4 md:p-6 rounded-lg shadow-lg overflow-auto" 
      dir="rtl"
    >
      <!-- Location Section -->
      <div class="flex items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-4 md:h-5 w-4 md:w-5 text-blue-500" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fill-rule="evenodd" 
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
            clip-rule="evenodd"
          />
        </svg>
        <span 
          class="text-gray-600 font-medium mr-auto text-sm md:text-base"
        >
          {{ slide.location }}
        </span>
      </div>
      
      <!-- Title Section -->
      <h2 
        class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
      >
        {{ slide.title }}
      </h2>
      
      <!-- Divider - Now full width -->
      <div class="w-full h-1 bg-blue-500"></div>
      
      <!-- Description -->
      <p 
        class="text-sm md:text-base text-gray-700 leading-relaxed"
      >
        {{ slide.description }}
      </p>
      
      <!-- Read More Button -->
      <button 
        class="px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-blue-500 text-white 
               rounded-lg hover:bg-blue-600 transition-colors duration-300 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        تابع القراءة
      </button>
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
export class SliderContentComponent {
  @Input() slide!: Slide;
}

