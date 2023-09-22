import { useEffect, useState } from "react";
import Job from "../Jobs/Job";


const FeaturesJobs = () => {
    let [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold ">Features Jobs {jobs.length}</h1>
                <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturesJobs;