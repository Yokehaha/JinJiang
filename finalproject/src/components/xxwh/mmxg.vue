<template>
    <div class="div1">
        <el-page-header @back="goBack" content="密码修改"></el-page-header>
        <div class="div2">
            <table border="1">
                <tr>
                    <th>用户名</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>输入原密码</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <th>输入新密码</th>
                    <td><input type="password"></td>
                </tr>
                <tr>
                    <th>确认新密码</th>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center;"><el-button type="primary" @click="open">提交</el-button></td>
                </tr>
                <tr style="text-align: left;">
                    <td colspan="2">
                        <dl>
                            <dt>
                                <p>登录密码修改规则说明：</p>
                            </dt>
                            <dt>
                                <ol>
                                    <li>密码长度为6~16位，至少包含数字、字母、特殊符号中的两类，字母区分大小写</li>
                                    <li>密码不可与账号相同</li>
                                    <li>密码不可以与身份证号后几位相同</li>
                                </ol>
                            </dt>
                        </dl>
                    </td>
                </tr>
            </table>
        </div>
    </div>  
</template>

<script>
export default {
    methods: {
      goBack() {
        this.$router.back()
      },
      open() {
        this.$alert('提交成功', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>
    *{
        margin: 0 auto;
    }
    td{
        text-align: left;
    }
    p,li,th{
        color: black;
    }
    .div1 {
        width:100%;
        height:800px;
        position:relative;
        background-image: url('../../assets/picture/2018060318154826.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat
    }
    .div2 {
        width:600px;
        height:270px;
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background-color:white;
    }
</style>