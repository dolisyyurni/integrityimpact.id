import { useState } from 'react';
import imgBatikPattern from '../img/batik pattern.png';
import imgLogo from '../img/1767704136167.png';

interface BuatAkun3Props {
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

export default function BuatAkun3({ onNavigate }: BuatAkun3Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    console.log('Registro completado');
    onNavigate('profile');
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
      <div className="relative mx-auto mt-[157px] w-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)] p-[60px]">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img src={imgLogo} alt="Logo" className="w-[58px]" />
          <h1 className="text-[40px]">DAFTAR PEMUDA</h1>
        </div>

        <p
          className="text-[18px] mb-6 cursor-pointer hover:opacity-80"
          onClick={() => onNavigate('register2')}
        >
          ← Kembali
        </p>

        {/* Password */}
        <div className="space-y-6">
          <div>
            <label className="block text-[22px] mb-2">
              Buat Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Minimal 6 karakter"
              className="w-full h-[55px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          <div>
            <label className="block text-[22px] mb-2">
              Konfirmasi Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError('');
              }}
              placeholder="Ulangi password Anda"
              className="w-full h-[55px] rounded-[11px] bg-[#e8e8e8] px-4"
            />
          </div>

          {error && (
            <p className="text-red-600 text-[14px]">{error}</p>
          )}
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
