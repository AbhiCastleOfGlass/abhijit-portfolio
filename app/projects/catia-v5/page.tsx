"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type ShortcutItem = { key: string; fn: string; time: string; freq: string; example: string; tip: string };
type ShortcutSection = { name: string; items: ShortcutItem[] };
type WorkflowStep = { level: string; color: string; steps: string[] };
type Tool = { name: string; shortcut?: string; desc: string; category?: string };
type Feature = { name: string; icon?: string; desc: string; expert?: string; tip?: string };
type ConstraintItem = { name: string; icon: string; desc: string; use: string };
type Strategy = { title: string; desc: string; pro: string; con: string };
type Continuity = { level: string; name: string; desc: string; use: string };
type ViewType = { name: string; desc: string; shortcut: string };
type GDTSymbol = { symbol: string; name: string; iso: string };
type ElementRef = { name: string; icon: string; desc: string; example: string };
type Concept = { name: string; desc: string; benefit: string };
type IndustryArea = { name: string; items: string[] };
type TopList = { title: string; color: string; items: string[] };

interface Module {
  id: number;
  icon: string;
  color: string;
  accent: string;
  title: string;
  subtitle: string;
  tag: string;
  sections?: ShortcutSection[];
  workflows?: WorkflowStep[];
  tools?: Tool[];
  features?: Feature[];
  constraints?: ConstraintItem[];
  strategies?: Strategy[];
  continuity?: Continuity[];
  viewTypes?: ViewType[];
  gdtSymbols?: GDTSymbol[];
  elements?: ElementRef[];
  concepts?: Concept[];
  areas?: IndustryArea[];
  topLists?: TopList[];
}

