import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/MobileNav';
import { motion } from 'framer-motion';

const links = [
	{ to: '/', label: 'Inicio' },
	{ to: '/nosotras', label: 'Nosotras' },
	{ to: '/comunidad', label: 'Comunidad' },
	{ to: '/blog', label: 'Blog' },
	{ to: '/membresia', label: 'Membresía' },
];

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20'
					: 'bg-transparent'
			}`}
		>
			<div className="container mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
				<Link to="/" className="flex-shrink-0">
					<img
						src="/images/logo_ej.svg"
						alt="Emprendiendo Juntas"
						className="h-10 w-auto transition-all duration-500"
						style={scrolled ? {} : { filter: 'brightness(0) invert(1)' }}
					/>
				</Link>

				{/* Desktop */}
				<div className="hidden lg:flex items-center gap-1">
					{links.map((link) => {
						const isActive = location.pathname === link.to;
						return (
							<Link
								key={link.to}
								to={link.to}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
									isActive
										? 'bg-[#A169A2]/10 text-[#A169A2]'
										: scrolled
										? 'text-[#48405E] hover:text-[#A169A2] hover:bg-[#A169A2]/5'
										: 'text-white/90 hover:text-white hover:bg-white/10'
								}`}
							>
								{link.label}
							</Link>
						);
					})}
					<Link to="/membresia" className="ml-3">
						<Button
							className={`rounded-full px-6 font-semibold transition-all duration-300 ${
								scrolled
									? 'bg-[#A169A2] text-white hover:bg-[#8d5a8e] shadow-md'
									: 'bg-white text-[#A169A2] hover:bg-white/90 shadow-lg'
							}`}
						>
							Únete
						</Button>
					</Link>
				</div>

				{/* Mobile */}
				<MobileNav scrolled={scrolled} />
			</div>
		</motion.nav>
	);
};

export default Navbar;