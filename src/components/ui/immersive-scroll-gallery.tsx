"use client";

import React, {useEffect, useMemo, useRef, useState} from "react";

import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import { cn } from "@/lib/utils";

// Types
interface iIPicture {
	src: string;
	scale: MotionValue<number>;
}

interface iImmersiveScrollGalleryProps {
	images?: iIPicture[]; // Optional custom images array
	className?: string; // Optional className for container customization
}

// Helper: generate a solid-color SVG data URL placeholder
const svgPlaceholder = (hex: string) =>
    `data:image/svg+xml;utf8,` +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'><rect width='1200' height='800' fill='${hex}'/></svg>`
    );

// Original images restored
const DEFAULT_IMAGES = [
    { src: "/images/111.png", scale: null },
    { src: "/images/222.png", scale: null },
    { src: "/images/333.png", scale: null },
    { src: "/images/444.png", scale: null },
    { src: "/images/555.png", scale: null },
    { src: "/images/666.png", scale: null },
    { src: "/images/777.png", scale: null },
];

const IMAGE_STYLES = [
	"w-48 h-32 sm:w-[25vw] sm:h-[25vh]",
	"w-56 h-40 sm:w-[35vw] sm:h-[30vh] sm:-top-[30vh] sm:left-[5vw] -top-20 left-4",
	"w-40 h-64 sm:w-[20vw] sm:h-[55vh] sm:-top-[15vh] sm:-left-[25vw] -top-8 -left-16",
	"w-48 h-32 sm:w-[25vw] sm:h-[25vh] sm:left-[27.5vw] left-32",
	"w-40 h-40 sm:w-[20vw] sm:h-[30vh] sm:top-[30vh] sm:left-[5vw] top-40 left-4",
	"w-52 h-32 sm:w-[30vw] sm:h-[25vh] sm:top-[27.5vh] sm:-left-[22.5vw] top-36 -left-12",
	"w-32 h-24 sm:w-[15vw] sm:h-[15vh] sm:top-[22.5vh] sm:left-[25vw] top-32 left-24",
];

// Per-card content (for indices 1..6)
const CARD_CONTENT: Array<null | { number: string; sub: string; main: string; secondary: string; targetPct: number }> = [
    null,
    { number: "180%", sub: "Australia’s household debt-to-income ratio.", main: "#4A90E2", secondary: "#7CC5C5", targetPct: 100 },
    { number: "82%", sub: "Small business failures cite cash flow issues.", main: "#7CC5C5", secondary: "#6BB5B5", targetPct: 82 },
    { number: "$2k–$4k", sub: "Estimated annual savings from refinancing a $600k loan 0.50–0.75% lower.", main: "#6BB5B5", secondary: "#4A90E2", targetPct: 75 },
    { number: "20%", sub: "Deposit typically avoids LMI on home loans.", main: "#134E4A", secondary: "#7CC5C5", targetPct: 20 },
    { number: "45%", sub: "Typical variable repayments have risen ~40–50% since recent rate hikes.", main: "#333333", secondary: "#7CC5C5", targetPct: 45 },
    { number: "70%", sub: "New home loans in Australia are arranged via brokers.", main: "#333333", secondary: "#7CC5C5", targetPct: 70 },
];

