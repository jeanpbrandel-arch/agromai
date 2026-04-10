import React from 'react';
import { 
  Target, 
  Layers, 
  Cpu, 
  Workflow, 
  CheckCircle2, 
  Video, 
  FileText, 
  Mic, 
  Image as ImageIcon,
  MousePointer2,
  LineChart
} from 'lucide-react';

// --- COMPONENTE DE APOIO: TOOLBADGE ---
const ToolBadge = ({ name, usage }) => (
  <div className="bg-white/[0.03] border border-white/5 p-3 rounded-xl flex items-center gap-3 transition-all hover:border-[#22c55e]/30">
    <div className="bg-[#22c55e]/20 p-2 rounded-lg">
      <Cpu size={16} className="text-[#22c55e]" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-[#22c55e] uppercase tracking-tighter">{name}</p>
      <p className="text-xs text-slate-400">{usage}</p>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL: ESTRATÉGIA DO PROJETO ---
const EstrategiaProjeto = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8 mb-10 text-slate-200">
        
        {/* Header Visual alinhado com o Panorama */}
        <div className="border-l-4 border-[#22c55e] pl-4 mb-10">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Estratégia de Implementação</h1>
          <p className="text-slate-400 text-sm">Planeamento de Ativos e Metodologia de Produção IA</p>
        </div>

        {/* Seção 01: Objetivo do Projeto */}
        <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-2xl p-6 shadow-xl">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Target size={18} className="text-[#22c55e]" /> 
            Objetivo Estratégico
          </h4>
          <div className="bg-white/5 p-4 rounded-xl border border-white/5">
            <p className="text-sm leading-relaxed text-slate-300">
              Simular uma procura real da <span className="text-white font-bold">Agromai</span>: 
              <span className="italic text-[#22c55e]"> "Criar uma campanha institucional explicando como a Agromai utiliza IA e dados de satélite para otimizar o agronegócio."</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* O Que Será Criado */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
              <Layers size={18} className="text-[#22c55e]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Conteúdos (Entregáveis)</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Video size={14} className="text-[#22c55e]" /> Vídeo Institucional
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ImageIcon size={14} className="text-[#22c55e]" /> Carrossel Visual
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Mic size={14} className="text-[#22c55e]" /> Narração via IA
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <FileText size={14} className="text-[#22c55e]" /> Copywriting Técnico
              </div>
            </div>
          </div>

          {/* Metodologia */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
              <Workflow size={18} className="text-[#22c55e]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Metodologia de Trabalho</h4>
            </div>
            <div className="space-y-2">
              {[
                "Pesquisa Aprofundada (Deep Research) sobre Agrotech",
                "Engenharia de Prompt para ativos visuais",
                "Teste e Comparação entre modelos de IA",
                "Refinamento e Montagem Final (UX/UI)"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                  <MousePointer2 size={12} className="text-[#22c55e]" /> {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ferramentas Escolhidas */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="text-[#22c55e]" size={20} /> Stack de Ferramentas de IA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ToolBadge name="Gemini, GPT e Manus 1.6" usage="Raciocínio e Estratégia" />
            <ToolBadge name="Ve0 3.1 e Google Vids" usage="Geração de Vídeo" />
            <ToolBadge name="Manus e Nano Banana 2" usage="Carrossel" />
            <ToolBadge name="ElevenLabs" usage="Voz e Narração" />
          </div>
        </div>

        {/* Diferencial do Projeto */}
        <div className="bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl p-4">
          <h5 className="text-[10px] font-bold text-[#22c55e] uppercase mb-2 tracking-widest">Diferencial Competitivo</h5>
          <p className="text-xs text-slate-300 leading-relaxed">
            Este projeto não é apenas uma demonstração de ferramentas, mas a documentação de um <span className="text-white font-bold">framework de produção</span>. O foco está na rastreabilidade: do prompt inicial ao resultado final, comparando a eficiência de diferentes modelos de IA para o setor agrícola.
          </p>
        </div>

        {/* Rodapé alinhado */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-[0.2em]">
        </div>

      </div>
    </div>
  );
};

export default EstrategiaProjeto;
