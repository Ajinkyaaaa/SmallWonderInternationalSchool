import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>SmallWonder International School - Where Learning Meets Fun!</title>
        <meta name="description" content="SmallWonder International School provides a nurturing environment for early childhood education and development." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-bounce">
                Welcome to SmallWonder International School
              </h1>
              <p className="text-xl text-yellow-100 mb-6">
                Where learning meets fun in a nurturing environment designed for your child's early development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/enquiry" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105">
                  Enquire Now
                </Link>
                <Link href="/admission" className="bg-white hover:bg-gray-100 text-purple-600 border-2 border-yellow-400 font-bold py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105">
                  Apply for Admission
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center">
                  <span className="text-purple-800 font-bold text-2xl">SmallWonder International School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Why Choose SmallWonder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 border-2 border-blue-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Experienced Teachers</h3>
              <p className="text-gray-600 text-center">Our dedicated staff has years of experience in early childhood education.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 border-2 border-purple-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Modern Facilities</h3>
              <p className="text-gray-600 text-center">Safe, clean, and well-equipped classrooms designed for learning and play.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2 border-2 border-pink-300">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">Holistic Development</h3>
              <p className="text-gray-600 text-center">Focus on cognitive, social, emotional, and physical development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Activities Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Fun Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center transform hover:rotate-3 transition-transform duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-700">Arts & Crafts</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center transform hover:rotate-3 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-700">Music & Dance</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center transform hover:rotate-3 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-700">Outdoor Play</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center transform hover:rotate-3 transition-transform duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-purple-700">Science & Nature</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Enroll Your Child?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Join our community of happy parents and children. Contact us today to schedule a visit or learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/enquiry" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Enquire Now
            </Link>
            <Link href="/admission" className="bg-white hover:bg-gray-100 text-purple-600 border-2 border-yellow-400 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}