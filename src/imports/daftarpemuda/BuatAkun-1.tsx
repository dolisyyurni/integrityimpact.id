import { useState } from "react";
import x17677041361672 from "./1767704136167-2.png";
import batikPattern1 from "./batik-pattern-1.png";
import batikPattern2 from "./batik-pattern-2.png";

export const BuatAkun = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    namaLengkap: "",
    tanggalLahir: "",
    jenisKelamin: "",
    pendidikanTerakhir: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[1545px] relative">
      <div className="absolute -top-1 left-0 w-[1440px] h-[1550px] bg-[#b7d43b]" />

      <img
        className="top-0 h-[1468px] absolute left-0 w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern1}
      />

      <img
        className="top-[1463px] h-[82px] absolute left-0 w-[1440px] aspect-[0.98]"
        alt="Batik pattern"
        src={batikPattern2}
      />

      <main className="absolute top-[135px] left-[302px] w-[836px] h-[1231px] bg-white rounded-[63px] shadow-[10px_10px_25px_20px_#00000040]">
        <form onSubmit={handleSubmit} className="relative w-full h-full">
          <header className="absolute top-[51px] left-[224px] flex items-center gap-[10px]">
            <img
              className="w-[58px] h-[70px] aspect-[0.82]"
              alt="Logo"
              src={x17677041361672}
            />

            <h1 className="[font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
              DAFTAR PEMUDA
            </h1>
          </header>

          <div className="absolute top-[194px] left-[73px] w-[690px]">
            <label
              htmlFor="email"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Email"
            />
          </div>

          <div className="absolute top-[341px] left-[73px] w-[690px]">
            <label
              htmlFor="username"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Username"
            />
          </div>

          <div className="absolute top-[488px] left-[73px] w-[690px]">
            <label
              htmlFor="namaLengkap"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Nama Lengkap"
            />
          </div>

          <div className="absolute top-[635px] left-[73px] w-[690px]">
            <label
              htmlFor="tanggalLahir"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggalLahir"
              name="tanggalLahir"
              value={formData.tanggalLahir}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Tanggal Lahir"
            />
          </div>

          <div className="absolute top-[782px] left-[73px] w-[690px]">
            <label
              htmlFor="jenisKelamin"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Jenis Kelamin
            </label>
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Jenis Kelamin"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          <div className="absolute top-[929px] left-[73px] w-[690px]">
            <label
              htmlFor="pendidikanTerakhir"
              className="block [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal] mb-[9px]"
            >
              Pendidikan Terakhir
            </label>
            <select
              id="pendidikanTerakhir"
              name="pendidikanTerakhir"
              value={formData.pendidikanTerakhir}
              onChange={handleInputChange}
              required
              className="w-full h-14 bg-[#e7e7e7] rounded-[11px] shadow-[4px_4px_10px_#00000040] px-4 [font-family:'Hannari-Regular',Helvetica] font-normal text-black text-[18px]"
              aria-label="Pendidikan Terakhir"
            >
              <option value="">Pilih Pendidikan Terakhir</option>
              <option value="sd">SD</option>
              <option value="smp">SMP</option>
              <option value="sma">SMA/SMK</option>
              <option value="d3">D3</option>
              <option value="s1">S1</option>
              <option value="s2">S2</option>
              <option value="s3">S3</option>
            </select>
          </div>

          <button
            type="submit"
            className="absolute top-[1092px] left-[317px] w-[201px] h-[62px] bg-[#79a932] rounded-[28.5px] hover:bg-[#6a9429] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#79a932] focus:ring-offset-2"
            aria-label="Selanjutnya"
          >
            <span className="[font-family:'Hannari-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal]">
              Selanjutnya
            </span>
          </button>
        </form>
      </main>
    </div>
  );
};
