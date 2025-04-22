/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Briefcase, Code, FileSql, Headset, PaintBrush, Tag } from "@phosphor-icons/react";
import React from "react";
import CategoryCard from "./CategoryCard";

interface JobCategoryItem {
  id: number;
  title: string;
  description: string;
  icon: any;
  count?: number; // Optional property for count
}

const jobCategories: JobCategoryItem[] = [
  {
    id: 1,
    title: "Development",
    description: "Jobs related to software, web, and application development.",
    icon: <Code size={60} />,
    count: 10,
  },
  {
    id: 2,
    title: "Design",
    description: "Jobs related to graphic, UX/UI, and product design.",
    icon: <PaintBrush size={60} />,
    count: 5,
  },
  {
    id: 3,
    title: "Marketing",
    description: "Jobs focused on marketing, advertising, and communications.",
    icon: <Briefcase size={60} />,
    count: 8,
  },
    {
        id: 4,
        title: "Sales",
        description: "Jobs related to sales, business development, and account management.",
        icon: <Tag size={60} />,
        count: 12,
    },
    {
        id: 5,
        title: "Customer Support",
        description: "Jobs focused on customer service and support.",
        icon: <Headset size={60} />,
        count: 7,
    },
    {
        id: 6,
        title: "Data Science",
        description: "Jobs related to data analysis, machine learning, and AI.",
        icon: <FileSql size={60} />,
        count: 15,
    },
];

export default function JobCategory() {
  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Browse Top Categories
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>
      <div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {jobCategories.map((category) => (

            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              count={category.count} // Pass the count prop to CategoryCard
            />
          ))}
        </div>
      </div>
    </section>
  );
}
