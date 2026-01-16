import React from "react";

import imgHero from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";
import imgLogo from "../img/1767704136167.png";
import imgProfilePutih from "../img/profile putih.png";

import ImpactMap from "../components/ImpactMap";

interface ImpactDashboardProps {
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
  ) => void;
}

export default function ImpactDashboard({ onNavigate }: ImpactDashboardProps) {
  return (
    <div
      className="relative w-full min-h-[950px] bg-white overflow-x-hidden"
      data-name="Impact Dashboard"
    >
      {/* ✅ Background + SHADOW REAL (igual al Home) */}
      <div className="absolute inset-x-0 top-0 h-[921px]">
        <img src={imgHero} alt="" className="h-full w-full object-cover blur-[5px]" />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* ✅ TOP BAR (como estaba antes) */}
      {/* LOGO */}
      <div className="absolute left-[60px] top-[27px] h-[55px] w-[45px]">
        <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" />
      </div>

      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>

      {/* ✅ NAVBAR (como estaba antes) */}
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
        <span onClick={() => onNavigate("daftar")} className="cursor-pointer hover:opacity-80">
          Daftar
        </span>
      </nav>

      {/* PROFILE */}
      <div
        className="absolute right-[61px] top-[40px] h-[34px] w-[34px] cursor-pointer hover:opacity-80"
        onClick={() => onNavigate("profile")}
      >
        <img src={imgProfilePutih} alt="Profile" className="h-full w-full object-cover" />
      </div>

      {/* ✅ TITLE CENTRADO */}
      <p className="absolute left-1/2 top-[137px] -translate-x-1/2 text-[30px] text-white">
        IMPACT DASHBOARD
      </p>

      {/* ✅ LINEA CENTRADA */}
      <div className="absolute left-1/2 top-[187px] h-0 w-[298px] -translate-x-1/2">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 1">
            <path d="M0 0.5H298" stroke="white" />
          </svg>
        </div>
      </div>

      {/* ✅ TODO LO DEL CENTRO CENTRADO (sin tocar navbar/top) */}
      {/* Este “canvas” de 1440px se centra; tus left/top internos quedan igual */}
      <div className="absolute left-1/2 top-0 w-[1440px] -translate-x-1/2">
        {/* Text blocks */}
        <p className="absolute left-[83px] top-[328px] text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          JUMLAH PESERTA
        </p>

        <p className="absolute left-[101px] top-[519px] text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          PROYEK AKTIF
        </p>

        <p className="absolute left-[547px] top-[304px] text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          SEBARAN WILAYAH TERDAMPAK
        </p>

        <p className="absolute left-[1201px] top-[304px] text-[22px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          ISU SOSIAL
        </p>

        <div className="absolute left-[1142px] top-[374px] h-[52px] w-[236px] rounded-[25px] border-[3px] border-solid border-[#932a21] bg-gradient-to-r from-[#942a21] to-[#59140e]" />
        <p className="absolute left-[1167px] top-[385px] text-[18px] text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          Lapangan Pekerjaan
        </p>

        <p className="absolute left-[127px] top-[345px] w-[103px] text-[100px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          10
        </p>

        <p className="absolute left-[127px] top-[543px] w-[103px] text-[100px] font-bold text-white [text-shadow:4px_4px_4px_rgba(0,0,0,0.25)]">
          10
        </p>

        {/* ✅ MAPA (en el mismo lugar, pero centrado por el wrapper) */}
        <div className="absolute left-[358px] top-[395px] h-[303px] w-[742px] flex items-center justify-center">
          <ImpactMap />
        </div>
      </div>
    </div>
  );
}
