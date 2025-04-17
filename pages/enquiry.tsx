import Head from 'next/head';
import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong! Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Enquiry - Small Wonder Preschool</title>
        <meta name="description" content="Contact Small Wonder Preschool with your questions. We're here to help with information about our programs and enrollment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We'd Love to Hear From You</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Have questions about our programs or enrollment? Our team is ready to help!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiPhone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Call Us</h3>
              <p className="text-gray-600 text-center mb-2">+91 9158107098</p>
              <p className="text-gray-500 text-sm text-center">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <div className="mt-4 text-center">
                <a href="tel:+11234567890" className="text-blue-600 hover:text-blue-800 font-medium">
                  Call Now
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Email Us</h3>
              <p className="text-gray-600 text-center mb-2">info@smallwonderpreschool.com</p>
              <p className="text-gray-500 text-sm text-center">Response within 24 hours</p>
              <div className="mt-4 text-center">
                <a href="mailto:info@smallwonderpreschool.com" className="text-blue-600 hover:text-blue-800 font-medium">
                  Email Now
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiMapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Visit Us</h3>
              <p className="text-gray-600 text-center mb-2">Small wonder pre school, Someshwar chowk,lane no 2 Malwadi,</p>
              <p className="text-gray-600 text-center"> 2 D, Pathare Wasti Rd, near transformer, Pune, Maharashtra 411047, India</p>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/XNG2HuGZed2dTCyHA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
            
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-start">
                <FiCheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Thank you for your enquiry!</h3>
                  <p>We've received your message and will get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-start">
                <FiAlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Something went wrong</h3>
                  <p>{errorMessage || 'Please try again later.'}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admission Information">Admission Information</option>
                    <option value="Program Details">Program Details</option>
                    <option value="Schedule a Visit">Schedule a Visit</option>
                    <option value="Employment Opportunities">Employment Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your enquiry..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

  {/* Map Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
      <p className="text-gray-600 text-center mb-2">Small wonder pre school, Someshwar chowk,lane no 2 Malwadi,</p>
      <p className="text-gray-600 text-center"> 2 D, Pathare Wasti Rd, near transformer, Pune, Maharashtra 411047, India</p>
    </div>
    
    {/* Embedded Google Map */}
    <div className="relative rounded-xl overflow-hidden shadow-lg h-96 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3885896230004!2d73.94906877465405!3d18.601583666695618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c56fd9d5b12b%3A0xe794bd95c0d0f350!2sSmall%20wonder%20pre%20school!5e0!3m2!1sen!2snl!4v1744912609412!5m2!1sen!2snl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      ></iframe>
    </div>
    
    {/* Address and Directions */}
    <div className="mt-8 text-center bg-gray-50 p-6 rounded-lg">
      <p className="text-lg font-medium text-gray-800 mb-2">
        Small Wonder Preschool
      </p>
      <p className="text-gray-600 text-center mb-2">Small wonder pre school, Someshwar chowk,lane no 2 Malwadi,</p>
              <p className="text-gray-600 text-center"> 2 D, Pathare Wasti Rd, near transformer, Pune, Maharashtra 411047, India</p>
      <a 
        href="https://maps.app.goo.gl/XNG2HuGZed2dTCyHA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        <FiMapPin className="mr-2" /> Get Directions
      </a>
    </div>
  </div>
</section>

    </>
  );
}
