import { useState } from "react";

import imgLogo from "../img/1767704136167.png";
import imgStep1 from "../img/1-1.png";
import imgProfilePutih from "../img/profile putih.png";

interface ProfilDanDashboardPemudaProps {
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
      | "register"
      | "register2"
      | "register3"
      | "profile"
  ) => void;
}

export default function ProfilDanDashboardPemuda({
  onNavigate,
}: ProfilDanDashboardPemudaProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    namaLengkap: "",
    tanggalLahir: "",
    jenisKelamin: "",
    pendidikanTerakhir: "",
    minatSosial: "",
    gagasanProyek: "",
  });

  const [refleksiPembelajaran, setRefleksiPembelajaran] = useState("");
  const [progressProyek, setProgressProyek] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div className="bg-white relative w-full min-h-[2000px]">

      {/* LOGO */}
      <div className="absolute h-[55px] left-[60px] top-[55px] w-[45px]">
        <img
          src={imgLogo}
          alt="Integrity Impact Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <p className="absolute left-[115px] top-[63px] text-[24px] text-black">
        INTEGRITY IMPACT
      </p>

      {/* FORM */}
      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        placeholder="email@example.com"
        className="absolute top-[349px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        placeholder="••••••••"
        className="absolute top-[496px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="text"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
        placeholder="Username"
        className="absolute top-[650px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="text"
        value={formData.namaLengkap}
        onChange={(e) =>
          setFormData({ ...formData, namaLengkap: e.target.value })
        }
        placeholder="Nama Lengkap"
        className="absolute top-[797px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="date"
        value={formData.tanggalLahir}
        onChange={(e) =>
          setFormData({ ...formData, tanggalLahir: e.target.value })
        }
        className="absolute top-[944px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <select
        value={formData.jenisKelamin}
        onChange={(e) =>
          setFormData({ ...formData, jenisKelamin: e.target.value })
        }
        className="absolute top-[1091px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      >
        <option value="">Pilih Jenis Kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>

      {/* DASHBOARD VISUAL */}
      <div className="absolute left-[1016px] top-[1057px] w-[157px] h-[138px]">
        <img
          src={imgStep1}
          alt="Tahap Program"
          className="w-full h-full object-contain"
        />
      </div>

      <p className="absolute left-[1097px] top-[1196px] text-[15px] text-black text-center w-[154px]">
        PEMETAAN INTEGRITAS AWAL
      </p>

      {/* NAVIGATION */}
      <div
        className="absolute right-[61px] top-[65px] w-[34px] h-[34px] cursor-pointer"
        onClick={() => onNavigate("profile")}
      >
        <img
          src={imgProfilePutih}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
