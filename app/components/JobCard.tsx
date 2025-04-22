'use client';
import { MapPin } from '@phosphor-icons/react';
import Image from 'next/image';
interface JobCardProps {
    title: string;
    company: string;
    location: string;
    salary: string;
    timePosted: string;
    jobType: string;
    description: string;
    logo: string;
    }
export default function JobCard(props: JobCardProps) {
  return (
    
    // flex flex-col md:flex-row items-start md:items-center justify-between border p-4 rounded-lg shadow-sm hover:shadow-md transition-all mb-4
    <div className="grid justify-center gap-4 sm:grid-cols-12  md:grid-cols-1 border p-4 rounded-lg shadow-sm hover:shadow-md transition-all mb-4">
      
      <div className="flex justify-between gap-4 ">

        <div className='flex items-start gap-4'>

        <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
          <Image src="/logo.svg" alt="Ziggo Logo" width={48} height={48} />
        </div>
        <div className=''>
          <div className='w-full'>
          <h2 className="text-xl font-semibold">Digital Marketer </h2>
            </div>
          <p className="text-gray-500">Creative Agency </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={16} weight="fill" className="text-gray-400" />
            <span>Athens, Greece</span>
          </div>
          <div className='block sm:hidden'>
          <p className="text-gray-600 font-medium">$3500 - $4000</p>
          <p className="text-sm text-gray-400">7 hours ago</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm border border-indigo-400 text-indigo-600 rounded-full">Full Time</span>
        </div>
        </div>
        
          
        </div>
      <div className="hidden sm:block">
        <p className="text-gray-600 font-medium">$3500 - $4000</p>
        <p className="text-sm text-gray-400">7 hours ago</p>
        <span className="inline-block mt-2 px-3 py-1 text-sm border border-indigo-400 text-indigo-600 rounded-full">Full Time</span>
      </div>
        
      </div>
      
    </div>
  );
}
