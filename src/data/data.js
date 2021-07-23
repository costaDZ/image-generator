import main from '../images/photos.jpg';
import photos from '../images/back.jpg';
import illistrator from '../images/illistrator.jpg';
import vector from '../images/vector.png';
import vedio from '../images/vedios.mp4';


const data = {
    main: {
        category: "",
        title: "Stunning free images & royalty free stock",
        dec: "Over 2.3 million+ high quality stock images, videos and music shared by our talented community.",
        back: main,
        populair: ["nature", "wallpaper", "background", "summer", "food", "beach", "sky", "money", "dog", "love", "cat", "flower", "car", "coronavirus"]
    },
    photos: {
        category: "photos",
        title: "Stunning free stock photos for download",
        dec: "Over 2 million+ royalty free stock photos shared by our talented community.",
        back: photos,
        populair: ["nature", "wallpaper", "background", "summer", "food", "beach", "sky", "money", "dog", "love", "cat", "flower", "car", "coronavirus"]
    },
    illistrations: {
        category: "illistrations",
        title: "Free illustrations for download & inspiration",
        dec: "Over 310,000+ beautiful free illustrations shared by our talented community.",
        back: illistrator,
        populair: ["nature", "wallpaper", "background", "summer", "food", "beach", "sky", "money", "dog", "love", "cat", "flower", "car", "coronavirus"]
    },
    vectors: {
        category: "vectors",
        title: "Stunning free vector art stock images",
        dec: "Over 110,000+ free vector art images shared by our talented community.",
        back: vector,
        populair: ["nature", "wallpaper", "background", "summer", "food", "beach", "sky", "money", "dog", "love", "cat", "flower", "car", "coronavirus"]
    },
    videos: {
        category: "videos",
        title: "Stunning free stock video footage & clips",
        dec: "Thousands of free stock video clips & footage shared by our talented community.",
        video: vedio,
        populair: ["nature", "wallpaper", "background", "summer", "food", "beach", "sky", "money", "dog", "love", "cat", "flower", "car", "coronavirus"]
    },

}
export default data;