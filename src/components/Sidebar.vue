<template>
    <v-navigation-drawer app v-model="updateDrawer" mobile-break-point="2000" class="grey lighten-3">
        <v-layout>
            <v-list>
                <v-list-item>
                    <v-text-field
                        flat
                        label="Solo"
                        placeholder="Search locations"
                        solo
                        v-model="updateSearchQuery"
                    />
                </v-list-item>
                <v-list-item-group v-model="selectedLocation" color="primary">
                    <v-list-item
                        v-for="item in filteredLocations"
                        :key="item.label"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ item.label }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.address }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
    
</template>
<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            selectedLocation: -1
        }
    },
    computed:{
        ...mapGetters([
            'searchQuery',
            'drawer',
            'locations',
            'filteredLocations'
        ]),
        updateDrawer: {
            get() {
                return this.drawer;
            },
            set(value) {
                if (value) {
                    this.showDrawer();

                } else {
                    this.hideDrawer();
                }
            }
        },
        updateSearchQuery: {
            get() {
                return this.searchQuery;
            },
            set(value) {
                this.setSearchQuery(value)
            }
        }
    },
    methods: {
        ...mapMutations([
            'showDrawer',
            'hideDrawer',
            'setSearchQuery'
        ])
    }
}
</script>