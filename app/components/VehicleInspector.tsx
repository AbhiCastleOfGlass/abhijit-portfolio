"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Wrench,
  Award,
  Layers,
  Briefcase,
  Maximize2,
  RotateCw,
  Eye,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Target,
  Compass,
  Zap,
  Flame,
  X
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export type VehicleZone = "full" | "hood" | "chassis" | "cockpit" | "exhaust";

interface ZoneInfo {
  id: VehicleZone;
  title: string;
  badge: string;
  subtitle: string;
  summary: string;
  metrics: { label: string; value: string }[];
  skills: { name: string; level: string; description: string }[];
  achievements: string[];
  projects: { title: string; desc: string; link?: string }[];
  experience: { role: string; company: string; period: string; details: string };
  cameraPos: [number, number, number];
  targetPos: [number, number, number];
  openHood: boolean;
}

const ZONES_DATA: Record<VehicleZone, ZoneInfo> = {
  full: {
    id: "full",
    title: "Full Vehicle Assembly",
    badge: "DIGITAL MOCKUP OVERVIEW",
    subtitle: "Complete Powertrain, Chassis & Exterior Integration",
    summary:
      "Integrated virtual vehicle validation using Siemens NX and Teamcenter Vis Mockup. Micron-level dimensional convergence across Powertrain, Cooling, and Underbody structures.",
    metrics: [
      { label: "Assembly Yield", value: "99.90%" },
      { label: "Interface Zones", value: "15+" },
      { label: "Engineering Standard", value: "ASME Y14.5" },
    ],
    skills: [
      {
        name: "Siemens NX (Primary)",
        level: "Expert",
        description: "Primary daily CAD modeling, parametric design modifications, and PMI authoring.",
      },
      {
        name: "CETOL 3D VSA",
        level: "Advanced",
        description: "3D variation simulation and statistical tolerance stack-up analysis.",
      },
      {
        name: "Teamcenter Vis Mockup",
        level: "Advanced",
        description: "Full-vehicle digital mockup, dynamic clash detection, and gap/flush reviews.",
      },
      {
        name: "3-2-1 Datum Strategy",
        level: "Core Competency",
        description: "ASME Y14.5 reference frame definition ensuring repeatable assembly.",
      },
    ],
    achievements: [
      "Increased powertrain subsystem assembly yield from 54.34% to 99.90% per million units by executing 3D variation simulation in CETOL.",
      "Conducted 3D tolerance stack-up analysis across engine cooling circuits and air intake packaging, mitigating high-risk assembly variation before tooling freeze.",
      "Standardized 3-2-1 datum locating strategies across multiple Stellantis powertrain programs.",
    ],
    projects: [
      {
        title: "1D Stack Up Calculation Tool",
        desc: "Curated GD&T cheat sheets, tolerance analysis guides, and DFM references for precision engineering.",
        link: "/projects/stackup-analysis",
      },
      {
        title: "Catia Learning Path",
        desc: "Visual reference covering 12 CATIA V5 workbenches including Part Design, Assembly, and DMU Navigator.",
        link: "/projects/catia-v5",
      },
    ],
    experience: {
      role: "Senior Systems Engineer (Stellantis)",
      company: "Infosys Limited · Mysuru, India",
      period: "May 2025 – Present",
      details:
        "Leading geometrical assurance engineering (GAE), tolerance stack-up analysis, and digital clearance reviews for Stellantis powertrain and engine programs.",
    },
    cameraPos: [3.4, 2.2, 4.2],
    targetPos: [0, 0.4, 0],
    openHood: false,
  },
  hood: {
    id: "hood",
    title: "Engine Bay & Powertrain Subsystem",
    badge: "PRIMARY FOCUS · POWERTRAIN GAE",
    subtitle: "Engine Packaging, Cooling Circuits & Air Intake Manifold",
    summary:
      "Core engineering focus: 3D tolerance stack-up, cooling pipe routing, air intake clearances, and ASME Y14.5 GD&T allocation across high-temperature engine bay interfaces.",
    metrics: [
      { label: "Assembly Yield", value: "99.90%" },
      { label: "Defect Reduction", value: "99.78% Cut" },
      { label: "Tolerance Model", value: "CETOL 3D" },
    ],
    skills: [
      {
        name: "Engine Cooling Circuits",
        level: "Core Expertise",
        description: "Packaging coolant hoses, radiator fittings, and thermal expansion gap budgets.",
      },
      {
        name: "Air Intake Packaging",
        level: "Core Expertise",
        description: "Manifold clearance analysis, intake tube routing, and vibration isolation clearances.",
      },
      {
        name: "CETOL 3D Tolerance Stack-Up",
        level: "Advanced",
        description: "Worst-case (WC) and Root-Sum-Square (RSS) variation simulation on critical engine interfaces.",
      },
      {
        name: "ASME Y14.5 GD&T",
        level: "Certified",
        description: "True position, profile of a surface, and datum reference frame allocation on engine castings.",
      },
    ],
    achievements: [
      "Increased powertrain subsystem assembly yield from 54.34% to 99.90% per million units by executing 3D variation simulation in CETOL and reallocating critical GD&T tolerances.",
      "Conducted 3D tolerance stack-up analysis in CETOL and Siemens NX across engine cooling circuits and air intake packaging, mitigating high-risk assembly variation before tooling freeze.",
      "Eliminated interference between engine block brackets, radiator hard lines, and intake ducting through virtual clash analysis.",
    ],
    projects: [
      {
        title: "Powertrain Cooling Line Clearance Study",
        desc: "Virtual mockup validation in Teamcenter Vis Mockup ensuring dynamic clearance under engine roll.",
      },
      {
        title: "1D Stack Up Calculation Tool",
        desc: "Standardized tolerance stack-up tool and ASME Y14.5 cheat sheets for engineering teams.",
        link: "/projects/stackup-analysis",
      },
    ],
    experience: {
      role: "Senior Systems Engineer (Stellantis)",
      company: "Infosys Limited",
      period: "Oct 2026 – Present",
      details:
        "Engine & Powertrain subsystems (Cooling circuits, exhaust systems, air intake packaging). Responsible for dimensional convergence before physical prototype freeze.",
    },
    cameraPos: [1.8, 1.7, 2.6],
    targetPos: [0, 0.55, 0.95],
    openHood: true,
  },
  chassis: {
    id: "chassis",
    title: "Chassis & 3-2-1 Datum Strategy",
    badge: "DIMENSIONAL MANAGEMENT & VSA",
    subtitle: "Underbody Subframe, Suspension Mountings & Locating Scheme",
    summary:
      "Establishing deterministic 3-2-1 datum reference frames (Primary A plane, Secondary B 2-way pin, Tertiary C 4-way slot) to eliminate degrees of freedom and secure assembly repeatability.",
    metrics: [
      { label: "Nominal Gap/Flush", value: "3.5 ±0.5 mm" },
      { label: "Datum Scheme", value: "3-2-1 Strategy" },
      { label: "CMM Repeatability", value: "Sub-Micron" },
    ],
    skills: [
      {
        name: "3-2-1 Datum Scheme",
        level: "Mastery",
        description: "Deterministic 6-DOF constraint strategy across subframes and chassis mounts.",
      },
      {
        name: "Variation Simulation (VSA)",
        level: "Advanced",
        description: "Monte Carlo simulation predicting manufacturing yield and locating pin clearances.",
      },
      {
        name: "Gap & Flush Analysis",
        level: "Advanced",
        description: "Measuring wheel-arch and panel convergence against vehicle design styling targets.",
      },
      {
        name: "CMM Alignment Protocols",
        level: "Applied",
        description: "Aligning physical inspection coordinate measurement machines to CAD datum features.",
      },
    ],
    achievements: [
      "Applied ASME Y14.5 GD&T standards and 3-2-1 datum strategies in cross-functional design reviews to ensure dimensional repeatability and prevent build defects.",
      "Optimized locator pin and slot tolerance stack-ups for front suspension subframe mounts, eliminating over-constraint conditions.",
      "Established clear datum flow-down from full vehicle assembly down to individual fabricated chassis brackets.",
    ],
    projects: [
      {
        title: "Subframe Datum Convergence Protocol",
        desc: "Deterministic datum hierarchy mapping chassis pickup points to body underbody datum planes.",
      },
    ],
    experience: {
      role: "Systems Engineer (Stellantis)",
      company: "Infosys Limited",
      period: "May 2025 – Sep 2026",
      details:
        "Formulated datum schemes and conducted 3D variation analysis across chassis and powertrain interface zones.",
    },
    cameraPos: [2.5, 0.9, 1.6],
    targetPos: [0.8, 0.3, 0.7],
    openHood: false,
  },
  cockpit: {
    id: "cockpit",
    title: "Digital Mockup & Clash Clearance",
    badge: "VIRTUAL VALIDATION & DFMEA",
    subtitle: "Teamcenter Vis Mockup, Firewall Packaging & Change Workflows",
    summary:
      "Cross-functional digital mockup validation in Teamcenter 14.1x Vis Mockup. Resolving dynamic interference between powertrain assemblies, cabin firewalls, and electrical harnesses.",
    metrics: [
      { label: "Tooling Clashes", value: "0 at Freeze" },
      { label: "Workflow Automation", value: "Power Automate" },
      { label: "Risk Mitigation", value: "DFMEA-MSR" },
    ],
    skills: [
      {
        name: "Teamcenter 14.1x Vis Mockup",
        level: "Certified",
        description: "Dynamic clash detection, sectional clearance cuts, and kinematic sweep envelopes.",
      },
      {
        name: "DFMEA-MSR",
        level: "Certified",
        description: "Failure mode analysis for monitoring system responses across critical assemblies.",
      },
      {
        name: "Microsoft Power Automate",
        level: "Applied",
        description: "Automated engineering issue tracking and change management workflows.",
      },
      {
        name: "Cross-Functional Reviews",
        level: "Lead",
        description: "Collaborating with Stellantis design, manufacturing, and supplier quality teams.",
      },
    ],
    achievements: [
      "Performed dynamic clash and gap/flush analyses in Teamcenter Vis Mockup, resolving clearance violations across critical powertrain packaging interfaces.",
      "Built automated engineering issue tracking and change management workflows using Microsoft Power Automate, eliminating administrative reporting overhead and enabling real-time change tracking.",
      "Earned certified credential in Teamcenter 14.1x Visualization Mockup (Tata Technologies).",
    ],
    projects: [
      {
        title: "Automated Change Management Workflow",
        desc: "Power Automate pipeline syncing engineering action items with Stellantis project stakeholders.",
      },
    ],
    experience: {
      role: "Systems Engineer / Senior Systems Engineer",
      company: "Infosys Limited",
      period: "Oct 2024 – Present",
      details:
        "Orchestrating digital mockups, issue resolution matrices, and technical change requests across global engineering teams.",
    },
    cameraPos: [0.1, 2.1, 2.2],
    targetPos: [0, 0.75, 0.05],
    openHood: false,
  },
  exhaust: {
    id: "exhaust",
    title: "Exhaust System & Thermal Packaging",
    badge: "THERMAL & VIBRATION GAE",
    subtitle: "Hot-End & Cold-End Routing, Thermal Expansion & Isolator Mounts",
    summary:
      "Analyzing hot-end thermal displacement, exhaust hanger rubber isolator compliance, and heat shield nominal clearances under dynamic thermal and vibration duty cycles.",
    metrics: [
      { label: "Thermal Budget", value: "±8.0 mm Max" },
      { label: "CAD System", value: "Siemens NX" },
      { label: "Assembly Yield", value: "99.90%" },
    ],
    skills: [
      {
        name: "Exhaust Line 3D Routing",
        level: "Core Competency",
        description: "Routing exhaust pipes and mufflers with thermal growth envelopes in Siemens NX.",
      },
      {
        name: "Thermal Growth Calculations",
        level: "Applied",
        description: "Calculating delta-L thermal elongation across stainless steel exhaust tubes.",
      },
      {
        name: "Hanger & Isolator Tolerance",
        level: "Applied",
        description: "Rubber bushing deflection and bracket tolerance stack-up analysis.",
      },
      {
        name: "Sheet Metal Heat Shields",
        level: "Applied",
        description: "Forming clearances, attachment datum schemes, and rattle prevention.",
      },
    ],
    achievements: [
      "Modeled 3D thermal expansion envelopes for exhaust system components, ensuring clearance to chassis cross-members.",
      "Optimized hanger bracket tolerance stack-ups in CETOL to prevent exhaust rattles and body contact under dynamic vibration.",
      "Integrated heat shield packaging with underbody aerodynamic panels in Siemens NX.",
    ],
    projects: [
      {
        title: "Exhaust Hot-End Thermal Stack-Up",
        desc: "Tolerance allocation on catalytic converter brackets and flex-pipe isolators.",
      },
    ],
    experience: {
      role: "Systems Engineer (Stellantis)",
      company: "Infosys Limited",
      period: "May 2025 – Present",
      details:
        "Powertrain subsystem engineering including exhaust routing, cooling circuits, and air intake systems.",
    },
    cameraPos: [-2.1, 1.1, -2.8],
    targetPos: [0, 0.35, -1.6],
    openHood: false,
  },
};

