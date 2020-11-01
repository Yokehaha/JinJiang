<template>
  <div class="homepage-hero-module">
      <div class="video-container">
        <div :style="fixStyle" class="filter">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div style="width: 150px;float:left;">
                <span><h1>欢迎使用</h1></span>
                <h2>锦江学院</h2>
                <h2>教务系统</h2>
              </div>
              <div style="width: 150px;float: right;">
                <img src="../assets/picture/jinjiang.jpg" style="width: 150px;float: right;">
              </div>
            </div>
            <div>
              <table>
                <tr>
                  <td><p>用户名</p></td>&nbsp;&nbsp;&nbsp;
                  <td><el-input v-model="username" placeholder="请输入用户名" clearable="true"></el-input></td>
                </tr>
                <tr>
                  <td><p>密&nbsp;&nbsp;&nbsp;码</p></td>&nbsp;&nbsp;&nbsp;
                  <td><el-input v-model="userpassword" placeholder="请输入密码" show-password></el-input></td>
                </tr>
              </table>
            </div>
            <div style="margin-top: 10px">
              <router-link to="/Home"><el-button id="LB" type="primary" round style="background-color: rgb(70, 5, 100);border-color: rgb(70, 5, 100);">登录</el-button></router-link>
            </div>
            <div style="margin-top: 15px;padding-bottom: 3px;float: bottom">
              <router-link to="/ZhuCe" style="text-decoration: none;"><el-link type="regist">注册</el-link></router-link>
              <router-link to="/WangJi" style="text-decoration: none;"><el-link type="forget" style="float: right">忘记密码</el-link></router-link>
            </div>
          </el-card>
        </div>
        <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
          <source src="../assets/video/jingjiang.mp4" type="video/mp4"/>
          浏览器不支持 video 标签，建议升级浏览器。
        </video>
        <div class="poster hidden" v-if="!vedioCanPlay">
          <img :style="fixStyle" src="../assets/picture/20180603182818103.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    beforeRouteLeave (to, from, next) {
      const answer = window.confirm("同学您好，请查询您的考试信息，并按时参加考试!");
      if (answer) {
        next();
      } else {
        next(false);
      }
    },
    name: 'Video',
    data() {
      return {
        username: '',
        userpassword: '',
        vedioCanPlay: false,
        fixStyle: ''
      }
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      }
    },
    mounted: function() {   //屏幕自适应
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
    }
  }
</script>

<style scoped>
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
 
  .video-container .poster img{
    z-index: 0;
    position: absolute;
  }
 
  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
  }
 
  .fillWidth {
    width: 100%;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin: 0 auto;
    margin-top: 9%;
    width: 350px;
    text-align: left;
  }

  #LB{
    text-align: center;
    width: 300px;
    float: center;
  }

  h1,h2{
    color: rgb(70, 5, 100);
  }

</style>