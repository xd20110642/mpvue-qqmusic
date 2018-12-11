<template>
    <div class="play">
        <div class="top">
            <img :src="list[0].pic" alt="">
        </div>
        <div class="Box">
            <div class="song-name">
                <p>{{list[0].name}}</p>
                <p>{{list[0].singer}}</p>
            </div>
            <div class="song-play">
                <button class="btn" @click="play">{{mess}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
             list:[
              {
                  id:"000JKutf0nVaSU",
                  lrc:"https://api.bzqll.com/music/tencent/lrc?id=000JKutf0nVaSU&key=579621905",
                  name:"Undefined",
                  pic:"https://api.bzqll.com/music/tencent/pic?id=000JKutf0nVaSU&key=579621905",
                  singer:"初音ミク",
                  url:"https://api.bzqll.com/music/tencent/url?id=000JKutf0nVaSU&key=579621905"
              }
          ],
          ao:null,
          mess:'点击播放',
          keyWorld:null
        }
    },
    // 小程序生命周期 
    onLoad(){
        // 获取传递过来的参数
       
        this.keyWorld=this.$root.$mp.query.key;
        console.log(this.$root.$mp.query.key)
        console.log(this.keyWorld)
        // 创建音乐播放器
        this.ao=wx.createInnerAudioContext();
       
    },
    onReady(){
         // 绑定播放资源
        this.ao.src=this.list[0].url;
        // 进入自动播放
        this.ao.autoplay=false;
        // 是否跟随系统静音
        this.ao.obeyMuteSwitch=true;
    },
    //
    methods:{
        play(){
            // 判断当前状态
            let status=this.ao.paused;
            console.log(status);
            if(status){
                this.ao.play();
                 this.mess="暂停播放";
                console.log('我是播放')
            }else{
                 this.ao.pause();
                 this.mess="继续播放";
                 console.log('我是暂停')
            }
           
        }
    }
}
</script>

<style scoped>
button::after{
border:none;
}
input{
outline:none;
border:none;
list-style: none;
}
    .play{
        width: 100%;
        height: 100%;
    }
    .top{
        width: 100%;
        /* height: 50px; */
    }
    .top img{
        width: 100%;
        /* height: 100%; */
    }
    .Box{
        width: 80%;
        margin: auto;
        text-align: center;
        /* border: 0.5px solid; */
    }
    .Box .song-name{
        margin: 10px auto;
        padding: 0.5px;
    }
    .Box .song-name p{
        margin: 12px auto;
        color: red;
    }
</style>
