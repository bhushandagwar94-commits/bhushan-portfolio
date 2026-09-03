import { Database, Cpu, FileText, Search, Scan, Layers, Lock } from 'lucide-react';
import { type Project } from '../../data/projects';

interface ProjectVisualProps {
  type: Project['visualType'];
  title: string;
}

export const ProjectVisual = ({ type, title }: ProjectVisualProps) => {
  switch (type) {
    case 'searchbox':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-luxury font-semibold">
              <Search className="w-3 h-3" />
              <span>SEARCH ENGINE</span>
            </div>
            <span className="text-accent bg-accent/10 border border-accent/20 px-1.5 py-0.2 rounded text-[9px]">tsvector</span>
          </div>

          <div className="p-1.5 rounded-lg bg-surface border border-line flex items-center justify-between text-text text-[10px] truncate">
            <span className="text-luxury truncate">SELECT * FROM customers</span>
            <span className="text-accent font-semibold ml-1">ILIKE</span>
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>SUPABASE PG</span>
            <span className="text-luxury">SEARCH → RESULTS</span>
          </div>
        </div>
      );

    case 'scancard':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          {/* Subtle Background Laser Scanner Ray */}
          <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0 opacity-20 bg-gradient-to-b from-accent/20 via-transparent to-transparent animate-pulse" />

          <div className="relative z-10 flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-luxury font-semibold">
              <Scan className="w-3 h-3" />
              <span>TESSERACT OCR</span>
            </div>
            <span className="text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-1.5 py-0.2 rounded text-[9px]">bbox.json</span>
          </div>

          <div className="relative z-10 p-1.5 rounded-lg bg-surface/90 backdrop-blur-sm border border-line flex items-center justify-between text-text text-[10px]">
            <span className="font-bold text-luxury truncate">DOCUMENT SCAN</span>
            <span className="text-accent font-semibold">IMAGE → OCR → DATA</span>
          </div>

          <div className="relative z-10 flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>EXPRESS / MULTER</span>
            <span className="text-accent">JSON PARSER</span>
          </div>
        </div>
      );

    case 'anythingllm':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-yellow-400 font-semibold">
              <Cpu className="w-3 h-3" />
              <span>ANYTHINGLLM</span>
            </div>
            <span className="text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-1.5 py-0.2 rounded text-[9px]">FORK</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="p-1 rounded-lg bg-surface border border-line flex flex-col items-center justify-center">
              <FileText className="w-3 h-3 text-luxury" />
              <span className="text-[8px] text-text font-bold">DOC</span>
            </div>
            <div className="p-1 rounded-lg bg-surface border border-line flex flex-col items-center justify-center">
              <Database className="w-3 h-3 text-accent" />
              <span className="text-[8px] text-text font-bold">RAG</span>
            </div>
            <div className="p-1 rounded-lg bg-surface border border-line flex flex-col items-center justify-center">
              <Cpu className="w-3 h-3 text-violet" />
              <span className="text-[8px] text-text font-bold">AI</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>Mintplex Base</span>
            <span className="text-luxury">DOC → RAG → AI</span>
          </div>
        </div>
      );

    case 'report':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-luxury font-semibold">
              <FileText className="w-3 h-3" />
              <span>REPORT ENGINE</span>
            </div>
            <span className="text-accent bg-accent/10 border border-accent/20 px-1.5 py-0.2 rounded text-[9px]">LLM SYNTHESIS</span>
          </div>

          <div className="p-1.5 rounded-lg bg-surface border border-line flex items-center justify-between text-text text-[10px]">
            <span className="font-bold text-luxury truncate">DATA → AI → REPORT</span>
            <span className="text-accent text-[9px]">SCHEMA</span>
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>PROMPT PIPELINE</span>
            <span className="text-luxury">DOCX SYNTHESIS</span>
          </div>
        </div>
      );

    case 'ocr_iteration':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-luxury font-semibold">
              <Layers className="w-3 h-3" />
              <span>PARSER LAB</span>
            </div>
            <span className="text-muted-dark bg-surface border border-line px-1.5 py-0.2 rounded text-[9px]">ITERATION</span>
          </div>

          <div className="p-1.5 rounded-lg bg-surface border border-line flex items-center justify-between text-text text-[10px]">
            <span className="font-medium truncate">PDF / DOCX Ingest</span>
            <span className="text-accent font-semibold text-[9px]">Mammoth</span>
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>EXPRESS REST</span>
            <span>MULTI-PARSER</span>
          </div>
        </div>
      );

    case 'enerview':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-luxury font-semibold">
              <Cpu className="w-3 h-3" />
              <span>ENERVIEW</span>
            </div>
            <span className="text-muted-dark bg-surface border border-line px-1.5 py-0.2 rounded text-[9px]">TELEMETRY</span>
          </div>

          <div className="flex items-end gap-1 h-6 px-2">
            <div className="w-1/6 bg-luxury/30 h-1/2 rounded-t" />
            <div className="w-1/6 bg-luxury/50 h-3/4 rounded-t" />
            <div className="w-1/6 bg-accent/60 h-full rounded-t" />
            <div className="w-1/6 bg-luxury/40 h-2/3 rounded-t" />
            <div className="w-1/6 bg-accent/80 h-5/6 rounded-t" />
            <div className="w-1/6 bg-luxury/60 h-1/2 rounded-t" />
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>METRICS DASHBOARD</span>
            <span className="text-accent">WEB APP</span>
          </div>
        </div>
      );

    case 'agricultural':
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col justify-between font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors">
          <div className="flex items-center justify-between pb-1 border-b border-line text-muted">
            <div className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Layers className="w-3 h-3 text-emerald-400" />
              <span>FARM RENTAL PLATFORM</span>
            </div>
            <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded text-[9px]">FULL STACK</span>
          </div>

          <div className="flex items-center justify-between gap-1 text-center font-mono text-[8px]">
            <div className="p-1 rounded-lg bg-surface border border-line flex-1">
              <span className="text-muted block text-[7px]">EQUIPMENT</span>
              <span className="text-text font-bold">DISCOVERY</span>
            </div>
            <span className="text-muted">→</span>
            <div className="p-1 rounded-lg bg-surface border border-line flex-1">
              <span className="text-muted block text-[7px]">AVAILABILITY</span>
              <span className="text-emerald-400 font-bold">SPECS</span>
            </div>
            <span className="text-muted">→</span>
            <div className="p-1 rounded-lg bg-surface border border-line flex-1">
              <span className="text-muted block text-[7px]">REQUEST</span>
              <span className="text-accent font-bold">RENTAL</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-muted text-[9px] pt-1 border-t border-line">
            <span>FARMING MACHINERY</span>
            <span className="text-emerald-400">RENTAL WORKFLOW</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-24 sm:h-28 rounded-2xl bg-surface-2 border border-line-light p-3 flex flex-col items-center justify-center font-mono text-[10px] select-none relative overflow-hidden group-hover:border-luxury/40 transition-colors text-muted">
          <Lock className="w-5 h-5 text-muted-dark mb-1" />
          <span className="text-text font-semibold truncate max-w-full">{title}</span>
          <span className="text-[8px] text-muted-dark mt-0.5">SOURCE PENDING</span>
        </div>
      );
  }
};