const MODULES: Module[] = [
  {
    id: 1, icon: "⌨️", color: "#0057B7", accent: "#FFD700",
    title: "Shortcut Masterclass",
    subtitle: "Master Every Keyboard Command",
    tag: "FOUNDATION",
    sections: [
      {
        name: "File Operations",
        items: [
          { key: "Ctrl+S", fn: "Save Document", time: "3s", freq: "Very High", example: "Save before every major operation", tip: "Habit saves hours of rework" },
          { key: "Ctrl+Z", fn: "Undo Last Action", time: "5s", freq: "Very High", example: "Revert accidental deletion", tip: "Works up to 20 levels deep" },
          { key: "Ctrl+Y", fn: "Redo Action", time: "5s", freq: "High", example: "Re-apply a feature", tip: "Use after undo chain" },
          { key: "Ctrl+N", fn: "New Document", time: "4s", freq: "Medium", example: "Start new Part Design", tip: "Opens workbench selector" },
          { key: "Ctrl+O", fn: "Open File", time: "3s", freq: "High", example: "Load existing .CATPart", tip: "Supports multi-select" },
        ]
      },
      {
        name: "Navigation Controls",
        items: [
          { key: "Middle Click + Drag", fn: "Pan View", time: "2s", freq: "Very High", example: "Move across large assembly", tip: "Fastest navigation method" },
          { key: "Middle Scroll", fn: "Zoom In/Out", time: "1s", freq: "Very High", example: "Inspect weld geometry", tip: "Cursor-centered zoom" },
          { key: "Middle + Right Drag", fn: "Rotate View", time: "2s", freq: "Very High", example: "Inspect draft angles", tip: "Spherical rotation mode" },
          { key: "F", fn: "Fit All In View", time: "2s", freq: "High", example: "After hide/show ops", tip: "Works in all workbenches" },
          { key: "Ctrl+Shift+Home", fn: "Isometric View", time: "3s", freq: "Medium", example: "Standard presentation view", tip: "Use for client reviews" },
        ]
      },
      {
        name: "Selection & Tree",
        items: [
          { key: "Ctrl+Click", fn: "Multi-Select", time: "4s", freq: "Very High", example: "Select 10 faces for draft", tip: "Combine with filter" },
          { key: "Ctrl+A", fn: "Select All", time: "5s", freq: "High", example: "Delete all construction lines", tip: "Context-sensitive selection" },
          { key: "Space", fn: "Hide/Show Selected", time: "3s", freq: "Very High", example: "Hide blocking components", tip: "Fastest visibility toggle" },
          { key: "Ctrl+F", fn: "Search Element", time: "8s", freq: "High", example: "Find Hole.23 in tree", tip: "Supports wildcards" },
          { key: "Alt+F8", fn: "Center Graph", time: "5s", freq: "Medium", example: "Center tree on selected", tip: "Essential for deep trees" },
        ]
      },
      {
        name: "View & Measure",
        items: [
          { key: "Ctrl+G", fn: "Toggle Grid", time: "2s", freq: "Medium", example: "Precision sketching", tip: "Set grid to feature size" },
          { key: "Shift+F1", fn: "Measure Between", time: "10s", freq: "Very High", example: "Check clearance gaps", tip: "Snaps to geometry" },
          { key: "Shift+F2", fn: "Measure Item", time: "8s", freq: "High", example: "Verify fillet radius", tip: "Shows area/volume too" },
          { key: "Ctrl+Shift+N", fn: "New View", time: "5s", freq: "Medium", example: "Create cutaway view", tip: "Saves camera positions" },
        ]
      }
    ]
  },
  {
    id: 2, icon: "✏️", color: "#00897B", accent: "#FF6F00",
    title: "Sketcher Masterclass",
    subtitle: "Precision 2D → 3D Foundation",
    tag: "CORE SKILL",
    workflows: [
      {
        level: "Beginner", color: "#4CAF50", steps: [
          "Start sketch on reference plane",
          "Draw basic profile with Line/Circle",
          "Apply dimensional constraints manually",
          "Add coincident constraints",
          "Check for fully constrained (green)",
          "Exit sketch"
        ]
      },
      {
        level: "Professional", color: "#2196F3", steps: [
          "Select sketch plane from existing geometry",
          "Use Profile tool for rapid outline",
          "Apply geometric constraints FIRST (parallel, perpendicular)",
          "Apply driving dimensions last",
          "Use construction geometry for references",
          "Verify no over-constraints (red elements = error)",
          "Name sketch for reuse"
        ]
      },
      {
        level: "Elite", color: "#9C27B0", steps: [
          "Define external references before sketching",
          "Use Project 3D Elements for associativity",
          "Apply Fix Together for rigid body groups",
          "Leverage Constraint Defined in Dialog",
          "Use symmetry constraint to halve dimension count",
          "Apply driven dimensions for documentation",
          "Link parameters to Knowledgeware formulas",
          "Validate with Sketch Analysis tool"
        ]
      }
    ],
    tools: [
      { name: "Profile", shortcut: "Ctrl+1", desc: "Rapid open/closed profile" },
      { name: "Rectangle", shortcut: "Ctrl+2", desc: "Axis-aligned rectangles" },
      { name: "Circle", shortcut: "Ctrl+3", desc: "Center + radius circles" },
      { name: "Trim", shortcut: "Ctrl+T", desc: "Interactive geometry cleanup" },
      { name: "Mirror", shortcut: "Ctrl+M", desc: "Symmetric duplication" },
      { name: "Offset", shortcut: "O", desc: "Parallel curve generation" },
      { name: "Constraint", shortcut: "Ctrl+K", desc: "Create any constraint" },
      { name: "Fix", shortcut: "F", desc: "Ground element in space" },
    ]
  },
  {
    id: 3, icon: "🔧", color: "#1565C0", accent: "#E53935",
    title: "Part Design Pro",
    subtitle: "Feature-Based Solid Modeling",
    tag: "ESSENTIAL",
    features: [
      { name: "Pad", icon: "⬆️", desc: "Extrude sketch to solid. Supports symmetric, mirrored extent, and draft angle. Use 'Up to surface' for adaptive design.", expert: "Use Thick option for shell-ready pads" },
      { name: "Pocket", icon: "⬇️", desc: "Cut material with sketch profile. Supports blind, through, up-to-plane. Critical for material removal operations.", expert: "Chain pockets to define complex channels" },
      { name: "Shaft", icon: "🔄", desc: "Revolve profile around axis. Essential for turned parts. Define axis as line element in sketch.", expert: "Use partial revolution for snap features" },
      { name: "Hole", icon: "⭕", desc: "Intelligent hole wizard. Pre-defined types: simple, counterbore, countersink, tapered. Auto-threads.", expert: "Drive depth with formula for families" },
      { name: "Fillet", icon: "🌀", desc: "Variable or constant radius edge rounds. Edge fillet for exterior, face fillet for tangency maintenance.", expert: "Order fillets: large before small always" },
      { name: "Draft", icon: "📐", desc: "Taper faces for mold release. Parting line draft for complex geometry. Reflect line for Class-A.", expert: "Apply draft before shell in tree order" },
      { name: "Shell", icon: "🪣", desc: "Hollow solid with uniform wall. Define faces to remove. Variable thickness with multi-face selection.", expert: "Use after draft; order is critical" },
      { name: "Pattern", icon: "⚡", desc: "Rectangular, circular, or user-defined feature replication. Keeps design intent associative.", expert: "Pattern instances update with parent" },
      { name: "Boolean", icon: "∪", desc: "Add, remove, intersect bodies. Essential for multi-body design strategy.", expert: "Multi-body is fastest complex part strategy" },
      { name: "Stiffener", icon: "▲", desc: "Rib from open profile. Auto-extends to nearest material. Controls thickness direction.", expert: "Define thickness from sketch centerline" },
    ]
  },
  {
    id: 4, icon: "🔩", color: "#4527A0", accent: "#FF8F00",
    title: "Assembly Design",
    subtitle: "Constraint-Driven Digital Mock-Up",
    tag: "DMU",
    constraints: [
      { name: "Coincident", icon: "=", desc: "Align points, lines, or planes", use: "Shaft in bearing bore" },
      { name: "Contact", icon: "⊡", desc: "Surface-to-surface contact", use: "Gasket face mating" },
      { name: "Offset", icon: "↔", desc: "Parallel planes with distance", use: "Clearance between parts" },
      { name: "Angle", icon: "∠", desc: "Angular relationship", use: "Bracket at 45° mount" },
      { name: "Fix", icon: "⊕", desc: "Ground component in space", use: "Fix chassis/frame first" },
      { name: "Fix Together", icon: "⊞", desc: "Group without constraints", use: "Fastener assemblies" },
    ],
    strategies: [
      { title: "Top-Down Design", desc: "Skeleton model drives all components. Changes propagate automatically. Ideal for complex products.", pro: "Full associativity", con: "Higher file complexity" },
      { title: "Bottom-Up Design", desc: "Design components independently then assemble. Fastest for standard parts.", pro: "Component reuse", con: "Manual updates" },
      { title: "Hybrid Strategy", desc: "Skeleton for critical interfaces, bottom-up for standard parts. Industry best practice.", pro: "Optimal balance", con: "Requires planning" },
    ]
  },
  {
    id: 5, icon: "🌊", color: "#00695C", accent: "#F57C00",
    title: "Surface Design (GSD)",
    subtitle: "Class-A and Complex Surface Modeling",
    tag: "ADVANCED",
    tools: [
      { name: "Extrude", category: "Wireframe", desc: "Surface from curve + direction" },
      { name: "Revolve", category: "Wireframe", desc: "Axial surface from profile" },
      { name: "Sweep", category: "Surface", desc: "Profile along guide curve. G0/G1/G2 continuity control" },
      { name: "Multi-Section Surface", category: "Surface", desc: "Loft between profiles with spine control" },
      { name: "Blend", category: "Surface", desc: "Tangent bridge between two surfaces" },
      { name: "Fill", category: "Surface", desc: "Boundary fill with continuity constraint" },
      { name: "Join", category: "Operations", desc: "Merge adjacent surfaces into one" },
      { name: "Trim", category: "Operations", desc: "Cut surfaces against each other" },
      { name: "Split", category: "Operations", desc: "Divide body with surface/plane" },
      { name: "Extrapolate", category: "Operations", desc: "Extend surface beyond boundary" },
      { name: "Healing", category: "Analysis", desc: "Close gaps between surfaces" },
      { name: "Curvature Analysis", category: "Analysis", desc: "Gaussian/mean curvature map" },
    ],
    continuity: [
      { level: "G0", name: "Positional", desc: "Surfaces touch — no gap", use: "Non-visible joints" },
      { level: "G1", name: "Tangent", desc: "Surfaces share tangent — smooth", use: "Class-B surfaces" },
      { level: "G2", name: "Curvature", desc: "Matching curvature — highlight continuity", use: "Class-A automotive" },
      { level: "G3", name: "Acceleration", desc: "Curvature rate matches — ultra-smooth", use: "Premium exterior" },
    ]
  },
  {
    id: 6, icon: "📋", color: "#B71C1C", accent: "#1565C0",
    title: "Drafting Masterclass",
    subtitle: "Production Drawing Generation",
    tag: "DOCUMENTATION",
    viewTypes: [
      { name: "Front View", desc: "Primary projection", shortcut: "F" },
      { name: "Section View", desc: "Cut through geometry", shortcut: "S" },
      { name: "Detail View", desc: "Magnified callout", shortcut: "D" },
      { name: "Isometric", desc: "3D pictorial view", shortcut: "I" },
      { name: "Broken View", desc: "Long part representation", shortcut: "B" },
      { name: "Clipping View", desc: "Limit view extent", shortcut: "C" },
    ],
    gdtSymbols: [
      { symbol: "⌀", name: "Diameter", iso: "Ø" },
      { symbol: "⎔", name: "Flatness", iso: "⏥" },
      { symbol: "⊙", name: "Circularity", iso: "○" },
      { symbol: "⌯", name: "Cylindricity", iso: "⌭" },
      { symbol: "∥", name: "Parallelism", iso: "∥" },
      { symbol: "⊥", name: "Perpendicularity", iso: "⊥" },
      { symbol: "∠", name: "Angularity", iso: "∠" },
      { symbol: "⌖", name: "Position", iso: "⌖" },
    ]
  },
  {
    id: 7, icon: "🏗️", color: "#4E342E", accent: "#00ACC1",
    title: "Sheet Metal Design",
    subtitle: "Flat Pattern & Bend Engineering",
    tag: "MANUFACTURING",
    features: [
      { name: "Wall", desc: "Base sheet metal solid. Define thickness and material properties.", tip: "First feature in every part" },
      { name: "Flange", desc: "Bend edge to create walls. Controls angle, radius, relief.", tip: "Set bend table in standards" },
      { name: "Hem", desc: "Folded edge for safety/strength. Single, double, teardrop types.", tip: "Use for exposed edges" },
      { name: "Stamp", desc: "Emboss or cut through sheet. Supports various forms.", tip: "Avoid near bend zones" },
      { name: "Corner Relief", desc: "Material removal at corner junctions for formability.", tip: "Match to press brake capability" },
      { name: "Flat Pattern", desc: "Unfold to 2D for laser/plasma cutting. Auto-calculates bend allowance.", tip: "Verify K-factor for material" },
      { name: "Bend", desc: "Fold existing wall. Define radius, angle, fixed side.", tip: "Radius ≥ 1T for steel" },
      { name: "Cutout", desc: "Cut feature preserving flat pattern associativity.", tip: "Dimension in flat pattern" },
    ]
  },
  {
    id: 8, icon: "⚙️", color: "#1A237E", accent: "#2E7D32",
    title: "Knowledgeware",
    subtitle: "Parametric Intelligence & Automation",
    tag: "AUTOMATION",
    elements: [
      { name: "Parameters", icon: "P", desc: "User-defined variables (Real, Integer, String, Boolean). Link to any geometric value.", example: "WallThickness = 2.5mm" },
      { name: "Formulas", icon: "F", desc: "Mathematical relationships between parameters. Drive geometry automatically.", example: "HoleDepth = WallThickness * 3" },
      { name: "Rules", icon: "R", desc: "IF/THEN conditional logic. Enforce design standards automatically.", example: "IF Material == 'Aluminum' THEN Fillet = 3mm" },
      { name: "Checks", icon: "C", desc: "Design validation logic. Alert when constraints violated.", example: "CHECK: WallThickness > 1.5mm" },
      { name: "Design Tables", icon: "T", desc: "Excel-driven parameter families. One model, infinite variants.", example: "Bolt family: M6, M8, M10, M12" },
      { name: "Reactions", icon: "Rx", desc: "Event-triggered automation. Respond to user actions.", example: "On change of Load → recalculate beam" },
    ]
  },
  {
    id: 9, icon: "♻️", color: "#006064", accent: "#AD1457",
    title: "Power Copies & UDFs",
    subtitle: "Reusable Design Intelligence",
    tag: "REUSE",
    concepts: [
      { name: "Power Copy", desc: "Capture feature sequence with inputs. Paste with new references instantly. Includes all dependencies.", benefit: "10x faster feature creation" },
      { name: "User Defined Feature (UDF)", desc: "Packaged features with controlled interface. Published inputs only visible to user.", benefit: "Foolproof reuse for teams" },
      { name: "Catalog", desc: "Organize power copies and UDFs in browsable library. Integrate into enterprise PDM.", benefit: "Company design standards" },
      { name: "Knowledge Template", desc: "Complete model with rules, checks, and parameters. Instantiate with different inputs.", benefit: "Configuration management" },
    ]
  },
  {
    id: 10, icon: "🚗", color: "#263238", accent: "#FF6F00",
    title: "Automotive Workflow",
    subtitle: "BIW, Trim & Fixture Design",
    tag: "INDUSTRY",
    areas: [
      { name: "Body in White (BIW)", items: ["Stamped steel panels", "Laser welded joints", "Spot weld assemblies", "Hem flange closures", "Structural cross-members", "Crash management zones"] },
      { name: "Plastic Trim", items: ["A/B/C pillar trims", "Door panel design", "Draft analysis (min 2°)", "Texture mapping", "Boss/rib design", "Clip attachment strategy"] },
      { name: "Fixtures & Tooling", items: ["Check fixture design", "Clamping strategy", "Datum reference frame", "CMM accessibility", "GD&T application", "AS9100/IATF compliance"] },
      { name: "Supplier Management", items: ["CATIA V5 data exchange", "JT format for DMU", "STEP AP242 delivery", "Design freeze process", "ECR/ECN management", "PPAP documentation"] },
    ]
  },
  {
    id: 11, icon: "✈️", color: "#0D1B2A", accent: "#00BCD4",
    title: "Aerospace Workflow",
    subtitle: "Structural & Aerostructure Design",
    tag: "AEROSPACE",
    areas: [
      { name: "Structural Components", items: ["Ribs and spars", "Skin panels", "Frames and stringers", "Machined brackets", "Composite lay-up design", "Fastener patterns"] },
      { name: "Configuration Management", items: ["Effectivity management", "Part numbering standards", "Drawing tree structure", "S1000D documentation", "AS9100 compliance", "DER approval process"] },
      { name: "Surface-Driven Design", items: ["OML/IML surfaces", "Loft from theoretical surfaces", "Tooling surface derivation", "Skin tangency analysis", "Step/gap analysis"] },
    ]
  },
  {
    id: 12, icon: "🏆", color: "#880E4F", accent: "#FDD835",
    title: "Elite Designer System",
    subtitle: "Top Shortcuts, Hacks & Secrets",
    tag: "ELITE",
    topLists: [
      {
        title: "Top 20 Power Shortcuts",
        color: "#0057B7",
        items: [
          "Ctrl+S — Save (every 5 min)",
          "Space — Hide/Show toggle",
          "F — Fit All in View",
          "Ctrl+Z/Y — Undo/Redo",
          "Ctrl+F — Search element",
          "Alt+Enter — Properties",
          "Shift+F1 — Measure Between",
          "Ctrl+Shift+G — Toggle constraints",
          "V — Normal to view (sketcher)",
          "Ctrl+G — Activate sketcher grid",
          "Escape — Cancel operation",
          "Ctrl+Click — Multi-select",
          "Right-click → Define in Work Object",
          "Alt+F8 — Center graph on selection",
          "Ctrl+Shift+S — Save All",
          "Double-click feature — Re-edit",
          "Drag feature in tree — Reorder",
          "Ctrl+D — Deactivate feature",
          "Shift+drag — Duplicate with offset",
          "Tab — Next constraint input"
        ]
      },
      {
        title: "Top 20 Productivity Hacks",
        color: "#00695C",
        items: [
          "Name ALL features immediately",
          "Use Design Tables for variants",
          "Skeleton model for assembly control",
          "Capture Power Copies for repeated features",
          "Set autosave to every 5 minutes",
          "Create personal shortcut toolbar",
          "Use Publications for stable references",
          "Freeze non-active components",
          "Apply colors by material type",
          "Layer scheme for visibility control",
          "Use context menus over toolbar clicks",
          "Macro record repetitive sequences",
          "Template parts for every product type",
          "Pre-define constraints in order: Fix → Coincident → Offset",
          "Work in multi-body for complex parts",
          "Boolean at the END of design",
          "Lock constraints you won't change",
          "Save Views for presentation states",
          "Use Zoom In shortcut before constraint creation",
          "Batch export with CATScript automation"
        ]
      },
      {
        title: "Top 10 Surface Secrets",
        color: "#4527A0",
        items: [
          "Always target G2 continuity for visible surfaces",
          "Sweep with Guide type = G2 for class-A",
          "Use Reflect Line for parting line definition",
          "Extrapolate before trim to avoid gap artifacts",
          "Join tolerance 0.001mm for tight assemblies",
          "Porcupine analysis before every blend",
          "Isophote lines reveal curvature breaks",
          "Freeze reference surfaces after approval",
          "Multi-Section Surface: always use spine",
          "Blend: set tension separately on each side"
        ]
      },
      {
        title: "Top 10 Common Mistakes",
        color: "#B71C1C",
        items: [
          "Not naming features — costs hours searching",
          "Wrong feature order (draft before shell)",
          "Over-constraining sketches with redundant dims",
          "External references without Publications",
          "Skipping design table — manual variant copies",
          "No Boolean at end of multi-body",
          "G0 surfaces on visible Class-A panels",
          "Forgetting to freeze inactive components",
          "Assembly constraints on wrong element",
          "Not using Power Copies for repeated features"
        ]
      }
    ]
  }
];

