<template>
  <div>
    <Map :locations="filteredLocations" />
  </div>
</template>

<script>
import Map from '@/components/Map'
import { mapGetters } from 'vuex'

export default {
  components: { Map },
  computed: {
    ...mapGetters([
      'filteredLocations'
    ])
  }
};
</script>
