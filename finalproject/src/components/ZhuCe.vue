<template>
  <div style="background-color:rgb(46, 40, 40);">
    <h2 style="color:white;">vue 动态组件实现tab切换加载不同的小模块</h2>
    <div>
      <a style="color:white;" href="javascript:void(0)" @click="tabChange(child1)">全美</a>
      <a style="color:white;" href="javascript:void(0)" @click="tabChange(child2)">西部</a>
      <a style="color:white;" href="javascript:void(0)" @click="tabChange(child3)">东部</a>
    </div>
    <!--
      动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。
    -->
    <div :is="currentView" class="on"></div>
  </div>
</template>

<script>
 // 导入子组件
 import child1 from '@/components/child1';
 import child2 from '@/components/child2';
 import child3 from '@/components/child3';

 export default {
   data () {
     return {
       child1: 'child1',
       child2: 'child2',
       child3: 'child3',
       currentView: 'child1' // 默认选中第一项
     };
   },
   methods: {
     tabChange(tabItem) {
       this.currentView = tabItem;
     }
   },
   components: {
     child1,
     child2,
     child3
   }
 };
</script>

<style>
  
</style>