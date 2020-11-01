<template>
  <div id="home">
    <el-container>
      <el-header class="header">
        <v_header></v_header>
      </el-header>
      <el-main class="main">
        <v_main></v_main>
      </el-main>
      <el-footer class="footer">
        <v_footer></v_footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Main from '@/components/Main'

export default {
  
  name: 'home',
  components: {
    'v_header': Header,
    'v_footer': Footer,
    'v_main': Main
  }
}
</script>

<style scoped>
  .header{
    line-height: 60px;
    text-decoration-color: white;
  }
  .main{
    height: 680px;
  }
  .footer{
    line-height: 60px;
    text-decoration-color: white;
  }
</style>