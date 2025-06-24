import React, { useState } from 'react';

const services = [
  {
    name: 'Laundry',
    description: 'Quick and fresh laundry service.',
    icon: '🧺',
  },
  {
    name: 'Dry Cleaning',
    description: 'Professional dry cleaning for delicate clothes.',
    icon: '🧼',
  },
  {
    name: 'Ironing',
    description: 'Crisp and clean ironing service.',
    icon: '🧳',
  },
];

const BookService = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen px-4 pt-24 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Choose a Service</h1>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => handleServiceClick(service.name)}
              className={`cursor-pointer bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300 border ${
                selectedService === service.name ? 'border-indigo-600 ring-2 ring-indigo-300' : 'border-gray-200'
              }`}
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Form */}
        {selectedService && (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Book {selectedService}
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Any special instructions?"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-all shadow"
              >
                Book {selectedService}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookService;
