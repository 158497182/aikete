<template>
    <div>
         <!--底部-->
        <section class="footer">
            <section class="message">
                <form action="#" method="post">
                    <span>留下你的意见和建议：</span>
                    <input type="text" name="msg" value="" v-model="msg"/>
                    <button type="submit">提交</button>
                </form>
            </section>
            <section class="contact">
                <address class="text-center">
                    <p v-for="(v,k) in lists" :key="v.id">
                        <img :src="v.imgUrl" alt="">
                        <span>{{v.des}}：{{v.name}}</span>
                    </p>
                </address>
                <div class="ewm clearfix">
                    <div class="pull-left">
                        <img :src="evm" alt="" />
                    </div>
                    <div class="pull-right">
                        <img :src="evm2" alt="" />
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
export default {
    data(){
      return{
        msg:'',
        evm:"../../../static/image/phone/ewm_03.png",
        evm2:'../../../static/image/phone/ewm_05.png',
        lists:[
          {id:1,imgUrl:"../../../static/image/phone/tb_03.png",name:13625899525,des:"电话"},
          {id:2,imgUrl:"../../../static/image/phone/tb_07.png",name:13625899525,des:"电话"},
          {id:3,imgUrl:"../../../static/image/phone/tb_11.png",name:13625899525,des:"电话"},
          {id:4,imgUrl:"../../../static/image/phone/tb_14.png",name:13625899525,des:"电话"},
          {id:5,imgUrl:"../../../static/image/phone/tb_16.png",name:13625899525,des:"电话"},
        ],
      }
    }
}
</script>
<style scoped>
.footer .message {
  width: 100%;
  height: 20%;
  background: #999999;
  margin: 0 auto;
  margin-top: 10%;
}
@media (max-width: 415px) {
  .footer .message form {
    padding-left: 4%;
  }
}
@media (max-width: 415px) and (max-width: 376px) {
  .footer .message form {
    padding-left: 3%;
  }
}
@media (max-width: 415px) and (max-width: 320px) {
  .footer .message form {
    padding-left: 2%;
  }
}
.footer .message form input {
  width: 38%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background: none;
  padding-top: 6%;
  margin-bottom: 6%;
}
@media (max-width: 415px) {
  .footer .message form input {
    width: 39%;
  }
}
@media (max-width: 415px) and (max-width: 360px) {
  .footer .message form input {
    width: 35%;
  }
}
@media (max-width: 415px) and (max-width: 360px) and (max-width: 320px) {
  .footer .message form input {
    width: 32%;
  }
}
.footer .message form button {
  width: 13%;
  background: #4287d5;
  text-align: center;
  border: none;
  border-radius: 0.35rem;
}
@media (max-width: 415px) {
  .footer .message form button {
    margin-left: 2%;
  }
}
@media (max-width: 415px) and (max-width: 360px) {
  .footer .message form button {
    margin-left: 1%;
  }
}
.footer .contact {
  width: 100%;
  background: #000000;
}
.footer .contact address {
  padding-top: 10%;
}
.footer .contact address p {
  width: 100%;
  color: #ffffff;
  font-size: 1.2em;
  text-indent: 5%;
}
.footer .contact address p img {
  width: 6%;
}
.footer .contact address p span {
  font-size: 1.7rem;
  margin-left: 1%;
}
.footer .contact .ewm {
  width: 68%;
  margin: 0 auto;
}
.footer .contact .ewm div {
  width: 45%;
  padding-bottom: 10%;
}
.footer .contact .ewm div img {
  width: 100%;
}
</style>