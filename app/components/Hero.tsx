'use client';
import React from 'react';

export default function Hero() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert('Form submitted!');
        // Handle form submission logic here
        console.log('Form submitted!');
    };
    return (
        <section
            style={{
                backgroundImage: 'url("./h1_hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="min-h-[300px] lg:min-h-[550px] flex items-center"
        >
            
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 flex items-center">
                        <form className="w-full bg-white bg-opacity-90 p-4 rounded shadow-md flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Eg: AI Engineer"
                                className="flex-1 p-3 rounded focus:outline-none"
                            />
                           
                            <button type="submit" className="hidden md:block p-3 bg-blue-500 text-white">
                                Search
                            </button>
                        </form>
                    </div>
                    {/* Right Column */}
                    <div className="hidden md:block md:w-1/2">
                        {/* Additional content can be added here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

