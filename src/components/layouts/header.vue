<template>
    <div>
        <!--头部-->
        <section class="header clearfix">
            <div class="pull-left logo">
                <img :src="logo" alt="" />
            </div>
            <div class="pull-right menu">
                <a href="javascript:;" @click="changeMenu">
                    <img src="../../../static/image/phone/nav_ph.png" alt="">
                </a>
            </div>
            <div v-show="isShow" class="menu-nav">
                <div @click="close">
                    <img src="../../../static/image/phone/close_03.png" alt="" />
                </div>
                <ul class="nav">
                    <li v-for="(v,k) in menuList" :key="v.id" @click="currentIndex=k">
                      <a href="javascript:;" class="text-center" :class="{current:currentIndex==k}">{{v.name}}</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:"Header",
    data(){
      return {
        logo:"../../../static/image/phone/logo_ph.png",
        isShow:false,
        currentIndex:0,
        menuList:[
          {id:1,name:"首页"},
          {id:2,name:"首页"},
          {id:3,name:"首页"},
          {id:4,name:"首页"},
          {id:5,name:"首页"},
          {id:6,name:"首页"},
        ]
      }
    },
    methods:{
      changeMenu(){
        this.isShow = !this.isShow;
      },
      close(){
        this.isShow = !this.isShow;
      }
    }
}
</script>
<style scoped>
.header {
  margin-bottom: 5%;
}
.header .logo {
  width: 22.6%;
}
.header .logo img {
  width: 100%;
  padding-top: 15%;
  padding-left: 5%;
}
.header .menu {
  width: 9.3%;
}
.header .menu a img {
  width: 100%;
  padding-top: 35%;
  padding-left: 5%;
}
.header .menu-nav {
  width: 100%;
  height: 100%;
  background: #4287d5;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.header .menu-nav div {
  width: 9%;
  height: 5%;
  margin-top: 2%;
  margin-right: 4%;
  float: right;
}
.header .menu-nav div img {
  width: 100%;
}
.header .menu-nav ul {
  margin-top: 10%;
}
.header .menu-nav ul li {
  position: relative;
}
.header .menu-nav ul li .current:before {
  content: '';
  width: 11%;
  border-bottom: 3px solid #ffffff;
  position: absolute;
  top: 49%;
  left: 20%;
}
.header .menu-nav ul li .current:after {
  content: '';
  width: 11%;
  border-bottom: 3px solid #ffffff;
  position: absolute;
  top: 49%;
  right: 20%;
}
.header .menu-nav ul li a {
  color: #ffffff;
  font-size: 2em;
}
</style>