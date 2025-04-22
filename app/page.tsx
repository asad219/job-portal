import Hero from "./components/Hero";
import JobCard from "./components/JobCard";
import JobCategory from "./components/JobCategory";
import JobListing from "./components/JobListing";
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
    description: "Develop and maintain web applications.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "New York, NY",
    salary: "$100,000 - $120,000",
    description: "Lead product development teams.",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "DataWorks",
    location: "Austin, TX",
    salary: "$110,000 - $130,000",
    description: "Analyze and interpret complex data.",
  },
];

export default function Home() {
  return (
   <>
   <Hero />
   <JobCategory />
   <JobListing jobs={jobs} />
   </>
  );
}
