// import React from "react";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaXTwitter,
//   FaInstagram,
//   FaEnvelope,
//   FaWhatsapp,
//   FaHouse,
//   FaFolderOpen,
//   FaUser,
//   FaNewspaper,
// } from "react-icons/fa6";

// const socials = [
//   { icon: FaGithub, link: "https://github.com/doyinsola-coder" },
//   { icon: FaLinkedin, link: "https://linkedin.com/in/mdcodes" },
//   { icon: FaXTwitter, link: "https://x.com/md_codes_" },
//   { icon: FaInstagram, link: "https://instagram.com/md_codes_" },
//   { icon: FaEnvelope, link: "mailto:abdulateefabdulmubeen0@gmail.com" },
// ];

// const nav = [
//   { name: "Home", icon: FaHouse, link: "#home" },
//   { name: "Projects", icon: FaFolderOpen, link: "#projects" },
//   { name: "About", icon: FaUser, link: "#about" },
//   { name: "Journey", icon: FaNewspaper, link: "#journey" },
// ];

// export default function ContactFooter() {
//   return (
//     <section id="contact" className="relative w-full px-4 sm:px-6 py-16 sm:py-24 bg-black overflow-hidden">
//       {/* Background waves */}
//       <div className="absolute inset-0 opacity-20">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute h-full"
//             style={{
//               left: `${i * 6.66}%`,
//               width: '2px',
//               background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
//               animation: `wave ${3 + i * 0.15}s ease-in-out infinite`,
//               animationDelay: `${i * 0.15}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//         {/* LEFT CARD */}
//         <div
//           className="col-span-2 rounded-3xl bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 p-6 sm:p-10 hover:border-[#FFC800]/50 transition-all duration-500 relative group"
//           style={{ animation: 'fadeInUp 0.8s ease-out' }}
//         >
//           <div className="flex items-center gap-3 mb-6">
//             <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-pulse" />
//             <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-[#EBEBEB]">Let's Connect</h2>
//           </div>

//           <p className="text-sm sm:text-base text-[#EBEBEB]/70 mb-8 sm:mb-10">
//             Feel free to reach out for collaborations, inquiries, or just to say hello!
//           </p>

//           <div className="flex gap-3 sm:gap-4 flex-wrap mb-8">
//             {socials.map((item, i) => (
//               <a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#10367D]/30 border-2 border-[#10367D] flex items-center justify-center text-[#EBEBEB] hover:border-[#FFC800] hover:text-[#FFC800] hover:bg-[#10367D]/50 transition-all duration-300 hover:scale-110"
//               >
//                 <item.icon size={20} />
//               </a>
//             ))}
//           </div>

//           {/* WhatsApp button */}
//           <a
//             href="https://wa.me/2349035667678"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FFC800] text-black font-semibold rounded-full hover:bg-[#10367D] hover:text-[#FFC800] transition-all duration-300 shadow-lg shadow-[#FFC800]/50 hover:shadow-[#10367D]/50"
//           >
//             <FaWhatsapp size={20} />
//             Message on WhatsApp
//           </a>

//           <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC800] via-[#10367D] to-[#FFC800] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
//         </div>

//         {/* RIGHT CARD */}
//         <div
//           className="rounded-3xl bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 p-6 sm:p-10 hover:border-[#FFC800]/50 transition-all duration-500 relative group"
//           style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
//         >
//           <p className="text-xs uppercase tracking-widest text-[#FFC800] mb-6">
//             Navigation
//           </p>

//           <ul className="space-y-4 sm:space-y-5">
//             {nav.map((item, i) => (
//               <li key={i}>
//                 <a
//                   href={item.link}
//                   className="flex items-center gap-3 text-[#EBEBEB]/70 hover:text-[#FFC800] transition-all duration-300 group/link"
//                 >
//                   <item.icon size={16} className="group-hover/link:scale-110 transition-transform" />
//                   <span className="text-sm sm:text-base">{item.name}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC800] via-[#10367D] to-[#FFC800] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
//         </div>
//       </div>

//       {/* FOOTER BAR */}
//       <div
//         className="relative z-10 mt-12 sm:mt-20 mx-auto max-w-6xl rounded-full bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-[#FFC800]/50 transition-all duration-500"
//         style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
//       >
//         <p className="text-xs sm:text-sm text-[#EBEBEB]/70">
//           © {new Date().getFullYear()} MD Codes — Handcrafted by Abdulmubeen
//         </p>

//         <div className="flex items-center gap-3 text-xs sm:text-sm">
//           <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-pulse" />
//           <span className="uppercase tracking-wider text-[#FFC800] font-semibold">
//             Status: Available
//           </span>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes wave {
//           0%, 100% {
//             transform: scaleY(1);
//           }
//           50% {
//             transform: scaleY(1.5);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }