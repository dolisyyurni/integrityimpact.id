import { useState } from "react";
import imgBatikPattern from "../img/batik pattern.png";
import imgLogo from "../img/1767704136167.png";


interface BuatAkun2Props {
  onNavigate: (
    page:
      | 'home'
      | 'about'
      | 'journey'
      | 'projects'
      | 'dashboard'
      | 'collaborate'
      | 'insight'
      | 'daftar'
      | 'register'
      | 'register2'
      | 'register3'
      | 'profile'
  ) => void;
}

export default function BuatAkun2({ onNavigate }: BuatAkun2Props) {
  const [minatSosial, setMinatSosial] = useState('');
  const [gagasanProyek, setGagasanProyek] = useState('');

  const handleSubmit = () => {
    console.log('Form data step 2:', { minatSosial, gagasanProyek });
    onNavigate('register3');
  };

  return (
    <div className="relative w-full min-h-screen bg-[#b7d43b]">
      {/* Batik background */}
      <img
        src={imgBatikPattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Card */}
      <div className="relative mx-auto mt-[153px] w-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)] p-[60px]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img src={imgLogo} alt="Logo" className="w-[58px]" />
          <h1 className="text-[40px]">DAFTAR PEMUDA</h1>
        </div>

        <p
          className="text-[18px] mb-6 cursor-pointer hover:opacity-80"
          onClick={() => onNavigate('register')}
        >
          ← Kembali
        </p>

        {/* Form */}
        <div className="space-y-8">
          <div>
            <label className="block text-[22px] mb-2">Minat Sosial</label>
            <textarea
              value={minatSosial}
              onChange={(e) => setMinatSosial(e.target.value)}
              placeholder="Contoh: Pendidikan, Kesehatan, Lingkungan, dll."
              className="w-full h-[120px] rounded-[11px] bg-[#e8e8e8] p-4 resize-none"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">
              Gagasan Awal Proyek
            </label>
            <textarea
              value={gagasanProyek}
              onChange={(e) => setGagasanProyek(e.target.value)}
              placeholder="Jelaskan gagasan awal proyek Anda..."
              className="w-full h-[206px] rounded-[11px] bg-[#e8e8e8] p-4 resize-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-[#79a932] text-white text-[25px] px-12 py-3 rounded-[28.5px] hover:opacity-90"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
