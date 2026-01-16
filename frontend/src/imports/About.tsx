import imgHero from "../img/portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle.jpg";
import imgLogo from "../img/1767704136167.png";
import imgProfilePutih from "../img/profile putih.png";

interface AboutProps {
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

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="relative w-full min-h-[950px] bg-white overflow-x-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={imgHero} alt="" className="h-full w-full object-cover blur-[5px]" />

        {/* ✅ SHADOW REAL (código) */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.55)]" />
      </div>

      {/* Bottom dark box + text inside */}
      <div className="absolute left-[78px] top-[752px] h-[145px] w-[1292px] rounded-[20px] bg-black opacity-40" />
      <div className="absolute left-[78px] top-[752px] h-[145px] w-[1292px] rounded-[20px] px-8 py-6">
        <p className="text-justify text-[16px] leading-relaxed text-white">
          Secara konseptual, integrityimpact.id dirancang untuk mendukung pencapaian Tujuan Pembangunan
          Berkelanjutan (SDGs) serta visi Indonesia Emas 2045, khususnya dalam aspek pembangunan manusia,
          penguatan karakter generasi muda, dan pengentasan ketimpangan sosial. Melalui pendekatan berbasis
          digital, platform ini mendorong pemuda untuk berperan sebagai aktor perubahan yang beretika,
          bertanggung jawab, dan mampu menghasilkan solusi sosial yang berkelanjutan.
        </p>
      </div>

      {/* Logo */}
      <img src={imgLogo} alt="Logo" className="absolute left-[60px] top-[27px] w-[45px]" />

      <p className="absolute left-[115px] top-[35px] text-[24px] text-white">
        INTEGRITY IMPACT
      </p>

      {/* ✅ NAVIGATION (igual al Home) */}
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
      <img
        src={imgProfilePutih}
        alt="Profile"
        className="absolute right-[61px] top-[40px] h-[34px] w-[34px] cursor-pointer hover:opacity-80"
        onClick={() => onNavigate("profile")}
      />

      {/* Title */}
      <p className="absolute left-[1116px] top-[173px] text-[30px] text-white">
        LATAR BELAKANG
      </p>

      {/* ✅ Texto largo arriba */}
      <div className="absolute right-[71px] top-[240px] w-[847px] text-right text-[18px] leading-relaxed text-white">
        <p>
          Perkembangan teknologi digital membuka peluang besar bagi transformasi sosial yang lebih transparan,
          inklusif, dan berkelanjutan. Namun, banyak inisiatif pemberdayaan pemuda dan kewirausahaan sosial masih
          terjebak pada pendekatan konvensional yang berorientasi jangka pendek, minim transparansi, serta belum
          menjadikan integritas sebagai fondasi utama. Akibatnya, berbagai program sosial kehilangan keberlanjutan,
          kepercayaan publik, dan dampak nyata bagi masyarakat. Menjawab tantangan tersebut, gagasan integrityimpact.id
          hadir sebagai sebuah platform digital yang dirancang untuk membangun ekosistem kewirausahaan sosial pemuda
          berbasis integritas dan dampak sosial.
        </p>

        <br />
        <br />

        <p>
          <b>integrityimpact.id</b> merupakan platform terpadu yang menghubungkan pemuda, mentor, institusi pendidikan,
          komunitas lokal, serta pemangku kepentingan pendukung dalam satu sistem yang transparan dan akuntabel.
          Platform ini tidak hanya berfungsi sebagai media informasi, tetapi sebagai ruang pembinaan, inkubasi, dan
          monitoring wirausaha sosial pemuda secara berkelanjutan. Integritas ditempatkan sebagai modal utama, bukan
          sekadar nilai normatif, sehingga proses, tata kelola, dan dampak sosial menjadi indikator utama keberhasilan
          program.
        </p>
      </div>
    </div>
  );
}
