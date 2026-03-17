import { useState, useMemo } from "react";
import Header from "@/components/shield/Header";
import SearchBar from "@/components/shield/SearchBar";
import CategoryFilter from "@/components/shield/CategoryFilter";
import DiseaseCard from "@/components/shield/DiseaseCard";
import DailyTip from "@/components/shield/DailyTip";
import Disclaimer from "@/components/shield/Disclaimer";
import { diseases, DiseaseCategory } from "@/data/diseases";
import { useBookmarks } from "@/hooks/useBookmarks";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<DiseaseCategory | "all">("all");
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const filtered = useMemo(() => {
    let result = diseases;

    if (showBookmarksOnly) {
      result = result.filter((d) => isBookmarked(d.id));
    }

    if (category !== "all") {
      result = result.filter((d) => d.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.overview.toLowerCase().includes(q) ||
          d.symptoms.some((s) => s.toLowerCase().includes(q))
      );
    }

    // Sort by trust score, then alphabetically
    return result.sort((a, b) => b.trustScore - a.trustScore || a.name.localeCompare(b.name));
  }, [search, category, showBookmarksOnly, isBookmarked]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 pb-8">
        <Header />

        <div className="space-y-4">
          <DailyTip />
          <Disclaimer />

          <SearchBar value={search} onChange={setSearch} />

          <div className="flex items-center gap-2">
            <div className="flex-1 overflow-hidden">
              <CategoryFilter selected={category} onSelect={setCategory} />
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
              className={`p-2.5 rounded-lg border shrink-0 transition-all ${
                showBookmarksOnly
                  ? "bg-accent border-accent text-accent-foreground"
                  : "bg-card border-border text-muted-foreground"
              }`}
            >
              <Bookmark className={`h-4 w-4 ${showBookmarksOnly ? "fill-current" : ""}`} />
            </motion.button>
          </div>

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-4xl mb-3">🔍</p>
                <p className="text-muted-foreground font-display font-medium">No diseases found</p>
                <p className="text-xs text-muted-foreground mt-1">Try a different search or category</p>
              </motion.div>
            ) : (
              filtered.map((disease, i) => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                  isBookmarked={isBookmarked(disease.id)}
                  onToggleBookmark={() => toggleBookmark(disease.id)}
                  index={i}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
