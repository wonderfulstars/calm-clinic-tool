import { categories, DiseaseCategory } from "@/data/diseases";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  selected: DiseaseCategory | "all";
  onSelect: (cat: DiseaseCategory | "all") => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
      {categories.map((cat) => (
        <motion.button
          key={cat.value}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat.value)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-medium whitespace-nowrap transition-all ${
            selected === cat.value
              ? "bg-primary text-primary-foreground card-shadow"
              : "bg-card text-card-foreground border border-border hover:border-primary/30"
          }`}
        >
          <span>{cat.emoji}</span>
          <span>{cat.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;
