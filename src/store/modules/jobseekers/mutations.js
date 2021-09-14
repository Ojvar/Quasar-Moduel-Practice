import Vue from "vue";
import { merge } from "lodash";

/**
 * Set job seekers data
 * @param {*} state
 */
export function setJobSeekers(state, value) {
    state.jobSeekers = value;
}

/**
 * Set job seekers data
 * @param {*} state
 */
export function updateJobSeeker(state, value) {
    let index = state.jobSeekers.findIndex((x) => x.id == value.id);

    if (-1 < index) {
        merge(state.jobSeekers[index], value);
        // Vue.set(state.jobSeekers, index, value);
    }
}
