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
        <div class="contentContainer">
          <div class="content"
               v-for="n in 15"
               :key="n">
            <div class="leftContent">
              <div class="icon">{{n}}</div>
              <div class="middleContent">
                <div><span>闽江公园</span></div>
                <div><span>福州市</span></div>
              </div>
            </div>

            <div class="rightContent">right</div>
          </div>
        </div>
        <div>
          <div>

          </div>
          <el-pagination page-size=5
                         layout="prev, pager, next"
                         :total="50">
          </el-pagination>
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
        lng: '119.23476',
        lat: '26.052788',
        radius: '5'
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
.contentContainer {
  overflow: auto;
  height: 450px;
}
.rightContent {
  margin-right: 25px;
  align-self: center;
}
.middleContent {
  margin-left: 25px;
}
.content {
  display: flex;
  justify-content: space-between;
}
.leftContent {
  display: flex;
}
.leftContent .icon {
  align-self: center;
  margin-left: 25px;
}
/* .leftIcon {
  width: 40px;
  height: 100%;
  color: #fff;
} */
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
::v-deep .el-tabs__nav-scroll {
  width: 50% !important;
  margin: 0 auto !important;
  margin-left: 180px !important;
}
</style>
