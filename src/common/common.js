/**
 * 创建公共js文件
 */
const urlArr=[
   'https://api.bzqll.com/music/tencent/search?',
];

 /**
  * 1. 音乐搜索:type=song
    2. 专辑搜索:type=album
    3. 歌单搜索:type=list (QQ音乐限制歌单每页最多查询50条)
    4. MV搜索:type=mv
    5. 用户搜索:type=user
    6. 歌词搜索:type=lrc
  * @param {type} 查询类别
  * @param {s}  关键字
  * @param {limit}  返回的数据
  * @param {offset} 默认返回的页数
  * @param {mess} 用来接受内容
  * https://api.bzqll.com/music/tencent/search?key=579621905&s=%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83&limit=100&offset=0&type=song
   */
    export  function getMusic(type,s,mess) {
        wx.request({
          url: urlArr[0], //开发者服务器接口地址",
          data: { //请求的参数",
              key: '579621905',
              s:s,
              type:type,
              limit:100,
              offset:0,
          },
          method: 'GET',
          dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
            //   console.log(res);
              mess=res.data.data;
              console.log(mess)
              return mess;
          },
          fail: (err) => {
            //   console.log(err);
              return err;
          },
          complete: () => {}
        });
    };

    export function xd(params) {
        return 1;
    }