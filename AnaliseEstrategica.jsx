import React from 'react';
import { 
  Target, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Lightbulb, 
  AlertTriangle, 
  Sprout, 
  Globe, 
  BarChart3 
} from 'lucide-react';

// --- COMPONENTE DE APOIO: INFOBOX ---
const InfoBox = ({ icon: Icon, title, content, insight }) => (
  <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl flex items-start gap-4 transition-all hover:border-[#22c55e]/30">
    <div className="bg-[#22c55e]/20 p-2 rounded-lg shrink-0">
      <Icon size={18} className="text-[#22c55e]" />
    </div>
    <div>
      <h5 className="text-[11px] font-bold text-white uppercase tracking-tighter mb-1">{title}</h5>
      <p className="text-xs text-slate-400 mb-2 leading-relaxed">{content}</p>
      <div className="text-[10px] font-bold text-[#22c55e] flex items-center gap-1">
        <span className="animate-pulse text-xs">💡</span> Insight: {insight}
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL: SOBRE A AGROMAI ---
const AnaliseEstrategica = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8 mb-10 text-slate-200">
        
        {/* Header Visual */}
        <div className="border-l-4 border-[#22c55e] pl-4 mb-10">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Panorama Estratégico: Agromai</h1>
          <p className="text-slate-400 text-sm">Análise de Posicionamento e Inteligência de Mercado</p>
        </div>

        {/* Seção: O que a empresa faz */}
        <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-2xl p-6 shadow-xl">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <Sprout size={18} className="text-[#22c55e]" /> 
            Core Business e Atuação
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                A Agromai atua como um hub de soluções para o agronegócio, focada na distribuição de insumos, sementes e defensivos de alta performance. Sua operação vai além da venda, oferecendo consultoria técnica especializada no campo.
              </p>
              <ul className="space-y-2">
                {[
                  "Distribuição especializada de fertilizantes e corretivos",
                  "Consultoria técnica e acompanhamento de safra",
                  "Logística ágil para atendimento rural",
                  "Parcerias com marcas líderes do setor global"
                ].map((item, i) => (
                  <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#22c55e] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-[#22c55e] text-[10px] font-bold uppercase mb-2">Diferencial Identificado:</p>
              <p className="text-sm italic text-white leading-snug">
                "A transição do modelo de revenda tradicional para um parceiro estratégico que entrega produtividade e sustentabilidade ao produtor."
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Informações de Mercado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Público-alvo */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
              <Users size={18} className="text-[#22c55e]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Perfil do Público-Alvo</h4>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-white/5 p-2 rounded border border-white/5 font-bold text-center">Grandes Produtores</div>
                <div className="bg-white/5 p-2 rounded border border-white/5 font-bold text-center">Cooperativas Rurais</div>
              </div>
              <div className="text-xs space-y-2 text-slate-400">
                <p><span className="text-white font-bold">• Geográfico:</span> Foco em regiões de alta produtividade agrícola (MT, GO, PR).</p>
                <p><span className="text-white font-bold">• Comportamental:</span> Produtores que buscam inovação tecnológica e redução de custos operacionais.</p>
                <p><span className="text-white font-bold">• Necessidade:</span> Suporte técnico presencial e previsibilidade de entrega.</p>
              </div>
            </div>
          </div>

          {/* Objetivo de Comunicação */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
              <Target size={18} className="text-[#22c55e]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Objetivos de Comunicação</h4>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="font-bold text-[#22c55e] uppercase text-[10px]">Posicionamento desejado:</p>
              <p className="text-sm text-white italic">"Ser a autoridade técnica que garante o sucesso da colheita."</p>
              <ul className="space-y-1 mt-2">
                <li>• Fortalecer a autoridade digital no LinkedIn e Instagram rurais.</li>
                <li>• Humanizar a marca através de depoimentos de produtores reais.</li>
                <li>• Clarificar a proposta de valor: "Agromai = Rentabilidade".</li>
              </ul>
            </div>
          </div>

          {/* Desafios Identificados */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
              <AlertTriangle size={18} className="text-[#22c55e]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Desafios do Setor e da Marca</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="bg-white/5 p-3 rounded-lg border-l-2 border-[#22c55e]">
                <p className="text-white font-bold mb-1 uppercase text-[10px]">Logística e Prazo</p>
                Garantir que o insumo chegue no "timing" exato da janela de plantio, superando gargalos de infraestrutura.
              </div>
              <div className="bg-white/5 p-3 rounded-lg border-l-2 border-[#22c55e]">
                <p className="text-white font-bold mb-1 uppercase text-[10px]">Educação Tecnológica</p>
                Convencer o produtor tradicional a adotar novas biotecnologias e manejos digitais.
              </div>
              <div className="bg-white/5 p-3 rounded-lg border-l-2 border-[#22c55e]">
                <p className="text-white font-bold mb-1 uppercase text-[10px]">Volatilidade de Mercado</p>
                Gerenciar a flutuação de preços de commodities e fertilizantes mantendo margens competitivas.
              </div>
            </div>
          </div>
        </div>

        {/* Resumo de Inteligência */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="text-[#22c55e]" size={22} /> Pilares de Crescimento
            </h3>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Mapeamento Agromai</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoBox 
              icon={Globe} 
              title="Expansão Geográfica" 
              content="Abertura de novas unidades em polos agrícolas estratégicos para reduzir distância logística."
              insight="Otimização de rotas reduz o custo do frete em até 15%."
            />
            <InfoBox 
              icon={Lightbulb} 
              title="Inovação em Bioinsumos" 
              content="Foco em produtos biológicos para regeneração do solo e maior resistência a pragas."
              insight="Mercado de biológicos cresce 3x mais que o de químicos."
            />
            <InfoBox 
              icon={Briefcase} 
              title="Consultoria 360º" 
              content="Venda consultiva onde o agrônomo atua como um gestor de dados da fazenda do cliente."
              insight="Retenção de clientes é 40% maior com suporte técnico ativo."
            />
            <InfoBox 
              icon={TrendingUp} 
              title="Marketing de Resultados" 
              content="Comunicação focada em ROI (Retorno sobre Investimento) para o produtor rural."
              insight="O produtor rural decide baseado em números e prova social local."
            />
          </div>
        </div>

        {/* Rodapé */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-[0.2em]">
        </div>
      </div>
    </div>
  );
};

export default AnaliseEstrategica;
