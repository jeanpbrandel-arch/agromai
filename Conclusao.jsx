import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Target, 
  Zap, 
  ArrowRight, 
  Trophy, 
  BarChart, 
  Users, 
  Rocket, 
  Search,
  Settings,
  Lightbulb,
  Briefcase
} from 'lucide-react';

const Conclusao = () => {
  const [activeSection, setActiveSection] = useState(null);

  const learnings = [
    { 
      title: "Produção Escalável", 
      desc: "Ferramentas de vídeo e IA aceleram o institucional sem perder qualidade.",
      icon: Rocket 
    },
    { 
      title: "Agilidade Visual", 
      desc: "IA de imagem elimina gargalos de design em campanhas urgentes.",
      icon: Zap 
    },
    { 
      title: "Qualidade de Áudio", 
      desc: "Vozes sintéticas elevam o padrão de narração de forma acessível.",
      icon: Users 
    },
    { 
      title: "Estratégia com LLMs", 
      desc: "Modelos de linguagem como parceiros de brainstorm e roteirização.",
      icon: Lightbulb 
    }
  ];

  const workflowSteps = [
    { label: "Receber Objetivo", icon: Target },
    { label: "Escolher Ferramentas", icon: Settings },
    { label: "Construir Prompts", icon: Cpu },
    { label: "Iterar Rapidamente", icon: ArrowRight },
    { label: "Refinar Resultado", icon: Search },
    { label: "Entregar Asset Final", icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans text-slate-200 text-left">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* HEADER ESTRATÉGICO */}
        <div className="border-l-4 border-[#22c55e] pl-6 space-y-2">
          <div className="flex items-center gap-2 text-[#22c55e]">
            <Trophy size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Finalização de Projeto</span>
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Conclusão & Valor Agregado</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Uma análise reflexiva sobre como a união entre criatividade humana e autonomia de IA pode transformar os processos de marketing da Agromai.
          </p>
        </div>

        {/* PARTE 1: APRENDIZADOS DO PROJETO */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">01. Aprendizados do Projeto</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learnings.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl hover:border-[#22c55e]/30 transition-all group"
              >
                <item.icon className="text-[#22c55e] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-xs font-black text-white uppercase mb-2 tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTE 2: COMO POSSO CONTRIBUIR NA AGROMAI */}
        <section className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Briefcase size={200} className="text-[#22c55e]" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-3">
              <CheckCircle2 className="text-[#22c55e]" /> 02. Como Posso Contribuir
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { label: "Produção rápida de conteúdo com IA", desc: "Redução drástica no tempo entre a ideia e a postagem." },
                { label: "Experimentação contínua", desc: "Busca incessante pelas ferramentas de IA mais eficientes do mercado." },
                { label: "Iteração até o padrão profissional", desc: "Não aceito o 'médio'; uso a IA para polir até a excelência." },
                { label: "Consistência Visual & Estratégica", desc: "Garantia de que a tecnologia serve à marca, e não o contrário." },
                { label: "Novos Fluxos de Trabalho", desc: "Criação de pipelines que escalam a capacidade criativa do time." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#22c55e] shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white uppercase tracking-wide group-hover:text-[#22c55e] transition-colors">{item.label}</p>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTE 3: ABORDAGEM DE TRABALHO (DIFERENCIAL) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">03. Minha Abordagem (Workflow)</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex items-center gap-3 hover:bg-[#22c55e]/10 hover:border-[#22c55e]/40 transition-all cursor-default">
                  <step.icon size={14} className="text-[#22c55e]" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{step.label}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex items-center text-white/10 italic">
                    <ArrowRight size={12} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* PARTE 4: ENCERRAMENTO (O PITCH FINAL) */}
        <section className="bg-gradient-to-br from-[#0a0a0a] to-black border border-[#22c55e]/20 rounded-3xl p-8 text-center space-y-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex bg-[#22c55e]/10 px-4 py-1 rounded-full border border-[#22c55e]/20 mb-2">
               <span className="text-[#22c55e] text-[9px] font-black uppercase tracking-[0.2em]">Visão Final</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed italic">
              "Este projeto não foi apenas sobre gerar imagens ou textos; foi sobre demonstrar a <strong>autonomia</strong> necessária para navegar na era da inteligência artificial. Meu objetivo é converter essa curiosidade tecnológica em <strong>resultados reais</strong>, mantendo a empresa na fronteira da inovação digital."
            </p>
            <div className="pt-4 flex flex-col items-center gap-2">
              <div className="h-px w-12 bg-[#22c55e]/50"></div>
              
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-600 uppercase tracking-[0.2em]">
          
        </div>

      </div>
    </div>
  );
};

export default Conclusao;
