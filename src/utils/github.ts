export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  customLabel: 'ORIGINAL' | 'FORK / CONTRIBUTION' | 'OPEN SOURCE';
  summaryNote?: string;
}

export const GITHUB_PROFILE = {
  username: 'bhushandagwar94-commits',
  url: 'https://github.com/bhushandagwar94-commits',
  name: 'Bhushan Dagwar',
  tagline: 'AI Engineer / Applied Systems Specialist'
};

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 1231939440,
    name: 'anything-llm',
    full_name: 'bhushandagwar94-commits/anything-llm',
    html_url: 'https://github.com/bhushandagwar94-commits/anything-llm',
    description: 'The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.',
    fork: true,
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript / Node.js',
    updated_at: '2026-05-07T12:37:47Z',
    topics: ['ai', 'rag', 'llm', 'vector-search', 'document-chat'],
    customLabel: 'FORK / CONTRIBUTION',
    summaryNote: 'Fork of Mintplex Labs AnythingLLM platform used for exploring RAG vector search, local LLM integrations, and document intelligence workflows.'
  },
  {
    id: 1204851956,
    name: 'Search-Box',
    full_name: 'bhushandagwar94-commits/Search-Box',
    html_url: 'https://github.com/bhushandagwar94-commits/Search-Box',
    description: 'Search box web query interface and front-end component repository.',
    fork: false,
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript / HTML',
    updated_at: '2026-04-08T11:52:56Z',
    topics: ['search-ui', 'web-components', 'javascript'],
    customLabel: 'ORIGINAL',
    summaryNote: 'Original open-source web search query UI component implementation.'
  }
];

const CACHE_KEY = 'bhushan_github_repos_cache_v1';
const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export async function fetchGithubRepos(): Promise<{ repos: GithubRepo[]; source: 'api' | 'cache' | 'fallback' }> {
  if (typeof window === 'undefined') {
    return { repos: FALLBACK_REPOS, source: 'fallback' };
  }

  // 1. Check local cache first
  try {
    const cachedStr = sessionStorage.getItem(CACHE_KEY);
    if (cachedStr) {
      const cachedData = JSON.parse(cachedStr);
      if (Date.now() - cachedData.timestamp < CACHE_EXPIRY_MS && Array.isArray(cachedData.repos)) {
        return { repos: cachedData.repos, source: 'cache' };
      }
    }
  } catch {
    // Ignore cache read errors
  }

  // 2. Fetch fresh public data from GitHub API
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_PROFILE.username}/repos?sort=updated&per_page=10`);
    if (res.ok) {
      const rawData = await res.json();
      if (Array.isArray(rawData) && rawData.length > 0) {
        const processed: GithubRepo[] = rawData.map((item: any) => {
          const isFork = item.fork === true;
          return {
            id: item.id,
            name: item.name,
            full_name: item.full_name,
            html_url: item.html_url,
            description: item.description || (item.name === 'Search-Box' ? 'Search box web query interface and component.' : 'Public GitHub repository'),
            fork: isFork,
            stargazers_count: item.stargazers_count || 0,
            forks_count: item.forks_count || 0,
            language: item.language || (item.name === 'anything-llm' ? 'JavaScript' : 'Web UI'),
            updated_at: item.updated_at,
            topics: item.topics || [],
            customLabel: isFork ? 'FORK / CONTRIBUTION' : 'ORIGINAL',
            summaryNote: item.name === 'anything-llm' 
              ? 'Fork of Mintplex Labs AnythingLLM platform used for exploring RAG vector search, local LLM integrations, and document intelligence workflows.'
              : 'Original open-source web search query UI component implementation.'
          };
        });

        // Cache in sessionStorage
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          repos: processed
        }));

        return { repos: processed, source: 'api' };
      }
    }
  } catch {
    // API failed or offline
  }

  // 3. Fallback to reliable local static data
  return { repos: FALLBACK_REPOS, source: 'fallback' };
}
