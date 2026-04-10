import React, { useState } from 'react';
import { 
  Image, 
  Layout, 
  Zap, 
  Target, 
  ChevronRight, 
  ChevronLeft, 
  Cpu, 
  Sparkles, 
  BarChart3, 
  Layers, 
  Terminal,
  CheckCircle2,
  BrainCircuit,
  ArrowRight,
  PenTool,
  Trophy,
  Bot
} from 'lucide-react';

// --- COMPONENTE DE APOIO: SLIDE PREVIEW ---
const SlidePreview = ({ number, title, subtext, visualDescription, isActive, onClick, imgUrl }) => (
  <div 
    onClick={onClick}
    className={`bg-[#0a0a0a] border ${isActive ? 'border-[#22c55e]' : 'border-white/10'} rounded-xl overflow-hidden cursor-pointer hover:border-[#22c55e]/40 transition-all flex flex-col h-full`}
  >
    <div className="aspect-[4/5] bg-gradient-to-br from-slate-900 to-black relative p-3 flex flex-col justify-end border-b border-white/5">
      {imgUrl && (
        <img src={imgUrl} className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" alt="" />
      )}
      <div className={`absolute top-2 right-2 z-10 text-[9px] font-mono ${isActive ? 'text-[#22c55e]' : 'text-[#22c55e]/40'}`}>
        #{String(number).padStart(2, '0')}
      </div>
      <div className="space-y-1 relative z-10">
        <h5 className="text-[10px] font-black text-white leading-tight uppercase tracking-tighter line-clamp-2">{title}</h5>
        <p className="text-[8px] text-slate-500 leading-tight italic line-clamp-2">{subtext}</p>
      </div>
      <div className="mt-2 pt-2 border-t border-white/10 hidden md:block relative z-10">
        <p className="text-[7px] text-[#22c55e]/60 uppercase font-bold tracking-widest">Visual</p>
        <p className="text-[8px] text-slate-400 mt-0.5 line-clamp-1">{visualDescription}</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE DE APOIO: TOOL BADGE ---
const ToolBadge = ({ name, type }) => (
  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
    <div className={`w-2 h-2 rounded-full ${type === 'MANUS' ? 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]'}`}></div>
    <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{name}</span>
  </div>
);

const Carrossel = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/Oel2up1ZwlpJskNCYEMMb2-img-1_1775748908000_na1fn_YWdyb21haV9zbGlkZV8wMQ.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L09lbDJ1cDFad2xwSnNrTkNZRU1NYjItaW1nLTFfMTc3NTc0ODkwODAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d01RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MNFMMnQwNzg-ljB45R0uT~-LimHEOYEISDw6aj-j5zL3buC2yg3vfEftMR~o~m1CRjUuo-CxYZLrtmK8unpcNaAvVFrsbFiAVbQp7mLraPsZwovqCEO17pFxHgljRSbzuJAIlC0zYB1D~M-C~ebi9pKBzDX94-D9ztpm0mkzMcsqKa7sGtzDOfjEcsR7kIs4YHasEKld8SokP-2oKgxFulXxmXCgx4sLiGKCadU3rlsYPg4~oYVwWj8c5KdXecK~fk9XkRaWexT5bJbLsbQLd3F474LMZa4ppMWv9zFfTR1K2DtymYXI5zcS1-JAZOKSRXshAoqcMRImqHFUE6IsRA__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/Oel2up1ZwlpJskNCYEMMb2-img-2_1775748908000_na1fn_YWdyb21haV9zbGlkZV8wMg.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L09lbDJ1cDFad2xwSnNrTkNZRU1NYjItaW1nLTJfMTc3NTc0ODkwODAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d01nLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ptTLGfLsMKYdJOc2uK-Iz3jV8DdnBUb6Hwngayd969DcH-qzR484odug6LQKS71zsKAZWSJTv-uQNsLc~BGGsvl4lYodjBVbIMe4q7ww2W2WOKbbWNsCw0LjP20z6fwcMsaghRRweLL9sT6MjA81NrqFuhPYhVPrITi7lp-BbBI3d~Kn8Yl7b~qKniY0o1FCZBz9AWkeAG1~pRXs3q8C3YoJ2m5YBQYxgi4s2zEItv2YfsjTGkuddpU6s7cijRvXXsTpOb7vy~0rT4ZNLqbkxXZmsHelR3kyn2LsvorL0pE7-D8LlvyiNXC2FiC1UIJtxTLnA4OgY5duOUAuL1uHYQ__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/LDlKM66bXzCQsOBgmZJnJt-img-1_1775748979000_na1fn_YWdyb21haV9zbGlkZV8wMw.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L0xEbEtNNjZiWHpDUXNPQmdtWkpuSnQtaW1nLTFfMTc3NTc0ODk3OTAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d013LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mip24Q21JKrAlF3Gxl8toFkab7lTY2hLeBkRxQtE3ALVuBwyfDG8sQgx~S9AjHcNg--vat89vsc4pDAMRYn52VUDyXGXwhgTNAogTFArcYOvgIKLI7HpW-T72ZVF~MrA6qVd2ANQ0MkAnmD0LMncYsBUKQ0gMXDpIpwhEIDN1WW4WGqwyUWomYxsWotuZq7iBt7K21Kyji0E2vdCby7EjiMgQB2zrgSKfrvdmNOOsMGadgSeGR~6w9oH6aJAaAKSFfcFB4kJ55nKPZUjYEaO-wS8tWtWN-GAbYksru-xdxOFdJDQrBrONK63ndMB6NgHD5dqSlTn51K5uohazkFWlw__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/LDlKM66bXzCQsOBgmZJnJt-img-2_1775748986000_na1fn_YWdyb21haV9zbGlkZV8wNA.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L0xEbEtNNjZiWHpDUXNPQmdtWkpuSnQtaW1nLTJfMTc3NTc0ODk4NjAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d05BLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D3yVg-nzeRsmJujF0k-9phhJ-tpk-8TC4dWpANDYdQ~9jNvOCqb0ps3oEdPLUkH5rSKK9HEJ~-gw30bpMyaTQGjXxRNiAGN00Zz19pyiJUkVMDsb7WrTqZmn9uiRyiCC0~Aw-XQxcWInz-Tgzq85SKt9sSWKjh22sdbo80uiKhpDsQuzL8~T2PZqKWGr3gkKz~QXz8q9RMLylpicvU8CkQyuOKj96mrKpQ~OtjyO9fkf11-cRg1FhGnwuPTiwciXITsh3srUWgwzDSusoK4WSmDv3v1GgxlA2lz5hNbM69INMrzQoGcTkOqu9S1QrxTbQQtoZhwRcsoEEU-9V0D3yA__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/k84wFXPnoeKPC6Zxw8oTXC-img-1_1775749058000_na1fn_YWdyb21haV9zbGlkZV8wNQ.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L2s4NHdGWFBub2VLUEM2Wnh3OG9UWEMtaW1nLTFfMTc3NTc0OTA1ODAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d05RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RJMD0urOsfRlnE-yUF0Usj-cyJCXdgIv~bFCQI6n9psDDTESCnctr-1g7cWo7gR96AZOfBloFYdYVVB5yFy~876ApGrvylb-05A37On6qG0tj2ye0lNb3oseNAhdIYBCS91vkSBVtiL0OOb3-PzGicfWca-dLXa7CYDt-zjPSjKPAR8FGehuRPqCPF1qE33F9VzRhY1NB0QHR1Fs49yrVPhXB8MNC0zz9j-JhtUZTEsKd48kPh2RvSPhorVaFbNMSU8zw2qZjbH3bfy-BmeKrZeQ5F~xoFk-DOQQtYrjxzYdlR9-1lqGSud15GDWB9I~YTvwM-XMKdq1pxEi8joVTw__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/k84wFXPnoeKPC6Zxw8oTXC-img-2_1775749056000_na1fn_YWdyb21haV9zbGlkZV8wNg.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L2s4NHdGWFBub2VLUEM2Wnh3OG9UWEMtaW1nLTJfMTc3NTc0OTA1NjAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d05nLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Z-USK5pME~eIrDy-4zIaez0WOSYz9A6081LPPLkZqi0qVmUKakXuHvjKmIexdz12rehQ286sJwxMAw0gfLea4V73H0Z~chUnjb82Kx0lmTEoFmRRKYgKaiidhbQqLA7cnurIIKCs7V-0fS18RcTayt6GsLBmxqEbkaEL1kt-qvJcexwR2phsdgi0Yp4J-wkJDJTV8KEAVx1KTs8neZOpxx7angNnynYUHKIuDnw7zVcNUc0THHJQwcFSYW~zOqe2VbG8vnZahw4RRV6g2c10VL-IRmcHk0KDfLDYX3Hdbuh13PU6Qx3VJb8X-GzOKdjpWuldiOBgwfTnAE6JCBlp6Q__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/C88BLyk4f6mjOdoq84wVpq-img-1_1775749124000_na1fn_YWdyb21haV9zbGlkZV8wNw.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L0M4OEJMeWs0ZjZtak9kb3E4NHdWcHEtaW1nLTFfMTc3NTc0OTEyNDAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d053LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VriczKyA6vkFf37lKI9H~tS3vwWR1xxuZvPFGASBjN3YrRTFW8Mqt253eOI9EMJ8pHa8eaBqhG1fQ66Ia9qASjFJ0weLhEwtxdPBoSymDoKwSok935-I2Ev4GnLQzoGXC3i5LbYavaQ9czuKqc9uoWCG0bzIOJWxW5sMjV8SoRdvTu45ezQZCar7sG-ADdK-nMomtM25CwjzCP-7BnVDAHPPy8S3JVDebqHwFLvdIFtozxZObAtOt3j5sJg60i-Y~kvDjcqR2C7i7k5Qwj-3FWA1CvOahvtuW5vCVM~zkROZxPCsYVezGVubqGQLQA6DmhCDM4Po~CFsr4RrfRHS0g__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/C88BLyk4f6mjOdoq84wVpq-img-2_1775749165000_na1fn_YWdyb21haV9zbGlkZV8wOA.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L0M4OEJMeWs0ZjZtak9kb3E4NHdWcHEtaW1nLTJfMTc3NTc0OTE2NTAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d09BLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y6i~Afpz~vWPIJ4~lPtp9go60s0hZCeUItNSGD8GNnlHUmFw4YkJNdcUDyqTBcLe9Btp4hVWYeIYG-7dfgJXllEcBzNKqZKvwSReSyqWhCFvvwttGHgo~Yo1nvHXF6M8UDrGyQmktYLXlxFFpE-SxDyMmKYP9SY5qbfIjIe54C4oRteOu7qazD3sJwiEFPKaIl97FludO-i2IXs-6zOybd0wZJl18frdOOQ7YHsSSlxo3u4KI~Ecyb1BpGqs7J9Mv~luEP-4RRLmYwIXwnKj4OJt1zUb5Fp7MOzcKLC6s3RijEfRiKbZ6bOEChWo7JSUwTsZmgPGoe1Z4OuvOKut8g__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://private-us-east-1.manuscdn.com/sessionFile/OlrGJnmdVLQZs8NwZV4xAi/sandbox/xZxghdmgwQ3M8oO5f3R93D-img-1_1775749233000_na1fn_YWdyb21haV9zbGlkZV8wOQ.png?x-oss-process=image/resize,w_4096,h_4096/format,webp/quality,q_100&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvT2xyR0pubWRWTFFaczhOd1pWNHhBaS9zYW5kYm94L3haeGdoZG1nd1EzTThvTzVmM1I5M0QtaW1nLTFfMTc3NTc0OTIzMzAwMF9uYTFmbl9ZV2R5YjIxaGFWOXpiR2xrWlY4d09RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzQwOTYsaF80MDk2L2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV8xMDAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QyXojEwXI6Mo1GONXIWjzWtZDYCiabIgp9sJd7Yt94bfPLmJcJPmLJh80916zozq0wgnIRpK6KYnatdc90haqtUFy3uFGLPjZavNSImGaCDMkW06-fgGPZBhXKGpC761GSC56mzUD7dgUSIcJNY2Z9El6K8D7PQYe0yXYi0wuZgAXTBn7277jWuQa9~1HRvxaBh2XspLHDnRtfZXBbtxvtMpTpiF3DrZqWn21PzVfGwJqZiMT9wgF8uC~8Zlf4o-tN1ZL29ZAs-SIfGz0M13oToaSoqayya331zb3tkm4u3EXShTAbtRBOQKzV45p0WbtVxTatxReQvNXL8fN9tgMA__" 
    },
    { 
      title: "", 
      subtext: "", 
      visual: "", 
      imgUrl: "https://files.manuscdn.com/bizimage/generated/824726a9-5539-4fc1-bbb2-6cba46e9fb7b.png" 
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans text-slate-200 text-left">
      <div className="max-w-6xl mx-auto space-y-12 mb-20">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-[#22c55e] pl-6">
          <div>
            <div className="flex items-center gap-2 text-[#22c55e] mb-1">
              <span className="animate-pulse">
                <Sparkles size={14} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">IA Marketing Workflow</span>
            </div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Carrossel Institucional</h1>
            <p className="text-slate-400 text-sm italic mt-1">Trabalho real de marketing impulsionado por Agentes Autônomos de IA</p>
          </div>
          
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex gap-4 border-b border-white/10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button 
            onClick={() => setActiveTab('process')}
            className={`pb-4 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'process' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-slate-500 hover:text-white'}`}
          >
            Processo & Prompt
          </button>
          <button 
            onClick={() => setActiveTab('carousel')}
            className={`pb-4 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'carousel' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-slate-500 hover:text-white'}`}
          >
            Estrutura (10 Slides)
          </button>
          <button 
            onClick={() => setActiveTab('analysis')}
            className={`pb-4 text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'analysis' ? 'text-[#22c55e] border-b-2 border-[#22c55e]' : 'text-slate-500 hover:text-white'}`}
          >
            Aprendizados & Impacto
          </button>
        </div>

        {/* TAB 1: PROCESSO */}
        {activeTab === 'process' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex gap-4 items-center">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest">Geração Visual</h3>
              <div className="flex-1 h-px bg-white/10"></div>
              <ToolBadge name="Manus AI" type="MANUS" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 relative">
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-white/20"><ArrowRight size={24} /></div>
                <div className="flex items-center gap-2 text-[#22c55e]">
                  <Terminal size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">1. O Briefing (Prompt)</span>
                </div>
                <div className="text-xs text-slate-300 font-mono italic leading-relaxed bg-black p-4 rounded-lg border border-white/5 h-[300px] overflow-y-auto custom-scrollbar whitespace-pre-wrap">
                  {`crie um carrossel com base nas orientações e nos temas abaixo

Objetivo: Criar um carrossel para redes sociais apresentando:
• O que é a Agromai
• O que ela faz
• Benefícios da tecnologia
• Diferenciais

Isso simula trabalho real de marketing com IA.

Estrutura do Carrossel (Sugestão: 5 Slides)

Slide 1 — Introdução
Texto: Agromai - GeoAI aplicada ao agronegócio
Subtexto: Tecnologia e inteligência artificial para decisões mais inteligentes no campo
Visual: Campo agrícola moderno, Interface tecnológica, Satélite ou mapa

[...estrutura dos 5 slides...]`}
                </div>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-[9px] text-slate-500 uppercase">Input: Orientação de 5 Slides</p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-[#22c55e]/20 rounded-2xl p-6 flex flex-col gap-4 relative shadow-[0_0_30px_rgba(34,197,94,0.05)]">
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-white/20"><ArrowRight size={24} /></div>
                <div className="flex items-center gap-2 text-white">
                  <Bot size={16} className="text-[#22c55e]" /> <span className="text-[10px] font-bold uppercase tracking-widest">2. Expansão Inteligente (Agente)</span>
                </div>
                <div className="bg-black/40 rounded-lg border border-white/5 p-4 flex flex-col items-center justify-center text-center h-[300px]">
                  <Layers size={40} className="text-[#22c55e]/50 mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">De 5 para 10 Slides</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    O Manus AI analisou o briefing inicial e identificou a necessidade de um storytelling mais aprofundado. 
                    Ele extrapolou a sugestão de 5 slides e construiu um pitch deck completo de 10 etapas, incorporando produtos específicos como o <strong>VMG, Aura e Sense</strong>, além de prova social (milhões de hectares).
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-[9px] text-[#22c55e] uppercase font-bold">Processamento Autônomo</p>
                </div>
              </div>

              {/* NOVO BLOCO: ROTEIRO FINAL */}
              <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#22c55e]">
                  <CheckCircle2 size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">3. Roteiro Final</span>
                </div>
                <div className="bg-black rounded-lg border border-[#22c55e]/20 p-4 space-y-4 h-[300px] overflow-y-auto custom-scrollbar">
                  
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">01 - Agromai: GeoAI Aplicada ao Agronegócio</p>
                    <p className="text-[9px] text-slate-300">Slide de introdução apresentando a Agromai como líder em GeoAI para o campo.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">02 - Desafios Complexos Exigem Soluções Inteligentes</p>
                    <p className="text-[9px] text-slate-300">Aborda os problemas climáticos, financeiros e ambientais enfrentados pelo agronegócio.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">03 - GeoAI: A Revolução da Inteligência de Dados</p>
                    <p className="text-[9px] text-slate-300">Explica como a Agromai utiliza IA e dados de satélite para monitoramento em tempo real.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">04 - Soluções Integradas para Toda a Jornada da Safra</p>
                    <p className="text-[9px] text-slate-300">Apresenta o ecossistema Agromai incluindo VMG, Aura e Sense.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">05 - VMG: A Prova Digital da Sua Produção</p>
                    <p className="text-[9px] text-slate-300">Detalha os diferentes tipos de Atestado VMG (Entrada, Recuperação e Saída).</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">06 - Tecnologia que se Traduz em Rentabilidade</p>
                    <p className="text-[9px] text-slate-300">Foca nos benefícios financeiros como redução de juros e agilidade no crédito.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">07 - Valorizando a Produção com Sustentabilidade</p>
                    <p className="text-[9px] text-slate-300">Explora a rastreabilidade e a conformidade ambiental como diferenciais competitivos.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">08 - Por que Escolher a Agromai?</p>
                    <p className="text-[9px] text-slate-300">Destaca a parceria com o Google, credenciamento no MAPA e time de especialistas.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">09 - Resultados Comprovados em Milhões de Hectares</p>
                    <p className="text-[9px] text-slate-300">Apresenta a escala e o impacto real da tecnologia no agronegócio brasileiro.</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#22c55e] uppercase">10 - Agromai: GeoAI para o Futuro do Agronegócio</p>
                    <p className="text-[9px] text-slate-300">Slide final com convite para ação, contatos e mensagem de encerramento.</p>
                  </div>

                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                   <p className="text-[9px] text-[#22c55e] uppercase font-bold">Roteiro Aprovado</p>
                   <Trophy size={12} className="text-[#22c55e]" />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: CARROUSEL */}
        {activeTab === 'carousel' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="relative max-w-sm mx-auto">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden aspect-[4/5] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                <div className="absolute inset-0 z-0">
                  {carouselSlides[currentSlide].imgUrl ? (
                    <img 
                      src={carouselSlides[currentSlide].imgUrl} 
                      alt={`Slide ${currentSlide + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-b from-slate-900 to-black">
                      <Image size={40} className="text-white/5 mb-4" />
                      <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold mb-2">Aguardando Imagem Online</p>
                      <p className="text-[11px] text-slate-400 font-mono italic leading-relaxed px-4">Ref: {carouselSlides[currentSlide].visual}</p>
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between pointer-events-none">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                      </div>
                      <div className="text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-1 rounded backdrop-blur-sm border border-white/10">
                        {String(currentSlide + 1).padStart(2, '0')}/10
                      </div>
                   </div>
                </div>
              </div>

              {/* Títulos removidos da sobreposição conforme fluxo anterior */}
              <div className="mt-6 space-y-2 px-2 text-center h-20">
              </div>

              <button onClick={prevSlide} className="absolute left-[-24px] top-[40%] -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#22c55e]/20 border border-white/10 hover:border-[#22c55e]/50 rounded-full flex items-center justify-center text-white backdrop-blur-xl transition-all z-30 group shadow-xl">
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={nextSlide} className="absolute right-[-24px] top-[40%] -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#22c55e]/20 border border-white/10 hover:border-[#22c55e]/50 rounded-full flex items-center justify-center text-white backdrop-blur-xl transition-all z-30 group shadow-xl">
                <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex justify-center gap-1.5 mt-8">
                {carouselSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-6 bg-[#22c55e]' : 'w-2 bg-white/20 hover:bg-white/40'}`}></button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-4">
              {carouselSlides.map((slide, i) => (
                <SlidePreview 
                  key={i} 
                  number={i + 1} 
                  title={slide.title.replace('\n', ' ')} 
                  subtext={slide.subtext} 
                  visualDescription={slide.visual} 
                  imgUrl={slide.imgUrl}
                  isActive={i === currentSlide}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ANÁLISE */}
        {activeTab === 'analysis' && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <BrainCircuit className="text-[#22c55e]" size={20}/> Aprendizados: O Poder dos Agentes Autônomos
              </h3>
              <div className="bg-[#0a0a0a] border border-[#22c55e]/30 rounded-2xl p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Bot size={150} className="text-[#22c55e]" />
                 </div>
                 <div className="relative z-10 space-y-6">
                    <ToolBadge name="Manus AI" type="MANUS" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">De Executor a Estrategista</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          A grande lição deste card foi a mudança de paradigma no uso da IA. Em vez de testar ferramentas de imagem isoladas que apenas "obedecem" comandos estritos, utilizamos o <strong>Manus AI</strong> como um Agente Autônomo.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Expansão de Escopo</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          O prompt sugeria 5 slides básicos. O Manus AI, compreendendo o contexto corporativo e de vendas B2B do agronegócio, expandiu o roteiro para <strong>10 slides</strong>. Ele incluiu produtos reais (VMG, Aura) e adicionou gatilhos mentais cruciais, como sustentabilidade e autoridade (Parceria Google).
                        </p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <Target className="text-[#22c55e]" size={20}/> Impacto deste Card (Habilidades Demonstradas)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { icon: Bot, label: "Domínio de AI Agents" },
                    { icon: Layers, label: "Expansão de Escopo" },
                    { icon: Cpu, label: "Uso Estratégico de IA" },
                    { icon: PenTool, label: "Processo Criativo" },
                    { icon: BarChart3, label: "Marketing B2B" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#22c55e]/10 hover:border-[#22c55e]/30 transition-colors">
                      <item.icon size={24} className="text-[#22c55e]" />
                      <span className="text-[10px] font-bold text-white uppercase">{item.label}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Rodapé Final */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
          <div className="flex items-center gap-4">
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carrossel;
