import { findMin } from "./findMin";
import { findMax } from "./findMax";
export function findNum(nums: number[], type: "max" | "min") {
	if (type === "max") return findMax(nums);
	if (type === "min") return findMin(nums);
}
