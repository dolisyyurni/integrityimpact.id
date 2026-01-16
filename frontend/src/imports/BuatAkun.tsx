import { useState } from "react";
import imgBatikPattern from "../img/batik pattern.png";
import imgLogo from "../img/1767704136167.png";

interface BuatAkunProps {
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

export default function BuatAkun({ onNavigate }: BuatAkunProps) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pendidikanTerakhir: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    onNavigate('register2');
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
      <div className="relative mx-auto mt-[135px] w-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)] p-[60px]">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-6">
          <img src={imgLogo} alt="Logo" className="w-[58px]" />
          <h1 className="text-[40px]">DAFTAR PEMUDA</h1>
        </div>

        <p
          className="text-[18px] mb-8 cursor-pointer hover:opacity-80"
          onClick={() => onNavigate('daftar')}
        >
          ← Kembali ke Login
        </p>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-[22px] mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={formData.namaLengkap}
              onChange={(e) => handleChange('namaLengkap', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">Tanggal Lahir</label>
            <input
              type="date"
              value={formData.tanggalLahir}
              onChange={(e) => handleChange('tanggalLahir', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">Jenis Kelamin</label>
            <select
              value={formData.jenisKelamin}
              onChange={(e) => handleChange('jenisKelamin', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-[22px] mb-2">Pendidikan Terakhir</label>
            <input
              type="text"
              value={formData.pendidikanTerakhir}
              onChange={(e) => handleChange('pendidikanTerakhir', e.target.value)}
              className="w-full h-[56px] rounded-[11px] bg-[#e8e8e8] px-4"
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
