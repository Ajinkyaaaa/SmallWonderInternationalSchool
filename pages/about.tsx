import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - SmallWonder International School</title>
        <meta name="description" content="Learn about SmallWonder International School's mission, vision, and our dedicated team of educators." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center animate-pulse">About SmallWonder International School</h1>
          <p className="text-xl text-yellow-100 text-center mt-4 max-w-3xl mx-auto">
            Nurturing young minds in a safe, creative, and stimulating environment since 2010.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300 border-2 border-purple-300">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At SmallWonder International School, our mission is to provide a nurturing, inclusive environment where every child can develop their unique potential. We believe in fostering a love for learning through play-based education, creative expression, and positive social interactions.
              </p>
              <p className="text-gray-600">
                We are committed to partnering with parents to support each child's growth and development, creating a strong foundation for future academic and personal success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform duration-300 border-2 border-pink-300">
              <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                Our vision is to be recognized as a leading international school that empowers children to become confident, compassionate, and curious learners. We strive to create an environment where children feel safe to explore, question, and discover the world around them.
              </p>
              <p className="text-gray-600">
                We envision our graduates as well-rounded individuals who are prepared for the challenges of primary education and equipped with the social and emotional skills needed for lifelong success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">Our Educational Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:rotate-3 transition-transform duration-300 border-2 border-blue-300">
              <h3 className="text-xl font-semibold mb-3 text-center text-blue-700">Play-Based Learning</h3>
              <p className="text-gray-600">
                We believe that children learn best through play. Our curriculum incorporates structured and unstructured play activities that promote cognitive, social, and physical development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:rotate-3 transition-transform duration-300 border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-3 text-center text-purple-700">Individualized Attention</h3>
              <p className="text-gray-600">
                We recognize that each child is unique. Our teachers create personalized learning experiences that cater to different learning styles, interests, and developmental needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:rotate-3 transition-transform duration-300 border-2 border-pink-300">
              <h3 className="text-xl font-semibold mb-3 text-center text-pink-700">Holistic Development</h3>
              <p className="text-gray-600">
                Our curriculum addresses all aspects of a child's development: cognitive, social, emotional, physical, and creative. We provide a balanced approach to early education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300 border-2 border-blue-300">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-blue-700">Jane Smith</h3>
              <p className="text-purple-600 mb-3 font-bold">Director</p>
              <p className="text-gray-600">
                With over 15 years of experience in early childhood education, Jane leads our school with passion and dedication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300 border-2 border-purple-300">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-purple-700">John Doe</h3>
              <p className="text-pink-600 mb-3 font-bold">Lead Teacher</p>
              <p className="text-gray-600">
                John brings creativity and enthusiasm to our classrooms, specializing in early literacy and numeracy development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300 border-2 border-pink-300">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-pink-700">Sarah Johnson</h3>
              <p className="text-orange-600 mb-3 font-bold">Art & Music Specialist</p>
              <p className="text-gray-600">
                Sarah's background in arts education helps our children express themselves creatively through various mediums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our SmallWonder Family</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            We'd love to meet you and your child. Schedule a visit to our school to see our facilities and learn more about our programs.
          </p>
          <a href="/enquiry" className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 inline-block">
            Schedule a Visit
          </a>
        </div>
      </section>
    </>
  );
}