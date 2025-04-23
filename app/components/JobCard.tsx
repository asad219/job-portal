"use client";
import { MapPin } from "@phosphor-icons/react";
import Image from "next/image";
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
    <div className="bg-white border border-gray-200 lg:flex-row group hover:border-black rounded-xl w-full sm:mx-0 sm:px-4 mb-4 items-start">
      <div className="flex flex-col justify-between gap-3 px-8 py-8 items-start lg:flex-row lg:gap-0 lg:items-center">
        <div className="flex flex-col items-center flex-1 gap-5 lg:flex-row">
          <div className="shrink-0">
            <Image
              src={"/logo.svg"}
              alt="Company Logo"
              width={50}
              height={50}
            />
          </div>
          <div className="flex-1 text-center lg:text-start">
            <h3 className="text-lg font-semibold">Web Developer </h3>
            <h4 className="text-green-500">The Simpsons</h4>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 gap-5 lg:justify-start">
          <span className="text-gray-500 lg:flex-1">Contract</span>
          <div className="flex items-center gap-2 lg:flex-1">
            <svg
              width="14"
              height="16"
              className="inline-block m-0"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.62266 0 0.875 2.74766 0.875 6.125C0.875 7.20606 1.16062 8.26891 1.70097 9.19859C1.82694 9.41534 1.96775 9.62656 2.11956 9.82641L6.73387 16H7.26609L11.8804 9.82644C12.0322 9.62656 12.173 9.41537 12.299 9.19862C12.8394 8.26891 13.125 7.20606 13.125 6.125C13.125 2.74766 10.3773 0 7 0ZM7 8.15625C5.87997 8.15625 4.96875 7.24503 4.96875 6.125C4.96875 5.00497 5.87997 4.09375 7 4.09375C8.12003 4.09375 9.03125 5.00497 9.03125 6.125C9.03125 7.24503 8.12003 8.15625 7 8.15625Z"
                fill="#779793"
              ></path>
            </svg>
            <span className="text-gray-500">San Francisco</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between flex-1 gap-3 lg:gap-8 lg:flex-row lg:justify-end ">
          <p className="text-gray-500">$1500-$3600</p>
          <a
            className="px-6 py-2 font-semibold duration-150 transform border border-[#cccccc] rounded-full group-hover:bg-blue-500 group-hover:border-transparent"
            href="/#"
          >
            Apply
          </a>
        </div>
      </div>
      <div className="px-8 py-2 text-gray-500 ">
        Commodi vitae omnis ratione consequuntur facilis deleniti rerum deleniti
        nihil non odit ducimus aliquam quisquam quod corporis ab alias ut
        aspernatur neque earum necessitatibus incidunt.
      </div>
    </div>
  );
}
