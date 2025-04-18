import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admission() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    preferredStartDate: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for your interest! We will contact you soon.');
        setFormData({
          parentName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          preferredStartDate: '',
          message: '',
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Error submitting the form. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Admission - Small Wonder Preschool</title>
        <meta name="description" content="Apply for admission to Small Wonder Preschool. Download our brochure and learn about our enrollment process." />
      </Head>

      <section className="bg-gradient-to-r from-yellow-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900">Admission</h1>
          <p className="mt-4 text-xl text-blue-700 max-w-2xl mx-auto">
            Join our Small Wonder family and give your child the best start in education.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="bg-yellow-100 p-6 rounded-xl shadow text-center border border-blue-200">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-700 mb-1">
                  {['Submit Application', 'Schedule Visit', 'Interview', 'Enrollment'][step - 1]}
                </h3>
                <p className="text-blue-600 text-sm">
                  {[
                    'Fill out our online application form below',
                    "We'll contact you to arrange a school tour",
                    "Meet with our staff to discuss your child's needs",
                    "Complete paperwork and prepare for your child's start"
                  ][step - 1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg md:flex overflow-hidden border border-blue-200">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Download Our Brochure</h2>
              <p className="text-blue-700 mb-6">
                Learn more about our programs, facilities, and educational approach in our detailed brochure.
              </p>
              <a
                href="/brochures/small-wonder-brochure.pdf"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow"
                download
              >
                Download Brochure (PDF)
              </a>
            </div>
            <div className="md:w-1/2 bg-blue-100 p-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Application Form</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-blue-200 space-y-6">
            {[ 'parentName', 'email', 'phone', 'childName', 'childAge', 'preferredStartDate' ].map((id, index) => {
              const labels = [
                'Parent/Guardian Name *',
                'Email Address *',
                'Phone Number *',
                "Child's Name *",
                "Child's Age *",
                'Preferred Start Date'
              ];
              const types = ['text', 'email', 'tel', 'text', 'text', 'date'];
              const placeholders = [undefined, undefined, undefined, undefined, 'e.g., 3 years, 6 months', undefined];
              return (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-blue-700 mb-1">{labels[index]}</label>
                  <input
                    type={types[index]}
                    id={id}
                    name={id}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    placeholder={placeholders[index]}
                    required={labels[index].includes('*')}
                    className="w-full px-4 py-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900 bg-white"
                  />
                </div>
              );
            })}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific requirements or questions you have"
                className="w-full px-4 py-2 rounded-md border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-900 bg-white"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              ['What age groups do you accept?', 'We accept children between the ages of 2 to 5 years old.'],
              ['What are your operating hours?', 'Our preschool operates Monday through Friday, from 8:00 AM to 3:00 PM. Extended care options are available.'],
              ['Do you provide meals?', 'Yes, we provide healthy snacks and lunch options. Parents can also pack meals for their children if preferred.'],
              ['What is your teacher-to-child ratio?', 'We maintain a ratio of 1:8 for our preschool classes, ensuring personalized attention for each child.']
            ].map(([question, answer], i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800">{question}</h3>
                <p className="text-blue-700 mt-2">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
