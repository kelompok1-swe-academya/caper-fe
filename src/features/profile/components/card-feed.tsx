import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import React from "react";

interface CardFeedProps {
	name: string;
	image_profile: string;
	content_description: string;
	image_content: string;
}

const CardFeed = (props: CardFeedProps) => {
	const { name, content_description, image_content, image_profile } = props;
	return (
		<Card className="pb-4">
			<CardContent className="pt-4">
				<div className="flex items-center gap-3 mb-3">
					<Image
						src={image_profile}
						alt="Profile picture"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<div className="flex-1">
						<p className="font-medium">{name}</p>
					</div>
					<Button variant="secondary" size="sm">
						See &gt;
					</Button>
				</div>
				<p className="text-sm text-muted-foreground mb-3">
					{content_description}
				</p>
				<div className="rounded-md overflow-hidden">
					<Image
						src={image_content}
						alt="Post image"
						width={400}
						height={200}
						className="w-full object-cover"
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default CardFeed;
