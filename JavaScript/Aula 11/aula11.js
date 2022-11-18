async function hello(){
    throw "tchau async"
    return "Olá async";
}
const promiseHello = () =>{
    return new Promise((resolve,reject) => {
        reject("tchau prmise");
        resolve("Olá promise");
    })
};
hello()
    .then(console.log)
    .catch(console.log);
promiseHello()
    .then(console.log)
    .catch(console.log)

const login = async(user,pass) =>{
    if(!user || !pass )
        throw "no user or pass";
    if(user === 'mark' && pass === '123456')
        return "login OK";
    throw "invalid user or password";
}
login("mark","123456")
    .then(console.log)
    .catch(console.log)

const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
async function printPucpr(){
    await delayedPrint('Pontificia',500);
    await delayedPrint('Catolica',500);
    await delayedPrint('do',500);
    await delayedPrint('Parana',500);
}
//printPucpr();
async function printAsyncPucPR(){
    await printPucpr();
    console.log("end");
}
//printAsyncPucPR();
const requestPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random() *4500) + 500;
        setTimeout(()=>{
            if(delay > 4000){
                reject('Erro timeout');
            }else{
                resolve(`The data from site is ${url}`);
            }
        },delay);
    });
}
async function makeRequest(){
    try {
        let data1 = await requestPromise('/alunos');
        console.log(data1);
        let data2 = await requestPromise('/professor');
        console.log(data2);
    } catch (e) {
        console.log("erro:"+e);
    }
}
makeRequest();