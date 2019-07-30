function buyPack() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.5){
                resolve('yes');
            }else{
                reject('no');
            }
        }, Math.random()*1000);
    });
}

buyPack().then((data)=>{
    console.log(data);
}, (err)=>{
    console.log(err);
});