/**
 * ImmersiveScrollGallery Component
 *
 * A scroll-based image zoom effect component that creates a parallax-like experience.
 * Images scale up as the user scrolls, creating an immersive visual effect.
 *
 * @param {ImmersiveScrollGalleryProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
	images = DEFAULT_IMAGES,
	className = "",
}) => {
	// Refs
	const container = useRef<HTMLDivElement | null>(null);

	// Scroll and transform hooks
	const {scrollYProgress} = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	// Transform values
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
	const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

	// Assign scales to images
    const pictures = images.map((img, index) => {
		return {
			...img,
			scale: [scale4, scale5, scale6, scale5, scale6, scale8, scale9][
				index % 7
			],
		};
	});

	return (
		<div ref={container} className={`relative h-[300vh] ${className}`}>
			<div className="sticky top-0 h-screen overflow-hidden">
				{/* Zooming Images */}
				{pictures.map(({src, scale}, index) => {
					return (
                        <motion.div
							key={index}
							style={{scale, opacity: opacityImage}}
							className="absolute flex items-center justify-center w-full h-full top-0"
						>
                            <div className={`relative ${IMAGE_STYLES[index]}`}>
                                {/* Card replaces image for indices 1..6; keep real image for first */}
                                {index === 0 ? (
                                    <img src={src} alt={`Zoom image ${index + 1}`} className="object-cover w-full h-full" />
                                ) : (
                                    <GalleryStatCard content={CARD_CONTENT[index]!} size={index === 2 ? 'lg' : index === 6 ? 'sm' : 'md'} />
                                )}
                            </div>
						</motion.div>
					);
				})}

				{/* Content Section */}
				<motion.div
					style={{
						opacity: opacitySection2,
						scale: useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]),
					}}
					className="w-full h-full flex items-center justify-center container-custom relative"
				>
					<div className="text-center w-full">
						<h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-ColorBlack mb-5">
							Client Testimonials
						</h2>
						<p className="text-base xl:text-lg text-ColorBlack/70 max-w-2xl mx-auto mb-12 xl:mb-16">
							This section will showcase real client testimonials with video testimonials and success stories.
						</p>

						{/* Testimonial Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
							{/* Card 1 */}
							<div className="card-masco text-left">
								<div className="flex items-center mb-5">
									<img
										src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="Client"
										className="w-14 h-14 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="text-base font-semibold text-ColorBlack">Sarah Mitchell</h4>
										<p className="text-sm text-ColorBlack/60">Melbourne Business Owner</p>
									</div>
								</div>
								<p className="text-sm xl:text-base text-ColorBlack/70 leading-relaxed">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
								</p>
							</div>

							{/* Card 2 */}
							<div className="card-masco text-left">
								<div className="flex items-center mb-5">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="Client"
										className="w-14 h-14 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="text-base font-semibold text-ColorBlack">Michael Chen</h4>
										<p className="text-sm text-ColorBlack/60">Melbourne Family</p>
									</div>
								</div>
								<p className="text-sm xl:text-base text-ColorBlack/70 leading-relaxed">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
								</p>
							</div>

							{/* Card 3 */}
							<div className="card-masco text-left">
								<div className="flex items-center mb-5">
									<img
										src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt="Client"
										className="w-14 h-14 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="text-base font-semibold text-ColorBlack">Emma Thompson</h4>
										<p className="text-sm text-ColorBlack/60">Melbourne Professional</p>
									</div>
								</div>
								<p className="text-sm xl:text-base text-ColorBlack/70 leading-relaxed">
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
								</p>
							</div>
						</div>

						<div className="mt-10 xl:mt-12">
							<button className="px-8 py-3 text-sm xl:px-10 xl:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold uppercase tracking-wide transition-all duration-300 rounded-[50px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
								Watch Video Testimonials
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default ImmersiveScrollGallery; 

// --- Card Components (inline for this gallery) ---

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function AnimatedCard({ className, ...props }: CardProps) {
    return (
        <div
            role="region"
            className={cn(
                "group/animated-card relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-900 dark:bg-black",
                className
            )}
            {...props}
        />
    );
}

function CardVisual({ className, ...props }: CardProps) {
    return <div className={cn("h-full w-full overflow-hidden", className)} {...props} />;
}

// Visual2 condensed to fit container size
interface Visual2Props { mainColor?: string; secondaryColor?: string; gridColor?: string; hoveredControlled?: boolean }

function Visual2({
    mainColor = "#7CC5C5",
    secondaryColor = "#4A90E2",
    gridColor = "#80808015",
    hoveredControlled,
}: Visual2Props) {
    const [internalHovered, setInternalHovered] = useState(false);
    const hovered = hoveredControlled ?? internalHovered;
    const handlers = hoveredControlled === undefined ? {
        onMouseEnter: () => setInternalHovered(true),
        onMouseLeave: () => setInternalHovered(false),
    } : {};
    return (
        <div
            className="absolute inset-0"
            {...handlers}
            style={{"--color": mainColor, "--secondary-color": secondaryColor} as React.CSSProperties}
        >
            <Layer1 hovered={hovered} color={mainColor} secondaryColor={secondaryColor} />
            <LayerBgGradient color={mainColor} />
            <GridLayer color={gridColor} />
        </div>
    );
}

