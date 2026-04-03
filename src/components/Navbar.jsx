// import React, { useState, useEffect } from 'react';
// import { Home, FileText, User, Briefcase, Phone, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', icon: Home, href: '#home' },
//     { name: 'Projects', icon: Briefcase, href: '#projects' },
//     { name: 'About', icon: User, href: '#about' },
//     { name: 'Journey', icon: FileText, href: '#journey' }
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-[#10367D]/20'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a
//             href="#home"
//             className="text-2xl font-bold text-[#EBEBEB] hover:text-[#FFC800] transition-colors duration-300"
//           >
//             <span className="text-[#FFC800]">MD</span> Codes
//           </a>

//           {/* Desktop Navigation - Centered Icons */}
//           <div className="hidden md:flex items-center justify-center flex-1 mx-12">
//             <div className="flex items-center gap-3">
//               {navLinks.map((link, index) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="group relative"
//                   style={{
//                     animation: `slideDown 0.5s ease-out ${index * 0.1}s both`
//                   }}
//                 >
//                   <div className="w-12 h-12 rounded-full border-2 border-[#10367D] bg-black/50 backdrop-blur-sm flex items-center justify-center text-[#EBEBEB] hover:border-[#FFC800] hover:text-[#FFC800] hover:bg-[#10367D]/30 transition-all duration-300 relative overflow-hidden">
//                     {/* Glow effect on hover */}
//                     <div className="absolute inset-0 bg-[#FFC800]/0 group-hover:bg-[#FFC800]/10 transition-all duration-300"></div>
//                     <link.icon className="w-5 h-5 relative z-10" />
//                   </div>
//                   {/* Tooltip */}
//                   <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#EBEBEB] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     {link.name}
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Button */}
//           <a
//             href="#contact"
//             className="hidden md:block"
//             style={{ animation: 'slideDown 0.5s ease-out 0.4s both' }}
//           >
//             <div className="w-12 h-12 rounded-full bg-[#10367D] border-2 border-[#10367D] flex items-center justify-center text-[#EBEBEB] hover:bg-[#FFC800] hover:border-[#FFC800] hover:text-black transition-all duration-300 shadow-lg shadow-[#10367D]/50 hover:shadow-[#FFC800]/50">
//               <Phone className="w-5 h-5" />
//             </div>
//           </a>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-[#EBEBEB] hover:text-[#FFC800] transition-colors duration-300"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-500 ${
//             isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
//           }`}
//         >
//           <div className="flex flex-col space-y-3 pb-4">
//             {[...navLinks, { name: 'Contact', icon: Phone, href: '#contact' }].map((link, index) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="flex items-center gap-4 px-6 py-4 text-[#EBEBEB] hover:text-[#FFC800] bg-[#10367D]/20 hover:bg-[#10367D]/40 border border-[#10367D]/50 hover:border-[#FFC800]/50 rounded-full transition-all duration-300"
//                 style={{
//                   animation: isMobileMenuOpen
//                     ? `slideRight 0.3s ease-out ${index * 0.1}s both`
//                     : 'none'
//                 }}
//               >
//                 <div className="w-10 h-10 rounded-full bg-[#10367D]/50 flex items-center justify-center">
//                   <link.icon className="w-5 h-5" />
//                 </div>
//                 <span className="font-medium text-lg">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;