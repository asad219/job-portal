"use client";
import React from "react";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: 'url("./h1_hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[300px] lg:min-h-[550px] flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <SearchForm />
          {/* Right Column */}
          <div className="hidden md:block md:w-1/2">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
