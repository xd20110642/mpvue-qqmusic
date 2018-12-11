<template>
  <div class="card">
      <div class="row" v-for="(item,index) of ranks" :key="index" @click="goUrl(item.text)">
        {{item.text}} <span >&#62;</span> 
      </div>
  </div>
</template>

<script>
import {getMusci} from '../common/common.js'
export default {
    data(){
      return {
        ranks: [
          {type:26, text:"热歌"},
          {type:23, text:"销量"},
          {type:18, text:"民谣"},
          {type:19, text:"揺滾"},
          {type:5, text:"内地"},
          {type:6, text:"港台"},
          {type:16, text:"韩国"},
          {type:17, text:"日本"},
          {type:3, text:"欧美"},
                ]
      }
    },
    methods:{
      goUrl(eve){
        // 使用绝对路径跳转  然后传递参数
        const url='/pages/list/main?keyWorld='+eve;
        wx.navigateTo({ url });
      }
    }
}
</script>

<style>
.card {
 width: 100%;
 height: 100%;
}
.row{
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* height: 50px; */
  border-bottom: 1px solid;
}
.row span{
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: right;
}
</style>