type TabKey = "skills" | "achievements" | "projects" | "experience";

export default function VehicleInspector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Active state
  const [activeZone, setActiveZone] = useState<VehicleZone>("hood");
  const [isHoodOpen, setIsHoodOpen] = useState<boolean>(true);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>("achievements");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);

  // Mutable refs to prevent stale closures inside requestAnimationFrame
  const autoRotateRef = useRef<boolean>(autoRotate);
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  const isHoodOpenRef = useRef<boolean>(isHoodOpen);
  useEffect(() => {
    isHoodOpenRef.current = isHoodOpen;
  }, [isHoodOpen]);

  // Pointer drag tracking to differentiate orbit drag from zone click
  const pointerDownPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const hoodPivotRef = useRef<THREE.Group | null>(null);
  const carMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const orangeAccentMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(1.8, 1.7, 2.6));
  const targetLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.55, 0.95));
  const isTransitioningRef = useRef<boolean>(true);
  const raycastObjectsRef = useRef<{ mesh: THREE.Object3D; zone: VehicleZone }[]>([]);

  // Hotspot Screen Positions for 2D UI pins
  const [hotspotPositions, setHotspotPositions] = useState<{
    hood?: { x: number; y: number; visible: boolean };
    chassis?: { x: number; y: number; visible: boolean };
    cockpit?: { x: number; y: number; visible: boolean };
    exhaust?: { x: number; y: number; visible: boolean };
  }>({});

  // 1. Initialize Three.js Scene
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(1.8, 1.7, 2.6);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.03; // Prevent dipping below ground
    controls.minDistance = 1.8;
    controls.maxDistance = 8.5;
    controls.target.set(0, 0.55, 0.95);
    controlsRef.current = controls;

    // Lighting (Studio Automotive Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 1024;
    dirLight1.shadow.mapSize.height = 1024;
    dirLight1.shadow.camera.near = 0.5;
    dirLight1.shadow.camera.far = 25;
    dirLight1.shadow.bias = -0.0005;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.0); // Cyan fill
    dirLight2.position.set(-6, 4, -4);
    scene.add(dirLight2);

    const orangeAccentLight = new THREE.PointLight(0xea580c, 3.0, 6); // Warm orange engine glow
    orangeAccentLight.position.set(0, 0.8, 1.0);
    scene.add(orangeAccentLight);

    // Floor Ground Plane with CAD Engineering Grid
    const gridHelper = new THREE.GridHelper(14, 28, 0xea580c, 0x475569);
    gridHelper.position.y = 0.005;
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.opacity = 0.35;
      gridHelper.material.transparent = true;
    }
    scene.add(gridHelper);

    // Circular shadow floor
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.002;
    scene.add(shadowMesh);

    // BUILD PROCEDURAL HIGH-FIDELITY 3D CAR MODEL
    const carGroup = new THREE.Group();
    scene.add(carGroup);

    const trackedMaterials: THREE.MeshStandardMaterial[] = [];
    const raycastTargets: { mesh: THREE.Object3D; zone: VehicleZone }[] = [];

    // Common PBR Materials
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e2430,
      metalness: 0.85,
      roughness: 0.22,
    });
    trackedMaterials.push(bodyMaterial);

    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.6,
      roughness: 0.5,
    });
    trackedMaterials.push(darkTrimMaterial);

    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      metalness: 0.9,
      roughness: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    trackedMaterials.push(glassMaterial);

    const engineMetallicMaterial = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.9,
      roughness: 0.3,
    });
    trackedMaterials.push(engineMetallicMaterial);

    const orangeAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xea580c,
      emissiveIntensity: 0.3,
    });
    trackedMaterials.push(orangeAccentMaterial);
    orangeAccentMaterialRef.current = orangeAccentMaterial;

    const coolingTubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.85,
      roughness: 0.2,
    });
    trackedMaterials.push(coolingTubeMaterial);

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.98,
      roughness: 0.08,
    });
    trackedMaterials.push(chromeMaterial);

    carMaterialsRef.current = trackedMaterials;

    // 1. Lower Chassis / Floorpan (Zone: chassis)
    const chassisGeo = new THREE.BoxGeometry(1.68, 0.22, 3.8);
    const chassisMesh = new THREE.Mesh(chassisGeo, darkTrimMaterial);
    chassisMesh.position.set(0, 0.26, 0);
    chassisMesh.castShadow = true;
    chassisMesh.receiveShadow = true;
    carGroup.add(chassisMesh);
    raycastTargets.push({ mesh: chassisMesh, zone: "chassis" });

    // Underbody Aerodynamic Diffuser (Rear)
    const diffuserGeo = new THREE.BoxGeometry(1.5, 0.12, 0.6);
    const diffuserMesh = new THREE.Mesh(diffuserGeo, darkTrimMaterial);
    diffuserMesh.position.set(0, 0.22, -1.9);
    diffuserMesh.rotation.x = 0.12;
    carGroup.add(diffuserMesh);
    raycastTargets.push({ mesh: diffuserMesh, zone: "exhaust" });

    // 2. Main Vehicle Body (Fenders & Quarter Panels)
    const bodyBaseGeo = new THREE.BoxGeometry(1.72, 0.42, 2.2);
    const bodyBaseMesh = new THREE.Mesh(bodyBaseGeo, bodyMaterial);
    bodyBaseMesh.position.set(0, 0.48, -0.15);
    bodyBaseMesh.castShadow = true;
    carGroup.add(bodyBaseMesh);
    raycastTargets.push({ mesh: bodyBaseMesh, zone: "chassis" });

    // Front Nose / Grille Surround
    const noseGeo = new THREE.BoxGeometry(1.66, 0.34, 0.7);
    const noseMesh = new THREE.Mesh(noseGeo, bodyMaterial);
    noseMesh.position.set(0, 0.44, 1.7);
    noseMesh.castShadow = true;
    carGroup.add(noseMesh);
    raycastTargets.push({ mesh: noseMesh, zone: "hood" });

    // Front Honeycomb Grille
    const grilleGeo = new THREE.BoxGeometry(1.3, 0.22, 0.08);
    const grilleMesh = new THREE.Mesh(grilleGeo, darkTrimMaterial);
    grilleMesh.position.set(0, 0.38, 2.05);
    carGroup.add(grilleMesh);

    // Front LED Headlights
    const headlightGeo = new THREE.BoxGeometry(0.35, 0.08, 0.15);
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x38bdf8,
      emissiveIntensity: 3.0,
    });
    const leftHeadlight = new THREE.Mesh(headlightGeo, headlightMat);
    leftHeadlight.position.set(0.62, 0.48, 2.0);
    leftHeadlight.rotation.y = -0.15;
    carGroup.add(leftHeadlight);

    const rightHeadlight = leftHeadlight.clone();
    rightHeadlight.position.x = -0.62;
    rightHeadlight.rotation.y = 0.15;
    carGroup.add(rightHeadlight);

    // Rear Cyber LED Lightbar (Zone: exhaust)
    const taillightGeo = new THREE.BoxGeometry(1.5, 0.07, 0.08);
    const taillightMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 3.5,
    });
    const taillightMesh = new THREE.Mesh(taillightGeo, taillightMat);
    taillightMesh.position.set(0, 0.62, -2.0);
    carGroup.add(taillightMesh);
    raycastTargets.push({ mesh: taillightMesh, zone: "exhaust" });

    // 3. Cockpit & Glass Canopy (Zone: cockpit)
    const glassCanopyGeo = new THREE.BoxGeometry(1.4, 0.46, 1.7);
    const glassCanopyMesh = new THREE.Mesh(glassCanopyGeo, glassMaterial);
    glassCanopyMesh.position.set(0, 0.88, -0.3);
    glassCanopyMesh.castShadow = true;
    carGroup.add(glassCanopyMesh);
    raycastTargets.push({ mesh: glassCanopyMesh, zone: "cockpit" });

    // Roof Panel
    const roofGeo = new THREE.BoxGeometry(1.32, 0.06, 1.15);
    const roofMesh = new THREE.Mesh(roofGeo, bodyMaterial);
    roofMesh.position.set(0, 1.12, -0.38);
    carGroup.add(roofMesh);
    raycastTargets.push({ mesh: roofMesh, zone: "cockpit" });

    // Cockpit Interior Silhouette (Dashboard / Steering Column)
    const dashGeo = new THREE.BoxGeometry(1.2, 0.18, 0.4);
    const dashMesh = new THREE.Mesh(dashGeo, darkTrimMaterial);
    dashMesh.position.set(0, 0.75, 0.2);
    carGroup.add(dashMesh);

    // 4. Hinged Hood Assembly (Zone: hood)
    // Pivot at base of windshield cowl
    const hoodPivot = new THREE.Group();
    hoodPivot.position.set(0, 0.64, 0.52);
    carGroup.add(hoodPivot);
    hoodPivotRef.current = hoodPivot;

    // Hood Plate (Extends forward from cowl)
    const hoodPlateGeo = new THREE.BoxGeometry(1.56, 0.06, 1.25);
    const hoodMesh = new THREE.Mesh(hoodPlateGeo, bodyMaterial);
    hoodMesh.position.set(0, 0.02, 0.62); // Centered relative to pivot
    hoodMesh.castShadow = true;
    hoodPivot.add(hoodMesh);
    raycastTargets.push({ mesh: hoodMesh, zone: "hood" });

    // Hood Dual Power Bulges
    const bulgeGeo = new THREE.BoxGeometry(0.3, 0.04, 0.9);
    const leftBulge = new THREE.Mesh(bulgeGeo, orangeAccentMaterial);
    leftBulge.position.set(0.38, 0.06, 0.62);
    hoodPivot.add(leftBulge);

    const rightBulge = leftBulge.clone();
    rightBulge.position.x = -0.38;
    hoodPivot.add(rightBulge);

    // 5. Powertrain & Engine Bay (Visible under hood / in wireframe)
    const engineGroup = new THREE.Group();
    engineGroup.position.set(0, 0.38, 1.05);
    carGroup.add(engineGroup);

    // Engine Block
    const engineBlockGeo = new THREE.BoxGeometry(0.85, 0.42, 0.8);
    const engineBlockMesh = new THREE.Mesh(engineBlockGeo, engineMetallicMaterial);
    engineBlockMesh.position.set(0, 0.15, 0);
    engineBlockMesh.castShadow = true;
    engineGroup.add(engineBlockMesh);
    raycastTargets.push({ mesh: engineBlockMesh, zone: "hood" });

    // Twin Cam Valve Covers (Signature Stellantis Orange Accent)
    const valveCoverGeo = new THREE.BoxGeometry(0.32, 0.12, 0.72);
    const leftValve = new THREE.Mesh(valveCoverGeo, orangeAccentMaterial);
    leftValve.position.set(0.24, 0.4, 0);
    engineGroup.add(leftValve);

    const rightValve = leftValve.clone();
    rightValve.position.x = -0.24;
    engineGroup.add(rightValve);

    // Intake Manifold & Plenum
    const intakePlenumGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.68, 16);
    intakePlenumGeo.rotateZ(Math.PI / 2);
    const intakeMesh = new THREE.Mesh(intakePlenumGeo, darkTrimMaterial);
    intakeMesh.position.set(0, 0.48, -0.15);
    engineGroup.add(intakeMesh);

    // 4 Curved Intake Runners
    for (let i = -0.24; i <= 0.24; i += 0.16) {
      const runnerGeo = new THREE.TorusGeometry(0.12, 0.03, 8, 16, Math.PI);
      const runnerMesh = new THREE.Mesh(runnerGeo, chromeMaterial);
      runnerMesh.position.set(i, 0.38, 0.05);
      runnerMesh.rotation.x = Math.PI / 2;
      engineGroup.add(runnerMesh);
    }

    // Cooling Circuit Pipes (Stellantis Powertrain Cooling System)
    const curvePoints = [
      new THREE.Vector3(0.35, 0.25, 0.2),
      new THREE.Vector3(0.45, 0.35, 0.45),
      new THREE.Vector3(0.2, 0.32, 0.65),
    ];
    const pipeCurve = new THREE.CatmullRomCurve3(curvePoints);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 20, 0.035, 8, false);
    const coolingPipe1 = new THREE.Mesh(pipeGeo, coolingTubeMaterial);
    engineGroup.add(coolingPipe1);

    const coolingPipe2 = coolingPipe1.clone();
    coolingPipe2.scale.x = -1;
    engineGroup.add(coolingPipe2);

    // Radiator Pack at Front Fascia
    const radiatorGeo = new THREE.BoxGeometry(1.2, 0.36, 0.08);
    const radiatorMesh = new THREE.Mesh(radiatorGeo, darkTrimMaterial);
    radiatorMesh.position.set(0, 0.2, 0.68);
    engineGroup.add(radiatorMesh);

    // 3-2-1 Datum Pin Locators on Engine Bay (Interactive Markers)
    const datumConeGeo = new THREE.ConeGeometry(0.045, 0.09, 8);
    const datumMat = new THREE.MeshBasicMaterial({ color: 0xea580c });
    const datumPinA = new THREE.Mesh(datumConeGeo, datumMat);
    datumPinA.position.set(0.42, 0.42, 0.35);
    engineGroup.add(datumPinA);

    const datumPinB = datumPinA.clone();
    datumPinB.position.set(-0.42, 0.42, 0.35);
    engineGroup.add(datumPinB);

    // 6. Four Detailed Wheels & Brake Assemblies (Zone: chassis)
    const wheelPositions = [
      { x: 0.88, y: 0.32, z: 1.18 }, // Front Left
      { x: -0.88, y: 0.32, z: 1.18 }, // Front Right
      { x: 0.88, y: 0.34, z: -1.22 }, // Rear Left
      { x: -0.88, y: 0.34, z: -1.22 }, // Rear Right
    ];

    const tireGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.26, 24);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.85,
    });
    trackedMaterials.push(tireMat);

    const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.27, 16);
    rimGeo.rotateZ(Math.PI / 2);

    const brakeRotorGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.02, 16);
    brakeRotorGeo.rotateZ(Math.PI / 2);

    const brakeCaliperGeo = new THREE.BoxGeometry(0.06, 0.12, 0.1);

    wheelPositions.forEach((pos) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(pos.x, pos.y, pos.z);

      // Rubber Tire
      const tire = new THREE.Mesh(tireGeo, tireMat);
      tire.castShadow = true;
      wheelGroup.add(tire);
      raycastTargets.push({ mesh: tire, zone: "chassis" });

      // Alloy Rim
      const rim = new THREE.Mesh(rimGeo, chromeMaterial);
      wheelGroup.add(rim);

      // Brake Rotor
      const rotor = new THREE.Mesh(brakeRotorGeo, engineMetallicMaterial);
      rotor.position.x = pos.x > 0 ? -0.04 : 0.04;
      wheelGroup.add(rotor);

      // Performance Orange Brake Caliper
      const caliper = new THREE.Mesh(brakeCaliperGeo, orangeAccentMaterial);
      caliper.position.set(pos.x > 0 ? -0.05 : 0.05, 0.09, 0);
      wheelGroup.add(caliper);

      carGroup.add(wheelGroup);
    });

    // 7. Exhaust Subsystem Assembly (Zone: exhaust)
    const exhaustPipesGroup = new THREE.Group();
    exhaustPipesGroup.position.set(0, 0.2, -1.95);
    carGroup.add(exhaustPipesGroup);

    const tailpipeGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.3, 16);
    tailpipeGeo.rotateX(Math.PI / 2);

    const leftTailpipe = new THREE.Mesh(tailpipeGeo, chromeMaterial);
    leftTailpipe.position.set(0.42, 0, 0);
    exhaustPipesGroup.add(leftTailpipe);
    raycastTargets.push({ mesh: leftTailpipe, zone: "exhaust" });

    const rightTailpipe = leftTailpipe.clone();
    rightTailpipe.position.x = -0.42;
    exhaustPipesGroup.add(rightTailpipe);
    raycastTargets.push({ mesh: rightTailpipe, zone: "exhaust" });

    raycastObjectsRef.current = raycastTargets;

    // Start with hood open initially to showcase powertrain mastery
    hoodPivot.rotation.x = -Math.PI * 0.21;

    // 3D to 2D Screen Projection for Floating CAD Badges
    const tempVec = new THREE.Vector3();
    const updateHotspots = () => {
      if (!cameraRef.current || !canvasRef.current) return;
      const cam = cameraRef.current;
      const cvs = canvasRef.current;
      const width = cvs.clientWidth;
      const height = cvs.clientHeight;

      const projectPoint = (worldX: number, worldY: number, worldZ: number) => {
        tempVec.set(worldX, worldY, worldZ);
        tempVec.project(cam);
        const visible = tempVec.z < 1;
        return {
          x: (tempVec.x * 0.5 + 0.5) * width,
          y: (-(tempVec.y * 0.5) + 0.5) * height,
          visible,
        };
      };

      setHotspotPositions({
        hood: projectPoint(0, 0.95, 1.15),
        chassis: projectPoint(0.9, 0.45, 1.2),
        cockpit: projectPoint(0, 1.25, -0.2),
        exhaust: projectPoint(0, 0.38, -2.1),
      });
    };

    let needsHotspotUpdate = true;
    controls.addEventListener("change", () => {
      needsHotspotUpdate = true;
    });

    // Animation Render Loop
    let animationFrameId: number;
    let hoodCurrentRot = -Math.PI * 0.21;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-rotation when enabled and not transitioning
      if (autoRotateRef.current && !isTransitioningRef.current) {
        carGroup.rotation.y += 0.005;
      }

      // Smooth Camera Transitions
      if (isTransitioningRef.current && cameraRef.current && controlsRef.current) {
        cameraRef.current.position.lerp(targetCamPosRef.current, 0.055);
        controlsRef.current.target.lerp(targetLookAtRef.current, 0.055);

        if (
          cameraRef.current.position.distanceTo(targetCamPosRef.current) < 0.03 &&
          controlsRef.current.target.distanceTo(targetLookAtRef.current) < 0.03
        ) {
          isTransitioningRef.current = false;
        }
      }

      // Smooth Hood Open/Close Hinge Animation
      let hoodIsMoving = false;
      if (hoodPivotRef.current) {
        const targetHoodRot = isHoodOpenRef.current ? -Math.PI * 0.21 : 0;
        const diff = targetHoodRot - hoodCurrentRot;
        if (Math.abs(diff) > 0.001) {
          hoodCurrentRot += diff * 0.08;
          hoodPivotRef.current.rotation.x = hoodCurrentRot;
          hoodIsMoving = true;
        }
      }

      controls.update();
      renderer.render(scene, camera);

      // Decouple 2D overlay projection from 60fps render loop to prevent main-thread re-render thrashing
      const sceneMoved = isTransitioningRef.current || autoRotateRef.current || hoodIsMoving || needsHotspotUpdate;
      if (sceneMoved) {
        updateHotspots();
        needsHotspotUpdate = false;
      }
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current || !cameraRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      needsHotspotUpdate = true;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup resources on unmount (Three.js WebGL best practices)
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  // Sync Wireframe / CAD X-Ray mode with emissive preservation
  useEffect(() => {
    carMaterialsRef.current.forEach((mat) => {
      mat.wireframe = wireframeMode;
      if (wireframeMode) {
        mat.emissive.setHex(0xea580c);
        mat.emissiveIntensity = 0.4;
      } else {
        if (mat === orangeAccentMaterialRef.current) {
          mat.emissive.setHex(0xea580c);
          mat.emissiveIntensity = 0.3;
        } else {
          mat.emissive.setHex(0x000000);
          mat.emissiveIntensity = 0;
        }
      }
    });
  }, [wireframeMode]);

  // Handle Zone Selection & Camera Tweening
  const selectZone = (zone: VehicleZone) => {
    setActiveZone(zone);
    setDrawerOpen(true);
    const data = ZONES_DATA[zone];
    setIsHoodOpen(data.openHood);

    targetCamPosRef.current.set(...data.cameraPos);
    targetLookAtRef.current.set(...data.targetPos);
    isTransitioningRef.current = true;
  };

  // Pointer Handlers: Differentiate Orbit Drag vs Click Selection
  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    pointerDownPosRef.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const dist = Math.hypot(
      event.clientX - pointerDownPosRef.current.x,
      event.clientY - pointerDownPosRef.current.y
    );
    // Ignore drag gestures (> 6px movement) so OrbitControls orbiting works smoothly
    if (dist > 6) return;
    if (!canvasRef.current || !cameraRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const targetMeshes = raycastObjectsRef.current.map((item) => item.mesh);
    const intersects = raycaster.intersectObjects(targetMeshes, true);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      const found = raycastObjectsRef.current.find(
        (item) => item.mesh === hit || item.mesh.children.includes(hit)
      );
      if (found) {
        selectZone(found.zone);
      }
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !cameraRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const targetMeshes = raycastObjectsRef.current.map((item) => item.mesh);
    const intersects = raycaster.intersectObjects(targetMeshes, true);

    if (intersects.length > 0) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "grab";
    }
  };

  const currentZoneData = ZONES_DATA[activeZone];

  return (
    <section
      ref={containerRef}
      id="vehicle-inspector"
      className="relative py-24 bg-card/40 border-y border-border/80 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-primary/5 blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles size={14} className="animate-spin text-primary" />
              Interactive 3D Digital Mockup · Siemens NX & CETOL
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
              Virtual Vehicle <span className="text-primary">Inspector</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mt-2">
              Click on automotive zones — <strong className="text-foreground">Hood & Engine Bay</strong>, Chassis & 3-2-1 Datums, Cockpit, or Exhaust — to inspect micron-level tolerances, achievements, and engineering deliverables.
            </p>
          </div>

          {/* Quick Zone Selector Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-card border border-border/80 shadow-xs">
            {(["hood", "chassis", "cockpit", "exhaust", "full"] as VehicleZone[]).map((zone) => {
              const isSelected = activeZone === zone;
              return (
                <button
                  key={zone}
                  onClick={() => selectZone(zone)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {zone === "hood" && <Flame size={13} />}
                  {zone === "chassis" && <Target size={13} />}
                  {zone === "cockpit" && <Compass size={13} />}
                  {zone === "exhaust" && <Zap size={13} />}
                  {zone === "full" && <Layers size={13} />}
                  <span>{zone === "hood" ? "Hood / Engine" : zone}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D WebGL Canvas Viewport & Inspection Split Screen */}
        <div className="relative w-full h-[620px] sm:h-[680px] rounded-2xl border border-border bg-gradient-to-b from-card/90 to-background/90 shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* Canvas Area */}
          <div className="relative flex-1 h-full w-full">
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerMove={handlePointerMove}
              className="w-full h-full block touch-none"
            />

            {/* Floating 3D Projected Hotspot Badges on Canvas */}
            {hotspotPositions.hood?.visible && (
              <button
                onClick={() => selectZone("hood")}
                style={{
                  left: `${hotspotPositions.hood.x}px`,
                  top: `${hotspotPositions.hood.y}px`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all transform hover:scale-110 shadow-lg ${
                  activeZone === "hood"
                    ? "bg-primary text-white ring-4 ring-primary/30"
                    : "bg-card/90 text-foreground border border-primary/40 backdrop-blur-md hover:bg-primary hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                <span>Hood / Powertrain</span>
                <span className="text-[10px] opacity-75 font-mono">99.90%</span>
              </button>
            )}

            {hotspotPositions.chassis?.visible && (
              <button
                onClick={() => selectZone("chassis")}
                style={{
                  left: `${hotspotPositions.chassis.x}px`,
                  top: `${hotspotPositions.chassis.y}px`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all transform hover:scale-110 shadow-lg ${
                  activeZone === "chassis"
                    ? "bg-primary text-white ring-4 ring-primary/30"
                    : "bg-card/90 text-foreground border border-border backdrop-blur-md hover:bg-primary hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>3-2-1 Datums</span>
              </button>
            )}

            {hotspotPositions.cockpit?.visible && (
              <button
                onClick={() => selectZone("cockpit")}
                style={{
                  left: `${hotspotPositions.cockpit.x}px`,
                  top: `${hotspotPositions.cockpit.y}px`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all transform hover:scale-110 shadow-lg ${
                  activeZone === "cockpit"
                    ? "bg-primary text-white ring-4 ring-primary/30"
                    : "bg-card/90 text-foreground border border-border backdrop-blur-md hover:bg-primary hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Vis Mockup</span>
              </button>
            )}

            {hotspotPositions.exhaust?.visible && (
              <button
                onClick={() => selectZone("exhaust")}
                style={{
                  left: `${hotspotPositions.exhaust.x}px`,
                  top: `${hotspotPositions.exhaust.y}px`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all transform hover:scale-110 shadow-lg ${
                  activeZone === "exhaust"
                    ? "bg-primary text-white ring-4 ring-primary/30"
                    : "bg-card/90 text-foreground border border-border backdrop-blur-md hover:bg-primary hover:text-white"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Exhaust Thermal</span>
              </button>
            )}

            {/* Interactive Viewport Controls Toolbar (Bottom Left) */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 p-2 rounded-xl bg-card/85 backdrop-blur-md border border-border/80 shadow-md">
              {/* Hood Open/Close Toggle */}
              <button
                onClick={() => setIsHoodOpen(!isHoodOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isHoodOpen
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Open or close car hood to inspect engine compartment"
              >
                <Flame size={14} className={isHoodOpen ? "text-primary animate-pulse" : ""} />
                <span>Hood: {isHoodOpen ? "Open" : "Closed"}</span>
              </button>

              {/* Wireframe / CAD X-Ray Toggle */}
              <button
                onClick={() => setWireframeMode(!wireframeMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  wireframeMode
                    ? "bg-primary text-white shadow-xs"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Toggle CAD Wireframe X-Ray mode"
              >
                <Eye size={14} />
                <span>{wireframeMode ? "CAD Wireframe" : "PBR Solid"}</span>
              </button>

              {/* Auto-Rotate Toggle */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  autoRotate
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title="Toggle 360° automatic turntable rotation"
              >
                <RotateCw size={14} className={autoRotate ? "animate-spin" : ""} />
                <span>Auto-Rotate</span>
              </button>

              {/* Reset View */}
              <button
                onClick={() => selectZone("full")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-muted text-muted-foreground hover:text-foreground transition-all cursor-pointer"
                title="Reset camera to full vehicle view"
              >
                <Maximize2 size={14} />
                <span>Reset View</span>
              </button>
            </div>

            {/* Instruction Tip Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/75 backdrop-blur-md border border-border/60 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>Rotate 360° · Scroll to Zoom · Click components to inspect</span>
            </div>
          </div>

          {/* Right Side: Engineering Inspection Drawer */}
          <AnimatePresence mode="wait">
            {drawerOpen && (
              <motion.div
                key={activeZone}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="w-full lg:w-[440px] xl:w-[480px] h-[340px] lg:h-full bg-card/95 border-t lg:border-t-0 lg:border-l border-border backdrop-blur-xl flex flex-col z-20 overflow-hidden"
              >
                {/* Drawer Header */}
                <div className="p-5 border-b border-border/80 flex items-start justify-between gap-3 bg-muted/30">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-wider uppercase mb-1.5">
                      {currentZoneData.badge}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground leading-tight">
                      {currentZoneData.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                      {currentZoneData.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => selectZone("full")}
                    className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors cursor-pointer"
                    title="Close Inspector"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-3 divide-x divide-border/80 border-b border-border/80 bg-card/50">
                  {currentZoneData.metrics.map((m, i) => (
                    <div key={i} className="p-3 text-center">
                      <div className="font-display text-base sm:text-lg font-bold text-primary tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Navigation Tabs */}
                <div className="flex border-b border-border/80 bg-muted/20 px-4 pt-2 gap-1 overflow-x-auto no-scrollbar">
                  {[
                    { key: "achievements", label: "Achievements", icon: Award },
                    { key: "skills", label: "Skills & CAD", icon: Wrench },
                    { key: "projects", label: "Projects", icon: Layers },
                    { key: "experience", label: "Experience", icon: Briefcase },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as TabKey)}
                        className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                          isActive
                            ? "border-primary text-primary bg-card/80 rounded-t-md"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
                        }`}
                      >
                        <Icon size={13} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab Content Area */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4">
                  {/* TAB 1: ACHIEVEMENTS */}
                  {activeTab === "achievements" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Award size={14} className="text-primary" />
                        <span>Key Engineering Achievements</span>
                      </div>
                      {currentZoneData.achievements.map((bullet, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-card border border-border/70 hover:border-primary/40 transition-colors shadow-2xs"
                        >
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* TAB 2: SKILLS & CAD TOOLS */}
                  {activeTab === "skills" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Wrench size={14} className="text-primary" />
                        <span>Engineering Competencies & Toolchain</span>
                      </div>
                      {currentZoneData.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-card border border-border/70 hover:border-primary/40 transition-colors shadow-2xs"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-display text-sm font-bold uppercase tracking-wide text-foreground">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* TAB 3: PROJECTS */}
                  {activeTab === "projects" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Layers size={14} className="text-primary" />
                        <span>Validated Engineering Deliverables</span>
                      </div>
                      {currentZoneData.projects.map((proj, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-card border border-border/70 hover:border-primary/40 transition-colors shadow-2xs group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-display text-sm font-bold uppercase text-foreground">
                              {proj.title}
                            </h4>
                            {proj.link && (
                              <a
                                href={proj.link}
                                className="text-primary hover:text-primary-dark transition-colors"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                            {proj.desc}
                          </p>
                          {proj.link && (
                            <a
                              href={proj.link}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline"
                            >
                              Explore Technical Deep Dive <ChevronRight size={12} />
                            </a>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* TAB 4: EXPERIENCE */}
                  {activeTab === "experience" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-card border border-border/70 shadow-2xs space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        <div>
                          <h4 className="font-display text-sm font-bold uppercase text-foreground">
                            {currentZoneData.experience.role}
                          </h4>
                          <span className="text-xs text-muted-foreground font-medium">
                            {currentZoneData.experience.company} · {currentZoneData.experience.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/70">
                        {currentZoneData.experience.details}
                      </p>
                      <button
                        onClick={() => scrollToSection("experience")}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors cursor-pointer pt-1"
                      >
                        View Full Experience Timeline <ChevronRight size={14} />
                      </button>
                    </motion.div>
                  )}
                </div>

                {/* Drawer Footer Actions */}
                <div className="p-4 border-t border-border/80 bg-muted/30 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      if (activeZone === "hood") {
                        setIsHoodOpen(!isHoodOpen);
                      } else {
                        selectZone("hood");
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-dark transition-all shadow-xs cursor-pointer"
                  >
                    <Flame size={14} />
                    <span>{isHoodOpen && activeZone === "hood" ? "Close Hood" : "Open Hood & Inspect"}</span>
                  </button>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card hover:bg-muted border border-border text-foreground text-xs font-bold uppercase tracking-wider transition-all hover:text-primary cursor-pointer"
                  >
                    <span>Resume</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
