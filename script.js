


var tl = gsap.timeline();

tl.from("#main-text", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#main-text').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#sup", {
  duration: 1,
  opacity: 0,
  y: 200,
})
tl.from("#s11", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s11').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#s12", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s12').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#s13", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s13').textillate({ in: { effect: 'fadeInUp' } });
  }
})

tl.from("#sd1", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#sd1').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#sd2", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#sd2').textillate({ in: { effect: 'fadeInUp' } });
  }
});
tl.from("#pg1-img", {
  duration: 1,
  y: 1000,
});


















gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

/*------------------------------------------------------------------------------------------------------------*/


const menu = document.querySelector("#menu");
flag=0;

menu.addEventListener("mouseover", function(){
  document.getElementById("menu").style.backgroundColor = "#d5ccc320";
})
menu.addEventListener("mouseout", function(){
  document.getElementById("menu").style.backgroundColor = "#d5ccc300";
})

menu.addEventListener("click", function(){
  if(flag===0){
    //console.log("click");
    document.getElementById("fullscreen-nav").style.transform = "translateY(0%)";


    document.getElementById("line1").style.backgroundColor = "#232025";
    document.getElementById("line1").style.transform = "rotate(225deg)";
    document.getElementById("line1").style.top = "53%";



    document.getElementById("line2").style.backgroundColor = "#232025";
    document.getElementById("line2").style.transform = "rotate(135deg)";
    document.getElementById("line2").style.width = "30px";
    document.getElementById("line2").style.top = "47%";



    document.getElementById("tala").style.color = "#232025";
    document.getElementById("fullscreen-nav").style.position = "fixed";
    flag=1;
  }
  else{
    //console.log("unclick");
    document.getElementById("fullscreen-nav").style.transform = "translateY(-100%)";


    document.getElementById("line1").style.backgroundColor = "#d3ccc5";
    document.getElementById("line1").style.transform = "rotate(0deg)";
    document.getElementById("line1").style.top = "33%";


    document.getElementById("line2").style.backgroundColor = "#d3ccc5";
    document.getElementById("line2").style.transform = "rotate(0deg)";
    document.getElementById("line2").style.width = "22px";
    document.getElementById("line2").style.top = "57%";


    document.getElementById("tala").style.color = "#d3ccc5";
    document.getElementById("fullscreen-nav").style.position = "absolute";
    flag=0;
  }
})

const p4e1 = document.querySelector("#b1");
p4e1.addEventListener('mouseover', function(){
  document.getElementById("p4a1").style.opacity = "1";
  document.getElementById("p4f1").style.color = "#232025";
  document.getElementById("p4f1").style.textShadow = "0 0 3px #d5ccc3, 0 0 5px #ffd84a";
})
p4e1.addEventListener('mouseout', function(){
  document.getElementById("p4a1").style.opacity = "0";
  document.getElementById("p4f1").style.color = "#d3ccc5";
  document.getElementById("p4f1").style.textShadow = "none";
})

const p4e2 = document.querySelector("#b2");
p4e2.addEventListener('mouseover', function(){
  document.getElementById("p4a2").style.opacity = "1";
  document.getElementById("p4f2").style.color = "#232025";
  document.getElementById("p4f2").style.textShadow = "0 0 3px #d5ccc3, 0 0 5px #fbff00";
})
p4e2.addEventListener('mouseout', function(){
  document.getElementById("p4a2").style.opacity = "0";
  document.getElementById("p4f2").style.color = "#d3ccc5";
  document.getElementById("p4f2").style.textShadow = "none";
})

const p4e3 = document.querySelector("#b3");
p4e3.addEventListener('mouseover', function(){
  document.getElementById("p4a3").style.opacity = "1";
  document.getElementById("p4f3").style.color = "#232025";
  document.getElementById("p4f3").style.textShadow = "0 0 3px #d5ccc3, 0 0 5px #00fffb";
})
p4e3.addEventListener('mouseout', function(){
  document.getElementById("p4a3").style.opacity = "0";
  document.getElementById("p4f3").style.color = "#d3ccc5";
  document.getElementById("p4f3").style.textShadow = "none";
})

const p4e4 = document.querySelector("#b4");
p4e4.addEventListener('mouseover', function(){
  document.getElementById("p4a4").style.opacity = "1";
  document.getElementById("p4f4").style.color = "#232025";
  document.getElementById("p4f4").style.textShadow = "0 0 3px #d5ccc3, 0 0 5px #d914c9";
})
p4e4.addEventListener('mouseout', function(){
  document.getElementById("p4a4").style.opacity = "0";
  document.getElementById("p4f4").style.color = "#d3ccc5";
  document.getElementById("p4f4").style.textShadow = "none";
})

