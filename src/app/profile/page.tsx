"use client";

import CardFeed from "@/features/profile/components/card-feed";
import ProfileImage from "@/features/profile/components/profile-image";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Bell, Camera, Edit, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const cardValue = [
	{
		name: "Jhon Doe Dengker",
		image_profile: "/person1.svg",
		content_description:
			"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut",
		image_content: "/digital_marketing.jpg",
	},
	{
		name: "Jhon Doe Dengker",
		image_profile: "/person1.svg",
		content_description:
			"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut",
		image_content: "/data_analyst.jpg",
	},
];

const ProfilePage = () => {
	const router = useRouter();
	const handleEditProfile = () => {
		router.push("/profile/edit-profile");
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Main Content */}
			<main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 space-y-6">
				{/* Profile Card */}
				<Card className="overflow-hidden pb-6">
					<ProfileImage isEdit={false}>
						<div className="space-y-1 pt-6">
							<h1 className="text-2xl font-bold">Jhon Doe Dongker</h1>
							<p className="text-lg">Full-Stack Developer Bersertifikasi AWS</p>
							<p className="text-muted-foreground">
								Kota Bandung, Jawa Barat, Indonesia
							</p>
						</div>
					</ProfileImage>
				</Card>

				{/* About Section */}
				<Card>
					<CardContent className="py-6">
						<h2 className="text-xl font-bold mb-4">Tentang</h2>
						<p className="text-muted-foreground">
							I am an Undergraduate Informatics Engineering Student at
							Universitas Gorengan Bala Bala with a strong interest in mobile
							software development and machine learning. Throughout my
							education, I have honed my skills in various technologies and
							programming languages relevant to these fields. I have
							participated in numerous projects and competitions, which have
							further solidified my knowledge and practical experience.
							Additionally, I am passionate about continuously learning and
							enhancing my abilities, and I am eager to take on new challenges
							in the tech industry. I enjoy collaborating with peers and
							professionals to solve complex problems and create innovative
							solutions.
						</p>
					</CardContent>
				</Card>

				{/* Activities Section */}
				<Card>
					<CardContent className="pt-6">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-bold">Aktivitas</h2>
							<Button className="bg-blue-500 hover:bg-blue-600">
								Buat Postingan
							</Button>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							{cardValue.map((value, index) => (
								<CardFeed
									key={`${value.name}-${value.image_profile}`}
									name={value.name}
									image_profile={value.image_profile}
									content_description={value.content_description}
									image_content={value.image_content}
								/>
							))}
						</div>
						<div className="flex justify-center mt-6">
							<Button variant="link" className="text-muted-foreground">
								Tampilkan semua posting -&gt;
							</Button>
						</div>
					</CardContent>
				</Card>
			</main>
		</div>
	);
};

export default ProfilePage;
