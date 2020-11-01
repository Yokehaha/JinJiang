<template>
    <div class="content">
      <h1>Viewer图片预览插件</h1>
      <div>
        <viewer :images="imgs">
            <img v-for="src in imgs" :src="src.url" :key="src.title">
        </viewer>
      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: [
       {
          url: '../assets/nba/76ERS.jpg',
          title: '76人'
        },
        {
          url: '../assets/nba/BLAZERS.jpg',
          title: '图片2'
        }
      ]
    }
  },
}
</script>