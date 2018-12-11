<template>
    <div class="sousuo">
        <div class="top">
             <input type="text" placeholder="请输入你要搜索的歌名" v-model.trim="name">
        <button >
            搜索
        </button>
        </div>
       <div class="center">
           <div class="songlist" @click="goPlay">  
               <div class="songlist-img">
                   <img :src="list[0].pic" alt="">
               </div>
                <div class="songlist-song">
                    <p>{{list[0].name}}</p>
                    <p>{{list[0].singer}}</p>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            list:[
                 {
                  id:"000JKutf0nVaSU",
                  lrc:"https://api.bzqll.com/music/tencent/lrc?id=000JKutf0nVaSU&key=579621905",
                  name:"Undefined",
                  pic:"https://api.bzqll.com/music/tencent/pic?id=000JKutf0nVaSU&key=579621905",
                  singer:"初音ミク",
                  url:"https://api.bzqll.com/music/tencent/url?id=000JKutf0nVaSU&key=579621905"
              }
            ]
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .sousuo{
        width: 100%;
        margin: auto;
    }
    .top{
        display: flex;
        flex: 1;
        width: 90%;
        height: 40px;
        margin: auto;
        margin-top: 20px;
      
    }
    .top input{
        flex: 1;
        height: 100%;
        border: 1px solid;
    }
    .top button{    
        flex:0 0 25%;
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
   }
</style>