const p4e5 = document.querySelector("#b5");
p4e5.addEventListener('mouseover', function(){
  document.getElementById("p4a5").style.opacity = "1";
  document.getElementById("p4f5").style.color = "#232025";
  document.getElementById("p4f5").style.textShadow = "0 0 3px #d5ccc3, 0 0 5px #ffffff";
})
p4e5.addEventListener('mouseout', function(){
  document.getElementById("p4a5").style.opacity = "0";
  document.getElementById("p4f5").style.color = "#d3ccc5";
  document.getElementById("p4f5").style.textShadow = "none";
})

/*----------------------------------------------------------------------------------*/

const cur41 = document.querySelector("#b1");
const cur42 = document.querySelector("#b2");
const cur43 = document.querySelector("#b3");
const cur44 = document.querySelector("#b4");
const cur45 = document.querySelector("#b5");

//-----------------------
cur41.addEventListener("mousemove", e => {
  console.log(e);
  document.getElementById('ma').style.left = e.clientX + 'px';
  document.getElementById('ma').style.top = e.clientY + 'px';
})
cur42.addEventListener("mousemove", e => {
  //console.log(e);
  document.getElementById('ba').style.left = e.clientX + 'px';
  document.getElementById('ba').style.top = e.clientY + 'px';
})
cur43.addEventListener("mousemove", e => {
  //console.log(e);
  document.getElementById('pa').style.left = e.clientX + 'px';
  document.getElementById('pa').style.top = e.clientY + 'px';
})
cur44.addEventListener("mousemove", e => {
  //console.log(e);
  document.getElementById('pt').style.left = e.clientX + 'px';
  document.getElementById('pt').style.top = e.clientY + 'px';
})
cur45.addEventListener("mousemove", e => {
  //console.log(e);
  //-------
  document.getElementById('ma').style.left = e.clientX + 'px';
  document.getElementById('ma').style.top = e.clientY + 'px';
  //-------
  document.getElementById('ba').style.left = e.clientX + 'px';
  document.getElementById('ba').style.top = e.clientY + 'px';
  //-------
  document.getElementById('pa').style.left = e.clientX + 'px';
  document.getElementById('pa').style.top = e.clientY + 'px';
  //-------
  document.getElementById('pt').style.left = e.clientX + 'px';
  document.getElementById('pt').style.top = e.clientY + 'px';
})

//-----------------------

cur41.addEventListener("mouseover", function(){
  document.getElementById("ma").style.opacity = "1";

})
cur42.addEventListener("mouseover", function(){
  document.getElementById("ba").style.opacity = "1";
  
})
cur43.addEventListener("mouseover", function(){
  document.getElementById("pa").style.opacity = "1";
  
})
cur44.addEventListener("mouseover", function(){
  document.getElementById("pt").style.opacity = "1";
  
})
cur45.addEventListener("mouseover", function(){
  document.getElementById("ma").style.opacity = "1";
  document.getElementById("ma").style.zIndex = "-1";
  document.getElementById("ba").style.opacity = "1";
  document.getElementById("ba").style.zIndex = "-2";
  document.getElementById('ba').style.transform = "translate(-50%, -50%) rotate(22deg)"
  document.getElementById("pa").style.opacity = "1";
  document.getElementById("pa").style.zIndex = "-3";
  document.getElementById('pa').style.transform = "translate(-50%, -50%) rotate(29deg)"
  document.getElementById("pt").style.opacity = "1";
  document.getElementById("pt").style.zIndex = "-4";
  document.getElementById('pt').style.transform = "translate(-50%, -50%) rotate(36deg)"
})
//-----------------------
cur41.addEventListener("mouseout", function(){
  document.getElementById("ma").style.opacity = "0";
})
cur42.addEventListener("mouseout", function(){
  document.getElementById("ba").style.opacity = "0";
})
cur43.addEventListener("mouseout", function(){
  document.getElementById("pa").style.opacity = "0";
})
cur44.addEventListener("mouseout", function(){
  document.getElementById("pt").style.opacity = "0";
})
cur45.addEventListener("mouseout", function(){
  document.getElementById("ma").style.opacity = "0";
  document.getElementById("ba").style.opacity = "0";
  document.getElementById("pa").style.opacity = "0";
  document.getElementById("pt").style.opacity = "0";
})

/*------------------------------------------------------------------------------------------------------------*/

