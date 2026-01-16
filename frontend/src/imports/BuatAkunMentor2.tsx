import { useState } from 'react';
import imgBatikPattern from '../img/batik pattern.png';
import imgLogo from '../img/1767704136167.png';

interface BuatAkunMentor2Props {
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
      | 'register2'
      | 'register3'
      | 'profile'
      | 'daftarmentor'
      | 'registermentor'
      | 'registermentor2'
      | 'profilementor'
  ) => void;
}

export default function BuatAkunMentor2({
  onNavigate
}: BuatAkunMentor2Props) {
  const [minatSosial, setMinatSosial] = useState('');

  const handleFinish = () => {
    if (!minatSosial.trim()) {
      alert('Mohon isi Minat Sosial');
      return;
    }

    alert('Registrasi berhasil! Akun Mentor telah dibuat.');
    onNavigate('profilementor');
  };

  return (
    <div className="relative w-full min-h-screen bg-[#b7d43b]">
      {/* Background */}
      <img
        src={imgBatikPattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Card */}
      <div className="relative mx-auto mt-[153px] w-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)] p-[60px]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <img src={imgLogo} alt="Logo" className="w-[58px]" />
          <h1 className="text-[40px]">DAFTAR MENTOR</h1>
        </div>

        {/* Label */}
        <label className="block text-[22px] mb-3">
          Minat Sosial
        </label>

        {/* Textarea */}
        <textarea
          value={minatSosial}
          onChange={(e) => setMinatSosial(e.target.value)}
          placeholder="Jelaskan minat sosial Anda dan bidang yang ingin Anda mentori..."
          className="w-full h-[120px] bg-[#e8e8e8] rounded-[11px] p-4 text-[16px] outline-none focus:ring-2 focus:ring-[#79a932] resize-none"
        />

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleFinish}
            className="bg-[#79a932] text-white text-[25px] px-12 py-3 rounded-[28.5px] hover:opacity-90"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
