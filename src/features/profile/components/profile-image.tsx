import { Button } from "@/shared/components/ui/button";
import { CardContent } from "@/shared/components/ui/card";
import { Bell, Camera, Edit, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import type { ReactNode } from "react";

interface ProfileImageProps {
	children: ReactNode;
	isEdit: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ children, isEdit }) => {
	return (
		<>
			<div className="relative h-48 bg-gray-200">
				<Image
					src="/web_dev.jpg"
					alt="Cover image"
					fill
					className="object-cover"
				/>
				<Button
					variant="secondary"
					size="icon"
					className="absolute right-5 top-4 rounded-full bg-white/80 backdrop-blur-sm"
				>
					<Camera className="h-5 w-5" />
				</Button>
			</div>
			<CardContent className="pt-0 relative">
				<div className="absolute -top-22 left-4 rounded-full border-4 border-white overflow-hidden">
					<Image
						src="/person1.svg"
						alt="Profile picture"
						width={120}
						height={120}
						className="bg-white"
					/>
				</div>
				{!isEdit && (
					<div className="pt-2 flex justify-end">
						<Link href="/profile/edit-profile">
							<Button variant="ghost" size="icon">
								<Edit className="h-5 w-5" />
							</Button>
						</Link>
					</div>
				)}
				{children}
			</CardContent>
		</>
	);
};

export default ProfileImage;
