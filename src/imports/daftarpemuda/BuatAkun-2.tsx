import { useState } from "react";
import x17677041361672 from "./1767704136167-2.png";
import batikPattern1 from "./batik-pattern-1.png";
import batikPattern2 from "./batik-pattern-2.png";

export const BuatAkun = (): JSX.Element => {
  const [minatSosial, setMinatSosial] = useState("");
  const [gagasanAwalProyek, setGagasanAwalProyek] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ minatSosial, gagasanAwalProyek });
  };

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[1173px] relative">
      <div className="absolute top-[-7px] left-0 w-[1440px] h-[1550px] bg-[#b7d43b]" />

      <img
        className="top-0 left-0 h-[1173px] absolute w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern1}
      />

      <img
        className="top-[3375px] left-[380px] h-[1476px] absolute w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern2}
      />

      <div className="absolute top-[153px] left-[302px] w-[836px] h-[836px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_#00000040]" />

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="absolute top-[835px] left-[619px] w-[201px] h-[62px] bg-[#79a932] rounded-[28.5px] cursor-pointer hover:bg-[#6a9129] transition-colors"
        >
          <span className="absolute w-[68.16%] h-[61.29%] top-[14.52%] left-[16.42%] [font-family:'Hannari-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal]">
            Selanjutnya
          </span>
        </button>

        <img
          className="absolute top-[204px] left-[526px] w-[58px] h-[70px] aspect-[0.82]"
          alt="Logo"
          src={x17677041361672}
        />

        <h1 className="absolute top-[212px] left-[594px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
          DAFTAR PEMUDA
        </h1>

        <label
          htmlFor="minat-sosial"
          className="absolute top-[321px] left-[375px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]"
        >
          Minat Sosial
        </label>

        <label
          htmlFor="gagasan-awal-proyek"
          className="absolute top-[526px] left-[375px] [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]"
        >
          Gagasan Awal Proyek
        </label>

        <input
          type="text"
          id="minat-sosial"
          name="minat-sosial"
          value={minatSosial}
          onChange={(e) => setMinatSosial(e.target.value)}
          className="absolute top-[359px] left-[375px] w-[690px] h-[120px] bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 py-3 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal] focus:outline-none focus:ring-2 focus:ring-[#79a932]"
          placeholder=""
          aria-label="Minat Sosial"
        />

        <textarea
          id="gagasan-awal-proyek"
          name="gagasan-awal-proyek"
          value={gagasanAwalProyek}
          onChange={(e) => setGagasanAwalProyek(e.target.value)}
          className="absolute top-[564px] left-[375px] w-[690px] h-[206px] bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 py-3 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[normal] resize-none focus:outline-none focus:ring-2 focus:ring-[#79a932]"
          placeholder=""
          aria-label="Gagasan Awal Proyek"
        />
      </form>
    </div>
  );
};
