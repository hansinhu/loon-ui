<template>
  <div class="lay">
    <div class="lay-header">
      <header>
        <div class="container">Loon UI</div>
      </header>
    </div>
    <div class="lay-body">
      <div class="page-component__scroll el-scrollbar">
        <div class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
          <div class="page-component">
            <div class="page-component__nav el-scrollbar">
              <ul>
                <li class="page-menu_item" v-for="(item, i) in itemList" :key="i">
                  <router-link :to="item.path">{{item.name}}</router-link>
                </li>
              </ul>
            </div>
            <div class="page-component__content">
              <div class="page-content">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import childrenList from '../router/children'
export default {
  name: 'layout',
  data () {
    return {
      itemList: []
    }
  },
  mounted () {
    this.itemList = childrenList
  }
}
</script>
<style scoped>
.container{
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}
.lay-header{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
}
header{
  height: 80px;
  background-color: #41454b;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}
.lay-body{
  padding: 0;
  margin-top: 0;
  height: 100%;
  min-height: auto;
}
.page-component__scroll {
  height: calc(100% - 80px);
  margin-top: 80px;
}
.el-scrollbar {
  overflow: hidden;
  position: relative;
}
.el-scrollbar__wrap {
  overflow: scroll;
  overflow-x: auto;
  height: 100%;
}
.page-component{
  box-sizing: border-box;
  height: 100%;
  padding: 0;
  width: 1140px;
  margin: 0 auto;
}
.page-component .page-component__nav {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: padding-top .3s;
}
.page-component .page-component__content {
    padding-left: 270px;
    padding-bottom: 100px;
    box-sizing: border-box;
}
.page-menu_item{
  line-height: 36px;
}
.page-content{
  padding-top: 40px;
}
</style>

