import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, RefreshCw, ArrowDownRight } from 'lucide-react';
import { GITHUB_PROFILE, fetchGithubRepos, type GithubRepo } from '../utils/github';
import { RepoDetailWindow } from '../components/interactive/RepoDetailWindow';
import FoldText from '../components/FoldText';

export const GithubLab = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGithubRepos().then(({ repos }) => {
      if (isMounted) {
        setRepos(repos);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="github" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-6"
        >
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
              08 / GITHUB LAB
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              LIVE REPOSITORY ACTIVITY
            </span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
            <FoldText
              text="LIVE REPOSITORIES"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.035}
              fontSize="clamp(1.875rem, 3.5vw, 2.75rem)"
              fontWeight={800}
              color="#F8FAFC"
            />

            <a
              href={GITHUB_PROFILE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#0A0A0F]/90 hover:bg-[#121218] text-slate-100 hover:text-white px-5 py-2.5 rounded-full font-extrabold text-xs tracking-wide border border-white/20 hover:border-luxury/60 transition-all shadow-lg shrink-0 mb-1"
              title="Visit Bhushan's GitHub Profile"
            >
              <Code2 className="w-4 h-4 text-luxury group-hover:scale-110 transition-transform" />
              <span>VISIT GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          <p className="font-display font-medium text-sm sm:text-base text-luxury italic mb-4">
            "Real code. Real repositories."
          </p>

          {/* Compact Profile Header Strip (Target ~90-110px) */}
          <div className="p-3.5 rounded-2xl glass-card border border-line-light flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center font-bold text-xs">
                GH
              </div>
              <div>
                <span className="font-display font-bold text-sm text-text block">{GITHUB_PROFILE.name}</span>
                <a 
                  href={GITHUB_PROFILE.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline text-[11px] inline-flex items-center gap-1 font-medium"
                >
                  <span>@{GITHUB_PROFILE.username}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <span className="text-muted-dark text-[10px] hidden sm:inline">OFFICIAL GITHUB PRESENCE</span>
          </div>
        </motion.div>

        {/* Curated Repositories Grid (Target Card Height ~170-210px) */}
        {loading ? (
          <div className="p-6 text-center font-mono text-xs text-muted flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-luxury" />
            <span>FETCHING PUBLIC REPOSITORIES...</span>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repos.slice(0, 4).map((repo, idx) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedRepo(repo)}
                  className="cursor-pointer group h-full"
                >
                  <div className="p-4 sm:p-5 rounded-2xl glass-card glass-card-hover border border-line-light flex flex-col justify-between h-full min-h-[170px]">
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-line">
                        <span className={`font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border ${
                          repo.fork 
                            ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' 
                            : 'bg-luxury/10 border-luxury/30 text-luxury'
                        }`}>
                          {repo.customLabel}
                        </span>
                        <span className="font-mono text-[10px] text-muted-dark">{repo.language || 'Repository'}</span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-text mb-1 group-hover:text-luxury transition-colors line-clamp-1">
                        {repo.name}
                      </h3>

                      <p className="font-body text-xs text-muted leading-relaxed line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-line flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-1.5 text-accent text-[10px]">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>PUBLIC REPO</span>
                      </div>

                      <div className="flex items-center gap-1 text-text text-[10px] group-hover:text-luxury transition-colors">
                        <span>INSPECT REPO</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Repositories Link */}
            <div className="mt-5 text-center">
              <a
                href={GITHUB_PROFILE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted hover:text-luxury transition-colors inline-flex items-center gap-1 font-medium"
              >
                <span>VIEW ALL REPOSITORIES ↗</span>
              </a>
            </div>
          </div>
        )}

        {/* Narrative Bottom Transition */}
        <div className="mt-6 pt-3 border-t border-line/40 flex items-center justify-between font-mono text-xs text-muted">
          <div className="flex items-center gap-2 text-luxury font-semibold">
            <span>INTERACTIVE ENGINE</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-accent" />
          </div>
          <span className="text-muted-dark text-[10px]">BHUSHAN_AI TERMINAL</span>
        </div>

      </div>

      {/* Repo Detail Window Modal */}
      <RepoDetailWindow repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
    </section>
  );
};
