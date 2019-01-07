<!-- 头部导航 -->
<template>
	<div class="header">
		 <div class="logo_title">
            <img src="../../static/img/img-0d8a4fa603c582d66f68ed10291f376c.jpg" alt="">
            <p>麻雀点播系统</p>
        </div>
        <div class="func_downlaod">
            <div class="msg">
                <i class="iconfont icon-xiaoxi"></i>
                <p class="block">消息</p>
            </div>
            <div class="feed">
                <i class="iconfont icon-changjianwenti"></i>
                <p class="block">反馈</p>
            </div>
            <div class="question">
                <i class="iconfont icon-changjianwenti1"></i>
                <p class="block">常见问题</p>
            </div>
            <div class="line">|</div>
            
            <el-dropdown >
                <div class="personnal">
                    <img src="../../static/img/100.jpg">
                    <p class="nick">你好，18328755703</p> 
                    <i class="iconfont icon-xiangxia"></i> 
                </div>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.el-dropdown-menu__item{
    width:100px;
    text-align: center
}
</style>

<style scoped>
.header{
    width:100%;
    height: 50px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: #4b5064;
    padding:0 30px;
    box-sizing:border-box;
}
.logo_title,.func_downlaod{
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.logo_title{
    width:10%;
}
.func_downlaod{
    width:30%;
}
.logo_title p,.iconfont,.nick,.line,.block{
    color:#fff
}
.logo_title img{
    width:50px;
    height: 50px;
    border-radius:50px;
}
.line{
    font-size:30px;
}
.personnal{
    width:200px;
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.personnal img{
    width:30px;
    height: 30px;
    border-radius:50px;
}
.block{
    font-size:12px;
}
</style>