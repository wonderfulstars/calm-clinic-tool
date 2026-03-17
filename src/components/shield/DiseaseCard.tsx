import { motion } from "framer-motion";
import { Bookmark, ChevronRight } from "lucide-react";
import { Disease } from "@/data/diseases";
import TrustBadge from "./TrustBadge";
import { useNavigate } from "react-router-dom";

interface DiseaseCardProps {
  disease: Disease;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  index: number;
}

const DiseaseCard = ({ disease, isBookmarked, onToggleBookmark, index }: DiseaseCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/disease/${disease.id}`)}
      className="bg-card text-card-foreground rounded-lg p-4 card-shadow border border-border cursor-pointer transition-all hover:card-shadow-hover active:scale-[0.98]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl w-10 h-10 flex items-center justify-center rounded-md bg-muted">
            {disease.icon}
          </div>
          <div>
            <h3 className="font-display font-semibold text-base leading-tight">{disease.name}</h3>
            <p className="text-xs text-muted-foreground capitalize mt-0.5">{disease.category}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark();
          }}
          className="p-1.5 rounded-md hover:bg-muted transition-colors"
        >
          <Bookmark
            className={`h-4 w-4 transition-colors ${
              isBookmarked ? "fill-accent text-accent" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
      <p className="text-sm text-muted-foreground mt-2.5 line-clamp-2 leading-relaxed">
        {disease.overview}
      </p>
      <div className="flex items-center justify-between mt-3">
        <TrustBadge score={disease.trustScore} />
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </motion.div>
  );
};

export default DiseaseCard;
