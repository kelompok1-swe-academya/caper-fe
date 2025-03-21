"use client";

import { Button } from "@/shared/components/ui/button";
import { Bell, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface NavItem {
	title: string;
	href: string;
}

const navItems: NavItem[] = [
	{ title: "Dashboard", href: "/dashboard" },
	{ title: "Profile", href: "/profile" },
	{ title: "Jobs", href: "/jobs" },
];

export function Navbar() {
	const pathname = usePathname();
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulasi status login

	return (
		<header className="bg-blue-500 text-black p-4 shadow-md sticky top-0 z-50">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{isLoggedIn ? (
					// Jika sudah login, tampilkan navbar utama
					<>
						<div className="flex items-center gap-8">
							<Link href="/dashboard">
								<Image
									src="/logo_caper.svg"
									alt="Logo"
									width={50}
									height={50}
									priority
								/>
							</Link>
							<nav className="hidden md:flex gap-6">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`font-medium ${pathname === item.href ? "underline" : ""}`}
									>
										{item.title}
									</Link>
								))}
							</nav>
						</div>
						<div className="flex items-center gap-4">
							<Button variant="ghost" size="icon" className="rounded-full">
								<Bell className="h-5 w-5" />
							</Button>
							<Button variant="ghost" size="icon" className="rounded-full">
								<MessageSquare className="h-5 w-5" />
							</Button>
						</div>
					</>
				) : (
					<div className="flex justify-between items-center w-full">
						<div className="flex items-center">
							<Link href="/dashboard">
								<Image
									src="/logo_caper.svg"
									alt="Logo"
									width={65}
									height={65}
									priority
								/>
							</Link>
						</div>
						<div className="flex gap-2">
							<Button
								variant="outline"
								className="bg-white text-black hover:bg-gray-100"
							>
								<Link href="/login">Sign In</Link>
							</Button>
							<Button className="bg-blue-600 hover:bg-blue-700">
								<Link href="/register">Sign Up</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
