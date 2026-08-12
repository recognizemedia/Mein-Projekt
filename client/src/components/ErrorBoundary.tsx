import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <AlertTriangle size={44} strokeWidth={1.6} />
          <h2>Etwas ist schiefgelaufen.</h2>
          <p>Bitte lade die Seite neu.</p>
          <button onClick={() => window.location.reload()} className="button button--primary">
            <RotateCcw size={16} /> Seite neu laden
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
