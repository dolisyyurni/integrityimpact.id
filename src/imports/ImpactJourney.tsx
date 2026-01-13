import imgPortraitYoungManToplessUseBambooFishingTrapCatchFishCookingAsianYoungFarmerManRuralLifestyle2 from "figma:asset/f415897b1575c49ac819de612aa0c3c63cf4258b.png";
import imgShadow1 from "figma:asset/e2897032b69ee04769126c069deb42a70a6ea1e0.png";
import img51 from "figma:asset/229a4fa45f485b1daea0b53f63d5aa0a4d6866ef.png";
import img11 from "figma:asset/7ab04104159b45d1fcded4e618a684ba21d761dc.png";
import img21 from "figma:asset/488cdd525c3bf83d63eb95d26584e2ec8cfc8cea.png";
import img31 from "figma:asset/3a380d2e655bb3689389921e701e2178c3c03304.png";
import img41 from "figma:asset/2cf7ef32cb9f673e9b2d1153f3c7d584d4389e35.png";
import img6365 from "figma:asset/8ffa5a9b9348d301256fce00fa6c40c395e069d3.png";
import imgArrow1 from "figma:asset/994cda8e39d454ab5ddebf3225a718267d392704.png";
import img17677041361672 from "figma:asset/70c9b187e070f7094a61c01eb0017d0fb714f7b5.png";
import imgProfilePutih2 from "figma:asset/6dbd23f77f0f761d94a22f53e479800681560ccf.png";

interface ImpactJourneyProps {
  onNavigate: (page: 'home' | 'about' | 'journey' | 'projects' | 'dashboard' | 'collaborate' | 'insight') => void;
}

