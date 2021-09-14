import { mapActions, mapGetters, mapState } from "vuex";

/**
 * JobSeekers methods
 */
export const jobSeekersMethods = {
    ...mapActions("jobSeekers", ["init", "updateJobSeekerData"]),
};

/**
 * JobSeekers computed
 */
export const jobSeekersComputed = {
    ...mapState("jobSeekers", {
        jobSeekers: (state) => state.jobSeekers || [],
    }),
};
