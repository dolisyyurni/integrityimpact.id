import { useState } from 'react';
import imgBatikPattern1 from '../img/batik pattern.png';
import img17677041361672 from '../img/1767704136167.png';

interface DaftarMentorProps {
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

export default function DaftarMentor({ onNavigate }: DaftarMentorProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onNavigate('profilementor');
    }
  };

  return (
    <div className="bg-white relative size-full min-h-[1048px]">
      <div className="absolute bg-[#b7d43b] inset-0" />

      <div className="absolute inset-0 opacity-50">
        <img className="w-full h-full object-cover" src={imgBatikPattern1} />
      </div>

      <div className="absolute bg-white h-[761px] left-[320px] top-[135px] w-[836px] rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)]" />

      <div className="absolute h-[70px] left-[521px] top-[182px] w-[58px]">
        <img className="w-full h-full" src={img17677041361672} />
      </div>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="absolute bg-[#e8e8e8] h-[56px] left-[393px] top-[410px] w-[690px] rounded-[11px] px-4"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="absolute bg-[#e8e8e8] h-[56px] left-[393px] top-[557px] w-[690px] rounded-[11px] px-4"
      />

      <div
        className="absolute h-[68px] left-[672px] top-[704px] w-[132px] bg-[#79a932] rounded-[34px] cursor-pointer"
        onClick={handleLogin}
      />
    </div>
  );
}
