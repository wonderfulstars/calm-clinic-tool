import { Info } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="bg-muted/50 border border-border rounded-md px-3 py-2.5 flex items-start gap-2.5">
      <Info className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
      <p className="text-xs text-muted-foreground leading-relaxed">
        This app is for informational purposes only and not a substitute for professional medical advice.
      </p>
    </div>
  );
};

export default Disclaimer;
