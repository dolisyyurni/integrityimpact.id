import React from "react";

import imgPortraitYoungManToplessUseBambooFishingTrapCatchFishCookingAsianYoungFarmerManRuralLifestyle2 from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";

import img11 from "../img/1.png";     // Pemetaan Integritas Awal
import img21 from "../img/2-1.png";   // Pembinaan Karakter dan Etika Publik
import img31 from "../img/3-1.png";   // Inkubasi Wirausaha Sosial
import img41 from "../img/4-1.png";   // Pendanaan Berbasis Dampak
import img51 from "../img/5-1.png";   // Monitoring dan Evaluasi Terbuka
import img6365 from "../img/6.png";   // Replikasi & Regenerasi Kepemimpinan

import imgArrow1 from "../img/arrow.png";
import imgLogo from "../img/1767704136167.png";
import imgProfilePutih2 from "../img/profile putih.png";

interface ImpactJourneyProps {
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

function Step({
  icon,
  lines,
}: {
  icon: string;
  lines: string[];
}) {
  return (
    <div className="flex w-[260px] flex-col items-center">
      <img src={icon} alt="" className="h-[150px] w-[150px] object-contain" />
      <p className="mt-5 text-center text-[16px] tracking-wide text-white leading-snug">
        {lines.map((t, i) => (
          <span key={i} className="block">
            {t}
          </span>
        ))}
      </p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex w-[70px] justify-center pt-[55px]">
      <img src={imgArrow1} alt="" className="w-[56px]" />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="flex w-[70px] justify-center pt-[55px]">
      <img src={imgArrow1} alt="" className="w-[56px] rotate-180" />
    </div>
  );
}

export default function ImpactJourney({ onNavigate }: ImpactJourneyProps) {
  return (
    <div className="relative w-full min-h-[1200px] overflow-x-hidden bg-white">
      {/* Background + shadow real (igual Home) */}
      <div className="absolute inset-0">
        <img
          src={imgPortraitYoungManToplessUseBambooFishingTrapCatchFishCookingAsianYoungFarmerManRuralLifestyle2}
          alt=""
          className="h-full w-full object-cover blur-[5px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Header */}
      <div className="absolute left-[60px] top-[27px] h-[55px] w-[45px]">
        <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" />
      </div>

      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>

      {/* NAVIGATION (igual al Home) */}
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

      {/* Profile */}
      <div
        className="absolute right-[61px] top-[40px] h-[34px] w-[34px] cursor-pointer hover:opacity-80"
        onClick={() => onNavigate("profile")}
      >
        <img src={imgProfilePutih2} alt="Profile" className="h-full w-full object-cover" />
      </div>

      {/* CENTER CONTENT (como la imagen) */}
      <div className="absolute left-1/2 top-[120px] w-[980px] max-w-[92%] -translate-x-1/2 text-white">
        {/* Title block */}
        <div className="text-center">
          <p className="text-[26px] tracking-wider">IMPACT JOURNEY</p>
          <div className="mx-auto mt-2 h-px w-[220px] bg-white/70" />
          <p className="mt-2 text-[16px] font-light">Alur Program</p>
          <div className="mx-auto mt-2 h-px w-[140px] bg-white/70" />
        </div>

        {/* Flow */}
        <div className="mt-14">
          {/* Top row: left -> center -> right */}
          <div className="grid grid-cols-[260px_70px_260px_70px_260px] items-start justify-center">
            <Step
              icon={img11}
              lines={["PEMETAAN INTEGRITAS", "AWAL"]}
            />
            <ArrowRight />
            <Step
              icon={img21}
              lines={["PEMBINAAN KARAKTER", "DAN ETIKA PUBLIK"]}
            />
            <ArrowRight />
            <Step
              icon={img31}
              lines={["INKUBASI WIRAUSAHA", "SOSIAL"]}
            />
          </div>

          {/* Down arrow (from top-right to bottom-right) */}
          <div className="grid grid-cols-[260px_70px_260px_70px_260px]">
            <div className="col-start-5 flex justify-center py-6">
              <img src={imgArrow1} alt="" className="w-[56px] rotate-90" />
            </div>
          </div>

          {/* Bottom row: right -> center -> left (arrows pointing left) */}
          <div className="grid grid-cols-[260px_70px_260px_70px_260px] items-start justify-center">
            <Step
              icon={img6365}
              lines={["REPLIKASI DAN", "REGENERASI", "KEPEMIMPINAN"]}
            />
            <ArrowLeft />
            <Step
              icon={img51}
              lines={["MONITORING DAN", "EVALUASI TERBUKA"]}
            />
            <ArrowLeft />
            <Step
              icon={img41}
              lines={["PENDANAAN BERBASIS", "DAMPAK"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
