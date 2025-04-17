import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

// Define the type for gallery items
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

// Gallery data with actual images from the public/images folder
const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Classroom Activities',
    category: 'Learning',
    imageUrl: '/images/classroom.jpg',
  },
  {
    id: 2,
    title: 'Outdoor Play',
    category: 'Play',
    imageUrl: '/images/outdoor.jpg',
  },
  {
    id: 3,
    title: 'Art Projects',
    category: 'Creative',
    imageUrl: '/images/images1.jpg',
  },
  {
    id: 4,
    title: 'Music Class',
    category: 'Music',
    imageUrl: '/images/images2.jpg',
  },
  {
    id: 5,
    title: 'Field Trips',
    category: 'Outdoor',
    imageUrl: '/images/images4.jpg',
  },
  {
    id: 6,
    title: 'Celebrations',
    category: 'Events',
    imageUrl: '/images/images5.jpg',
  },
  {
    id: 7,
    title: 'Science Experiments',
    category: 'Learning',
    imageUrl: '/images/images7.jpg',
  },
  {
    id: 8,
    title: 'Sports Day',
    category: 'Events',
    imageUrl: '/images/images8.jpg',
  },
  {
    id: 9,
    title: 'Dance Performance',
    category: 'Creative',
    imageUrl: '/images/images9.jpg',
  },
  {
    id: 10,
    title: 'Group Activities',
    category: 'Learning',
    imageUrl: '/images/images10.jpg',
  },
  {
    id: 11,
    title: 'Playground Fun',
    category: 'Play',
    imageUrl: '/images/images11.jpg',
  },
  {
    id: 12,
    title: 'Special Events',
    category: 'Events',
    imageUrl: '/images/images12.jpg',
  },
  {
    id: 13,
    title: 'Creative Arts',
    category: 'Creative',
    imageUrl: '/images/images13.jpg',
  },
  {
    id: 14,
    title: 'Nature Exploration',
    category: 'Outdoor',
    imageUrl: '/images/images14.jpg',
  },
];

// Get unique categories
const categories = ['All', ...new Set(galleryData.map(item => item.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter images based on selected category
  const filteredImages = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  return (
    <>
      <Head>
        <title>Gallery - SmallWonder International School</title>
        <meta name="description" content="View photos from SmallWonder International School activities, events, and daily life." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center animate-pulse">Our Gallery</h1>
          <p className="text-xl text-yellow-100 text-center mt-4 max-w-3xl mx-auto">
            Take a peek into the wonderful world of SmallWonder International School
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-purple-600 hover:bg-purple-100 border-2 border-purple-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map(item => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-yellow-200 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-semibold text-purple-800">{selectedImage.title}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="relative h-96">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="mt-4">
                <p className="text-gray-600">{selectedImage.title} - {selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}