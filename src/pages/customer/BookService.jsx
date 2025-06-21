import React from 'react';

const BookService = () => {
    return (
        <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">Book a Service</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service</label>
                    <select id="service" name="service" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <option value="">Select a service</option>
                        <option value="laundry">Laundry</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="ironing">Ironing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input type="date" id="date" name="date" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </div>
                <div>
                    <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
                    <input type="time" id="time" name="time" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                </div>
                <div>
                    <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                    <textarea id="notes" name="notes" rows="3" placeholder="Any special instructions?" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition-all shadow">Book Now</button>
            </form>
        </div>
    );
};

export default BookService;