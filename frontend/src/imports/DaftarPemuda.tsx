import { useState } from 'react';
import imgBatikPattern1 from "../img/batik pattern.png";

import img17677041361672 from '../img/1-1.png';

interface DaftarPemudaProps {
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

export default function DaftarPemuda({ onNavigate }: DaftarPemudaProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onNavigate('home');
    }
  };

  return (
    <div className="bg-white relative size-full min-h-[1048px]">
      <div className="absolute inset-0 bg-[#b7d43b]" />

      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <img src={imgBatikPattern1} className="w-full h-full object-cover" />
      </div>

      <div className="absolute bg-white h-[761px] left-[320px] top-[135px] w-[836px] rounded-[63px] shadow-[10px_10px_25px_20px_rgba(0,0,0,0.25)]" />

      <div className="absolute h-[70px] left-[521px] top-[182px] w-[58px]">
        <img src={img17677041361672} className="w-full h-full object-contain" />
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
