<!--  -->
<template>
  <div class='left'>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="查询"
                   name="first">
        <div class="search">
          <el-form :inline="true"
                   :model="form">
            <el-form-item label="精度">
              <el-input v-model="form.lng"
                        class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="纬度">
              <el-input v-model="form.lat"
                        class="inputbox"></el-input>
            </el-form-item>
            <el-form-item label="半径">
              <el-input v-model="form.radius"
                        class="inputbox "></el-input>
            </el-form-item>
            <i class="el-icon-search"
               @click='getPositions(form)'></i>
          </el-form>
        </div>
        <div>
          <div>

          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { postSearch } from '@/api/search'
export default {
  name: 'Left',
  components: {},
  props: {},
  data () {
    return {
      activeName: 'first',
      form: {
        lng: '',
        lat: '',
        radius: ''
      },
      res: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getPositions () {
      const res = await postSearch(this.form)
      console.log(res)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style  scoped>
.left {
  height: calc(100% - 70px);
  position: absolute;
  top: 70px;
  background: darkseagreen;
  left: 0;
  width: 420px;
  height: 600px;
}

.inputbox {
  width: 90px;
}
.el-form-item {
  margin-right: 0px !important;
}
.el-input /deep/.el-input__inner {
  height: 25px !important;
}
.el-icon-search {
  margin-left: 5px !important;
  margin-top: 10px !important;
}
</style>
