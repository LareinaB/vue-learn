// 发布 emit 订阅 on
function Person() {
    this._events = {};
}
Person.prototype.on = function(eventName, callback){
    if(this._events[eventName]){ // 不是第一次
        this._events[eventName].push(callback)
    }else{
        this._events[eventName] = [callback];
    }
};
Person.prototype.emit = function(eventName, ...args){
    if(this._events[eventName]){
        this._events[eventName].forEach(cb => cb(...args));
    }
};
let p = new Person();
let eat = (who) => {
    console.log(who + '吃');
};
let work = (who) => {
    console.log(who + '工作');
};
let drink = (who) => {
    console.log(who + '喝');
};


p.on('生存', eat);  // {生存: [eat]}
p.on('生存', work); // {生存: [eat, work]}
p.on('生存', drink); // {生存: [eat, work, drink]}

p.emit('生存', '我', '他');