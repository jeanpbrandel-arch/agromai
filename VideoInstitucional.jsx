import React from 'react';
import { 
  Video, Terminal, Zap, AlignLeft, Languages, 
  Cpu, BrainCircuit, Settings, Layers, CheckCircle2, Info 
} from 'lucide-react';

// --- COMPONENTE DE APOIO CARD DE PROMPT ---
const PromptSequence = ({ step, text }) => (
  <div className="bg-white/5 border border-white/10 p-3 rounded-lg space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[9px] bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded uppercase font-bold">
        Cena {step}
      </span>
    </div>
    <p className="text-[11px] text-slate-300 font-mono leading-relaxed italic">{text}</p>
  </div>
);

const VideoInstitucional = () => {
  const mainVideoUrl = "https://1drv.ms/v/c/e31113a6d749a6cc/IQRH1mHFRySgT7w-eFQBJXMtAX13VmYeZUgcNoaXndFtLCw";
  const dubbingVideoUrl = "https://1drv.ms/v/c/e31113a6d749a6cc/IQQkunz3QXQiRKRQPJe9ypxiAU1Zkb_LSgASTEnlsQcujXw";

  const narrationLines = [
    { step: "01", text: "O campo evoluiu. A tecnologia agora é a semente de cada grande decisão." },
    { step: "02", text: "Apresentamos a Agromai: inteligência geoespacial conectando dados ao produtor rural." },
    { step: "03", text: "Eficiência, precisão e rentabilidade. O futuro do agronegócio é digital." }
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#22c55e]">
              <Video size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Módulo 03</span>
            </div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
              Vídeo <span className="text-[#22c55e]">Institucional</span>
            </h1>
          </div>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna do Vídeo (Main) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group">
              <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Final Render • 4K</span>
                </div>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe 
                  src={mainVideoUrl} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  allowFullScreen 
                  title="Agromai Main Video"
                />
              </div>
            </div>
          </div>

          {/* Coluna de Engenharia de Prompt */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <Terminal size={18} className="text-[#22c55e]" />
              <h3 className="text-sm font-bold uppercase">Prompt Engineering</h3>
            </div>
            <div className="space-y-3">
              {narrationLines.map((line, index) => (
                <PromptSequence key={index} step={line.step} text={line.text} />
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Dublagem */}
        <div className="space-y-6 pt-12 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <Languages size={24} className="text-[#22c55e]" />
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Engenharia de Voz & Ajuste de Tom</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 group text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#22c55e]/50 transition-all">
                <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                  <span className="text-xs font-bold text-white uppercase">Speech-to-Speech Dublagem com ElevenLabs</span>
                </div>
                <div className="aspect-video w-full bg-black">
                  <iframe 
                    src={dubbingVideoUrl} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    allowFullScreen 
                    title="Agromai Dubbing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoInstitucional;
