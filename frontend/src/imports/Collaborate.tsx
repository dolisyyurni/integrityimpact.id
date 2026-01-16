import React from "react";

import imgHero from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";
import imgLogo from "../img/1767704136167.png";
import img12 from "../img/1-1.png"; // icono lupa

import img2 from "../img/2.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img3 from "../img/3.png";

import imgProfilePutih from "../img/profile putih.png";

interface CollaborateProps {
  onNavigate: (
    page:
      | "home"
      | "about"
      | "journey"
      | "projects"
      | "dashboard"
      | "collaborate"
      | "insight"
      | "daftar"
      | "register2"
      | "register3"
      | "profile"
      | "daftarmentor"
      | "registermentor"
      | "registermentor2"
      | "profilementor"
  ) => void;
}

export default function Collaborate({ onNavigate }: CollaborateProps) {
  return (
    <div className="relative w-full min-h-[950px] overflow-x-hidden bg-white">

      <div className="absolute inset-x-0 top-0 h-[921px]">
        <img
          src={imgHero}
          alt=""
          className="h-full w-full object-cover object-center blur-[5px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* LOGO */}
      <div className="absolute left-[60px] top-[27px] h-[55px] w-[45px]">
        <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" />
      </div>

      {/* BRAND */}
      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>


      <nav className="absolute left-[580px] top-[42px] hidden gap-6 text-white lg:flex">
        <span onClick={() => onNavigate("home")} className="cursor-pointer hover:opacity-80">
          Home
        </span>
        <span onClick={() => onNavigate("about")} className="cursor-pointer hover:opacity-80">
          About
        </span>
        <span onClick={() => onNavigate("journey")} className="cursor-pointer hover:opacity-80">
          Journey
        </span>
        <span onClick={() => onNavigate("projects")} className="cursor-pointer hover:opacity-80">
          Projects
        </span>
        <span onClick={() => onNavigate("dashboard")} className="cursor-pointer hover:opacity-80">
          Impact Dashboard
        </span>
        <span onClick={() => onNavigate("collaborate")} className="cursor-pointer hover:opacity-80">
          Collaborate
        </span>
        <span onClick={() => onNavigate("insight")} className="cursor-pointer hover:opacity-80">
          Insight
        </span>
      </nav>

      {/* PROFILE */}
      <div
        className="absolute right-[61px] top-[40px] h-[34px] w-[34px] cursor-pointer hover:opacity-80"
        onClick={() => onNavigate("profile")}
      >
        <img src={imgProfilePutih} alt="Profile" className="h-full w-full object-cover" />
      </div>


      <p
        className="absolute left-1/2 top-[141px] -translate-x-1/2 text-[30px] text-white font-['Hannari:Regular','Noto_Sans:Regular',sans-serif]"
        style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
      >
        COLLABORATE
      </p>


      <div className="absolute left-1/2 top-[192px] -translate-x-1/2 w-[205px]">
        <svg className="block w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205 1">
          <path d="M0 0.5H205" stroke="white" />
        </svg>
      </div>


      <div className="absolute left-1/2 top-[229px] -translate-x-1/2 w-[1320px] max-w-[92vw]">
        <div className="flex h-[50px] w-full items-center rounded-full bg-white px-6">
          <p className="font-['Poppins:Regular',sans-serif] text-[15px] text-[#c2c2c2]">
            Cari mentor, institusi pendidikan, sektor swasta, atau organisasi sosial
          </p>

          <div className="ml-auto h-[28px] w-[30px]">
            <img alt="" className="h-full w-full object-cover" src={img12} />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[368px] -translate-x-1/2 w-[1200px] max-w-[92vw]">
        <div className="grid grid-cols-4 gap-[64px]">
          <div className="justify-self-center h-[210px] w-[220px]">
            <img alt="" className="h-full w-full object-cover" src={img2} />
          </div>

          <div className="justify-self-center h-[202px] w-[219px]">
            <img alt="" className="h-full w-full object-cover" src={img4} />
          </div>

          <div className="justify-self-center h-[207px] w-[219px]">
            <img alt="" className="h-full w-full object-cover" src={img5} />
          </div>

          <div className="justify-self-center h-[216px] w-[224px]">
            <img alt="" className="h-full w-full object-cover" src={img3} />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[605px] -translate-x-1/2 w-[1200px] max-w-[92vw]">
        <div className="grid grid-cols-4 gap-[64px]">
          <p className="justify-self-center w-[220px] text-center text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
            MENTOR
          </p>
          <p className="justify-self-center w-[219px] text-center text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
            INSTITUSI PENDIDIKAN
          </p>
          <p className="justify-self-center w-[219px] text-center text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
            SEKTOR SWASTA
          </p>
          <p className="justify-self-center w-[224px] text-center text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
            ORGANISASI SOSIAL
          </p>
        </div>
      </div>

     
      <div className="absolute left-1/2 top-[709px] -translate-x-1/2">
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => onNavigate("daftarmentor")}
            className="h-[45px] w-[138px] rounded-full border-2 border-white bg-transparent font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] text-[18px] text-white hover:opacity-90"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          >
            Jadi Mentor
          </button>

          <button
            type="button"
            className="h-[45px] w-[189px] rounded-full border-2 border-white bg-transparent font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] text-[18px] text-white hover:opacity-90"
            style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}
          >
            Dukung Program
          </button>
        </div>
      </div>
    </div>
  );
}
