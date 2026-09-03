import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Cpu, Code2, Briefcase, FolderGit2, BookOpen, GraduationCap, Mail, FileDown, ExternalLink, Terminal, Eye, X, GitFork } from 'lucide-react';
import { profile } from '../data/profile';
import { GITHUB_PROFILE } from '../utils/github';
import { handleEmailClick } from '../utils/email';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  recruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  onOpenGithubWindow?: () => void;
}

export const CommandPalette = ({
  isOpen,
  onClose,
  recruiterMode,
  onToggleRecruiterMode,
  onOpenGithubWindow
}: CommandPaletteProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { id: 'hero', title: 'Go to Home / Overview', category: 'Navigation', icon: User, action: () => { window.location.href = '#hero'; onClose(); } },
    { id: 'about', title: 'Go to About & Philosophy', category: 'Navigation', icon: User, action: () => { window.location.href = '#about'; onClose(); } },
    { id: 'focus', title: 'Go to Expertise & Core Focus', category: 'Navigation', icon: Cpu, action: () => { window.location.href = '#focus'; onClose(); } },
    { id: 'skills', title: 'Go to Tech Stack & Repertoire', category: 'Navigation', icon: Code2, action: () => { window.location.href = '#skills'; onClose(); } },
    { id: 'experience', title: 'Go to Experience & Timeline', category: 'Navigation', icon: Briefcase, action: () => { window.location.href = '#experience'; onClose(); } },
    { id: 'projects', title: 'Go to Case Studies & Projects', category: 'Navigation', icon: FolderGit2, action: () => { window.location.href = '#projects'; onClose(); } },
    { id: 'github', title: 'Go to GitHub & Open Source Lab', category: 'Navigation', icon: GitFork, action: () => { window.location.href = '#github'; onClose(); } },
    { id: 'research', title: 'Go to Applied Research & Papers', category: 'Navigation', icon: BookOpen, action: () => { window.location.href = '#research'; onClose(); } },
    { id: 'terminal', title: 'Go to BHUSHAN_AI Terminal', category: 'Navigation', icon: Terminal, action: () => { window.location.href = '#terminal'; onClose(); } },
    { id: 'education', title: 'Go to Academic Background', category: 'Navigation', icon: GraduationCap, action: () => { window.location.href = '#education'; onClose(); } },
    { id: 'contact', title: 'Go to Contact & Socials', category: 'Navigation', icon: Mail, action: () => { window.location.href = '#contact'; onClose(); } },
    { id: 'github-cmd', title: 'Open GitHub Command Center', category: 'GitHub', icon: GitFork, action: () => { if (onOpenGithubWindow) onOpenGithubWindow(); onClose(); } },
    { id: 'github-profile', title: 'Open Official GitHub Profile ↗', category: 'GitHub', icon: ExternalLink, action: () => { window.open(GITHUB_PROFILE.url, '_blank'); onClose(); } },
    { id: 'anything-llm', title: 'Inspect anything-llm (FORK)', category: 'GitHub Repo', icon: GitFork, action: () => { window.open(`${GITHUB_PROFILE.url}/anything-llm`, '_blank'); onClose(); } },
    { id: 'search-box', title: 'Inspect Search-Box (ORIGINAL)', category: 'GitHub Repo', icon: Code2, action: () => { window.open(`${GITHUB_PROFILE.url}/Search-Box`, '_blank'); onClose(); } },
    { id: 'resume', title: 'Download Resume (PDF)', category: 'Action', icon: FileDown, action: () => { window.open(profile.resume, '_blank'); onClose(); } },
    { id: 'email', title: 'Send Email to Bhushan', category: 'Action', icon: Mail, action: () => { handleEmailClick(undefined, profile.email); onClose(); } },
    { id: 'linkedin', title: 'Open LinkedIn Profile', category: 'Action', icon: ExternalLink, action: () => { window.open(profile.linkedin, '_blank'); onClose(); } },
    { id: 'recruiter', title: recruiterMode ? 'Deactivate Recruiter Mode' : 'Activate Recruiter Mode', category: 'Preference', icon: Eye, action: () => { onToggleRecruiterMode(); onClose(); } },
  ];

  const filteredCommands = commands.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#0A0A0C] border border-line-light w-full max-w-2xl rounded-[28px] overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header Search Input */}
          <div className="p-4 border-b border-line flex items-center gap-3">
            <Search className="w-5 h-5 text-luxury shrink-0" />
            <input 
              type="text" 
              placeholder="Type a command or query... (e.g. 'github', 'anything-llm', 'resume')" 
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
              className="bg-transparent border-none outline-none text-text placeholder-muted text-sm font-body w-full"
            />
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full bg-surface-2 border border-line text-muted hover:text-text transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-[60vh] overflow-y-auto p-3 flex flex-col gap-1">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-muted font-mono text-xs">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-surface-2 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-surface-2 border border-line-light flex items-center justify-center text-muted group-hover:text-luxury group-hover:border-luxury/30 transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-body text-sm font-medium text-text group-hover:text-luxury transition-colors">
                          {cmd.title}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-muted-dark uppercase tracking-widest px-2.5 py-1 rounded bg-surface border border-line">
                      {cmd.category}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="p-3 bg-surface border-t border-line flex items-center justify-between font-mono text-[10px] text-muted-dark">
            <div className="flex items-center gap-3">
              <span><kbd className="bg-surface-2 border border-line px-1.5 py-0.5 rounded text-muted">ESC</kbd> to close</span>
              <span><kbd className="bg-surface-2 border border-line px-1.5 py-0.5 rounded text-muted">↑↓</kbd> to navigate</span>
            </div>
            <span className="text-luxury">BHUSHAN DAGWAR // COMMAND PALETTE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
