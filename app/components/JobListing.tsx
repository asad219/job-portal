import React from 'react';
import JobCard from './JobCard';

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
}

interface JobListingProps {
    jobs: Job[];
}

const JobListing: React.FC<JobListingProps> = ({ jobs }) => {
    return (
        <section
      id="features"
      className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
    >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Featured Jobs
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-1">
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    description={job.description} salary={''} timePosted={''} jobType={''} logo={''}                />
            ))}
        </div>
        </section>
    );
};

export default JobListing;