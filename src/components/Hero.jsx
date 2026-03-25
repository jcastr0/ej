import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => (
	<section className="relative min-h-[100svh] flex items-end overflow-hidden">
		<div className="absolute inset-0">
			<img
				src="/images/empre_juntas.webp"
				alt="Emprendiendo Juntas"
				className="w-full h-full object-cover scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-[#19152A] via-[#19152A]/70 to-transparent" />
			<div className="absolute inset-0 bg-[#A169A2]/15 mix-blend-multiply" />
		</div>

		<div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-8 pt-32 sm:pb-16">
			<div className="max-w-2xl">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-5"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5"
					>
						<span className="w-1.5 h-1.5 bg-[#4CA7C0] rounded-full animate-pulse" />
						<span
							className="text-white/80 text-xs font-medium"
							style={{ fontFamily: "'DM Sans', sans-serif" }}
						>
							5 años · 60+ emprendedoras · 6 ciudades
						</span>
					</motion.div>

					<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
						Tu emprendimiento
						<br />
						<span className="italic text-[#4CA7C0]">
							no tiene que
							<br />
							crecer solo.
						</span>
					</h1>

					<p
						className="text-base text-white/65 leading-relaxed max-w-md"
						style={{ fontFamily: "'DM Sans', sans-serif" }}
					>
						Formación, mentoría y una red real de mujeres que impulsa tu
						negocio.
					</p>

					<div className="flex gap-3 pt-1">
						<Link to="/membresia" className="flex-1 sm:flex-none">
							<Button
								size="lg"
								className="w-full sm:w-auto bg-[#A169A2] hover:bg-[#8d5a8e] text-white px-6 py-5 text-sm font-semibold rounded-full shadow-2xl group"
								style={{ fontFamily: "'DM Sans', sans-serif" }}
							>
								Ver planes
								<ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
						<Link to="/nosotras" className="flex-1 sm:flex-none">
							<Button
								variant="ghost"
								size="lg"
								className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/10 px-6 py-5 text-sm font-semibold rounded-full border border-white/20"
								style={{ fontFamily: "'DM Sans', sans-serif" }}
							>
								<Play className="mr-1.5 h-4 w-4" /> Historia
							</Button>
						</Link>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className="mt-8 sm:mt-14 grid grid-cols-4 gap-2.5 sm:gap-4"
			>
				{[
					{ v: '5+', l: 'Años' },
					{ v: '60+', l: 'Mujeres' },
					{ v: '6', l: 'Ciudades' },
					{ v: '100%', l: 'Apoyo' },
				].map((s, i) => (
					<div
						key={i}
						className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-3 text-center"
					>
						<p className="text-lg sm:text-2xl font-bold text-white">
							{s.v}
						</p>
						<p
							className="text-white/45 text-[10px] sm:text-sm"
							style={{ fontFamily: "'DM Sans', sans-serif" }}
						>
							{s.l}
						</p>
					</div>
				))}
			</motion.div>
		</div>
	</section>
);

export default Hero;