interface LayerProps { color: string; secondaryColor?: string; hovered?: boolean; }

function LayerBgGradient({ color }: { color: string }) {
    return (
        <div className="absolute inset-0 z-[1]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="35%" stopColor={color} stopOpacity="0" />
                        <stop offset="100%" stopColor={color} stopOpacity="0.25" />
                    </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#g)" />
            </svg>
        </div>
    );
}

// Card wrapper with controlled hover to keep visuals active when hovering footer
function GalleryStatCard({ content, size = 'md' }: { content: { number: string; sub: string; main: string; secondary: string; targetPct: number }; size?: 'sm'|'md'|'lg' }) {
    const [hovered, setHovered] = useState(false);
    return (
        <AnimatedCard className="w-full h-full" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <CardVisual className="w-full h-full">
                <div className="absolute inset-0">
                    <Layer1 hovered={hovered} color={content.main} secondaryColor={content.secondary} target={content.targetPct} />
                    <LayerBgGradient color={content.main} />
                    <GridLayer color="#80808015" />
                </div>
            </CardVisual>
            <div className="absolute left-0 right-0 bottom-0 translate-y-full group-hover/animated-card:translate-y-0 transition-transform duration-500 z-[10]">
                <div className="pointer-events-none px-3 py-2" style={{ backgroundColor: content.main, opacity: 1 }}>
                    <div className="text-white font-semibold leading-none text-2xl md:text-3xl">{content.number}</div>
                    <div className="text-white text-[11px] md:text-sm mt-1 max-w-[95%]">{content.sub}</div>
                </div>
            </div>
        </AnimatedCard>
    );
}

function GridLayer({ color }: { color: string }) {
    return (
        <div
            style={{ "--grid-color": color } as React.CSSProperties}
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center"
        />
    );
}

function Layer1({ hovered, color, secondaryColor, target = 66 }: LayerProps & { target?: number }) {
    const [mainProgress, setMainProgress] = useState(0);
    const [secondaryProgress, setSecondaryProgress] = useState(0);
    useEffect(() => {
        const durationMs = 600;
        const steps = Math.max(1, Math.floor(durationMs / 16));
        const mainTarget = hovered ? Math.min(target, 66) : 0;
        const secondaryTarget = hovered ? target : 0;
        const mainStart = mainProgress;
        const secStart = secondaryProgress;
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            const t = i / steps;
            const ease = t * (2 - t);
            setMainProgress(Math.round(mainStart + (mainTarget - mainStart) * ease));
            setSecondaryProgress(Math.round(secStart + (secondaryTarget - secStart) * ease));
            if (i >= steps) clearInterval(id);
        }, 16);
        return () => clearInterval(id);
    }, [hovered, target, mainProgress, secondaryProgress]);
    const radius = 22;
    const c = 2 * Math.PI * radius;
    const d1 = c - (mainProgress / 100) * c;
    const d2 = c - (secondaryProgress / 100) * c;
    return (
        <div className="absolute inset-0 z-[3] flex items-center justify-center">
            <div className="relative">
                <svg width="112" height="112" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r={radius} stroke="#00000022" strokeWidth="10" fill="transparent" />
                    <circle cx="50" cy="50" r={radius} stroke={secondaryColor} strokeWidth="10" fill="transparent" strokeDasharray={c} strokeDashoffset={d2} transform="rotate(-90 50 50)" />
                    <circle cx="50" cy="50" r={radius} stroke={color} strokeWidth="10" fill="transparent" strokeDasharray={c} strokeDashoffset={d1} transform="rotate(-90 50 50)" />
                </svg>
                {/* Removed central percentage label as requested */}
            </div>
        </div>
    );
}