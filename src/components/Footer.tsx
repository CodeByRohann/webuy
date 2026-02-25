
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-[#ffffff] pt-32 pb-16 overflow-hidden border-t border-gray-100">
            <div className="max-w-[76rem] mx-auto px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 mb-24 lg:mb-32">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex flex-col items-start gap-0.5 mb-8 cursor-pointer group w-fit">
                            <div className="flex items-end leading-none">
                                <span className="text-[42px] font-black tracking-tighter text-[#4A86BA] leading-none transition-transform duration-300 group-hover:scale-[1.02]">
                                    We
                                </span>
                                <span className="text-[42px] font-black tracking-tighter text-[#09090b] leading-none transition-transform duration-300 group-hover:scale-[1.02] relative">
                                    buy,
                                    {/* Small Monitor Icon attached to the 'y' */}
                                    <div className="absolute -top-3 -right-6 w-6 h-6 text-[#4A86BA]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                            <rect x="5" y="6" width="14" height="8" rx="1" ry="1" fill="currentColor" fillOpacity="0.2" />
                                        </svg>
                                    </div>
                                </span>
                            </div>
                            <span className="text-[12px] font-bold tracking-[0.05em] text-[#09090b] ml-0.5 uppercase">
                                Reliable IT Solutions
                            </span>
                        </div>
                        <p className="text-[#4b5563] text-[16px] font-light max-w-sm leading-[1.8] pr-4">
                            Your trusted local partner for selling used IT assets, laptops, desktops, and corporate equipment.
                        </p>
                        <div className="mt-8">
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-[15px] font-bold rounded-xl text-white bg-[#09090b] hover:bg-gray-800 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                                Contact Us Today
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="font-bold text-[#09090b] text-[15px] mb-8 tracking-tight">Contact Us</h4>
                        <ul className="space-y-5 text-[15px] text-[#4b5563] font-medium">
                            <li className="flex flex-col"><span className="text-gray-400 text-xs mb-1">Phone</span><a href="tel:+918957575798" className="hover:text-blue-600 transition-colors inline-block transform duration-300">+91 89575 75798</a></li>
                            <li className="flex flex-col"><span className="text-gray-400 text-xs mb-1">WhatsApp</span><a href="https://wa.me/918957575798" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors inline-block transform duration-300">+91 89575 75798</a></li>
                            <li className="flex flex-col"><span className="text-gray-400 text-xs mb-1">Email</span><a href="mailto:kalpesh.waghmare@gmail.com" className="hover:text-blue-600 transition-colors inline-block transform duration-300">kalpesh.waghmare@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="font-bold text-[#09090b] text-[15px] mb-8 tracking-tight">Business Hours</h4>
                        <ul className="space-y-5 text-[15px] text-[#4b5563] font-medium">
                            <li>Monday - Saturday</li>
                            <li className="text-[#09090b] font-bold">9:00 AM – 8:00 PM</li>
                            <li>Sunday Closed</li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="font-bold text-[#09090b] text-[15px] mb-8 tracking-tight">Location</h4>
                        <ul className="space-y-5 text-[15px] text-[#4b5563] font-medium">
                            <li>[Add City Name]</li>
                            <li>[Add Full Address]</li>
                            <li>India</li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-1">
                        <h4 className="font-bold text-[#09090b] text-[15px] mb-8 tracking-tight">Quick Links</h4>
                        <ul className="space-y-5 text-[15px] text-[#4b5563] font-medium">
                            <li><a href="#home" className="hover:text-blue- transition-colors hover:translate-x-1 inline-block transform duration-300">Home</a></li>
                            <li><a href="#services" className="hover:text-blue- transition-colors hover:translate-x-1 inline-block transform duration-300">Services</a></li>
                            <li><a href="#how-it-works" className="hover:text-blue- transition-colors hover:translate-x-1 inline-block transform duration-300">How It Works</a></li>
                            <li><a href="#clients" className="hover:text-blue- transition-colors hover:translate-x-1 inline-block transform duration-300">Clients</a></li>
                            <li><a href="#contact" className="hover:text-blue- transition-colors hover:translate-x-1 inline-block transform duration-300">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                        </span>
                        <span className="text-[14px] text-gray-500 font-bold tracking-tight">All systems operational</span>
                    </div>

                    <p className="text-[14px] text-gray-400 font-medium tracking-tight">
                        © {currentYear} WeBuy Tech. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-[14px] text-gray-500 font-bold tracking-tight">
                        <a href="#" className="hover:text-[#09090b] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#09090b] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#09090b] transition-colors">Security Overview</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
