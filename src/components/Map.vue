<template>
    <div>
        <div class="map-container" ref="mapContainer"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            map: null,
            markers: []
        }
    },
    props: {
        locations: {
            type: Array,
            default() {
                return []
            }
        }
    },
    watch: {
        locations: {
            handler() {
                if (this.map) {
                    this.setMarkers()
                }
            }
        }
    },
    methods: {
        setMarkers() {
            this.markers.forEach(marker => {
                marker.remove()
            })

            this.markers = this.locations.map(location => {
                const popup = new window.mapboxgl.Popup({ offset: 25 })
                popup.setHTML(`<h2>${location.label}</h2><p>${location.address}</p>`);

                const marker = new window.mapboxgl.Marker()
                marker.setLngLat(location.position)
                marker.setPopup(popup)
                marker.addTo(this.map);

                return marker
            })
        },
        createMap() {
            this.map = new window.mapboxgl.Map({
                container: this.$refs.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [15.9877496, 45.8030795],
                zoom: 11
            });
            this.setMarkers()
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.createMap()
        })
    }
}
</script>
<style scoped>
    .map-container {
        width: 100vw;
        height: calc(100vh - 56px);
    }
</style>