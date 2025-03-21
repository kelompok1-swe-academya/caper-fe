import CardLandingPage from "@/features/dashboard/components/card";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
	const cardValue = [
		{
			image: "/ui_ux.jpg",
			title: "UI/UX Design",
			description: "100 Jobs Available",
		},
		{
			image: "/ui_ux.jpg",
			title: "UI/UX Design",
			description: "100 Jobs Available",
		},
		{
			image: "/ui_ux.jpg",
			title: "UI/UX Design",
			description: "100 Jobs Available",
		},
	];

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section with Blue Gradient */}
			<section className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white">
				<div className="container mx-auto px-4 py-4">
					<div className="grid md:grid-cols-2 gap-8 items-center py-6">
						<div className="space-y-6 text-center md:text-left">
							<h2 className="text-4xl md:text-6xl font-bold leading-tight">
								The Home Of You Find Job
							</h2>
							<p className="text-base md:text-lg opacity-90">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<Button
								size="lg"
								className="bg-white text-black hover:bg-gray-100 rounded-full w-full md:w-auto px-8 py-3"
							>
								Let's find up
							</Button>
						</div>
						<div className="relative flex justify-center items-center">
							<div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-full overflow-hidden flex justify-center items-center">
								<Image
									src="/image.png"
									alt="Professional with laptop"
									width={350}
									height={550}
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Company Partners Section */}
			<section className="py-12">
				<div className="container bg-blue-50 mx-auto px-4 py-5">
					<div className="text-center mb-8">
						<h2 className="text-xl md:text-2xl font-bold mb-2">
							Company Partner
						</h2>
						<p className="text-gray-600">
							Explore top companies offering remote job opportunities
						</p>
					</div>

					<div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
						<Image src="/nvidia.svg" alt="NVIDIA" width={100} height={30} />
						<Image
							src="/tokopedia.svg"
							alt="Tokopedia"
							width={100}
							height={30}
						/>
						<Image src="/google.svg" alt="Google" width={100} height={30} />
						<Image src="/gojek.svg" alt="Gojek" width={80} height={30} />
						<Image
							src="/microsoft.svg"
							alt="Microsoft"
							width={100}
							height={30}
						/>
						<Image
							src="/telkomsel.svg"
							alt="Telkomsel"
							width={100}
							height={30}
						/>
					</div>
				</div>
			</section>

			{/* Discover Feeds Section */}
			<section className="py-16 px-4 md:px-0">
				<div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h2 className="text-2xl md:text-3xl font-bold">
							Discover a Variety of Feeds Available for You to Explore.
						</h2>
						<p className="text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<Button
							variant="outline"
							className="rounded-full px-8 py-3 bg-blue-500 text-white w-full md:w-auto"
						>
							Explore More
						</Button>
					</div>
				</div>
			</section>

			{/* Job Categories Section */}
			<section className="py-16 bg-blue-50 px-4 md:px-0">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					{cardValue.map((value, index) => (
						<CardLandingPage
							key={`item${index}-${value.title}`}
							image={value.image}
							title={value.title}
							description={value.description}
						/>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-blue-500 text-white py-12 px-4 md:px-0">
				<div className="container mx-auto grid md:grid-cols-2 gap-8">
					<div className="space-y-4">
						<h2 className="text-xl font-bold">CAREER</h2>
						<p className="max-w-md text-sm md:text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="space-y-4 md:text-right">
						<h3 className="text-lg font-semibold">Contact Us</h3>
						<p>+62-0123-1231</p>
						<div className="space-y-2">
							<Link href="#" className="block hover:underline">
								Privacy & policy
							</Link>
							<Link href="#" className="block hover:underline">
								Terms of service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