type QuizQuestionType = { q: string; opts: string[]; ans: number; module: string };

const QUIZ_QUESTIONS: QuizQuestionType[] = [
  { q: "What shortcut fits all visible geometry in the CATIA viewport?", opts: ["Ctrl+F", "F", "Ctrl+A", "Shift+F"], ans: 1, module: "Shortcuts" },
  { q: "Which surface continuity is required for automotive Class-A surfaces?", opts: ["G0 Positional", "G1 Tangent", "G2 Curvature", "G3 Acceleration"], ans: 2, module: "Surfaces" },
  { q: "In Part Design, what is the correct order: Draft → Shell or Shell → Draft?", opts: ["Shell first, then Draft", "Draft first, then Shell", "Order doesn't matter", "Always use both simultaneously"], ans: 1, module: "Part Design" },
  { q: "What tool in Knowledgeware drives geometry based on IF/THEN logic?", opts: ["Formula", "Check", "Rule", "Design Table"], ans: 2, module: "Knowledgeware" },
  { q: "Which assembly design approach uses a Skeleton model?", opts: ["Bottom-Up Design", "Top-Down Design", "Middle-Out Design", "Flat Design"], ans: 1, module: "Assembly" },
  { q: "What shortcut hides or shows a selected element in CATIA?", opts: ["H", "Space", "Ctrl+H", "Alt+H"], ans: 1, module: "Shortcuts" },
  { q: "In Sheet Metal, what value determines bend allowance accuracy?", opts: ["Yield strength", "K-Factor", "Bend radius", "Sheet thickness"], ans: 1, module: "Sheet Metal" },
  { q: "What is the purpose of 'Publications' in Assembly Design?", opts: ["Document assembly", "Create stable external references", "Export to PDF", "Publish to PLM"], ans: 1, module: "Assembly" },
];

