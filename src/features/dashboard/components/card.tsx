import { Card, CardContent } from "@/shared/components/ui/card";
import Image from "next/image";
import React from "react";

interface CardProps {
	image: string;
	title: string;
	description: string;
}

const CardLandingPage = (props: CardProps) => {
	const { image, title, description } = props;
	return (
		<Card className="overflow-hidden">
			<Image
				src={image}
				alt={title}
				width={400}
				height={200}
				className="w-full object-cover h-40"
			/>
			<CardContent className="pt-1 pb-10">
				<h3 className="text-xl font-bold mb-1">{title}</h3>
				<p className="text-sm text-gray-500">{description}</p>
			</CardContent>
		</Card>
	);
};

export default CardLandingPage;
