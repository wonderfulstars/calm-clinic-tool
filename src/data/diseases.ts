export type DiseaseCategory = "viral" | "bacterial" | "genetic" | "lifestyle" | "autoimmune" | "parasitic";

export interface Disease {
  id: string;
  name: string;
  category: DiseaseCategory;
  trustScore: number; // 1-5
  sources: string[];
  overview: string;
  symptoms: string[];
  causes: string[];
  prevention: string[];
  treatment: string[];
  whenToConsult: string[];
  friendlyNote: string;
  icon: string;
}

export const categories: { value: DiseaseCategory | "all"; label: string; emoji: string }[] = [
  { value: "all", label: "All", emoji: "🌐" },
  { value: "viral", label: "Viral", emoji: "🦠" },
  { value: "bacterial", label: "Bacterial", emoji: "🔬" },
  { value: "genetic", label: "Genetic", emoji: "🧬" },
  { value: "lifestyle", label: "Lifestyle", emoji: "🏃" },
  { value: "autoimmune", label: "Autoimmune", emoji: "🛡️" },
  { value: "parasitic", label: "Parasitic", emoji: "🐛" },
];

export const diseases: Disease[] = [
  {
    id: "common-cold",
    name: "Common Cold",
    category: "viral",
    trustScore: 5,
    sources: ["WHO", "CDC", "NHS"],
    overview: "The common cold is a mild viral infection of the nose, throat, and sinuses. It's super common and usually clears up on its own within 7-10 days. Almost everyone gets it a few times a year!",
    symptoms: ["Runny or stuffy nose", "Sore throat", "Sneezing", "Mild cough", "Low-grade fever", "Mild body aches", "Feeling tired"],
    causes: ["Rhinoviruses (most common)", "Spread through airborne droplets", "Touching contaminated surfaces", "Close contact with infected people"],
    prevention: ["Wash hands frequently", "Avoid touching your face", "Stay away from sick people", "Get enough sleep", "Eat a balanced diet rich in vitamins"],
    treatment: ["Rest and stay hydrated", "Over-the-counter cold medicines", "Warm liquids like tea with honey", "Saline nasal spray", "Throat lozenges"],
    whenToConsult: ["Fever above 101.3°F (38.5°C) lasting more than 3 days", "Symptoms lasting more than 10 days", "Severe headache or sinus pain", "Difficulty breathing"],
    friendlyNote: "Don't worry! The common cold is very treatable and usually goes away on its own. A little rest and warm soup can work wonders! 🍵",
    icon: "🤧",
  },
  {
    id: "influenza",
    name: "Influenza (Flu)",
    category: "viral",
    trustScore: 5,
    sources: ["WHO", "CDC", "Mayo Clinic"],
    overview: "The flu is a contagious respiratory illness caused by influenza viruses. It can range from mild to severe but is usually manageable with proper care. A yearly vaccine can help prevent it!",
    symptoms: ["High fever (100-104°F)", "Severe body aches", "Chills and sweats", "Headache", "Dry cough", "Fatigue and weakness", "Nasal congestion"],
    causes: ["Influenza A or B viruses", "Spread through respiratory droplets", "Touching contaminated surfaces", "Seasonal outbreaks (fall/winter)"],
    prevention: ["Get annual flu vaccine", "Wash hands regularly", "Avoid crowded places during flu season", "Cover coughs and sneezes", "Boost your immune system"],
    treatment: ["Antiviral medications (Tamiflu)", "Rest and fluids", "Over-the-counter pain relievers", "Stay home to prevent spreading", "Warm compresses for aches"],
    whenToConsult: ["Difficulty breathing or shortness of breath", "Persistent chest pain", "Severe vomiting", "Symptoms that improve then return worse", "High-risk groups (elderly, pregnant, children)"],
    friendlyNote: "The flu can feel rough, but most people recover within 1-2 weeks. The best defense is getting your yearly flu shot! 💪",
    icon: "🤒",
  },
  {
    id: "type-2-diabetes",
    name: "Type 2 Diabetes",
    category: "lifestyle",
    trustScore: 5,
    sources: ["WHO", "American Diabetes Association", "NHS"],
    overview: "Type 2 diabetes is a condition where your body doesn't use insulin properly, causing blood sugar levels to rise. With the right lifestyle changes and sometimes medication, it's very manageable!",
    symptoms: ["Increased thirst", "Frequent urination", "Increased hunger", "Unintended weight loss", "Fatigue", "Blurred vision", "Slow-healing sores"],
    causes: ["Insulin resistance", "Genetic factors", "Excess body weight", "Sedentary lifestyle", "Poor diet high in sugar and processed foods"],
    prevention: ["Maintain a healthy weight", "Exercise regularly (150 min/week)", "Eat whole grains, fruits, and vegetables", "Limit sugar and processed foods", "Regular health check-ups"],
    treatment: ["Healthy diet changes", "Regular physical activity", "Blood sugar monitoring", "Metformin or other medications", "Insulin therapy (if needed)"],
    whenToConsult: ["Blood sugar levels consistently high", "Symptoms of low blood sugar (shakiness, confusion)", "Numbness in hands or feet", "Vision changes", "Wounds that won't heal"],
    friendlyNote: "Living with type 2 diabetes is absolutely possible with a healthy lifestyle! Many people manage it wonderfully with diet and exercise alone. 🥗",
    icon: "🩸",
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "autoimmune",
    trustScore: 5,
    sources: ["WHO", "American Lung Association", "NHS"],
    overview: "Asthma is a condition where your airways narrow and swell, making breathing difficult. It's very common and with proper management, most people with asthma live active, full lives!",
    symptoms: ["Shortness of breath", "Chest tightness", "Wheezing", "Coughing (especially at night)", "Difficulty sleeping due to breathing", "Whistling sound when exhaling"],
    causes: ["Airborne allergens (pollen, dust, pet dander)", "Respiratory infections", "Physical activity", "Cold air", "Air pollution", "Genetic predisposition"],
    prevention: ["Identify and avoid triggers", "Use air purifiers at home", "Keep indoor humidity low", "Get vaccinated for flu and pneumonia", "Follow your asthma action plan"],
    treatment: ["Quick-relief inhalers (albuterol)", "Long-term controller medications", "Avoiding known triggers", "Allergy medications", "Breathing exercises"],
    whenToConsult: ["Increasing frequency of attacks", "Needing quick-relief inhaler more often", "Difficulty breathing that doesn't improve", "Peak flow readings dropping"],
    friendlyNote: "Asthma is super manageable! With the right treatment plan, you can do everything from running marathons to climbing mountains. 🏔️",
    icon: "🫁",
  },
  {
    id: "malaria",
    name: "Malaria",
    category: "parasitic",
    trustScore: 5,
    sources: ["WHO", "CDC", "Médecins Sans Frontières"],
    overview: "Malaria is a disease caused by parasites spread through mosquito bites. It's preventable and treatable! It's most common in tropical and subtropical regions.",
    symptoms: ["High fever", "Chills and shaking", "Sweating", "Headache", "Nausea and vomiting", "Muscle pain", "Fatigue"],
    causes: ["Plasmodium parasites", "Transmitted by Anopheles mosquitoes", "More common in tropical climates", "Can also spread through blood transfusions"],
    prevention: ["Use mosquito nets while sleeping", "Apply insect repellent", "Take antimalarial medication when traveling", "Wear long sleeves and pants", "Eliminate standing water near homes"],
    treatment: ["Artemisinin-based combination therapy (ACT)", "Chloroquine (where effective)", "Supportive care and fluids", "Hospital care for severe cases"],
    whenToConsult: ["Any fever after visiting a malaria-risk area", "Symptoms within 3 months of travel", "Worsening symptoms despite treatment", "Signs of severe malaria (confusion, seizures)"],
    friendlyNote: "Malaria is completely preventable and treatable! If you're traveling to at-risk areas, simple precautions can keep you safe. 🦟🚫",
    icon: "🦟",
  },
  {
    id: "hypertension",
    name: "High Blood Pressure",
    category: "lifestyle",
    trustScore: 5,
    sources: ["WHO", "American Heart Association", "NHS"],
    overview: "High blood pressure means your blood pushes too hard against your artery walls. Often called the 'silent killer' because it usually has no symptoms, but it's very manageable with lifestyle changes!",
    symptoms: ["Usually no symptoms (silent condition)", "Severe headaches (in extreme cases)", "Nosebleeds", "Shortness of breath", "Dizziness", "Chest pain"],
    causes: ["Too much salt in diet", "Lack of physical activity", "Being overweight", "Stress", "Genetics", "Aging", "Excessive alcohol"],
    prevention: ["Reduce salt intake", "Exercise regularly", "Maintain healthy weight", "Limit alcohol", "Manage stress", "Don't smoke", "Regular check-ups"],
    treatment: ["Lifestyle modifications", "ACE inhibitors", "Calcium channel blockers", "Diuretics", "Regular blood pressure monitoring"],
    whenToConsult: ["Blood pressure consistently above 140/90", "Severe headache with confusion", "Chest pain or difficulty breathing", "Vision problems", "Blood in urine"],
    friendlyNote: "The great news is that small lifestyle changes can make a BIG difference with blood pressure. Even a daily 30-minute walk helps! 🚶‍♂️",
    icon: "❤️",
  },
  {
    id: "sickle-cell",
    name: "Sickle Cell Disease",
    category: "genetic",
    trustScore: 5,
    sources: ["WHO", "NIH", "Sickle Cell Disease Association"],
    overview: "Sickle cell disease is an inherited blood disorder where red blood cells become sickle-shaped and can block blood flow. With modern treatments, people with sickle cell can live fulfilling lives!",
    symptoms: ["Episodes of pain (pain crises)", "Fatigue and anemia", "Swelling in hands and feet", "Frequent infections", "Delayed growth", "Vision problems"],
    causes: ["Inherited genetic mutation", "Both parents must carry the sickle cell trait", "Affects hemoglobin in red blood cells"],
    prevention: ["Genetic counseling before having children", "Newborn screening programs", "Cannot be prevented if inherited, but complications can be managed"],
    treatment: ["Pain management", "Hydroxyurea medication", "Blood transfusions", "Bone marrow transplant (in some cases)", "Staying hydrated", "Folic acid supplements"],
    whenToConsult: ["Severe pain episodes", "Fever above 101°F", "Sudden vision changes", "Signs of stroke (numbness, confusion)", "Swelling in abdomen", "Difficulty breathing"],
    friendlyNote: "Living with sickle cell is a journey, but with great medical support and self-care, many people thrive! You're stronger than you know. 💜",
    icon: "🩺",
  },
  {
    id: "chickenpox",
    name: "Chickenpox",
    category: "viral",
    trustScore: 5,
    sources: ["WHO", "CDC", "NHS"],
    overview: "Chickenpox is a highly contagious but usually mild infection that causes an itchy, blister-like rash. It's most common in children and once you've had it, you're typically immune for life!",
    symptoms: ["Itchy rash with fluid-filled blisters", "Fever", "Tiredness", "Loss of appetite", "Headache", "Rash spreads from trunk to face and limbs"],
    causes: ["Varicella-zoster virus", "Spread through direct contact with rash", "Airborne transmission", "Highly contagious before rash appears"],
    prevention: ["Varicella vaccine (very effective!)", "Avoid contact with infected individuals", "Good hand hygiene"],
    treatment: ["Calamine lotion for itching", "Cool baths with baking soda", "Antihistamines", "Acetaminophen for fever (avoid aspirin in children)", "Keep nails short to prevent scratching"],
    whenToConsult: ["Rash spreads to eyes", "High fever lasting more than 4 days", "Difficulty breathing", "Signs of skin infection (warmth, redness, swelling)", "Newborns or pregnant women exposed"],
    friendlyNote: "Chickenpox is usually a one-time thing! Most kids bounce back in about a week. The vaccine has made it much less common too! 🎉",
    icon: "🫧",
  },
];

export const healthTips = [
  { tip: "Drink at least 8 glasses of water daily to keep your body hydrated and healthy! 💧", category: "Hydration" },
  { tip: "A 30-minute walk each day can reduce your risk of heart disease by up to 35%! 🚶", category: "Exercise" },
  { tip: "Getting 7-9 hours of sleep helps your immune system fight off infections! 😴", category: "Sleep" },
  { tip: "Eating 5 servings of fruits and vegetables daily provides essential vitamins! 🥦", category: "Nutrition" },
  { tip: "Washing your hands for 20 seconds kills most germs. Try humming 'Happy Birthday' twice! 🧼", category: "Hygiene" },
  { tip: "Laughing for 15 minutes a day can burn up to 40 calories! Plus, it's great for your mood! 😄", category: "Mental Health" },
  { tip: "Taking deep breaths for 5 minutes can lower your blood pressure and reduce stress! 🧘", category: "Wellness" },
];
