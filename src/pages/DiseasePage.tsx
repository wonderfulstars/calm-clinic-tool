import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bookmark, ExternalLink } from "lucide-react";
import { diseases } from "@/data/diseases";
import { useBookmarks } from "@/hooks/useBookmarks";
import TrustBadge from "@/components/shield/TrustBadge";
import AccordionSection from "@/components/shield/AccordionSection";
import Disclaimer from "@/components/shield/Disclaimer";

const DiseasePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const disease = diseases.find((d) => d.id === id);

  if (!disease) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-3">😕</p>
          <p className="font-display font-semibold text-foreground">Disease not found</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-sm text-primary underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const ListItems = ({ items }: { items: string[] }) => (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-card-foreground leading-relaxed">
          <span className="text-primary mt-0.5">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      <div className="max-w-md mx-auto px-4 pb-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 sticky top-0 bg-background/80 backdrop-blur-md z-10">
          <button
            onClick={() => navigate("/")}
            className="p-2 -ml-2 rounded-lg hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => toggleBookmark(disease.id)}
            className="p-2 -mr-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Bookmark
              className={`h-5 w-5 transition-colors ${
                isBookmarked(disease.id) ? "fill-accent text-accent" : "text-foreground"
              }`}
            />
          </button>
        </div>

        {/* Hero */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{disease.icon}</div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">{disease.name}</h1>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground capitalize font-medium">
              {disease.category}
            </span>
            <TrustBadge score={disease.trustScore} />
          </div>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {disease.sources.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-sm bg-secondary/20 text-secondary-foreground font-medium"
              >
                <ExternalLink className="h-3 w-3" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="bg-card border border-border rounded-lg p-4 mb-4 card-shadow">
          <p className="text-sm text-card-foreground leading-relaxed">{disease.overview}</p>
        </div>

        {/* Friendly note */}
        <div className="bg-accent/15 border border-accent/25 rounded-lg p-4 mb-4">
          <p className="text-sm text-foreground leading-relaxed">{disease.friendlyNote}</p>
        </div>

        {/* Accordion sections */}
        <div className="space-y-3 mb-6">
          <AccordionSection title="Symptoms" icon="🤕" defaultOpen>
            <ListItems items={disease.symptoms} />
          </AccordionSection>

          <AccordionSection title="Causes" icon="🔍">
            <ListItems items={disease.causes} />
          </AccordionSection>

          <AccordionSection title="Prevention" icon="🛡️">
            <ListItems items={disease.prevention} />
          </AccordionSection>

          <AccordionSection title="Treatment Options" icon="💊">
            <ListItems items={disease.treatment} />
          </AccordionSection>

          <AccordionSection title="When to Consult a Doctor" icon="🏥">
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-3">
              <p className="text-xs text-destructive font-medium">
                If you experience any of the following, please seek medical attention:
              </p>
            </div>
            <ListItems items={disease.whenToConsult} />
          </AccordionSection>
        </div>

        <Disclaimer />
      </div>
    </motion.div>
  );
};

export default DiseasePage;
