import Vue from 'vue'
// 这样直接引用vue 引用的并不是vue.js 引用的是vue的runtime 无法编译
// vue = compiler + runtime（compiler可以编译模板）两部分组成
// vue/dist/vue 解决方案1 路径写全 2 把模板写在render函数中
import App from './App.vue'

console.log(App);
new Vue({
    // 返回什么就是什么
    // createElement返回的是虚拟DOM
    // render 函数的作用是将虚拟DOM渲染成真实DOM
    // render: function(createElement){
    //     return createElement('h1', 'hello')
    // }
    // 简写为
    // render: (h) => {
    //     h('h1', 'hello');
    // }
    // 加入vue-loader插件之后就能解析vue文件，里面可以写我们要用到的模板
    render: (h) => h(App)
}).$mount('#app');