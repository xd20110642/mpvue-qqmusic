<template>
    <div class="list" v-if="listArr.length">
       <div class="top">
           <img :src="listArr[0].pic" alt="">
       </div>
       <div class="center" >
           <navigator   :url="'/pages/play/main?key='+item" class="songlist" v-for="(item,index) of listArr" :key="index">  
               <div class="songlist-img" >
                   <img :src="item.pic" alt="">
               </div>
                <div class="songlist-song">
                    <p>{{item.name}}</p>
                    <p>{{item.singer}}</p>
                </div>
           </navigator>
       </div>
    </div>
  
</template>

<script>
let a=null;
import {getMusic} from '../common/common.js'
export default {
    data(){
        return {
          listArr:[
          ]
        }
    },
    props:['keyWorld']
    ,
    methods:{
        getMess(){       
        console.log(1234456);
        // 数据更新
        this.$nextTick(() => {
              this.$http.get('https://api.bzqll.com/music/tencent/search?key=579621905',{
                s:this.keyWorld,
                type:'song',
                limit:100,
                offset:0
        }).then((result) => {
             wx.hideLoading();
             console.log(result.data.data)
            for (let index = 0; index < result.data.data.length; index++) {
                this.$set(this.listArr,index,result.data.data[index])
            }
           console.log(this.list)
        }).catch((err) => {
            console.log(err);
        });
        })
      
        },
        goPlay(eve){
            const url='/pages/play/main?key='+eve;
            wx.reLaunch({ url });
            console.log(1231)
        }
    },
    onReady() {
        //  console.log(getMusic('song',this.keyWorld))
        wx.showLoading({
        title: '加载中',
        })
        this.getMess();
    },
   computed:{
       ul(){
              const url='/pages/play/main?key='+eve;
       }
   }
  

}
</script>

<style scoped> 
    .list{
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .top{
        width: 100%;
        height: 200px;
        margin: auto;
    }
    .top img{
        width: 100%;
        height: 100%;
    }
    .center{
        width: 100%;
        /* border: .03125rem solid; */
    }
    .center .songlist{
        width: 95%;
        height: 50px;
        margin: 10px auto;
        /* border: 1px solid red; */
        display: flex;
        background-color: #eeeeee;
    }
   .center .songlist .songlist-img{
       flex: 0 0 50px;
        height: 100%;
   }
   .center .songlist .songlist-img img{
       width: 100%;
       height: 100%;
   }
   .center .songlist .songlist-song{
       margin-left: 5px;
       font-size: 12px;
   }
</style>
