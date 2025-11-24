import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-royal-950 text-gray-400 py-20 border-t border-royal-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* About */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8 border-l-2 border-accent-500 pl-4">About the Memorial</h4>
            <p className="text-sm font-body leading-relaxed mb-4 text-gray-400">
              This digital archive serves to preserve the memory and teachings of Barrister Abdur Razzaq Siddiq. Maintained by the Siddiq Family and Foundation to inspire future generations of jurists.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8 border-l-2 border-accent-500 pl-4">Contact The Foundation</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-royal-900 rounded-full group-hover:bg-accent-600 transition-colors">
                    <MapPin size={16} className="text-accent-500 group-hover:text-white" />
                </div>
                <span className="mt-1">House 42, Road 7, Dhanmondi R/A<br/>Dhaka-1209, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-royal-900 rounded-full group-hover:bg-accent-600 transition-colors">
                    <Mail size={16} className="text-accent-500 group-hover:text-white" />
                </div>
                <span>contact@siddiqlegacy.org</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="p-2 bg-royal-900 rounded-full group-hover:bg-accent-600 transition-colors">
                    <Phone size={16} className="text-accent-500 group-hover:text-white" />
                 </div>
                <span>+880 2 9123456</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
             <h4 className="text-white font-serif text-xl mb-8 border-l-2 border-accent-500 pl-4">Quick Links</h4>
             <ul className="space-y-3 text-sm font-sans">
               <li><a href="#biography" className="hover:text-accent-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent-500 rounded-full"></span> Biography</a></li>
               <li><a href="#publications" className="hover:text-accent-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent-500 rounded-full"></span> Publications</a></li>
               <li><a href="#legacy" className="hover:text-accent-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent-500 rounded-full"></span> Scholarship Program</a></li>
               <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent-500 rounded-full"></span> Press Inquiries</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-royal-900 pt-8 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
           <p className="text-xs text-gray-500 mb-4 md:mb-0 font-sans tracking-wide">
             &copy; {new Date().getFullYear()} The Siddiq Family. All Rights Reserved.
           </p>
           <p className="text-xs text-gray-500 italic font-serif">
             Maintained in loving memory of Barrister Abdur Razzaq Siddiq.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;