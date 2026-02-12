import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Big 404 number */}
        <div className="relative mb-6">
          <span className="text-[10rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter text-primary/10 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-accent" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
          Página no encontrada
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
          La página <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono text-accent">{location.pathname}</code> no existe o fue movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Ir al inicio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
            <button type="button" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Volver atrás
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
