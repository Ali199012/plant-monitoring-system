import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-500 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-[32px] p-10 lg:p-16 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
            <h1 className="text-4xl font-bold text-[#222] mb-4">Get in Touch</h1>
            <p className="text-gray-500 mb-10 text-lg">Have a question about a plant or your ecosystem setup? Write to us.</p>
            
            <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">First Name</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5AB23A] focus:ring-1 focus:ring-[#5AB23A] transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5AB23A] focus:ring-1 focus:ring-[#5AB23A] transition-colors" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#5AB23A] focus:ring-1 focus:ring-[#5AB23A] transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full bg-[#5AB23A] hover:bg-[#4d9931] text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-[1.02] shadow-md">
                    Send Message
                </button>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
