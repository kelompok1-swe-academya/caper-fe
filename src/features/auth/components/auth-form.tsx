import { Button } from "@/shared/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import Link from "next/link";

interface AuthFormProps {
	title: string;
	description: string;
	quest: string;
	btnDescription: string;
	isHaveAccount: string;
	path: string;
	isLogin: boolean;
}

export default function AuthForm(props: AuthFormProps) {
	const {
		title,
		description,
		quest,
		isHaveAccount,
		isLogin = false,
		btnDescription,
		path,
	} = props;
	return (
		<div>
			<Card className="w-[350px] py-6">
				<CardHeader>
					<CardTitle className="text-2xl">{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					{!isLogin && (
						<div>
							<div className="flex justify-between mb-2">
								<Button className="px-10" variant="outline">
									GitHub
								</Button>
								<Button className="px-10" variant="outline">
									Google
								</Button>
							</div>
							<div className="flex items-center justify-center gap-2 mb-2">
								<hr className="w-20 h-0.5 bg-slate-500" />
								<p className="text-sm">Or continue with</p>
								<hr className="w-20 h-0.5 bg-slate-500" />
							</div>
						</div>
					)}
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Password</Label>
								<Input id="name" placeholder="" />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<div className="flex justify-between">
						<Button variant="outline">
							<Link href={"/"}>Cancel</Link>
						</Button>
						<Button className="px-10">{btnDescription}</Button>
					</div>
					<div className="flex justify-center pt-4">
						<p className="text-sm gap-0.5 flex">
							{quest}
							<Link href={`/${path}`} className="underline text-blue-500">
								{isHaveAccount}
							</Link>
						</p>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
