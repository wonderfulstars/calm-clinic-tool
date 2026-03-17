import { Shield } from "lucide-react";

interface TrustBadgeProps {
  score: number;
  compact?: boolean;
}

const TrustBadge = ({ score, compact = false }: TrustBadgeProps) => {
  if (compact) {
    return (
      <div className="flex items-center gap-1 text-secondary-foreground">
        <Shield className="h-3.5 w-3.5 fill-secondary text-secondary" />
        <span className="text-xs font-medium">{score}/5</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/30 text-secondary-foreground">
      <Shield className="h-4 w-4 fill-secondary text-secondary" />
      <span className="text-xs font-display font-semibold">Verified · {score}/5</span>
    </div>
  );
};

export default TrustBadge;
