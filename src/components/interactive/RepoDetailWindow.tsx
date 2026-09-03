import { ExternalLink, Calendar, Code2, Tag, Info } from 'lucide-react';
import { type GithubRepo } from '../../utils/github';
import { InteractiveWindow } from './InteractiveWindow';

interface RepoDetailWindowProps {
  repo: GithubRepo | null;
  onClose: () => void;
}

export const RepoDetailWindow = ({ repo, onClose }: RepoDetailWindowProps) => {
  if (!repo) return null;

  return (
    <InteractiveWindow
      isOpen={!!repo}
      onClose={onClose}
      title={`${repo.name} — REPOSITORY DETAILS`}
      category="GITHUB REPOSITORY"
      maxWidth="max-w-3xl"
    >
      <div className="flex flex-col gap-6 font-body">
        {/* Header Summary */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className={`px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${
              repo.fork 
                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' 
                : 'bg-luxury/10 border-luxury/30 text-luxury'
            }`}>
              {repo.customLabel}
            </span>
            <span className="text-muted flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Pushed {new Date(repo.updated_at).toLocaleDateString()}</span>
            </span>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl text-text mb-1">{repo.name}</h3>
            <span className="font-mono text-xs text-muted-dark">{repo.full_name}</span>
          </div>

          <p className="text-sm text-muted leading-relaxed">
            {repo.description}
          </p>

          {/* Fork Notice Caution */}
          {repo.fork && (
            <div className="p-3.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300/90 font-mono text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>FORK NOTICE:</strong> This repository is a public fork of Mintplex Labs' AnythingLLM workspace used for exploring document retrieval, local vector search, and AI assistant configurations.
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-line font-mono text-xs">
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="w-4 h-4" />
              <span>{repo.language || 'Code Repository'}</span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-white font-mono font-bold px-5 py-2 rounded-full transition-all shadow-md text-xs"
            >
              <span>VIEW ON GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Technical Overview & Summary Note */}
        {repo.summaryNote && (
          <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col gap-2">
            <span className="font-mono text-xs text-luxury font-semibold uppercase tracking-wider">
              PORTFOLIO LAB NOTE
            </span>
            <p className="text-sm text-muted leading-relaxed">
              {repo.summaryNote}
            </p>
          </div>
        )}

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div>
            <span className="font-mono text-xs text-muted-dark uppercase tracking-widest block mb-2">
              REPOSITORY TAGS:
            </span>
            <div className="flex flex-wrap gap-2">
              {repo.topics.map((t) => (
                <span key={t} className="font-mono text-xs text-muted bg-surface border border-line-light px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3 text-luxury" />
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </InteractiveWindow>
  );
};
