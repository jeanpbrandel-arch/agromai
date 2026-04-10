import React from 'react';
import { 
  Video, 
  Terminal,
  Zap,
  AlignLeft,
  Languages,
  Cpu,
  BrainCircuit,
  Settings,
  Layers,
  CheckCircle2,
  Info
} from 'lucide-react';

// --- COMPONENTE DE APOIO: CARD DE PROMPT ---
const PromptSequence = ({ step, text }) => (
  <div className="bg-white/5 border border-white/10 p-3 rounded-lg space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[9px] bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded uppercase font-bold">Cena {step}</span>
    </div>
    <p className="text-[11px] text-slate-300 font-mono leading-relaxed italic">{text}</p>
  </div>
);

const VideoInstitucional = () => {
  const mainVideoUrl = "https://1drv.ms/v/c/e31113a6d749a6cc/IQRH1mHFRySgT7w-eFQBJXMtAX13VmYeZUgcNoaXndFtLCw";
  const dubbingVideoUrl = "https://1drv.ms/v/c/e31113a6d749a6cc/IQQkunz3QXQiRKRQPJe9ypxiAU1Zkb_LSgASTEnlsQcujXw";

  const narrationLines = [
    "Todos os dias, o campo começa com decisões.",
    "Decisões que impactam produtividade, custo e resultado.",
    "Hoje, essas decisões não dependem apenas da experiência.",
    "Elas são guiadas por dados.",
    "Enquanto o trabalho acontece, a tecnologia atua em cada detalhe.",
    "Monitorando áreas, identificando padrões e antecipando cenários.",
    "Do campo ao satélite, cada informação se conecta.",
    "Transformando imagens em inteligência.",
    "E inteligência em ação.",
    "Com isso, o produtor ganha clareza.",
    "Reduz incertezas.",
    "E toma decisões com mais segurança.",
    "No final do dia, o resultado é mais do que uma boa colheita.",
    "É controle, eficiência e evolução contínua.",
    "Agromai. Inteligência aplicada ao agro."
  ];

  const veoPrompts = [
    "A silhouette of a male farmer climbing into a large tractor in a vast field during a golden sunrise, cinematic lighting, 4k.",
    "Aerial view of a red tractor plowing a dark soil field at dawn, creating long shadows, high resolution.",
    "Top-down drone shot of a person standing in a green cornfield holding a digital tablet, slow zoom out.",
    "A satellite orbiting Earth with solar panels extended, transitioning into a digital overlay of 'Smart Agriculture' with data points over a lush orchard.",
    "A young Asian woman in a plaid shirt examining rice stalks while holding a tablet in a sunny field.",
    "A man in a plaid shirt working on a tablet amidst tall, dry corn plants, sun flare effect.",
    "Close-up of a farmer in a hat driving a vintage tractor during sunset, warm orange glow, silhouette style.",
    "A happy female farmer in a red plaid shirt and cap carrying a wooden crate full of fresh vegetables on a dirt road between cornfields at sunset.",
    "Futuristic digital logo animation for 'AgromAI', featuring glowing green circuit lines and purple 3D text against a black background."
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans text-slate-200">
      <div className="max-w-6xl mx-auto space-y-12 mb-20">
        
        {/* Cabeçalho Unificado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-[#22c55e] pl-6 text-left">
          <div>
            <div className="flex items-center gap-2 text-[#22c55e] mb-1">
              <span className="animate-pulse">●</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">IA Audiovisual Showcase</span>
            </div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Agromai: Do Conceito ao Render</h1>
            <p className="text-slate-400 text-sm">Documentação completa dos desafios de produção IA</p>
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-4 shrink-0">
             <div className="h-6 w-px bg-white/10"></div>
             <Cpu size={20} className="text-[#22c55e]" />
          </div>
        </div>

        {/* SEÇÃO 01: VÍDEO INSTITUCIONAL */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)]">01</div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Vídeo Institucional (Workflow Híbrido)</h2>
          </div>

          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e]/20 to-purple-500/20 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-left">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/0.02">
                <div className="flex items-center gap-3">
                  <Video size={16} className="text-[#22c55e]" />
                  <span className="text-[11px] font-bold text-slate-200 uppercase tracking-widest">Resultado Final: Storytelling Profissional</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-slate-500 font-mono text-[10px]">
                  <span>VEO • GOOGLE VIDS</span>
                </div>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe src={mainVideoUrl} width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen title="Agromai Main"></iframe>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-[#22c55e]/15 to-[#111]/80 border border-[#22c55e]/30 rounded-2xl p-8 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers size={80} className="text-[#22c55e]" />
              </div>
              <h4 className="text-lg font-bold text-[#22c55e] mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                <Settings size={20} /> Escolha das ferramentas
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Para este projeto, optei por um <span className="text-white font-bold">workflow híbrido</span>. Embora possa utilizar stacks como Veo, HeyGen e Runway para cenas específicas, utilizei o <span className="text-white font-bold">Google Vids</span> para a montagem final por causa da consistência estética e do ritmo de edição. No agronegócio, a precisão visual é chave. Minha prioridade foi o <span className="text-[#22c55e] font-bold">Storytelling Profissional</span>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-400 leading-tight">Ritmo de edição calibrado para a cadência da locução institucional.</p>
                </div>
                <div className="flex items-start gap-3 bg-black/30 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-400 leading-tight">Curadoria de cenas para evitar distorções típicas de IA generativa.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between text-left">
              <div>
                <h4 className="text-[11px] font-bold text-white uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2">
                   <BrainCircuit size={14} className="text-[#22c55e]" /> Mindset do Criador
                </h4>
                <p className="text-[12px] text-slate-300 leading-relaxed italic border-l-2 border-[#22c55e]/30 pl-4">
                  Sempre fui vidrado em inteligência artificial. Se pudesse, testaria todas as ferramentas de uma vez. Minha intenção aqui é me desafiar a dominar essas ferramentas para entregar um projeto que respira inovação.
                </p>
              </div>
              <div className="mt-6 p-3 bg-black/40 rounded-xl border border-white/5 flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e]">
                    <Zap size={16} />
                 </div>
                 <div className="text-[10px] text-slate-400 uppercase tracking-tighter leading-tight">
                   Foco em performance e novos workflows
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <section className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-xs font-bold text-white mb-4 flex items-center gap-2 uppercase">
                  <AlignLeft size={16} className="text-[#22c55e]" /> Roteiro Narrativo
                </h4>
                <div className="space-y-2 bg-black/60 p-5 rounded-xl border border-white/5 h-[350px] overflow-y-auto custom-scrollbar">
                  {narrationLines.map((line, idx) => (
                    <p key={idx} className="text-[11px] text-slate-400 leading-relaxed font-mono">
                      <span className="text-[#22c55e]/30 mr-3">{String(idx + 1).padStart(2, '0')}</span>
                      {line}
                    </p>
                  ))}
                </div>
              </section>

              <section className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 text-left">
                <h4 className="text-xs font-bold text-white mb-4 flex items-center gap-2 uppercase">
                  <Terminal size={16} className="text-[#22c55e]" /> Engenharia de Prompt
                </h4>
                <div className="space-y-3 h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                  {veoPrompts.map((prompt, idx) => (
                    <PromptSequence key={idx} step={String(idx + 1).padStart(2, '0')} text={prompt} />
                  ))}
                </div>
              </section>
          </div>
        </div>

        {/* SEÇÃO 02: ENGENHARIA DE VOZ */}
        <div className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)]">02</div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider">Engenharia de Voz & Ajuste de Tom</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 group text-left">
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#22c55e]/50 transition-all shadow-xl">
                <div className="p-4 bg-white/0.02 border-b border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Languages size={18} className="text-[#22c55e]" />
                    <span className="text-xs font-bold text-white uppercase tracking-tighter">Speech-to-Speech: Dublagem com ElevenLabs (PT-BR)</span>
                  </div>
                </div>
                <div className="aspect-video w-full bg-black">
                  <iframe src={dubbingVideoUrl} width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen title="Agromai Dub"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-[0.2em]">
        </div>

      </div>
    </div>
  );
};

export default VideoInstitucional;
