<!--  -->
<template>
  <div class=''>
    <baidu-map :center="center"
               :zoom="zoom"
               @ready="handler"
               class="bm-view">
    </baidu-map>
    <left></left>
    <div>
      <live-tab>aaaaaaaa</live-tab>
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
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    setcenter (lng, lat) {
      this.center.lng = lng
      this.cnter.lat = lat
    }
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
