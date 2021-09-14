import JobSeekersMock from "assets/jobseekers.json";

/**
 * JobSeekers service
 */
export default class {
    /**
     * Get jobSeekers list
     * @returns Job Seekers list
     */
    static async getJobseekers() {
        /* Check cache data */
        return JobSeekersMock;
    }
}
