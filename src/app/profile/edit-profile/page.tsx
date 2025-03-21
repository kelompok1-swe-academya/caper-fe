"use client";

import InputData from "@/features/profile/components/input";
import ProfileImage from "@/features/profile/components/profile-image";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function ProfileEdit() {
	const [formData, setFormData] = useState({
		name: "John doe",
		email: "John doe@gmail.com",
		skills: "JavaScript",
		headline: "Full-Stack Developer Bersertifikasi AWS",
		location: "Kota Bandung, Jawa Barat, Indonesia",
		about: "I am a Undergraduate Informatics Engineering Student at",
	});

	const dataValue = [
		{
			title: "Nama",
			value: formData.name,
		},
		{
			title: "Email",
			value: formData.email,
		},
		{
			title: "Skill",
			value: formData.skills,
		},
		{
			title: "Headline",
			value: formData.headline,
		},
		{
			title: "Location",
			value: formData.location,
		},
	];

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Main Content */}
			<main className="flex-1 max-w-6xl mx-auto w-full p-4">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden mt-4">
					{/* Cover Image */}
					<ProfileImage isEdit={true}>
						<div />
					</ProfileImage>

					{/* Profile Section */}
					<div className="px-6 pb-6">
						{/* Form */}
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-6 pt-16"
						>
							{dataValue.map((value, index) => (
								<InputData
									key={`item${index}-${value.title}`}
									title={value.title}
									change={handleChange}
									value={value.value}
								/>
							))}

							<div className="row-span-2">
								<label htmlFor="about" className="block text-gray-700 mb-2">
									Tentang
								</label>
								<Textarea
									id="about"
									name="about"
									value={formData.about}
									onChange={handleChange}
									className="w-full h-[calc(100%-2rem)]"
								/>
							</div>

							<div className="md:col-span-2 flex justify-end gap-4 mt-4">
								<Button variant="outline" type="button" className="w-32">
									<Link href="/profile">Cancel</Link>
								</Button>
								<Button
									type="submit"
									className="w-32 bg-purple-600 hover:bg-purple-700"
								>
									<Link href="/profile">Save</Link>
								</Button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}
