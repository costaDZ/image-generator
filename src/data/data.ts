import main from '../images/back.jpg';
import photos from '../images/photos.jpg';
import illistrator from '../images/illistrator.jpg';
import vector from '../images/vector.png';
//import { vedio } from '../images/vedios';

const data = {
  all: {
    category: 'all',
    title: 'Stunning free images & royalty free stock',
    dec: 'Over 2.3 million+ high quality stock images, videos and music shared by our talented community.',
    back: main,
    populair: [
      'nature',
      'wallpaper',
      'background',
      'summer',
      'food',
      'beach',
      'sky',
      'money',
      'dog',
      'love',
      'cat',
      'flower',
      'car',
      'coronavirus'
    ]
  },
  photo: {
    category: 'photo',
    title: 'Stunning free stock photos for download',
    dec: 'Over 2 million+ royalty free stock photos shared by our talented community.',
    back: photos,
    populair: [
      'nature',
      'wallpaper',
      'background',
      'summer',
      'food',
      'beach',
      'sky',
      'money',
      'dog',
      'love',
      'cat',
      'flower',
      'car',
      'coronavirus'
    ]
  },
  illustration: {
    category: 'illustration',
    title: 'Free illustrations for download & inspiration',
    dec: 'Over 310,000+ beautiful free illustrations shared by our talented community.',
    back: illistrator,
    populair: [
      'background',
      'flower',
      'flowers',
      'nature',
      'cat',
      'money',
      'love',
      'heart',
      'sun',
      'dog',
      'music',
      'people',
      'coronavirus'
    ]
  },
  vector: {
    category: 'vector',
    title: 'Stunning free vector art stock images',
    dec: 'Over 110,000+ free vector art images shared by our talented community.',
    back: vector,
    populair: [
      'background',
      'flower',
      'heart',
      'car',
      'cat',
      'dog',
      'tree',
      'flowers',
      'arrow',
      'book',
      'sun',
      'money',
      'coronavirus'
    ]
  },
  videos: {
    category: 'videos',
    title: 'Stunning free stock video footage & clips',
    dec: 'Thousands of free stock video clips & footage shared by our talented community.',
    video: vector,
    populair: [
      'nature',
      'wallpaper',
      'rain',
      'love',
      'meditation',
      'money',
      'forest',
      'water',
      'animals',
      'people',
      'earth',
      'beach'
    ]
  }
};
export default data;
