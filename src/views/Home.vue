<!--  -->
<template>
  <div class=''>
    <baidu-map class="bm-view"
               :center="center"
               :zoom="zoom">
    </baidu-map>
    <left></left>
    <div>
      <live-tab></live-tab>
      <div>aaaaa</div>
      <button @click='setcenter(lng,lat)'>setcenter</button>
    </div>
  </div>
</template>

<script>

import Left from '../components/Left.vue'
import LiveTab from '../components/LiveTab.vue'

export default {
  name: 'Home',
  components: { LiveTab, Left },
  props: {},
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 600px;
}
</style>
