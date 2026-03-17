import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-6"
    >
      <div className="flex items-center justify-center gap-2 mb-1">
        <div className="w-9 h-9 rounded-md bg-primary/20 flex items-center justify-center">
          <Shield className="h-5 w-5 text-primary-foreground fill-primary" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">SHIELD</h1>
      </div>
      <p className="text-xs text-muted-foreground font-body max-w-[280px] mx-auto leading-relaxed">
        Surviveillance for Health Intelligence and Epidemiological Live Data
      </p>
    </motion.div>
  );
};

export default Header;
