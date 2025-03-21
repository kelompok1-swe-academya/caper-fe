import { Input } from "@/shared/components/ui/input";
import type React from "react";

interface InputDataProps {
	title: string;
	value: string;
	change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: React.FC<InputDataProps> = ({ title, value, change }) => {
	return (
		<div>
			<label htmlFor={title.toLowerCase()} className="block text-gray-700 mb-2">
				{title}
			</label>
			<Input
				id={title.toLowerCase()}
				name={title.toLowerCase()}
				value={value}
				onChange={change}
				className="w-full"
			/>
		</div>
	);
};

export default InputData;
