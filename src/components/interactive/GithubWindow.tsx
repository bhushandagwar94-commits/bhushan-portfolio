import { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { GITHUB_PROFILE, fetchGithubRepos, type GithubRepo } from '../../utils/github';
import { InteractiveWindow } from './InteractiveWindow';
import { RepoDetailWindow } from './RepoDetailWindow';

interface GithubWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubWindow = ({ isOpen, onClose }: GithubWindowProps) => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    let isMounted = true;
    setLoading(true);

    fetchGithubRepos().then(({ repos }) => {
      if (isMounted) {
        setRepos(repos);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  return (
    <>
      <InteractiveWindow
        isOpen={isOpen}
        onClose={onClose}
        title={`@${GITHUB_PROFILE.username} — COMMAND CENTER`}
        category="GITHUB SYSTEM PROFILE"
        maxWidth="max-w-4xl"
      >
        <div className="flex flex-col gap-6 font-body">
          {/* Top Profile Header */}
          <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center font-mono font-bold text-lg">
                GH
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-text">{GITHUB_PROFILE.name}</h3>
                <a
                  href={GITHUB_PROFILE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline flex items-center gap-1 mt-0.5"
                >
                  <span>@{GITHUB_PROFILE.username}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <a
              href={GITHUB_PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-text text-bg hover:bg-white font-mono font-bold px-5 py-2.5 rounded-full text-xs transition-all shadow-md"
            >
              <span>VIEW GITHUB PROFILE ↗</span>
            </a>
          </div>

          {/* Repositories List */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs mb-4">
              <span className="text-luxury font-semibold uppercase tracking-wider">PUBLIC REPOSITORIES</span>
              <span className="text-muted">SOURCE: REAL GITHUB API</span>
            </div>

            {loading ? (
              <div className="p-8 text-center font-mono text-xs text-muted flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-luxury" />
                <span>FETCHING REPOSITORIES FROM GITHUB...</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <div
                    key={repo.name}
                    onClick={() => setSelectedRepo(repo)}
                    className="p-5 rounded-2xl bg-surface border border-line-light hover:border-luxury/40 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                        <span className={`px-2.5 py-0.5 rounded border font-semibold ${
                          repo.fork ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 'bg-luxury/10 border-luxury/30 text-luxury'
                        }`}>
                          {repo.customLabel}
                        </span>
                        <span className="text-muted-dark">{repo.language || 'Repo'}</span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-text group-hover:text-luxury transition-colors mb-2">
                        {repo.name}
                      </h4>

                      <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
                        {repo.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-line flex items-center justify-between font-mono text-[10px] text-muted">
                      <span>INSPECT REPO</span>
                      <ExternalLink className="w-3 h-3 group-hover:text-luxury transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </InteractiveWindow>

      {/* Repository Detail Modal Window */}
      <RepoDetailWindow repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
    </>
  );
};