const image1 = document.querySelector("#img111");
const image2 = document.querySelector("#img112");
const image3 = document.querySelector("#img113");
const image4 = document.querySelector("#img114");
const image5 = document.querySelector("#img115");
const image6 = document.querySelector("#img116");
const image7 = document.querySelector("#img117");
const image8 = document.querySelector("#img118");

var picpage = document.querySelector("#picpage")


//toggle

function dissall(){
  document.getElementById("barp1").style.opacity = "1"
  document.getElementById("barp2").style.opacity = "1"
  document.getElementById("barp3").style.opacity = "1"
  document.getElementById("barp4").style.opacity = "1"
  document.getElementById("barp5").style.opacity = "1"
  document.getElementById("barp6").style.opacity = "1"
  document.getElementById("barp7").style.opacity = "1"
  document.getElementById("barp8").style.opacity = "1"
}

//-------------------------------------------------------------------------------------
var curban = document.querySelector("#yes")
var curchoc = document.querySelector("#no")

//-----------
curban.addEventListener("mousemove", e => {
  document.getElementById('bangif').style.left = e.clientX + 'px';
  document.getElementById('bangif').style.top = e.clientY + 'px';
})
curchoc.addEventListener("mousemove", e => {
  document.getElementById('chocgif').style.left = e.clientX + 'px';
  document.getElementById('chocgif').style.top = e.clientY + 'px';
})
//------------
curban.addEventListener("mouseover", function(){
  document.getElementById("bangif").style.opacity = "1";
})
curchoc.addEventListener("mouseover", function(){
  document.getElementById("chocgif").style.opacity = "1";
})
//------------
curban.addEventListener("mouseout", function(){
  document.getElementById("bangif").style.opacity = "0";
})
curchoc.addEventListener("mouseout", function(){
  document.getElementById("chocgif").style.opacity = "0";
})




//--------------------------------------------------------------------------------------

//close button
const cross = document.querySelector("#icon")
cross.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "-10"
  document.getElementById("picpage").style.opacity = "0"
  document.getElementById("barp1").style.opacity = "1"
  document.getElementById("barp2").style.opacity = "1"
  document.getElementById("barp3").style.opacity = "1"
  document.getElementById("barp4").style.opacity = "1"
  document.getElementById("barp5").style.opacity = "1"
  document.getElementById("barp6").style.opacity = "1"
  document.getElementById("barp7").style.opacity = "1"
  document.getElementById("barp8").style.opacity = "1"
})
//define barpics
var bjs1 = document.getElementById("barp1")
var bjs2 = document.getElementById("barp2")
var bjs3 = document.getElementById("barp3")
var bjs4 = document.getElementById("barp4")
var bjs5 = document.getElementById("barp5")
var bjs6 = document.getElementById("barp6")
var bjs7 = document.getElementById("barp7")
var bjs8 = document.getElementById("barp8")


/*------------------------------------*/
const image = document.querySelector(".img11");


