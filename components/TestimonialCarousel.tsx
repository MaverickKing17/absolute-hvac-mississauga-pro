
import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "David M.",
    location: "Streetsville",
    quote: "The team arrived within 2 hours of my emergency call. Professional, clean, and the heat pump installation was flawless. My energy bills have already dropped by 30%!",
    rating: 5
  },
  {
    name: "Linda G.",
    location: "Meadowvale",
    quote: "Absolute Heating helped us navigate the complex Enbridge rebates perfectly. We got our $7,100 check back exactly when they said we would. Incredible service!",
    rating: 5
  },
  {
    name: "Kevin J.",
    location: "Churchill Meadows",
    quote: "Highly recommended. They fixed our furnace in the middle of a blizzard when no one else would come out. They are true life savers and very fairly priced.",
    rating: 5
  },
  {
    name: "Priya S.",
    location: "Port Credit",
    quote: "Exceptional quality and transparency. They explained every step of the ductless AC installation. It's rare to find an HVAC company this honest nowadays.",
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="relative group">
      <div className="flex overflow-x-auto pb-10 gap-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="min-w-[300px] md:min-w-[420px] bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 snap-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
          >
            <div className="text-trust-blue mb-6">
              <svg className="w-12 h-12 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21V18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" />
              </svg>
            </div>
            
            <div className="flex text-yellow-400 mb-6 gap-1">
              {[...Array(t.rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow italic">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
              <div className="w-12 h-12 rounded-2xl trust-blue text-white flex items-center justify-center font-black text-xl shadow-lg">
                {t.name[0]}
              </div>
              <div>
                <p className="font-black text-trust-blue text-lg leading-none mb-1">{t.name}</p>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-emergency-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.location}, ON</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll indicator for UX */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="h-1.5 w-12 bg-trust-blue/10 rounded-full overflow-hidden">
          <div className="h-full bg-emergency-orange w-1/3 animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