export default function ImpactJourney({ onNavigate }: ImpactJourneyProps) {
  return (
    <div className="bg-white relative w-full min-h-[1200px]" data-name="Impact Journey">
      <div className="absolute blur-[5px] filter h-[1338px] left-[-199px] top-[8px] w-[1761px]" data-name="portrait-young-man-topless-use-bamboo-fishing-trap-catch-fish-cooking-asian-young-farmer-man-rural-lifestyle 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.02%] left-[-13.12%] max-w-none top-[-0.01%] w-[114.23%]" src={imgPortraitYoungManToplessUseBambooFishingTrapCatchFishCookingAsianYoungFarmerManRuralLifestyle2} />
        </div>
      </div>
      <div className="absolute aspect-[1366/768] left-0 right-0 top-0" data-name="shadow 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShadow1} />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.5)] h-[1153px] left-0 top-0 w-[1441px]" />
      <div className="absolute h-[55px] left-[60px] top-[27px] w-[45px]" data-name="1767704136167 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[212.8%] left-[-83.51%] max-w-none top-[-56.51%] w-[260.54%]" src={img17677041361672} />
        </div>
      </div>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[39px] leading-[normal] left-[115px] text-[24px] text-white top-[35px] w-[238px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        INTEGRITY IMPACT
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[30px] leading-[normal] left-[583px] text-[18px] text-white top-[42px] w-[57px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('home')}>
        Home
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[30px] leading-[normal] left-[660px] text-[18px] text-white top-[42px] w-[57px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('about')}>
        About
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[739px] text-[18px] text-nowrap text-white top-[42px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('journey')}>
        Journey
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[30px] leading-[normal] left-[826px] text-[18px] text-white top-[42px] w-[75px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('projects')}>
        Projects
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[30px] leading-[normal] left-[923px] text-[18px] text-white top-[42px] w-[176px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('dashboard')}>
        Impact Dashboard
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] h-[30px] leading-[normal] left-[1121px] text-[18px] text-white top-[42px] w-[109px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('collaborate')}>
        Collaborate
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[1252px] text-[18px] text-nowrap text-white top-[42px] cursor-pointer hover:opacity-80" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }} onClick={() => onNavigate('insight')}>
        Insight
      </p>
      <div className="absolute right-[61px] size-[34px] top-[40px] cursor-pointer hover:opacity-80" data-name="profile putih 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfilePutih2} />
      </div>
      <div className="absolute h-[189px] left-[617px] top-[748px] w-[207px]" data-name="5 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[109.55%] left-0 max-w-none top-0 w-full" src={img51} />
        </div>
      </div>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[calc(50%-122px)] text-[30px] text-nowrap text-white top-[166px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        IMPACT JOURNEY
      </p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[721px] not-italic text-[22px] text-center text-white top-[222px] translate-x-[-50%] w-[200px]">Alur Program</p>
      <div className="absolute h-0 left-[591.5px] top-[217.5px] w-[254px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 1">
            <path d="M0 0.5H254" id="Vector 1" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[186px] left-[180px] top-[349px] w-[211px]" data-name="1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.64%] left-0 max-w-none top-0 w-full" src={img11} />
        </div>
      </div>
      <div className="absolute h-[182px] left-[595px] top-[349px] w-[219px]" data-name="2 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.72%] left-0 max-w-none top-0 w-full" src={img21} />
        </div>
      </div>
      <div className="absolute h-[229px] left-[1018px] top-[302px] w-[269px]" data-name="3 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.65%] left-0 max-w-none top-0 w-full" src={img31} />
        </div>
      </div>
      <div className="absolute h-[152px] left-[1065px] top-[772px] w-[176px]" data-name="4 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.72%] left-0 max-w-none top-0 w-full" src={img41} />
        </div>
      </div>
      <div className="absolute h-[173px] left-[187px] top-[756px] w-[196px]" data-name="6 365">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.42%] left-0 max-w-none top-0 w-full" src={img6365} />
        </div>
      </div>
      <div className="absolute h-[69px] left-[441px] top-[400px] w-[73px]" data-name="arrow 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.38%] left-0 max-w-none top-0 w-full" src={imgArrow1} />
        </div>
      </div>
      <div className="absolute h-[69px] left-[911px] top-[400px] w-[73px]" data-name="arrow 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.38%] left-0 max-w-none top-0 w-full" src={imgArrow1} />
        </div>
      </div>
      <div className="absolute flex h-[73px] items-center justify-center left-[1118px] top-[675px] w-[69px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[69px] relative w-[73px]" data-name="arrow 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[106.38%] left-0 max-w-none top-0 w-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[69px] items-center justify-center left-[903px] top-[813px] w-[73px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[69px] relative w-[73px]" data-name="arrow 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[106.38%] left-0 max-w-none top-0 w-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[69px] items-center justify-center left-[458px] top-[813px] w-[73px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[69px] relative w-[73px]" data-name="arrow 5">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[106.38%] left-0 max-w-none top-0 w-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[285.5px] text-[22px] text-center text-white top-[562px] translate-x-[-50%] w-[261px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PEMETAAN INTEGRITAS AWAL
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[718.5px] text-[22px] text-center text-white top-[554px] translate-x-[-50%] w-[261px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PEMBINAAN KARAKTER DAN ETIKA PUBLIK
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[1152.5px] text-[22px] text-center text-white top-[546px] translate-x-[-50%] w-[261px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        INKUBASI WIRAUSAHA SOSIAL
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[1152.5px] text-[22px] text-center text-white top-[952px] translate-x-[-50%] w-[261px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PENDANAAN BERBASIS DAMPAK
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[718.5px] text-[22px] text-center text-white top-[952px] translate-x-[-50%] w-[261px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        MONITORING DAN EVALUASI TERBUKA
      </p>
      <p className="absolute font-['Hannari:Regular','Noto_Sans:Regular',sans-serif] leading-[normal] left-[calc(50%-194.5px)] text-[30px] text-nowrap text-white top-[1092px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        REPLIKASI DAN REGENERASI KEPEMIMPINAN
      </p>
    </div>
  );
}