var picc = 0;
image1.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d808794c11d2_258545216_373329417862623_5667998762889005982_n.jpeg"
  document.getElementById("barp1").style.opacity = "0.5"
  picc = 1;
})
image2.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d803bc4c11d8_258164588_405327827908853_5254870529924894724_n.jpeg"
  document.getElementById("barp2").style.opacity = "0.5"
  picc = 2;
})
image3.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d862534c11d5_257846215_909138396401562_5629436302749554869_n.jpeg"
  document.getElementById("barp5").style.opacity = "0.5"
  picc = 3;
})
image4.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d808794c11d2_258545216_373329417862623_5667998762889005982_n.jpeg"
  document.getElementById("barp8").style.opacity = "0.5"
  picc = 4;
})
image5.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d805e54c11d3_257560439_182062434133114_1286763224034538490_n.jpeg"
  document.getElementById("barp6").style.opacity = "0.5"
  picc = 5;
})
image6.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d87b734c11db_258533108_4650341658344955_4386360650422615506_n.jpeg"
  document.getElementById("barp3").style.opacity = "0.5"
  picc = 6;
})
image7.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d850a44c11d4_258744419_375101100971664_3362901685866258954_n.jpeg"
  document.getElementById("barp4").style.opacity = "0.5"
  picc = 7;
})
image8.addEventListener("click", function(){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d860714c11d6_258128029_219888343480612_5162175675016529746_n.jpeg"
  document.getElementById("barp7").style.opacity = "0.5"
  picc = 8;
})
/*------------------------------------------------------------------------------------------------------------*/
bjs1.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d808794c11d2_258545216_373329417862623_5667998762889005982_n.jpeg"
  document.getElementById("barp1").style.opacity = "0.5"
  picc = 1;
  console.log(picc);

})
bjs2.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d803bc4c11d8_258164588_405327827908853_5254870529924894724_n.jpeg"
  document.getElementById("barp2").style.opacity = "0.5"
  picc = 2;
  console.log(picc);
})
bjs5.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d862534c11d5_257846215_909138396401562_5629436302749554869_n.jpeg"
  document.getElementById("barp5").style.opacity = "0.5"
  picc = 5;
  console.log(picc);
})
bjs8.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d808794c11d2_258545216_373329417862623_5667998762889005982_n.jpeg"
  document.getElementById("barp8").style.opacity = "0.5"
  picc = 8;
  console.log(picc);
})
bjs6.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d805e54c11d3_257560439_182062434133114_1286763224034538490_n.jpeg"
  document.getElementById("barp6").style.opacity = "0.5"
  picc = 6;
  console.log(picc);
})
bjs3.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d87b734c11db_258533108_4650341658344955_4386360650422615506_n.jpeg"
  document.getElementById("barp3").style.opacity = "0.5"
  picc = 3;
  console.log(picc);
})
bjs4.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d850a44c11d4_258744419_375101100971664_3362901685866258954_n.jpeg"
  document.getElementById("barp4").style.opacity = "0.5"
  picc = 4;
  console.log(picc);
})
bjs7.addEventListener("click", function(){
  dissall()
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d860714c11d6_258128029_219888343480612_5162175675016529746_n.jpeg"
  document.getElementById("barp7").style.opacity = "0.5"
  picc = 7;
  console.log(picc);
})
/*------------------------------------------------------------------------------------------------------------*/
//barpics
function displayFunction(picc){
  document.getElementById("picpage").style.zIndex = "100000"
  document.getElementById("picpage").style.opacity = "1"
  document.getElementById("mainpiccy").src = "https://uploads-ssl.webflow.com/61defec4a021d8b83a4c11cf/61defec4a021d860714c11d6_258128029_219888343480612_5162175675016529746_n.jpeg"
  document.getElementById("barp7").style.opacity = "0.5"
}

var leftArrow = document.getElementById('lar')

leftArrow.addEventListener("click", function(elem){
  console.log(picc);
  picc = picc - 1;
  if(picc === 0){
    picc = 8;
  }
});
//--------------------------------------------------------------------------------------------------------------------

gsap.from('#nav', {
  duration: 1,
  opacity: 0,
  y: 50,
})

var tl = gsap.timeline();

tl.from("#main-text", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#main-text').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#sup", {
  duration: 1,
  opacity: 0,
  y: 200,
})
tl.from("#s11", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s11').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#s12", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s12').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#s13", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#s13').textillate({ in: { effect: 'fadeInUp' } });
  }
})

tl.from("#sd1", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#sd1').textillate({ in: { effect: 'fadeInUp' } });
  }
})
tl.from("#sd2", {
  duration: 0.1,
  opacity: 0,
  onstart: function(){
    $('#sd2').textillate({ in: { effect: 'fadeInUp' } });
  }
});
tl.from("#img1", {
  duration: 1,
  y: 1000,
});

gsap.from('#page2-img', {
  scrollTrigger: {
    trigger: '#page2-img',
    scroller: '#main',
    start: "-204% top",
    end: "-34% bottom",
    scrub: true,
  },
  scale: 0.9,
})

//------------------------------------------------------------------

