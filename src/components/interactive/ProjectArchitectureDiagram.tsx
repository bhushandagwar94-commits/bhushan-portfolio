import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { type ArchitectureNode } from '../../data/projects';

interface ProjectArchitectureDiagramProps {
  nodes?: ArchitectureNode[];
}

export const ProjectArchitectureDiagram = ({ nodes = [] }: ProjectArchitectureDiagramProps) => {
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(nodes[0] || null);

  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-2 border border-line-light flex flex-col gap-6 font-body">
      {/* Diagram Header */}
      <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-line">
        <div className="flex items-center gap-2 text-text font-bold uppercase tracking-wider">
          <Layers className="w-4 h-4 text-luxury" />
          <span>INTERACTIVE SYSTEM ARCHITECTURE</span>
        </div>
        <span className="text-muted text-[11px] hidden sm:inline">HOVER A NODE TO INSPECT ROLE</span>
      </div>

      {/* Nodes Flow Pipeline */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2">
        {nodes.map((node, idx) => {
          const isSelected = activeNode?.id === node.id;
          return (
            <div key={node.id} className="flex items-center gap-3 sm:gap-4">
              <button
                onMouseEnter={() => setActiveNode(node)}
                onClick={() => setActiveNode(node)}
                data-cursor="INSPECT"
                className={`relative px-4 py-3 rounded-2xl border transition-all duration-300 flex flex-col items-center min-w-[120px] sm:min-w-[140px] text-center ${
                  isSelected
                    ? 'bg-luxury/15 border-luxury shadow-lg shadow-luxury/10 scale-105'
                    : 'bg-surface border-line hover:border-luxury/40 hover:bg-surface-2'
                }`}
              >
                {/* Node Number */}
                <span className={`font-mono text-[10px] font-bold mb-1 ${isSelected ? 'text-luxury' : 'text-accent'}`}>
                  0{idx + 1}
                </span>

                {/* Node Title */}
                <span className="font-display font-bold text-xs text-text leading-tight mb-1">
                  {node.label}
                </span>

                {/* Sublabel */}
                <span className="font-mono text-[9px] text-muted truncate max-w-[120px]">
                  {node.sublabel}
                </span>

                {/* Selected Indicator Light */}
                {isSelected && (
                  <motion.span 
                    layoutId="activeNodeGlow"
                    className="absolute -bottom-1 w-8 h-[2px] bg-luxury rounded-full shadow-[0_0_8px_#C9B27C]" 
                  />
                )}
              </button>

              {/* Arrow Connector between nodes */}
              {idx < nodes.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-dark shrink-0 hidden sm:block" />
              )}
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Glass Tooltip Panel */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-2xl bg-surface border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-luxury font-bold text-sm block font-display">{activeNode.label}</span>
                <p className="text-muted font-body text-xs mt-1 leading-relaxed">{activeNode.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-surface-2 border border-line-light px-3.5 py-1.5 rounded-full text-accent text-[11px] font-medium shrink-0">
              <Cpu className="w-3.5 h-3.5" />
              <span>{activeNode.tech}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
