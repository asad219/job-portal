import React from "react";

export interface CategoryCardProps {
  id: number;
  title: string;
  description: string;
  icon: any;
  count?: number; // Optional property for count
}
const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div
      className="justify-center overflow-hidden rounded-lg border border-gray-100 bg-white select-none hover:shadow hover:shadow-blue-200 p-7"
      key={props.id}
    >
      <div className="flex justify-center items-center w-full mb-2">
        {props.icon}
      </div>
      <h3 className="font-bold text-center">{props.title}</h3>
      <p className="text-center">{props.description}</p>
      <p className="text-[25px] text-blue-500 font-bold text-center">
        ({props.count})
      </p>
    </div>
  );
};

export default CategoryCard;
