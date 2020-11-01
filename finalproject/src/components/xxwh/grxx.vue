<template>
    <div id="div1">
        <el-page-header @back="goBack" content="个人信息"></el-page-header>
        <div id="table">
            <table border="1" style="width:100%;">
                <tr>
                    <th>学号</th>
                    <td>????????</td>
                    <th>学生证号</th>
                    <td>????????</td>
                    <th>手机类型</th>
                    <td></td>
                    <td rowspan="6" colspan="2"><img src="../../assets/picture/mao.jpg" style="width:120px"></td>
                </tr>
                <tr>
                    <th>姓名</th>
                    <td>刘松</td>
                    <th>培养方向</th>
                    <td></td>
                    <th>手机号码</th>
                    <td></td>
                </tr>
                <tr>
                    <th>曾用名</th>
                    <td></td>
                    <th>专业方向</th>
                    <td></td>
                    <th>家庭邮编</th>
                    <td></td>
                </tr>
                <tr>
                    <th>性别</th>
                    <td>男</td>
                    <th>入学日期</th>
                    <td></td>
                    <th>家庭电话</th>
                    <td></td>
                </tr>
                <tr>
                    <th>出生日期</th>
                    <td>????????</td>
                    <th>毕业中学</th>
                    <td></td>
                    <th>父亲姓名</th>
                    <td></td>
                </tr>
                <tr>
                    <th>民族</th>
                    <td>汉族</td>
                    <th>宿舍号</th>
                    <td></td>
                    <th>父亲单位</th>
                    <td></td>
                </tr>
                <tr>
                    <th>籍贯</th>
                    <td></td>
                    <th>电子邮箱</th>
                    <td></td>
                    <th>父亲单位邮编</th>
                    <td></td>
                    <td><input type="file" accept="application/msword"></td>
                </tr>
                <tr>
                    <th>政治面貌</th>
                    <td>共青团员</td>
                    <th>联系电话</th>
                    <td></td>
                    <th>母亲姓名</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>来源地区</th>
                    <td>成都市都江堰市</td>
                    <th>邮政编码</th>
                    <td></td>
                    <th>母亲单位</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>来源省</th>
                    <td></td>
                    <th>准考证号</th>
                    <td>????????????????</td>
                    <th>母亲单位邮编</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>出生地</th>
                    <td></td>
                    <th>身份证号</th>
                    <td>????????????????</td>
                    <th>父亲单位电话或手机</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>健康状况</th>
                    <td></td>
                    <th>学历层次</th>
                    <td>本科</td>
                    <th>母亲单位电话或手机</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>学院</th>
                    <td>东坡学院</td>
                    <th>港澳台码</th>
                    <td></td>
                    <th>家庭住址</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>系</th>
                    <td></td>
                    <th>报到号</th>
                    <td></td>
                    <th>家庭所在地（/省/县）</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>专业名称</th>
                    <td>软件工程</td>
                    <th>是否高水平运动员</th>
                    <td></td>
                    <td rowspan="4">备注</td>
                    <td rowspan="4" colspan="2"></td>
                </tr>
                <tr>
                    <th>教学班名称</th>
                    <td></td>
                    <th>英语等级</th>
                    <td></td>
                </tr>
                <tr>
                    <th>行政班</th>
                    <td>理工科实验班(软)17(3)</td>
                    <th>英语成绩</th>
                    <td></td>
                </tr>
                <tr>
                    <th>学制</th>
                    <td>4</td>
                    <th>录检表页码</th>
                    <td></td>
                </tr>
                <tr>
                    <th>学习年限</th>
                    <td></td>
                    <th>特长</th>
                    <td></td>
                    <td colspan="2"></td>
                    <td></td>
                </tr>
                <tr>
                    <th>学籍状态</th>
                    <td>有</td>
                    <th>入党(团)时间</th>
                    <td></td>
                    <td colspan="2"></td>
                    <td></td>
                </tr>
                <tr>
                    <th>当前所在级</th>
                    <td>2017</td>
                    <th>火车终点站</th>
                    <td></td>
                    <td colspan="2">证明人</td>
                    <td></td>
                </tr>
                <tr>
                    <th>考生号</th>
                    <td></td>
                    <th>学习形式</th>
                    <td></td>
                    <td colspan="2">姓名拼音</td>
                    <td></td>
                </tr>
                <tr>
                    <td colspan="7">&nbsp;</td>
                </tr>
            </table>
            <el-button type="text" @click="open">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
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
        background-color: rgb(238, 238, 238);
    }
    th{
        width: 10%;
    }
    td{
        width: 15%;
    }
</style>