var tl2 = gsap.timeline();
tl2.from(".pg3words", {
  scrollTrigger: {
    trigger: '.pg3words',
    scroller: '#main',
    markers: false,
    start: 'top 80%'
  },
  duration: 1,
  y: 200,
  opacity: 0,
  stagger: 0.1,
})
/*--------------------------------------------------------------------------*/
gsap.from('#dline', {
  scrollTrigger: {
    trigger: '#dline',
    scroller: '#main',
    markers: false,
    start: 'top 90%',
    toggleActions: 'restart pause restart pause'
  },
  duration: 1,
  ease: "power4.out",
  width: 0,
})
gsap.from('.upli', {
  scrollTrigger: {
    trigger: '.upli',
    scroller: '#main',
    markers: false,
    start: 'top 90%',
    toggleActions: 'restart none none pause'
  },
  y: 30,
  duration: 0.5,
})
gsap.from('.fr1', {
  scrollTrigger: {
    trigger: '.fr1',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset',
  },
  duration: 0.5,
  y: 100,
  opacity: 0,

})
gsap.from('.fr2', {
  scrollTrigger: {
    trigger: '.fr2',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset',
  },
  duration: 0.5,
  y: 100,
  opacity: 0,

})
gsap.from('.fr3', {
  scrollTrigger: {
    trigger: '.fr3',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset',
  },
  duration: 0.5,
  y: 100,
  opacity: 0,

})
gsap.from('.fr4', {
  scrollTrigger: {
    trigger: '.fr4',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset',
  },
  duration: 0.5,
  y: 100,
  opacity: 0,

})
gsap.from('.fr5', {
  scrollTrigger: {
    trigger: '.fr5',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset',
  },
  duration: 0.5,
  y: 100,
  opacity: 0,

})
gsap.from('#page5>h1', {
  scrollTrigger: {
    trigger: '#page5>h1',
    scroller: '#main',
    markers: false,
    start: 'top 80%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 100,
  opacity: 0,
  stagger: 0.2,
})
var tl2 = gsap.timeline();
gsap.from('#rect1>h1', {
  scrollTrigger: {
    trigger: '#rect1>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 60,
  opacity: 0,
  stagger: 0.2,
})
gsap.from('#rect2>h1', {
  scrollTrigger: {
    trigger: '#rect2>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 60,
  opacity: 0,
  stagger: 0.2,
})
gsap.from('#dottr1', {
  scrollTrigger: {
    trigger: '#dottr1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reverse reset'
  },
  duration: 0.5,
  width: 0,
})
gsap.from('#dottr2', {
  scrollTrigger: {
    trigger: '#dottr2',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reverse reset'
  },
  duration: 0.5,
  height: 0,
})

/*----------------------------------------------------------------------*/

gsap.from('#page6>h1:nth-child(1)', {
  scrollTrigger: {
    trigger: '#page6>h1:nth-child(1)',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#page6>h1:nth-child(2)', {
  scrollTrigger: {
    trigger: '#page6>h1:nth-child(2)',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#page6>h1:nth-child(3)', {
  scrollTrigger: {
    trigger: '#page6>h1:nth-child(3)',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})

gsap.to('#smileimg', {
  rotate: 360,
  duration: 3,
  repeat: -1,
  ease: 'none',
})

/*---------------------------------------------------------------------*/

gsap.from('#page7>h1', {
  scrollTrigger: {
    trigger: '#page7>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})

/*---------------------------------------------------------------------*/

gsap.from('#tag1', {
  scrollTrigger: {
    trigger: '#tag1',
    scroller: '#main',
    toggleActions: 'restart pause reset reset',
    scrub: true,
  },
  x: -400,
  duration: 8,
})
gsap.from('#tag3', {
  scrollTrigger: {
    trigger: '#tag3',
    scroller: '#main',
    toggleActions: 'restart pause reset reset',
    scrub: true,
  },
  x: -400,
  duration: 8,
})
gsap.from('#tag5', {
  scrollTrigger: {
    trigger: '#tag5',
    scroller: '#main',
    toggleActions: 'restart pause reset reset',
    scrub: true,
  },
  x: -400,
  duration: 8,
})
/*-------------------------------------*/
gsap.from('#tag2', {
  scrollTrigger: {
    trigger: '#tag2',
    scroller: '#main',
    toggleActions: 'restart pause reset reset',
    scrub: true,
  },
  x: 400,
  duration: 8,
})
gsap.from('#tag4', {
  scrollTrigger: {
    trigger: '#tag4',
    scroller: '#main',
    toggleActions: 'restart pause reset reset',
    scrub: true,
  },
  x: 400,
  duration: 8,
})

/*------------------------------------------------------------------*/

gsap.from('#page9>h1', {
  scrollTrigger: {
    trigger: '#page9>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('.choice', {
  scrollTrigger: {
    trigger: '.choice',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#page10>h1', {
  scrollTrigger: {
    trigger: '#page10>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
/*-----------------------------------------------------------------------------*/

gsap.from('#page11>h1', {
  scrollTrigger: {
    trigger: '#page11>h1',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img111', {
  scrollTrigger: {
    trigger: '#img111',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img112', {
  scrollTrigger: {
    trigger: '#img112',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img113', {
  scrollTrigger: {
    trigger: '#img113',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img114', {
  scrollTrigger: {
    trigger: '#img114',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img115', {
  scrollTrigger: {
    trigger: '#img115',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img116', {
  scrollTrigger: {
    trigger: '#img116',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img117', {
  scrollTrigger: {
    trigger: '#img117',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})
gsap.from('#img118', {
  scrollTrigger: {
    trigger: '#img118',
    scroller: '#main',
    markers: false,
    start: 'top 85%',
    toggleActions: 'restart pause reset reset'
  },
  duration: 0.5,
  y: 40,
  opacity: 0,
})