type LevelType = { name: string; min: number; max: number; color: string; icon: string; desc: string };

const LEVELS: LevelType[] = [
  { name: "Beginner", min: 0, max: 200, color: "#78909C", icon: "🌱", desc: "Just starting the CATIA journey" },
  { name: "Intermediate", min: 200, max: 400, color: "#42A5F5", icon: "📐", desc: "Core operations mastered" },
  { name: "Advanced", min: 400, max: 600, color: "#26A69A", icon: "⚙️", desc: "Feature-level expertise" },
  { name: "Professional", min: 600, max: 800, color: "#7E57C2", icon: "🔩", desc: "Industry-ready designer" },
  { name: "Expert", min: 800, max: 950, color: "#EF5350", icon: "🏅", desc: "Automation and surface mastery" },
  { name: "Elite CATIA Designer", min: 950, max: 1000, color: "#FFB300", icon: "🏆", desc: "Top 1% — Industry leader" },
];

const allShortcuts = MODULES[0].sections!.flatMap(s => s.items);

export default function CatiaReferencePage() {
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [tab, setTab] = useState<string>("learn");
  const [score, setScore] = useState<number>(0);
  const [progress, setProgress] = useState<Record<number, boolean>>({});
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizDone, setQuizDone] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [shortcutTrainer, setShortcutTrainer] = useState<boolean>(false);
  const [trainerQ, setTrainerQ] = useState<number>(0);
  const [trainerInput, setTrainerInput] = useState<string>("");
  const [trainerFeedback, setTrainerFeedback] = useState<"correct" | "wrong" | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const currentLevel = LEVELS.find(l => score >= l.min && score < l.max) || LEVELS[LEVELS.length - 1];
  const nextLevel = LEVELS[LEVELS.indexOf(currentLevel) + 1];

  const markProgress = (modId: number) => {
    setProgress(p => {
      if (p[modId]) return p;
      setScore(s => Math.min(1000, s + 80));
      const ach = MODULES.find(m => m.id === modId)?.title;
      setAchievements(a => [...a, `✅ Completed: ${ach}`]);
      return { ...p, [modId]: true };
    });
  };

  const handleQuizAnswer = (idx: number) => {
    setSelectedAns(idx);
    setShowResult(true);
    setTimeout(() => {
      if (idx === QUIZ_QUESTIONS[quizIdx].ans) setQuizScore(s => s + 1);
      if (quizIdx + 1 >= QUIZ_QUESTIONS.length) {
        setQuizDone(true);
        setScore(s => Math.min(1000, s + (idx === QUIZ_QUESTIONS[quizIdx].ans ? 15 : 0)));
      } else {
        setQuizIdx(q => q + 1);
        setSelectedAns(null);
        setShowResult(false);
      }
    }, 1200);
  };

  const handleTrainerSubmit = () => {
    if (trainerFeedback) return;
    const expected = allShortcuts[trainerQ % allShortcuts.length].key.toLowerCase();
    const got = trainerInput.toLowerCase().trim();
    if (!got) return;

    const normalizedExpected = expected.replace(/\s+/g, '');
    const normalizedGot = got.replace(/\s+/g, '');

    if (normalizedGot === normalizedExpected) {
      setTrainerFeedback("correct");
      setScore(s => Math.min(1000, s + 5));
      setTimeout(() => { setTrainerQ(q => q + 1); setTrainerInput(""); setTrainerFeedback(null); }, 900);
    } else {
      setTrainerFeedback("wrong");
      setTimeout(() => { setTrainerFeedback(null); }, 1200);
    }
  };

  const progressPct = nextLevel ? Math.round(((score - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100) : 100;

  return (
    <div className="catia-page" style={{ fontFamily: "'Barlow Condensed', 'Barlow', sans-serif", background: "linear-gradient(135deg, #f0f4ff 0%, #fff8f0 50%, #f0fff4 100%)", minHeight: "100vh", color: "#1a1a2e" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
        .catia-page { box-sizing: border-box; margin: 0; padding: 0; }
        .catia-page * { box-sizing: border-box; }
        .catia-page ::-webkit-scrollbar { width: 6px; }
        .catia-page ::-webkit-scrollbar-track { background: #f0f4ff; }
        .catia-page ::-webkit-scrollbar-thumb { background: #0057B7; border-radius: 3px; }
        .mod-card { transition: all 0.22s cubic-bezier(.4,0,.2,1); cursor: pointer; border: 2.5px solid transparent; }
        .mod-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 12px 32px rgba(0,0,0,0.13); }
        .mod-card.active { border-color: currentColor; transform: translateY(-2px); }
        .btn-pill { border: none; cursor: pointer; border-radius: 50px; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; letter-spacing: 0.5px; transition: all 0.18s; }
        .btn-pill:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .tab-btn { border: none; cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 0.5px; padding: 8px 20px; border-radius: 8px 8px 0 0; transition: all 0.18s; }
        .kw-tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 3px 8px; border-radius: 4px; font-weight: 600; letter-spacing: 0.5px; }
        .shortcut-key { font-family: 'JetBrains Mono', monospace; font-weight: 600; background: #1a1a2e; color: #FFD700; padding: 4px 10px; border-radius: 6px; font-size: 13px; display: inline-block; box-shadow: 0 2px 0 #111; }
        .progress-bar-fill { transition: width 1s cubic-bezier(.4,0,.2,1); }
        .quiz-opt { transition: all 0.15s; cursor: pointer; border: 2px solid #e0e0e0; border-radius: 10px; padding: 12px 18px; font-family: 'Barlow', sans-serif; font-size: 15px; background: white; }
        .quiz-opt:hover { border-color: #0057B7; background: #f0f6ff; }
        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
        .shine { position: relative; overflow: hidden; }
        .shine::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent); animation: shine 3s infinite; }
        @keyframes shine { 0%{left:-100%} 60%,100%{left:150%} }
        .section-toggle { cursor: pointer; user-select: none; transition: background 0.15s; }
        .section-toggle:hover { background: rgba(0,87,183,0.06); }
        .trainer-input { font-family: 'JetBrains Mono', monospace; font-size: 16px; border: 2px solid #0057B7; border-radius: 8px; padding: 10px 16px; outline: none; width: 200px; }
        .trainer-input:focus { box-shadow: 0 0 0 3px rgba(0,87,183,0.15); }
        .ach-badge { animation: popIn 0.4s cubic-bezier(.34,1.56,.64,1); }
        @keyframes popIn { from{transform:scale(0.5);opacity:0} to{transform:scale(1);opacity:1} }
        .level-glow { box-shadow: 0 0 20px rgba(255,179,0,0.4); }
      `}</style>

      {/* Floating Back Button */}
      <Link href="/" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '10px 16px',
        borderRadius: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textDecoration: 'none',
        color: '#0057B7',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: '700',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0,87,183,0.2)',
        transition: 'all 0.2s'
      }}
      className="back-btn"
      onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)'; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }}>
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

            {/* HERO IMAGE */}
      <div style={{ position: "relative", width: "100%", height: "250px" }}>
        <Image 
          src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80"/assets/projects/catia-poster.jpeg"w=2000"/assets/projects/catia-poster.jpeg"auto=format"/assets/projects/catia-poster.jpeg"fit=crop" 
          alt="CATIA V5 Learning Path Hero" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,87,183,1))' }} />
      </div>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #0057B7 0%, #003580 40%, #001A50 100%)", color: "white", padding: "0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 24px 0", paddingTop: "80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <div style={{ background: "#FFD700", color: "#001A50", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 11, padding: "3px 10px", borderRadius: 4, letterSpacing: 1 }}>CATIA V5 MASTERY</div>
                <div style={{ background: "rgba(255,255,255,0.15)", fontSize: 11, padding: "3px 10px", borderRadius: 4, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1 }}>ELITE EDITION</div>
              </div>
              <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(26px,5vw,48px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -0.5 }}>
                CATIA MASTERY<br />
                <span style={{ color: "#FFD700" }}>PRODUCTIVITY ACCELERATOR</span>
              </h1>
              <p style={{ marginTop: 8, fontFamily: "'Barlow',sans-serif", fontSize: 14, opacity: 0.8 }}>Prepared by <strong>Veeresh H U</strong> · Freelancing Design Engineer · 12 Modules · 1000+ Techniques</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "16px 24px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", minWidth: 220 }}>
                <div style={{ fontSize: 11, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 1, opacity: 0.8, marginBottom: 4 }}>YOUR PRODUCTIVITY SCORE</div>
                <div style={{ fontSize: 52, fontWeight: 900, fontFamily: "'Barlow Condensed',sans-serif", color: "#FFD700", lineHeight: 1 }}>{score}</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>/ 1000</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 20 }}>{currentLevel.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", color: "#FFD700" }}>{currentLevel.name}</div>
                    <div style={{ width: 120, height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3, marginTop: 4 }}>
                      <div className="progress-bar-fill" style={{ width: `${progressPct}%`, height: "100%", background: "#FFD700", borderRadius: 3 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL TRACK */}
          <div style={{ display: "flex", gap: 0, marginTop: 24, overflowX: "auto", paddingBottom: 0 }}>
            {LEVELS.map((l, i) => (
              <div key={i} style={{ flex: 1, minWidth: 80, textAlign: "center", padding: "8px 4px", borderBottom: currentLevel.name === l.name ? `3px solid ${l.color}` : "3px solid transparent", transition: "border 0.3s", opacity: score >= l.min ? 1 : 0.4 }}>
                <div style={{ fontSize: 16 }}>{l.icon}</div>
                <div style={{ fontSize: 10, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, letterSpacing: 0.3, color: currentLevel.name === l.name ? "#FFD700" : "rgba(255,255,255,0.7)", marginTop: 2 }}>{l.name.replace(" CATIA Designer","")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN TABS */}
      <div style={{ background: "#fff", borderBottom: "2px solid #e8eaf6", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,87,183,0.08)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", gap: 4, overflowX: "auto" }}>
          {[
            { id: "learn", label: "📚 Learn", },
            { id: "quiz", label: "🎯 Quiz" },
            { id: "trainer", label: "⌨️ Shortcut Trainer" },
            { id: "score", label: "📊 My Progress" },
            { id: "achievements", label: "🏅 Achievements" },
          ].map(t => (
            <button key={t.id} className="tab-btn" onClick={() => setTab(t.id)}
              style={{ background: tab === t.id ? "#0057B7" : "transparent", color: tab === t.id ? "white" : "#444", borderBottom: tab === t.id ? "2px solid #0057B7" : "2px solid transparent", marginBottom: -2 }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>

        {/* ========== LEARN TAB ========== */}
        {tab === "learn" && (
          <div className="fade-in">
            {!activeModule ? (
              <>
                <div style={{ marginBottom: 24 }}>
                  <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 28, fontWeight: 800, color: "#0057B7" }}>Select a Module to Master</h2>
                  <p style={{ color: "#666", fontFamily: "'Barlow',sans-serif", fontSize: 14, marginTop: 4 }}>Complete modules to earn points and advance your CATIA Mastery level</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 18 }}>
                  {MODULES.map(mod => (
                    <div key={mod.id} className="mod-card shine" onClick={() => setActiveModule(mod)}
                      style={{ background: "white", borderRadius: 16, padding: "20px", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", position: "relative", overflow: "hidden", color: mod.color }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${mod.color}, ${mod.accent})` }} />
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                        <div style={{ fontSize: 36 }}>{mod.icon}</div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                          <span className="kw-tag" style={{ background: mod.color + "18", color: mod.color }}>{mod.tag}</span>
                          {progress[mod.id] && <span style={{ fontSize: 12, color: "#2E7D32", fontWeight: 700 }}>✅ Done</span>}
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: "#1a1a2e", lineHeight: 1.1, marginBottom: 4 }}>
                        {mod.id}. {mod.title}
                      </div>
                      <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, color: "#666" }}>{mod.subtitle}</div>
                      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <button className="btn-pill" onClick={e => { e.stopPropagation(); setActiveModule(mod); }}
                          style={{ background: `linear-gradient(135deg, ${mod.color}, ${mod.accent})`, color: "white", padding: "7px 18px", fontSize: 13 }}>
                          Open Module →
                        </button>
                        <span style={{ fontSize: 12, color: "#999", fontFamily: "'Barlow',sans-serif" }}>+80 pts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="fade-in">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <button onClick={() => setActiveModule(null)} style={{ background: "none", border: "2px solid #0057B7", color: "#0057B7", borderRadius: 8, padding: "6px 16px", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, cursor: "pointer", marginBottom: 10 }}>
                      ← Back to Modules
                    </button>
                    <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: activeModule.color }}>
                      {activeModule.icon} {activeModule.title}
                    </h2>
                    <p style={{ color: "#666", fontFamily: "'Barlow',sans-serif" }}>{activeModule.subtitle}</p>
                  </div>
                  {!progress[activeModule.id] && (
                    <button className="btn-pill" onClick={() => markProgress(activeModule.id)}
                      style={{ background: "linear-gradient(135deg, #2E7D32, #43A047)", color: "white", padding: "12px 28px", fontSize: 15 }}>
                      ✅ Mark as Complete (+80 pts)
                    </button>
                  )}
                </div>

                {/* MODULE 1: SHORTCUTS */}
                {activeModule.id === 1 && (
                  <div>
                    {activeModule.sections?.map((sec, si) => (
                      <div key={si} style={{ marginBottom: 16, background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                        <div className="section-toggle" onClick={() => setExpandedSection(expandedSection === `${activeModule.id}-${si}` ? null : `${activeModule.id}-${si}`)}
                          style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: expandedSection === `${activeModule.id}-${si}` ? `3px solid ${activeModule.color}` : "3px solid transparent", background: expandedSection === `${activeModule.id}-${si}` ? "#f5f8ff" : "white" }}>
                          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800, color: activeModule.color }}>{sec.name}</div>
                          <span style={{ color: "#999", fontSize: 18 }}>{expandedSection === `${activeModule.id}-${si}` ? "▲" : "▼"}</span>
                        </div>
                        {expandedSection === `${activeModule.id}-${si}` && (
                          <div style={{ padding: "0 8px 12px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 10, padding: "12px 8px" }}>
                              {sec.items.map((item, ii) => (
                                <div key={ii} style={{ background: "#fafbff", border: "1px solid #e8eaf6", borderRadius: 10, padding: "14px 16px", borderLeft: `4px solid ${activeModule.color}` }}>
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                    <span className="shortcut-key">{item.key}</span>
                                    <span style={{ fontSize: 11, background: "#E8F5E9", color: "#2E7D32", borderRadius: 4, padding: "2px 7px", fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>⏱ -{item.time}</span>
                                  </div>
                                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 4 }}>{item.fn}</div>
                                  <div style={{ fontSize: 13, color: "#555", fontFamily: "'Barlow',sans-serif", marginBottom: 4 }}>{item.example}</div>
                                  <div style={{ fontSize: 12, color: "#888", fontStyle: "italic", fontFamily: "'Barlow',sans-serif" }}>💡 {item.tip}</div>
                                  <div style={{ marginTop: 6, fontSize: 11, color: activeModule.color, fontWeight: 700, fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: 0.5 }}>USE FREQ: {item.freq}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 2: SKETCHER */}
                {activeModule.id === 2 && (
                  <div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>Workflow Comparison</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 16, marginBottom: 28 }}>
                      {activeModule.workflows?.map((wf, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                          <div style={{ background: wf.color, color: "white", padding: "12px 18px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800 }}>
                            {wf.level} Workflow
                          </div>
                          <div style={{ padding: "16px" }}>
                            {wf.steps.map((step, si) => (
                              <div key={si} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                                <div style={{ minWidth: 24, height: 24, background: wf.color, color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>{si + 1}</div>
                                <div style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#333", lineHeight: 1.4, paddingTop: 3 }}>{step}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>Essential Sketcher Tools</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 12 }}>
                      {activeModule.tools?.map((t, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 10, padding: "14px 16px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: `3px solid ${activeModule.color}` }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 800 }}>{t.name}</span>
                            <span className="shortcut-key" style={{ fontSize: 11 }}>{t.shortcut}</span>
                          </div>
                          <div style={{ fontSize: 13, color: "#666", fontFamily: "'Barlow',sans-serif" }}>{t.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MODULE 3: PART DESIGN */}
                {activeModule.id === 3 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
                    {activeModule.features?.map((f, i) => (
                      <div key={i} style={{ background: "white", borderRadius: 14, padding: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", borderLeft: `5px solid ${activeModule.color}` }}>
                        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                          <span style={{ fontSize: 28 }}>{f.icon}</span>
                          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: activeModule.color }}>{f.name}</span>
                        </div>
                        <p style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#444", lineHeight: 1.5, marginBottom: 10 }}>{f.desc}</p>
                        <div style={{ background: "#fff8e1", borderRadius: 8, padding: "8px 12px", fontSize: 13, fontFamily: "'Barlow',sans-serif", color: "#E65100" }}>
                          ⭐ Expert Tip: {f.expert}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 4: ASSEMBLY */}
                {activeModule.id === 4 && (
                  <div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>Assembly Constraints</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))", gap: 12, marginBottom: 28 }}>
                      {activeModule.constraints?.map((c, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 12, padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                          <div style={{ width: 44, height: 44, background: activeModule.color, color: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{c.icon}</div>
                          <div>
                            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 17, fontWeight: 800, color: activeModule.color }}>{c.name}</div>
                            <div style={{ fontSize: 13, fontFamily: "'Barlow',sans-serif", color: "#555", marginTop: 3 }}>{c.desc}</div>
                            <div style={{ fontSize: 12, color: "#999", marginTop: 4, fontStyle: "italic" }}>e.g. {c.use}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>Design Strategies</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
                      {activeModule.strategies?.map((s, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 14, padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderTop: `4px solid ${activeModule.color}` }}>
                          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: activeModule.color, marginBottom: 8 }}>{s.title}</div>
                          <p style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#444", lineHeight: 1.5 }}>{s.desc}</p>
                          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                            <div style={{ flex: 1, background: "#E8F5E9", borderRadius: 8, padding: "8px 10px", fontSize: 12, color: "#2E7D32" }}>✅ {s.pro}</div>
                            <div style={{ flex: 1, background: "#FFEBEE", borderRadius: 8, padding: "8px 10px", fontSize: 12, color: "#C62828" }}>⚠️ {s.con}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MODULE 5: SURFACES */}
                {activeModule.id === 5 && (
                  <div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>GSD Tool Reference</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 12, marginBottom: 28 }}>
                      {activeModule.tools?.map((t, i) => {
                        const catColor = t.category === "Wireframe" ? "#1565C0" : t.category === "Surface" ? "#00695C" : t.category === "Operations" ? "#6A1B9A" : "#BF360C";
                        return (
                          <div key={i} style={{ background: "white", borderRadius: 10, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", borderTop: `3px solid ${catColor}` }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 800, color: catColor }}>{t.name}</span>
                              <span className="kw-tag" style={{ background: catColor + "18", color: catColor }}>{t.category}</span>
                            </div>
                            <div style={{ fontSize: 13, fontFamily: "'Barlow',sans-serif", color: "#555" }}>{t.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>Surface Continuity Levels</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 14 }}>
                      {activeModule.continuity?.map((c, i) => {
                        const cols = ["#78909C", "#1565C0", "#00695C", "#4527A0"];
                        return (
                          <div key={i} style={{ background: "white", borderRadius: 12, padding: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", textAlign: "center", borderBottom: `4px solid ${cols[i]}` }}>
                            <div style={{ fontSize: 36, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, color: cols[i] }}>{c.level}</div>
                            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>{c.name}</div>
                            <div style={{ fontSize: 13, fontFamily: "'Barlow',sans-serif", color: "#555", marginBottom: 8 }}>{c.desc}</div>
                            <div style={{ fontSize: 12, background: cols[i] + "15", color: cols[i], padding: "4px 8px", borderRadius: 6, fontWeight: 600 }}>{c.use}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* MODULE 6: DRAFTING */}
                {activeModule.id === 6 && (
                  <div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>View Types</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: 12, marginBottom: 28 }}>
                      {activeModule.viewTypes?.map((v, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 12, padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", textAlign: "center", borderTop: `3px solid ${activeModule.color}` }}>
                          <span className="shortcut-key" style={{ fontSize: 16 }}>{v.shortcut}</span>
                          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: activeModule.color, margin: "8px 0 4px" }}>{v.name}</div>
                          <div style={{ fontSize: 13, color: "#666", fontFamily: "'Barlow',sans-serif" }}>{v.desc}</div>
                        </div>
                      ))}
                    </div>
                    <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>GD&T Symbol Reference</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px,1fr))", gap: 10 }}>
                      {activeModule.gdtSymbols?.map((g, i) => (
                        <div key={i} style={{ background: "white", borderRadius: 10, padding: "14px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", display: "flex", gap: 10, alignItems: "center" }}>
                          <div style={{ width: 40, height: 40, background: activeModule.color, color: "white", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, flexShrink: 0 }}>{g.symbol}</div>
                          <div>
                            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700 }}>{g.name}</div>
                            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#888" }}>{g.iso}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MODULE 7: SHEET METAL */}
                {activeModule.id === 7 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px,1fr))", gap: 14 }}>
                    {activeModule.features?.map((f, i) => (
                      <div key={i} style={{ background: "white", borderRadius: 14, padding: "18px", boxShadow: "0 2px 10px rgba(0,0,0,0.07)", borderLeft: `5px solid ${activeModule.color}` }}>
                        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: activeModule.color, marginBottom: 8 }}>{f.name}</div>
                        <p style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#444", lineHeight: 1.5, marginBottom: 10 }}>{f.desc}</p>
                        <div style={{ background: "#E3F2FD", borderRadius: 7, padding: "7px 12px", fontSize: 13, color: "#0D47A1", fontFamily: "'Barlow',sans-serif" }}>
                          🔧 {f.tip}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 8: KNOWLEDGEWARE */}
                {activeModule.id === 8 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
                    {activeModule.elements?.map((el, i) => (
                      <div key={i} style={{ background: "white", borderRadius: 14, padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderTop: `4px solid ${activeModule.color}` }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                          <div style={{ width: 40, height: 40, background: activeModule.color, color: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{el.icon}</div>
                          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: activeModule.color }}>{el.name}</div>
                        </div>
                        <p style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#444", lineHeight: 1.5, marginBottom: 10 }}>{el.desc}</p>
                        <div style={{ background: "#f3f3f3", borderRadius: 7, padding: "7px 12px" }}>
                          <code style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#0057B7" }}>{el.example}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 9: POWER COPIES */}
                {activeModule.id === 9 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
                    {activeModule.concepts?.map((c, i) => (
                      <div key={i} style={{ background: "white", borderRadius: 14, padding: "22px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderTop: `4px solid ${activeModule.color}` }}>
                        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: activeModule.color, marginBottom: 10 }}>{c.name}</div>
                        <p style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#444", lineHeight: 1.5, marginBottom: 12 }}>{c.desc}</p>
                        <div style={{ background: `${activeModule.color}15`, borderRadius: 8, padding: "8px 14px", color: activeModule.color, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15 }}>
                          🚀 {c.benefit}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 10, 11: INDUSTRY */}
                {(activeModule.id === 10 || activeModule.id === 11) && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 16 }}>
                    {activeModule.areas?.map((area, i) => (
                      <div key={i} style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                        <div style={{ background: `linear-gradient(135deg, ${activeModule.color}, ${activeModule.accent})`, color: "white", padding: "14px 18px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800 }}>{area.name}</div>
                        <div style={{ padding: "14px 16px" }}>
                          {area.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: ii < area.items.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                              <div style={{ width: 7, height: 7, background: activeModule.accent, borderRadius: "50%", flexShrink: 0 }} />
                              <span style={{ fontSize: 14, fontFamily: "'Barlow',sans-serif", color: "#333" }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MODULE 12: ELITE */}
                {activeModule.id === 12 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))", gap: 18 }}>
                    {activeModule.topLists?.map((list, li) => (
                      <div key={li} style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                        <div style={{ background: list.color, color: "white", padding: "14px 18px", fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800 }}>{list.title}</div>
                        <div style={{ padding: "14px 16px" }}>
                          {list.items.map((item, ii) => (
                            <div key={ii} style={{ display: "flex", gap: 10, padding: "6px 0", borderBottom: ii < list.items.length - 1 ? "1px solid #f5f5f5" : "none", alignItems: "flex-start" }}>
                              <span style={{ minWidth: 22, height: 22, background: list.color + "20", color: list.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0, marginTop: 1 }}>{ii + 1}</span>
                              <span style={{ fontSize: 13, fontFamily: "'Barlow',sans-serif", color: "#333", lineHeight: 1.4 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========== QUIZ TAB ========== */}
        {tab === "quiz" && (
          <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: "#0057B7", marginBottom: 4 }}>🎯 CATIA Knowledge Quiz</h2>
            <p style={{ color: "#666", fontFamily: "'Barlow',sans-serif", marginBottom: 24 }}>{QUIZ_QUESTIONS.length} Questions · +15 pts per correct answer</p>

            {!quizStarted ? (
              <div style={{ background: "white", borderRadius: 20, padding: "40px", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎯</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 26, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Test Your CATIA Knowledge</h3>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#666", marginBottom: 24 }}>Answer {QUIZ_QUESTIONS.length} questions covering shortcuts, surfaces, part design, assembly and more.</p>
                <button className="btn-pill" onClick={() => { setQuizStarted(true); setQuizIdx(0); setQuizScore(0); setQuizDone(false); setSelectedAns(null); setShowResult(false); }}
                  style={{ background: "linear-gradient(135deg, #0057B7, #003580)", color: "white", padding: "14px 36px", fontSize: 17 }}>
                  Start Quiz →
                </button>
              </div>
            ) : quizDone ? (
              <div style={{ background: "white", borderRadius: 20, padding: "40px", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }} className="fade-in">
                <div style={{ fontSize: 64, marginBottom: 12 }}>{quizScore >= 6 ? "🏆" : quizScore >= 4 ? "👍" : "📚"}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 30, fontWeight: 900, color: "#0057B7" }}>Quiz Complete!</h3>
                <div style={{ fontSize: 56, fontWeight: 900, fontFamily: "'Barlow Condensed',sans-serif", color: "#FFB300", margin: "12px 0" }}>{quizScore}/{QUIZ_QUESTIONS.length}</div>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#666", marginBottom: 24 }}>
                  {quizScore >= 7 ? "Excellent! You're on the Expert track!" : quizScore >= 5 ? "Good work! Keep studying!" : "Review the modules and try again!"}
                </p>
                <button className="btn-pill" onClick={() => { setQuizIdx(0); setQuizScore(0); setQuizDone(false); setSelectedAns(null); setShowResult(false); }}
                  style={{ background: "linear-gradient(135deg, #0057B7, #003580)", color: "white", padding: "12px 30px", fontSize: 15 }}>
                  Retry Quiz
                </button>
              </div>
            ) : (
              <div className="fade-in" style={{ background: "white", borderRadius: 20, padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <span className="kw-tag" style={{ background: "#E3F2FD", color: "#0057B7" }}>{QUIZ_QUESTIONS[quizIdx].module}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#999" }}>{quizIdx + 1} / {QUIZ_QUESTIONS.length}</span>
                </div>
                <div style={{ width: "100%", height: 6, background: "#f0f0f0", borderRadius: 3, marginBottom: 24 }}>
                  <div style={{ width: `${((quizIdx) / QUIZ_QUESTIONS.length) * 100}%`, height: "100%", background: "#0057B7", borderRadius: 3, transition: "width 0.3s" }} />
                </div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 24, lineHeight: 1.3 }}>{QUIZ_QUESTIONS[quizIdx].q}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {QUIZ_QUESTIONS[quizIdx].opts.map((opt, oi) => {
                    let bg = "white", border = "#e0e0e0", color = "#333";
                    if (showResult) {
                      if (oi === QUIZ_QUESTIONS[quizIdx].ans) { bg = "#E8F5E9"; border = "#2E7D32"; color = "#1B5E20"; }
                      else if (oi === selectedAns) { bg = "#FFEBEE"; border = "#C62828"; color = "#B71C1C"; }
                    }
                    return (
                      <button key={oi} className="quiz-opt" onClick={() => !showResult && handleQuizAnswer(oi)}
                        style={{ background: bg, borderColor: border, color, textAlign: "left", fontFamily: "'Barlow',sans-serif", cursor: showResult ? "default" : "pointer" }}>
                        <span style={{ fontWeight: 700, color: showResult && oi === QUIZ_QUESTIONS[quizIdx].ans ? "#2E7D32" : "#999", marginRight: 10 }}>{String.fromCharCode(65 + oi)}.</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========== SHORTCUT TRAINER ========== */}
        {tab === "trainer" && (
          <div className="fade-in" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: "#0057B7", marginBottom: 4 }}>⌨️ Shortcut Trainer</h2>
            <p style={{ color: "#666", fontFamily: "'Barlow',sans-serif", marginBottom: 28 }}>Type the keyboard shortcut for each operation. +5 pts per correct answer!</p>

            <div style={{ background: "white", borderRadius: 20, padding: "36px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center" }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, letterSpacing: 1, color: "#999", marginBottom: 8 }}>TYPE THE SHORTCUT FOR</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: "#1a1a2e", marginBottom: 6 }}>
                {allShortcuts[trainerQ % allShortcuts.length].fn}
              </div>
              <div style={{ fontSize: 14, color: "#888", fontFamily: "'Barlow',sans-serif", marginBottom: 6 }}>
                {allShortcuts[trainerQ % allShortcuts.length].example}
              </div>
              <div style={{ fontSize: 12, color: "#aaa", marginBottom: 28, fontStyle: "italic" }}>
                💡 {allShortcuts[trainerQ % allShortcuts.length].tip}
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <input className="trainer-input" value={trainerInput} onChange={e => setTrainerInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleTrainerSubmit()}
                  placeholder="Type shortcut here..."
                  style={{ outline: "none", background: trainerFeedback === "correct" ? "#E8F5E9" : trainerFeedback === "wrong" ? "#FFEBEE" : "white", borderColor: trainerFeedback === "correct" ? "#2E7D32" : trainerFeedback === "wrong" ? "#C62828" : "#0057B7" }}
                  autoFocus />
                <button className="btn-pill" onClick={handleTrainerSubmit}
                  style={{ background: "linear-gradient(135deg, #0057B7, #003580)", color: "white", padding: "10px 24px", fontSize: 15 }}>
                  Check ↵
                </button>
              </div>
              {trainerFeedback && (
                <div style={{ marginTop: 16, fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, color: trainerFeedback === "correct" ? "#2E7D32" : "#C62828" }}>
                  {trainerFeedback === "correct" ? "✅ Correct! +5 pts" : `❌ Answer: ${allShortcuts[trainerQ % allShortcuts.length].key}`}
                </div>
              )}
              <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 32 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 700, color: "#0057B7" }}>{trainerQ}</div>
                  <div style={{ fontSize: 12, color: "#999", fontFamily: "'Barlow',sans-serif" }}>Completed</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 28, fontWeight: 700, color: "#FFB300" }}>{score}</div>
                  <div style={{ fontSize: 12, color: "#999", fontFamily: "'Barlow',sans-serif" }}>Total Score</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24, background: "white", borderRadius: 14, padding: "20px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
              <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 12, color: "#1a1a2e" }}>Quick Reference Card</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 8 }}>
                {allShortcuts.slice(0, 12).map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 8px", background: "#fafbff", borderRadius: 7 }}>
                    <span className="shortcut-key" style={{ fontSize: 11 }}>{s.key}</span>
                    <span style={{ fontSize: 12, fontFamily: "'Barlow',sans-serif", color: "#555" }}>{s.fn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== PROGRESS TAB ========== */}
        {tab === "score" && (
          <div className="fade-in" style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: "#0057B7", marginBottom: 24 }}>📊 My CATIA Progress Dashboard</h2>

            {/* Score card */}
            <div style={{ background: `linear-gradient(135deg, ${currentLevel.color}, ${currentLevel.color}cc)`, borderRadius: 20, padding: "28px 32px", color: "white", marginBottom: 24, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }} className="level-glow">
              <div style={{ fontSize: 60 }}>{currentLevel.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, letterSpacing: 1, opacity: 0.8, marginBottom: 4 }}>CURRENT LEVEL</div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 36, fontWeight: 900, lineHeight: 1 }}>{currentLevel.name}</div>
                <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: 14, opacity: 0.85, marginTop: 4 }}>{currentLevel.desc}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 52, fontWeight: 700, lineHeight: 1 }}>{score}</div>
                <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, opacity: 0.8 }}>/ 1000 pts</div>
              </div>
            </div>

            {/* Level track */}
            <div style={{ background: "white", borderRadius: 16, padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20, color: "#1a1a2e" }}>Level Progression</h3>
              {LEVELS.map((l, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ fontSize: 18 }}>{l.icon}</span>
                      <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: score >= l.min ? l.color : "#ccc" }}>{l.name}</span>
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#999" }}>{l.min}–{l.max === 1000 ? "1000" : l.max}</span>
                  </div>
                  <div style={{ height: 8, background: "#f0f0f0", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: score >= l.max ? "100%" : score >= l.min ? `${((score - l.min) / (l.max - l.min)) * 100}%` : "0%", height: "100%", background: l.color, borderRadius: 4, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Module progress */}
            <div style={{ background: "white", borderRadius: 16, padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 20, color: "#1a1a2e" }}>
                Module Completion · {Object.keys(progress).length}/{MODULES.length}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10 }}>
                {MODULES.map(m => (
                  <div key={m.id} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 12px", background: progress[m.id] ? "#E8F5E9" : "#fafbff", borderRadius: 10, border: `1.5px solid ${progress[m.id] ? "#4CAF50" : "#e8eaf6"}` }}>
                    <span style={{ fontSize: 20 }}>{progress[m.id] ? "✅" : m.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 700, color: progress[m.id] ? "#2E7D32" : "#555" }}>{m.title}</div>
                      <div style={{ fontSize: 11, color: progress[m.id] ? "#4CAF50" : "#999", fontFamily: "'Barlow',sans-serif" }}>{progress[m.id] ? "+80 pts earned" : "Not started"}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== ACHIEVEMENTS TAB ========== */}
        {tab === "achievements" && (
          <div className="fade-in" style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 32, fontWeight: 900, color: "#0057B7", marginBottom: 8 }}>🏅 Achievements</h2>
            <p style={{ color: "#666", fontFamily: "'Barlow',sans-serif", marginBottom: 28 }}>Earn badges by completing modules and mastering skills</p>

            {achievements.length === 0 ? (
              <div style={{ background: "white", borderRadius: 16, padding: "48px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>🎯</div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>No achievements yet</h3>
                <p style={{ fontFamily: "'Barlow',sans-serif", color: "#888" }}>Complete modules in the Learn tab to earn your first achievement!</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 14 }}>
                {achievements.map((a, i) => (
                  <div key={i} className="ach-badge" style={{ background: "white", borderRadius: 14, padding: "18px 20px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", border: "2px solid #FFD700", display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ fontSize: 32 }}>🏅</div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>{a}</div>
                      <div style={{ fontSize: 13, color: "#888", fontFamily: "'Barlow',sans-serif", marginTop: 2 }}>+80 points earned</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ marginTop: 32, background: "white", borderRadius: 16, padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#1a1a2e" }}>🎯 Upcoming Badges</h3>
              {[
                { icon: "⌨️", name: "Shortcut Ninja", desc: "Answer 20 trainer questions correctly", pts: 100 },
                { icon: "🌊", name: "Surface Maestro", desc: "Complete Surface Design module", pts: 80 },
                { icon: "🏆", name: "Elite Designer", desc: "Reach 950+ score", pts: "Title" },
                { icon: "📚", name: "Complete Scholar", desc: "Complete all 12 modules", pts: 200 },
                { icon: "🎯", name: "Quiz Champion", desc: "Score 100% on the quiz", pts: 50 },
                { icon: "🔧", name: "Part Master", desc: "Complete Part Design module", pts: 80 },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: i < 5 ? "1px solid #f0f0f0" : "none", alignItems: "center" }}>
                  <span style={{ fontSize: 24, opacity: 0.4 }}>{b.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: "#888" }}>{b.name}</div>
                    <div style={{ fontSize: 13, color: "#aaa", fontFamily: "'Barlow',sans-serif" }}>{b.desc}</div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#FFB300", fontWeight: 700 }}>+{b.pts}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ background: "linear-gradient(135deg, #0057B7, #001A50)", color: "white", padding: "32px 24px", marginTop: 40 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 900, letterSpacing: 0.5 }}>CATIA MASTERY PLATFORM</div>
            <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: 13, opacity: 0.7, marginTop: 4 }}>Prepared by Veeresh H U · Freelancing Design Engineer</div>
          </div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["12 Modules", "1000+ Techniques", "8 Quiz Questions", "20 Shortcuts"].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 16, color: "#FFD700" }}>{item.split(" ")[0]}</div>
                <div style={{ fontSize: 11, opacity: 0.7, fontFamily: "'Barlow',sans-serif" }}>{item.split(" ").slice(1).join(" ")}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}