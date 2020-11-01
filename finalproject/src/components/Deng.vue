<template>
  <el-carousel :interval="5000" arrow="always" class="d_jump" :height="imgHeight+'px'"> 
    <el-carousel-item v-for="item in imgList" :key="item.id">
     <el-row> 
       <el-col :span="24">
         <img ref="imgHeight" :src="item.idView" class="banner_img" @load="imgLoad"/>
        </el-col>
      </el-row> 
    </el-carousel-item> 
  </el-carousel>
</template>

<script>
export default {
  data() { 
    return{ 
      imgHeight:"", 
      imgList: [
          {id: 0, idView: require('../assets/picture/2018060318154826.jpg')},
          {id: 1, idView: require('../assets/picture/20180603181437814.jpg')},
          {id: 2, idView: require('../assets/picture/20180603181629697.jpg')},
          {id: 3, idView: require('../assets/picture/20180603181650270.jpg')},
          {id: 4, idView: require('../assets/picture/20180603182818103.jpg')},
          {id: 5, idView: require('../assets/picture/20180603182928480.jpg')},
          {id: 6, idView: require('../assets/picture/20180603183018551.jpg')},
        ]
    }
    that.imgHeight = '620px';
    window.onresize = function temp() { // 通过点语法获取img的height属性值 
    that.imgHeight = `${that.$refs.imgHeight['0'].height}px` }
  },
  methods:{
    imgLoad(){
      this.$nextTick(()=>{
        this.imgHeight=this.$refs.imgHeight[0].height
      })
    }
  },
  mounted(){
    this.imgLoad();
    window.addEventListener('resize',()=>{
      this.imgHeight=this.$refs.imgHeight[0].height
    this.imgLoad(); 
    },false);
  },

}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .banner_img{
    margin-left: 0%;
  }
  .el-carousel__item:nth-child(2n) {
       background-color: #d3dce6;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>