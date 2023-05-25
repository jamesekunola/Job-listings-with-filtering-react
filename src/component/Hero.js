import { useState, useEffect } from "react";
import FilterOptions from "./FilterOption.js";
import Jobs from "./Jobs";

import "./hero.css";

const Hero = () => {
  const [initialData, setInitialData] = useState([]);
  const [jobToFilter, setJobToFilter] = useState([]);
  const [jobData, setJobData] = useState([]);

  // fetch data
  const fetchData = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setInitialData(data);
    setJobData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (jobToFilter.length > 0) {
      const prevData = initialData;
      const filteredData = prevData.filter((item) => {
        for (let job of jobToFilter) {
          return (
            item.role == job ||
            item.level == job ||
            item.tools.includes(job) ||
            item.languages.includes(job)
          );
        }
      });
      setJobData(filteredData);
      return;
    }
    setJobData(initialData);
  }, [jobToFilter.length]);

  const filteredJobList = (job) => {
    // add job to jobTofilter array if its doesn't include that specific job
    if (!jobToFilter.includes(job))
      setJobToFilter((prevJobs) => [job, ...prevJobs]);
  };

  const deleteFilteredOption = (e) => {
    // get the text content of button that was clicked
    const deleteBtnTextContent =
      e.target.closest("button").parentElement.textContent;

    // remove clicked button text content from jobToFilter array
    setJobToFilter((prevJobs) =>
      prevJobs.filter((item) => item !== deleteBtnTextContent)
    );
  };

  return (
    <main>
      <div className="hero__container">
        {/* filter search box */}
        {jobToFilter.length > 0 && (
          <div className="hero__filter__box">
            <div className="hero__filter__box__content">
              {jobToFilter.map((filteredJobs, index) => (
                <FilterOptions
                  key={index}
                  name={filteredJobs}
                  id={index}
                  handleClick={deleteFilteredOption}
                />
              ))}
            </div>
            <button onClick={() => setJobToFilter([])}>clear</button>
          </div>
        )}

        {/* jobs list  */}
        <div className="hero__jobs">
          {jobData.map((job) => (
            <Jobs key={job.id} {...job} handleClick={filteredJobList} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
