import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterCardStats = (arr: any[], ...props: string[]) =>
    arr.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newItem: any = {};
        props.forEach((prop, index) => {
            if (item[prop] !== undefined) {
                if (index === 0) {
                    newItem.title = item[prop];
                } else if (index === 1) {
                    newItem.stats = item[prop];
                } else {
                    newItem[prop] = item[prop];
                }
            }
        });
        newItem.image = item.image;
        return newItem;
    });
