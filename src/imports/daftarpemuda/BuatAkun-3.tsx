import { FormEvent, useState } from "react";
import x17677041361672 from "./1767704136167-2.png";
import batikPattern1 from "./batik-pattern-1.png";
import batikPattern2 from "./batik-pattern-2.png";

export const BuatAkun = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
    console.log("Form submitted with password:", password);
  };

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[972px] relative">
      <div className="absolute top-[-3px] left-0 w-[1440px] h-[1550px] bg-[#b7d43b]" />

      <img
        className="top-0 left-0 h-[972px] absolute w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern1}
      />

      <img
        className="top-[3379px] left-[-1470px] h-[1476px] absolute w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern2}
      />

      <div className="absolute top-[157px] left-[302px] w-[836px] h-[658px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_#00000040]" />

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="absolute top-[655px] left-[619px] w-[201px] h-[62px] bg-[#79a932] rounded-[28.5px] cursor-pointer hover:bg-[#6a9429] transition-colors"
          aria-label="Selanjutnya"
        >
          <span className="absolute w-[68.16%] h-[61.29%] top-[14.52%] left-[16.42%] [font-family:'Hannari-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal]">
            Selanjutnya
          </span>
        </button>

        <img
          className="absolute top-52 left-[526px] w-[58px] h-[70px] aspect-[0.82]"
          alt="Logo"
          src={x17677041361672}
        />

        <h1 className="absolute top-[216px] left-[594px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
          DAFTAR PEMUDA
        </h1>

        <label
          htmlFor="password"
          className="absolute top-[325px] left-[375px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]"
        >
          Buat Password
        </label>

        <label
          htmlFor="confirmPassword"
          className="absolute top-[465px] left-[375px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]"
        >
          Konfirmasi Password
        </label>

        <div className="absolute top-[363px] left-[375px] w-[690px] h-[55px] bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040]">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-full px-4 bg-transparent [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal] rounded-[11px]"
            required
            aria-required="true"
            autoComplete="new-password"
          />
        </div>

        <div className="absolute top-[503px] left-[375px] w-[690px] h-[55px] bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040]">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-full px-4 bg-transparent [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal] rounded-[11px]"
            required
            aria-required="true"
            autoComplete="new-password"
          />
        </div>
      </form>
    </div>
  );
};
export default BuatAkun;