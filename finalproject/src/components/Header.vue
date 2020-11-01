<template>
    <div id="menu_style">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgb(70, 5, 100)"
            text-color="#fff"
            active-text-color="#ffd04b">

            <!-- 子菜单: 返回首页 -->
            <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title">返回首页</span>
            </el-menu-item>

            <!-- 子菜单：网上选课 -->
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>网上选课</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="11" >专业预选课程</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="12" >全校性选修课</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="13" >体育选课</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="14" >重修或补修选课</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：活动报名 -->
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-flag"></i>
                    <span>活动报名</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="21">学科竞赛</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="22">网上报名</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：教学质量评价 -->
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-comment"></i>
                    <span>教学质量评价</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="31">班主任评教</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="32">学生评教</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：信息维护 -->
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>信息维护</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/xxwh/grxx" style="text-decoration: none;"><el-menu-item index="41">个人信息</el-menu-item></router-link>
                </el-menu-item-group>
                <el-menu-item-group>
                    <router-link to="/xxwh/mmxg" style="text-decoration: none;"><el-menu-item index="42">密码修改</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：信息查询 -->
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-search"></i>
                    <span>信息查询</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="51">教师个人课表查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="52">学生个人课表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="53">学生考试查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="54">成绩查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="55">等级考试查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="56">培养计划</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="57">转专业查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="58">教学信息员</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="59">学生选课情况查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="510">学生补考查询</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：毕业设计 -->
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-s-opportunity"></i>
                    <span>毕业设计</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="61">查看公告</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="62">学生选题</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="63">学生查看提交周志</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="64">学生信息维护</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="65">学生查看提交资料</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="66">学生毕业设计评教</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：班主任评教 -->
            <el-submenu index="7">
                <template slot="title">
                    <i class="el-icon-s-check"></i>
                    <span>班主任评教</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="71">班主任评教</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：公用信息 -->
            <el-submenu index="8">
                <template slot="title">
                    <i class="el-icon-share"></i>
                    <span>公用信息</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="81">教务公告</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="82">机构设置</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="83">管理文件</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="84">培养计划</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="85">课程介绍</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <el-menu-item index="86">教学论坛</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <!-- 子菜单：用户退出 -->
            <el-submenu index="9">
                <template slot="title">
                    <img src="../assets/picture/yonghu.jpg" width="30px">
                </template>
                <el-menu-item-group>
                    <router-link to="/yh/xc" style="text-decoration: none;"><el-menu-item index="91">相册</el-menu-item></router-link>
                </el-menu-item-group>
                <el-menu-item-group>
                    <router-link to="/Login"><el-menu-item index="92">退出</el-menu-item></router-link>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
    *{
        text-align: center;
    }
</style>