import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { healthTips } from "@/data/diseases";
import { useMemo } from "react";

const DailyTip = () => {
  const tip = useMemo(() => {
    const today = new Date();
    const index = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % healthTips.length;
    return healthTips[index];
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-accent/20 border border-accent/30 rounded-lg p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <Lightbulb className="h-4 w-4 text-accent-foreground" />
        <span className="text-xs font-display font-semibold text-accent-foreground uppercase tracking-wide">
          Daily Health Tip
        </span>
      </div>
      <p className="text-sm text-foreground leading-relaxed">{tip.tip}</p>
    </motion.div>
  );
};

export default DailyTip;
