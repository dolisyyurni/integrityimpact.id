import { useState } from 'react';

import imgLogo from '../img/1767704136167.png';
import imgProfilePutih from '../img/profile putih.png';
import imgCvSymbol from '../img/cv symbol.png';

interface ProfilDanDashboardMentorProps {
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

export default function ProfilDanDashboardMentor({
  onNavigate,
}: ProfilDanDashboardMentorProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pendidikanTerakhir: '',
    minatSosial: '',
    pemudaDibimbing: '',
    resumeCV: '',
  });

  const [feedback, setFeedback] = useState('');
  const [refleksiPemuda, setRefleksiPemuda] = useState('');
  const [progressProyek, setProgressProyek] = useState('');

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    alert('Feedback berhasil dikirim!');
  };

  return (
    <div
      className="bg-white relative size-full min-h-[2000px]"
      data-name="Profil dan Dashboard Mentor"
    >
      {/* Labels */}
      <p className="absolute left-[64px] top-[311px] text-[22px]">Email</p>
      <p className="absolute left-[64px] top-[458px] text-[22px]">Password</p>
      <p className="absolute left-[64px] top-[605px] text-[22px]">Username</p>
      <p className="absolute left-[64px] top-[752px] text-[22px]">
        Nama Lengkap
      </p>
      <p className="absolute left-[64px] top-[899px] text-[22px]">
        Tanggal Lahir
      </p>
      <p className="absolute left-[64px] top-[1046px] text-[22px]">
        Jenis Kelamin
      </p>
      <p className="absolute left-[64px] top-[1193px] text-[22px]">
        Pendidikan Terakhir
      </p>
      <p className="absolute left-[64px] top-[1361px] text-[22px]">Feedback</p>
      <p className="absolute left-[64px] top-[1594px] text-[22px]">
        Refleksi Pemuda
      </p>
      <p className="absolute left-[64px] top-[1782px] text-[22px]">
        Progress Proyek
      </p>

      {/* Inputs */}
      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="absolute top-[349px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
        className="absolute top-[496px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="text"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
        className="absolute top-[650px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <input
        type="text"
        value={formData.namaLengkap}
        onChange={(e) =>
          setFormData({ ...formData, namaLengkap: e.target.value })
        }
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

      <input
        type="text"
        value={formData.pendidikanTerakhir}
        onChange={(e) =>
          setFormData({ ...formData, pendidikanTerakhir: e.target.value })
        }
        className="absolute top-[1238px] left-[64px] w-[690px] h-[56px] bg-[#e8e8e8] rounded-[11px] px-4"
      />

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="absolute top-[1406px] left-[64px] w-[1290px] h-[97px] bg-[#e8e8e8] rounded-[11px] p-4"
      />

      <textarea
        value={refleksiPemuda}
        onChange={(e) => setRefleksiPemuda(e.target.value)}
        className="absolute top-[1639px] left-[64px] w-[1290px] h-[97px] bg-[#e8e8e8] rounded-[11px] p-4"
      />

      <textarea
        value={progressProyek}
        onChange={(e) => setProgressProyek(e.target.value)}
        className="absolute top-[1827px] left-[64px] w-[1290px] h-[97px] bg-[#e8e8e8] rounded-[11px] p-4"
      />

      {/* Header */}
      <img
        src={imgLogo}
        alt="Logo"
        className="absolute left-[60px] top-[55px] w-[45px]"
      />
      <p className="absolute left-[115px] top-[63px] text-[24px]">
        INTEGRITY IMPACT
      </p>

      {/* Navigation */}
      <p className="absolute left-[576px] top-[67px]" onClick={() => onNavigate('home')}>Home</p>
      <p className="absolute left-[653px] top-[67px]" onClick={() => onNavigate('about')}>About</p>
      <p className="absolute left-[732px] top-[67px]" onClick={() => onNavigate('journey')}>Journey</p>
      <p className="absolute left-[819px] top-[67px]" onClick={() => onNavigate('projects')}>Projects</p>
      <p className="absolute left-[916px] top-[67px]" onClick={() => onNavigate('dashboard')}>Impact Dashboard</p>
      <p className="absolute left-[1114px] top-[67px]" onClick={() => onNavigate('collaborate')}>Collaborate</p>
      <p className="absolute left-[1245px] top-[67px]" onClick={() => onNavigate('insight')}>Insight</p>

      {/* Profile */}
      <img
        src={imgProfilePutih}
        alt="Profile"
        className="absolute right-[61px] top-[65px] w-[34px] h-[34px]"
        onClick={() => onNavigate('profilementor')}
      />

      {/* CV */}
      <img
        src={imgCvSymbol}
        alt="CV"
        className="absolute left-[1020px] top-[994px] w-[185px]"
      />

      {/* Button */}
      <button
        className="absolute left-[1235px] top-[1525px] w-[98px] h-[36px] bg-[#79a932] rounded-[19px] text-white"
        onClick={handleSubmitFeedback}
      >
        Kirim
      </button>
    </div>
  );
}
