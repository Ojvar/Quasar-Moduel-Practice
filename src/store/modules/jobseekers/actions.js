import jobseekersService from "src/services/jobseekers.service";
import { EnumCommitTypes } from "./types";

/**
 * Init
 * @param {} context
 */
export async function init(context) {
    const jobSeekers = await jobseekersService.getJobseekers();

    context.commit(EnumCommitTypes.SetJobSeekers, jobSeekers);
}

/**
 * updateJobSeekerData
 * @param {} context
 */
export async function updateJobSeekerData(context, jobSeeker) {
    context.commit(EnumCommitTypes.UpdateJobSeeker, jobSeeker);
}
