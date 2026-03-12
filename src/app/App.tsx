import { AnnotationWorkspace } from "./components/annotation/AnnotationWorkspace";
import { LoginPage } from "./components/auth/LoginPage";
import { useAuth } from "./context/AuthContext";

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return <AnnotationWorkspace />;
}

export default function App() {
  return <AppContent />;
}
