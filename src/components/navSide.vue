<!--左侧菜单栏组件-->
<template>
    <div :class="collapse ? 'sidebar_collapse':'sidebar'">

        <!-- start菜单栏是否折叠按钮 -->
         <div class="side">
             <span class="iconfont icon-foldzhedie" @click="collapseChange"></span>
        </div>
        <!-- end菜单栏是否折叠按钮 -->

        <!-- start菜单栏 -->
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" :collapse="collapse" :collapse-transition="false" router background-color="#4b5064" text-color="#fff">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">门店运营管理系统</span>
                </template>
                <el-menu-item-group v-for="(item,index) in subs" :key="index">
                    <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
        <!-- end菜单栏 -->
    </div>
</template>

<script>
import bus from './bus.js'   //引入公共中间件
export default {
    data(){
        return{
            collapse:false,
        	subs:[
               {
                    index:'custorm',
                    title:'客房管理'
                },
                {
                    index:'usher',
                    title:'迎宾功能'
                },
                {
                    index:'3',
                    title:'广告投放'
                },
                {
                    index:'4',
                    title:'数据监控'
                },
                {
                    index:'5',
                    title:'麻雀影库'
                },  
            ]
        }
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','')
        }
    },

    methods: {
        //点击菜单栏是否折叠按钮
        collapseChange(){
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse)
        },      
    }
}
</script>

<style>
.el-menu-vertical-demo i.iconfont{
    font-size: 20px;
    padding-right: 6px;
    vertical-align: middle;
}
</style>

<style scoped>
.el-menu{
    border: none;
}

.sidebar{
    position: fixed;
    left: 0;
    top: 50px;
    z-index: 99;
    width: 175px;
    height: 100%;
    background: #42475b;
    overflow-y: auto;
    transition: all .3s ease-in;
}
.sidebar_collapse{
    position: fixed;
    left: 0;
    top: 50px;
    z-index: 99;
    width: 65px;
    height: 100%;
    background: #42475b;
    overflow-y: auto;
    transition: all .3s ease-in;
}
.side{
    width: 100%;
    height: 30px;
    background-color: #4b5064;
    text-align: center;
    line-height: 30px;
    color: #fff;
}
.side span{
    font-size:20px
}


</style>
