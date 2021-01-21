<template>
    <div class="container-fluid">
        <div class="header clearfix">
           <HeaderTop/>
        </div>
        <div class="banner">
            <Banner/>
        </div>
        <div class="content">
            <slot name="content"/>
        </div>
        <div class="footer">
          <FooterBottom/>
        </div>
    </div>
</template>
<script>
import HeaderTop from '../layouts/header'
import Banner from '../layouts/banner'
import FooterBottom from '../layouts/footer'
export default {
    components:{HeaderTop,Banner,FooterBottom}
}
</script>
<style >

* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
</style>