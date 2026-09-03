import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050507] text-[#F5F5F5] p-8 font-mono flex items-center justify-center">
          <div className="max-w-2xl bg-[#0C0D11] p-6 border border-[#1C1E25] rounded shadow-2xl">
            <h1 className="text-xl text-[#5CC8FF] mb-4">React Error Boundary Caught a Crash</h1>
            <pre className="text-sm text-[#8B8F98] whitespace-pre-wrap overflow-auto">
              {this.state.error?.message || 'Unknown error'}
            </pre>
            {this.state.error?.stack && (
              <pre className="mt-4 text-xs text-[#8B8F98]/70 whitespace-pre-wrap overflow-auto border-t border-[#1C1E25] pt-4">
                {this.state.error.stack}
              </pre>
            )}
            <button 
              className="mt-6 px-4 py-2 bg-[#5CC8FF] text-[#050507] text-sm hover:bg-[#5CC8FF]/80 rounded transition-colors"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
