<template>
    <div>
          <!--banner-->
        <section class="banner">
            <div id="myCarousel" class="carousel" data-ride="carousel" data-interval="2000">
                <!--轮播图点-->
                <ol class="carousel-indicators">
                    <li data-slide-to="" 
                    :class="{active:index==k}" 
                    :key="v.id" data-target="#myCarousel" 
                    v-for="(v,k) in imgs"></li>
                </ol>
                <!--轮播图-->
                <div class="carousel-inner">
                    <div class="item" v-for="(val,k) in imgs" :key="val.id" :class="{active:k==index}">
                        <img :src="val.name" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'Banner',
    data(){
        return {
            timer: null,
            imgs:[
                {id:1,name:'../../../static/image/phone/banner_ph.png'},
                {id:2,name:'../../../static/image/phone/banner_ph.png'},
                {id:3,name:'../../../static/image/phone/banner_ph.png'}
            ],
            index:0
        }
    },
    methods:{
         autoPlay() {
            this.timer = setInterval(() => { //setInterval：window对象方法，这里如果是按照之前的写法，this指向的是window，而此处我们需要的vue实例对象
                this.index++;
                if (this.index > this.imgs.length - 1) {
                    this.index = 0;
                }
            }, 3000);
        },
    },
    mounted(){
        this.autoPlay();
    }
}
</script>
<style scoped>
/*banner*/
.banner {
  width: 100%;
  height: 100%;
}
.banner img {
  width: 100%;
}
.banner .carousel-indicators {
  left: 27%!important;
}
.banner .carousel-indicators .active {
  width: 14%!important;
  height: 0px!important;
  border-bottom: 3px solid #4287d5 !important;
}
.banner .carousel-indicators li {
  width: 14%!important;
  height: 0px!important;
  border: none!important;
  border-bottom: 3px solid #ffffff !important;
}
</style>