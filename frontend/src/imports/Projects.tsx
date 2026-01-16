import imgHero from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";
import imgLogo from "../img/1767704136167.png";
import imgOip1 from "../img/1.png";
import imgProfilePutih from "../img/profile putih.png";

interface ProjectsProps {
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

export default function Projects({ onNavigate }: ProjectsProps) {
  return (
    <div className="relative w-full min-h-[950px] bg-white overflow-x-hidden" data-name="Projects">
      {/* ✅ Background + SHADOW REAL (igual al Home) */}
      <div className="absolute inset-x-0 top-0 h-[921px]">
        <img src={imgHero} alt="" className="h-full w-full object-cover blur-[5px]" />

        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* LOGO */}
      <div className="absolute left-[60px] top-[27px] h-[55px] w-[45px]">
        <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" />
      </div>

      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>

      {/* ✅ NAVBAR (igual al Home) */}
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

      {/* Title */}
      <p className="absolute left-[calc(50%-99px)] top-[137px] text-[30px] text-white">
        IMPACT PROJECTS
      </p>

      <div className="absolute left-[621px] top-[188.5px] h-0 w-[254px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 1">
            <path d="M0 0.5H254" stroke="white" />
          </svg>
        </div>
      </div>

      {/* Card */}
      <div className="absolute left-[212px] top-[227px] h-[550px] w-[1070px] rounded-[20px] bg-white shadow-[10px_10px_30px_rgba(0,0,0,0.10)]" />

      {/* Header image */}
      <div className="absolute left-[212px] top-[227px] h-[245px] w-[1070px] overflow-hidden rounded-[20px]">
        <img src={imgOip1} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Yellow bar */}
      <div className="absolute left-[212px] top-[423px] h-[49px] w-[1070px] bg-[#ffed25]" />

      <p className="absolute left-[748.5px] top-[431px] translate-x-[-50%] text-center text-[22px] text-black">
        KURANGNYA LAPANGAN PEKERJAAN
      </p>

      <p className="absolute left-[231px] top-[488px] text-[18px] font-bold text-black">Solusi:</p>
      <p className="absolute left-[232px] top-[590px] text-[18px] font-bold text-black">Wilayah Dampak:</p>
      <p className="absolute left-[232px] top-[650px] text-[18px] font-bold text-black">Capaian Sementara:</p>

      <p className="absolute left-[232px] top-[518px] w-[1012px] text-[13px] text-black">
        {`Lorem ipsum lorem ipsum lorem sir dolor ipsum Lorem sir ipsum lorem sir ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum  sir dolor.  Lorem ipsum lorem ipsum lorem sir dolor Lorem ipsum lorem ipsum lorem ipsum  sir dolor lorem ipsum sir dolor amet. Lorem ipsum lorem ipsum lorem sir dolor ipsum Lorem sir ipsum lorem sir ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum  sir dolor.  Lorem ipsum lorem ipsum lorem sir dolor Lorem ipsum lorem ipsum lorem ipsum  sir dolor lorem ipsum sir dolor amet. `}
      </p>

      <p className="absolute left-[233px] top-[620px] w-[1012px] text-[13px] text-black">
        Desa Sumber Sari
      </p>

      <p className="absolute left-[233px] top-[680px] w-[1012px] text-[13px] text-black">
        {`Lorem ipsum lorem ipsum lorem sir dolor ipsum Lorem sir ipsum lorem sir ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum  sir dolor.  Lorem ipsum lorem ipsum lorem sir dolor Lorem ipsum lorem ipsum lorem ipsum  sir dolor lorem ipsum sir dolor amet. Lorem ipsum lorem ipsum lorem sir dolor ipsum Lorem sir ipsum lorem sir ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum  sir dolor.  Lorem ipsum lorem ipsum lorem sir dolor Lorem ipsum lorem ipsum lorem ipsum  sir dolor lorem ipsum sir dolor amet. `}
      </p>
    </div>
  );
}
