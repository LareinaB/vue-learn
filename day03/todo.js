// 1、将数据添加到页面上
// 2、 敲回车时添加新数据(需要加入isSelected属性)
// 3、删除功能
// 4、计算没被选中的个数

let vm = new Vue({
    el: '#app',
    directives: {
        // 当cur==todo（点击当前输入框）时，获取焦点
        focus(el, bindings){
            if(bindings.value){
                el.focus();  // 获取焦点
            }
        }
    },
    data: {
        todos: [
            {isSelected: false, title: '碎觉'},
            {isSelected: false, title: '恰饭'}
        ],
        title: '',
        cur: '',
        hash: ''
    },
    created() {
        // localStorage中存储了数据就用它，没有的话就用默认的
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
        // 监控hash值的变化 如果页面有hash 重新刷新也要获取hash值
        this.hash = window.location.hash.slice(2) || 'all';
        window.addEventListener('hashchange', ()=>{
            // hash值变化，重新操作记录数据
            this.hash = window.location.hash.slice(2);
        }, false);
    },
    watch: {
        todos: { // 默认只监控一层的数据变化
            handler(){
                // localStorage默认存的是字符串
                localStorage.setItem('data', JSON.stringify(this.todos));
            },
            deep: true //表示深度
        }
    },
    methods: {
        add(){
            // keydown/keyup 差一个单词 keydown的时候内容没有进入到输入框内
            this.todos.push({
                isSelected: false,
                title: this.title
            });
            this.title = '';
        },
        remove(todo){
            this.todos = this.todos.filter((item) => item !== todo)
        },
        remember(todo){
            this.cur = todo
        },
        cancel(){
            this.cur = ''
        },
    },
    computed: {
        count(){
            return this.todos.filter(item => !item.isSelected).length
        },
        filterTodos(){
            if(this.hash === 'all'){
                return this.todos;
            }
            if(this.hash === 'finished'){
                return this.todos.filter(item => item.isSelected);
            }
            if(this.hash === 'unfinished'){
                return this.todos.filter(item => !item.isSelected);
            }
            return this.todos;
        }
    }
});



