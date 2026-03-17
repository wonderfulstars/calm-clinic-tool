import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const yearlyData = [
  { year: "2018", viral: 1240, bacterial: 890, genetic: 320, lifestyle: 670, parasitic: 410 },
  { year: "2019", viral: 1380, bacterial: 920, genetic: 340, lifestyle: 710, parasitic: 390 },
  { year: "2020", viral: 3200, bacterial: 850, genetic: 350, lifestyle: 820, parasitic: 370 },
  { year: "2021", viral: 2900, bacterial: 870, genetic: 360, lifestyle: 880, parasitic: 360 },
  { year: "2022", viral: 2100, bacterial: 940, genetic: 370, lifestyle: 950, parasitic: 400 },
  { year: "2023", viral: 1600, bacterial: 960, genetic: 380, lifestyle: 1020, parasitic: 420 },
  { year: "2024", viral: 1450, bacterial: 980, genetic: 390, lifestyle: 1100, parasitic: 430 },
];

const categories = [
  { key: "viral", label: "Viral", color: "hsl(var(--primary))" },
  { key: "bacterial", label: "Bacterial", color: "hsl(var(--secondary))" },
  { key: "genetic", label: "Genetic", color: "hsl(var(--accent))" },
  { key: "lifestyle", label: "Lifestyle", color: "hsl(280 60% 70%)" },
  { key: "parasitic", label: "Parasitic", color: "hsl(160 50% 55%)" },
];

const YearlyDiseaseChart = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 card-shadow">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📊</span>
        <h3 className="font-display font-semibold text-sm text-card-foreground">
          Yearly Disease Reports
        </h3>
      </div>
      <div className="w-full h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearlyData} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                fontSize: "12px",
                fontFamily: "var(--font-body)",
              }}
              labelStyle={{ fontWeight: 600, fontFamily: "var(--font-display)" }}
            />
            <Legend
              iconSize={10}
              wrapperStyle={{ fontSize: "11px", fontFamily: "var(--font-body)" }}
            />
            {categories.map((cat) => (
              <Bar
                key={cat.key}
                dataKey={cat.key}
                name={cat.label}
                fill={cat.color}
                radius={[3, 3, 0, 0]}
                maxBarSize={24}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-[10px] text-muted-foreground mt-2 text-right">
        Source: WHO & government health reports (sample data)
      </p>
    </div>
  );
};

export default YearlyDiseaseChart;
