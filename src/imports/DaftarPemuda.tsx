import { FormEvent, useState } from "react";
import x17677041361672 from "./1767704136167-2.png";
import batikPattern1 from "./batik-pattern-1.png";

export const DaftarPemuda = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
  };

  const handleCreateAccount = () => {
    console.log("Navigate to create account");
  };

  return (
    <div className="bg-white w-full min-w-[1440px] min-h-[1048px] relative">
      <div className="absolute top-0 left-0 w-[1440px] h-[1048px] bg-[#b7d43b]" />

      <img
        className="absolute top-0 left-0 w-[1440px] h-[1048px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern1}
      />

      <div className="absolute top-[135px] left-80 w-[836px] h-[761px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_#00000040]" />

      <header className="absolute top-[182px] left-[521px] flex items-center gap-4">
        <img
          className="w-[58px] h-[70px] aspect-[0.82]"
          alt="Integrity Impact Logo"
          src={x17677041361672}
        />

        <h1 className="[font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          INTEGRITY IMPACT
        </h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="absolute top-[365px] left-[393px] w-[690px]"
      >
        <div className="mb-[57px]">
          <label
            htmlFor="email"
            className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[23px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
            aria-label="Email"
          />
        </div>

        <div className="mb-[91px]">
          <label
            htmlFor="password"
            className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[23px]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
            aria-label="Password"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[132px] h-[68px] bg-[#79a932] rounded-[34px] flex items-center justify-center [font-family:'Hannari-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] hover:bg-[#6a9129] transition-colors"
            aria-label="Masuk"
          >
            Masuk
          </button>
        </div>
      </form>

      <div className="absolute top-[791px] left-[611px] flex items-center gap-2">
        <span className="[font-family:'Hannari-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
          Belum punya akun?
        </span>
        <button
          type="button"
          onClick={handleCreateAccount}
          className="[font-family:'Hannari-Regular',Helvetica] font-normal text-[#00a7c5] text-lg tracking-[0] leading-[normal] hover:underline"
          aria-label="Buat Akun"
        >
          Buat Akun
        </button>
      </div>
    </div>
  );
};
