import imgHero from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";
import imgProblemSymbol from "../img/problem symbol.png";
import imgCardImage from "../img/1.png";
import imgLogo from "../img/1767704136167.png";
import imgProfilePutih from "../img/profile putih.png";

interface HomeProps {
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

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative w-full min-h-[1650px] overflow-x-hidden bg-white">
      {/* HERO */}
      <div className="absolute inset-x-0 top-0 h-[921px]">
        <img
          src={imgHero}
          alt="Hero"
          className="h-full w-full object-cover object-center blur-[5px]"
        />

        {/* SHADOW REAL (código) */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* WHITE BOTTOM PANEL */}
      <div className="absolute left-0 right-0 top-[853px] h-[752px] rounded-[50px] bg-white" />

      {/* LOGO */}
      <div className="absolute left-[60px] top-[27px] h-[55px] w-[45px]">
        <img src={imgLogo} alt="Logo" className="h-full w-full object-contain" />
      </div>

      {/* TITLE */}
      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>

      {/* NAVIGATION */}
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

      {/* PROFILE ICON */}
      <div
        onClick={() => onNavigate("profile")}
        className="absolute right-[61px] top-[40px] h-[34px] w-[34px] cursor-pointer hover:opacity-80"
      >
        <img src={imgProfilePutih} alt="Profile" className="h-full w-full object-cover" />
      </div>

      {/* TEXT + BUTTONS (alineados al inicio del texto) */}
      <div className="absolute right-[925px] top-[221px] w-[847px] translate-x-[100%] text-white">
        <div className="text-[18px] leading-relaxed">
          <p>
            integrityimpact.id merupakan platform terpadu yang menghubungkan pemuda, mentor, institusi pendidikan, komunitas lokal, serta pemangku kepentingan pendukung dalam satu sistem yang transparan dan akuntabel. Platform ini tidak hanya berfungsi sebagai media informasi, tetapi sebagai ruang pembinaan, inkubasi, dan monitoring wirausaha sosial pemuda secara berkelanjutan. Integritas ditempatkan sebagai modal utama, bukan sekadar nilai normatif, sehingga proses, tata kelola, dan dampak sosial menjadi indikator utama keberhasilan program. 
          </p>
          <br />
          <p>
            Secara konseptual, integrityimpact.id dirancang untuk mendukung pencapaian Tujuan Pembangunan Berkelanjutan (SDGs) serta visi Indonesia Emas 2045, khususnya dalam aspek pembangunan manusia, penguatan karakter generasi muda, dan pengentasan ketimpangan sosial. Melalui pendekatan berbasis digital, platform ini mendorong pemuda untuk berperan sebagai aktor perubahan yang beretika, bertanggung jawab, dan mampu menghasilkan solusi sosial yang berkelanjutan.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
          <button
            onClick={() => onNavigate("daftar")}
            className="h-[45px] w-[177px] rounded-full border-2 border-white text-white hover:opacity-80"
          >
            Daftar Pemuda
          </button>

          <button
            onClick={() => onNavigate("daftarmentor")}
            className="h-[45px] w-[138px] rounded-full border-2 border-white text-white hover:opacity-80"
          >
            Jadi Mentor
          </button>

          <button className="h-[45px] w-[189px] rounded-full border-2 border-white text-white hover:opacity-80">
            Dukung Program
          </button>
        </div>
      </div>

      {/* ✅ TITULO: PERMASALAHAN SOSIAL con tu imagen problem symbol.png */}
      <div className="absolute left-[124px] top-[860px] flex items-center gap-4">
        <div className="flex h-[48px] w-[48px] items-center justify-center">
          <img
            src={imgProblemSymbol}
            alt="Problem Symbol"
            className="h-[44px] w-[44px] object-contain"
          />
        </div>

        <h2 className="text-[40px] font-medium tracking-wide text-black">
          PERMASALAHAN SOSIAL
        </h2>
      </div>

      {/* CARD */}
      <div
        className="
          absolute top-[932px]
          left-1/2 -translate-x-1/2
          sm:left-[124px] sm:translate-x-0
          w-[92%] max-w-[362px]
          overflow-hidden rounded-[28px] bg-white
          shadow-[10px_10px_30px_rgba(0,0,0,0.10)]
        "
      >
        <div className="h-[200px] w-full overflow-hidden">
          <img src={imgCardImage} alt="Card" className="h-full w-full object-cover" />
        </div>

        <div className="bg-[#ffed25] px-4 py-3">
          <p className="text-center text-[26px] font-semibold tracking-wide text-black">
            LAPANGAN PEKERJAAN
          </p>
        </div>

        <div className="px-6 pb-5 pt-5">
          <p className="text-[26px] font-semibold text-black">Solusi:</p>

          <p className="mt-3 text-[15px] leading-relaxed text-black/70 line-clamp-4">
            Lorem ipsum lorem ipsum lorem sir dolor ipsum Lorem sir ipsum lorem sir ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum sir dolor. Lorem ipsum lorem ipsum lorem sir dolor
            Lorem ipsum lorem ipsum lorem ipsum sir dolor lorem ipsum sir dolor amet.
          </p>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="text-[16px] font-medium text-[#00A3FF] hover:underline"
            >
              Baca selengkapnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
