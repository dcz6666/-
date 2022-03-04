/*
 * @Author: your name
 * @Date: 2021-08-08 10:44:25
 * @LastEditTime: 2021-08-08 23:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Pikachu/src/test.js
 */
const string =`
.kin *{padding: 0; margin: 0; box-sizing: border-box;}
.kin *::before,.kin *::after{box-sizing: border-box;}
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
.nose{
    border: 10px solid red;
    border-color:red transparent transparent;
    border-bottom: none;
    width:0px;
    height: 0px;
    position: relative;
    left:50%;
    top:145px;
    margin-left:-10px;
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(15deg);
    }
    66%{
        transform: rotate(-15deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.yuan{
    position: absolute;
    width:20px;
    height: 6px;
    top:-16px;
    left:-10px;
    border-radius: 10px 10px 0 0;
    background:red;
}
.eye{
    border:2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left:50%;
    top:100px;
    margin-left: -32px;
    background:#2e2e2e;
    border-radius: 50%;
    z-index: 1;
}
.eye::before{
    content: "";
    display: block;
    width:30px;
    height:30px;
    border-radius: 50%;
    background:#fff;
    border:3px solid #000;
    position: relative;
    left:4px;
    top:2px
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    /* border:1px solid red; */
    width:200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:170px;
    margin-left:-100px;
   
}
.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;
   
}
.mouth .up .lip{
    border: 5px solid black;
    width:100px;
    height: 30px;
    border-top-color:transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left:50%;
    margin-left: -50px;
    background: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}
 .mouth .up .lip.right{
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(53px);
} 
.mouth .up .lip::before{
    content: '';
    display: block;
    width:7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}

.mouth .down{
    width:100%;
    height:180px;
    position: absolute;
    top:5px;
    overflow: hidden;
}
.mouth .down .yuan1{
    width:150px;
    height:1000px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left:-75px ;
    border: 1px solid #000;
    border-radius: 75px/300px;
    background: #9b000a;
    border:3px solid #000;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    border:1px solid green;
    width:200px;
    height: 300px;
    position: absolute;
    bottom:-155px;
    left:50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ff485f;;

}
.face{
   position: absolute;
   width:88px;
   height: 88px;
   left:50%;
   margin-left:-44px; 
   z-index: 11;
   top:200px;
   background:#ff0000;
   border-radius: 50%;
}
.face.left{
    transform: translateX(-180px);
}
.face.right{
    transform: translateX(180px);
}`



const player={
    id:undefined,
    n:1,
    time:100,
    ui:{
       demo:document.querySelector('#demo'),
       demo2:document.querySelector('#demo2')
    },
    init:()=>{
        player.ui.demo.innerText = string.substr(0,player.n);
        player.ui.demo2.innerHTML = string.substr(0,player.n);
        player.play()
        player.bindEvents()
    },
    events:{
        "#btnPause":"pause",
        "#btnPlay":"play",
        "#btnSlow":"slow",
        "#btnNormal":"normal",
        "#btnFast":"fast",
    },
    bindEvents:()=>{
       for(var key in player.events){
           if(player.events.hasOwnProperty(key)){
            const value = player.events[key]
            document.querySelector(key).onclick=player[value];
           }
       }
    },
    run:()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo.innerText = string.substr(0,player.n);
        player.ui.demo2.innerHTML = string.substr(0,player.n);   
        player.ui.demo.scrollTop=demo.scrollHeight;
    },
    play:()=>{
        player.id=setInterval(player.run,player.time);
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
   slow:()=>{ 
        player.pause()
        player.time=300
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time=100
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }
}

player.init()

