<template>
    <q-page class="q-mx-sm q-my-sm">
        <q-card>
            <q-card-section v-if="currentJobSeeker">
                <q-input v-model="currentJobSeeker.first_name"></q-input>
                <q-input v-model="currentJobSeeker.last_name"></q-input>
            </q-card-section>
            <q-card-section>
                <q-btn @click="updateJobSeekerData(currentJobSeeker)"
                    >Update</q-btn
                >
            </q-card-section>
        </q-card>

        <q-table
            :columns="columns"
            :filter="filter"
            :rows="jobSeekers"
            grid
            hide-header
            row-key="name"
            title="Treats"
        >
            <template v-slot:top-right>
                <q-input
                    borderless
                    debounce="300"
                    dense
                    placeholder="Search"
                    v-model="filter"
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </template>
        </q-table>

        <q-btn @click.stop="editFirstItem">Edit first item</q-btn>
    </q-page>
</template>

<script>
/* Vendors */
import { merge } from "lodash";

/* Helpers */
import { jobSeekersMethods, jobSeekersComputed } from "src/store/helpers";

/**
 * Define component
 */
export default {
    name: "PageIndex",

    async beforeMount() {
        await this.init();
    },

    data() {
        return {
            currentJobSeeker: null,
            filter: "",
            columns: [
                {
                    name: "id",
                    field: "id",
                },
                {
                    name: "firstName",
                    field: "first_name",
                },
                {
                    name: "lastName",
                    field: "last_name",
                },
                {
                    name: "email",
                    field: "email",
                },
            ],
        };
    },

    computed: {
        ...jobSeekersComputed,
    },

    methods: {
        ...jobSeekersMethods,

        editFirstItem() {
            this.currentJobSeeker = merge({}, this.jobSeekers[0]);
        },
    },
};
</script>
