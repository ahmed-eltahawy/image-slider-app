import { Injectable, signal, computed } from '@angular/core';
import { Slide } from '../models/slide.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private slides = signal<Slide[]>([
    {
      id: 1,
      title: 'غابة الأمازون المطيرة (Amazon Rainforest) - أمريكا الجنوبية',
      description: 'أكبر غابة استوائية في العالم، موطن لأنواع لا حصر لها من النباتات والحيوانات. تتميز بتنوعها الحيوي الهائل، وشلالاتها الخفية، وأنهارها العظيمة مثل نهر الأمازون.',
      // image: '/assets/images/slides/amazon.jpg',
      // thumbnailImage: '/assets/images/slides/amazon-thumb.jpg',
      image: '../../../assets/images/slides/Amazon Rainforest.png',
      thumbnailImage: '../../../assets/images/slides/Amazon Rainforest.png',
      location: 'البرازيل'
    },
    {
      id: 2,
      title: 'جزيرة سكاي (Isle of Skye) - اسكتلندا',
      description: 'جزيرة خلابة تشتهر بالمناظر الطبيعية الدرامية، من الجبال والوديان إلى البحيرات والشواطئ. توفر تجربة استثنائية لمحبي المغامرات والمشي في الطبيعة.',
      // image: '/assets/images/slides/skye.jpg',
      // thumbnailImage: '/assets/images/slides/skye-thumb.jpg',
      image: '../../../assets/images/slides/Isle of Skye.png',
      thumbnailImage: '../../../assets/images/slides/Isle of Skye.png',
      location: 'اسكتلندا'
    },
    {
      id: 3,
      title: '"وادي القمر" او وادي رم (Wadi Rum) - الأردن',
      description: 'صحراء ساحرة تعرف باسم "وادي القمر"، تحتوي على تشكيلات صخرية فريدة وكثبان رملية حمراء. يعتبر المكان مثاليًا لاستكشاف الطبيعة والتأمل تحت سماء مليئة بالنجوم.',
      // image: '/assets/images/slides/wadirum.jpg',
      // thumbnailImage: '/assets/images/slides/wadirum-thumb.jpg',
      image: '../../../assets/images/slides/Wadi Rum.jpg',
      thumbnailImage: '../../../assets/images/slides/Wadi Rum.jpg',
      location: 'الأردن'
    },
    {
      id: 4,
      title: 'جبل ماترهورن (Matterhorn) - سويسرا وإيطاليا',
      description: 'أحد أشهر القمم الجبلية في العالم، يتميز بشكله الهرمي المهيب وقممه المغطاة بالثلوج. تحيط به المراعي الخضراء والبحيرات النقية، مما يجعله وجهة خيالية لعشاق الجبال.',
      // image: '/assets/images/slides/matterhorn.jpg',
      // thumbnailImage: '/assets/images/slides/matterhorn-thumb.jpg',
      image: '../../../assets/images/slides/Matterhorn.jpg',
      thumbnailImage: '../../../assets/images/slides/Matterhorn.jpg',
      location: 'سويسرا'
    },
    {
      id: 5,
      title: 'شلالات إجوازو (Iguazu Falls) -الأرجنتين والبرازيل',
      description: 'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل، محاطة بالغابات الاستوائية الكثيفة. تُعد واحدة من أعظم عجائب الطبيعة، حيث تتدفق المياه بقوة وسط ضباب ساحر.',
      // image: '/assets/images/slides/iguazu.jpg',
      // thumbnailImage: '/assets/images/slides/iguazu-thumb.jpg',
      image: '../../../assets/images/slides/Iguazu Falls.jpg',
      thumbnailImage: '../../../assets/images/slides/Iguazu Falls.jpg',
      location: 'الأرجنتين والبرازيل'
    }
  ]);

  private currentIndex = signal<number>(0);

  currentSlide = computed(() => this.slides()[this.currentIndex()]);
  allSlides = computed(() => this.slides());

  setCurrentSlide(id: number) {
    const index = this.slides().findIndex(slide => slide.id === id);
    if (index !== -1) {
      this.currentIndex.set(index);
    }
  }

  isCurrentSlide(id: number): boolean {
    return this.currentSlide().id === id;
  }
}
