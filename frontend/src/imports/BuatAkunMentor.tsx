import { useState } from 'react';
import imgBatikPattern from '../img/batik pattern.png';
import imgLogo from '../img/1767704136167.png';

interface BuatAkunMentorProps {
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

export default function BuatAkunMentor({ onNavigate }: BuatAkunMentorProps) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pendidikanTerakhir: '',
    resumeCV: ''
  });

  const handleNext = () => {
    if (formData.email && formData.username && formData.namaLengkap) {
      onNavigate('registermentor2');
    } else {
      alert('Mohon isi minimal Email, Username, dan Nama Lengkap');
    }
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
      <div className="relative mx-auto mt-[135px] w-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)] p-[60px]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <img src={imgLogo} alt="Logo" className="w-[58px]" />
          <h1 className="text-[40px]">DAFTAR MENTOR</h1>
        </div>

        {/* Inputs */}
        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />

          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={formData.namaLengkap}
            onChange={(e) =>
              setFormData({ ...formData, namaLengkap: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />

          <input
            type="date"
            value={formData.tanggalLahir}
            onChange={(e) =>
              setFormData({ ...formData, tanggalLahir: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />

          <select
            value={formData.jenisKelamin}
            onChange={(e) =>
              setFormData({ ...formData, jenisKelamin: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <input
            type="text"
            placeholder="Pendidikan Terakhir"
            value={formData.pendidikanTerakhir}
            onChange={(e) =>
              setFormData({
                ...formData,
                pendidikanTerakhir: e.target.value
              })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />

          <input
            type="text"
            placeholder="Link Resume / CV"
            value={formData.resumeCV}
            onChange={(e) =>
              setFormData({ ...formData, resumeCV: e.target.value })
            }
            className="w-full h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleNext}
            className="bg-[#79a932] text-white text-[25px] px-12 py-3 rounded-[28.5px] hover:opacity-90"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
