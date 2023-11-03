// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")

overlay.addEventListener("mouseenter", function(){
    iscroll.style.scale = 1
})

overlay.addEventListener("mouseleave", function(){
    iscroll.style.scale = 0
})

overlay.addEventListener("mousemove", function(dets){
    iscroll.style.left = `${dets.x - 70}px`
    iscroll.style.top = `${dets.y - 45}px`
})

// gsap.from("svg",{
//     fill:"white",
//     duration:1,
//     delay:2
// })

gsap.from("#page1",{
    scale:0,
    left:"-100%",
    rotate:-90,
    duration:.5,
    delay:1,

})

gsap.from("#nav",{
    y:-20,
    delay:2,
    duration: 1,
    opacity: 0,
})

gsap.from("#page1>h1",{
    y:40,
    delay:2,
    duration: 1,
    opacity: 0,
    onStart:function(){
        $('#page1>h1').textillate({
            in:{
                effect:'fadeInUp',
              }})
    }
})

gsap.from("#page2>h1",{
    // duration: .5,
    opacity: 0,
    onStart:function(){
        $('#page2>h1').textillate({
            in:{
                effect:'fadeInUp',
              }})
    },

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>h1",
        // markers:true,
        start:"top 70%",
        end:"top 70%",
        scrub:3,
        }
})

gsap.from("#page2>h2",{
    // duration: .5,
    opacity: 0,
    onStart:function(){
        $('#page2>h2').textillate({
            in:{
                effect:'fadeInUp',
              }})
    },

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2>h2",
        // markers:true,
        start:"top 60%",
        end:"top 60%",
        scrub:3,
        }
})

gsap.from("#page3",{
    opacity:0,
    // left:"-60%",
    duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:3,
    }
})



gsap.from("#page9>h1",{
    opacity: 0,
    y:2,
    duration:.2,
    onStart:function(){
        $('#page9>h1').textillate({
            in:{
                effect:'fadeInUp',
              }})
    },

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top -50%",
        end:"top -50%",
        scrub:3,
        }
})

gsap.from("#page9>h3",{
    opacity: 0,
    y:2,
    duration:.2,
    onStart:function(){
        $('#page9>h3').textillate({
            in:{
                effect:'fadeInUp',
              }})
    },

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9>h3",
        // markers:true,
        start:"top -60%",
        end:"top -60%",
        scrub:3,
        }
})

gsap.from("#page10>h1",{
    opacity: 0,
    y:2,
    duration:.2,
    onStart:function(){
        $('#page10>h1').textillate({
            in:{
                effect:'fadeInUp',
              }})
    },

    scrollTrigger:{
        scroller:"#main",
        trigger:"#page10>h1",
        // markers:true,
        start:"top -70%",
        end:"top -70%",
        scrub:3,
        }
})


var page3 = document.querySelector("#page3")
var movingdiv1 = document.querySelector("#movingdiv1")

page3.addEventListener("mouseenter", function(){
    movingdiv1.style.scale = 1
})

page3.addEventListener("mouseleave", function(){
    movingdiv1.style.scale = 0
})

page3.addEventListener("mousemove", function(dets){
    movingdiv1.style.left = `${dets.x - 70}px`
    movingdiv1.style.top = `${dets.y - 45}px`
})

var page6b = document.querySelector("#page6b")
var movingdiv2 = document.querySelector("#movingdiv2")

page6b.addEventListener("mouseenter", function(){
    movingdiv2.style.scale = 1
})

page6b.addEventListener("mouseleave", function(){
    movingdiv2.style.scale = 0
})

page6b.addEventListener("mousemove", function(dets){
    movingdiv2.style.left = `${dets.x - 70}px`
    movingdiv2.style.top = `${dets.y - 45}px`
})

var p8imgsdiv = document.querySelector("#p8imgsdiv")
var imgbtn = document.querySelector("#imgbtn")

p8imgsdiv.addEventListener("mouseenter", function(){
    imgbtn.style.scale = 1
})

p8imgsdiv.addEventListener("mouseleave", function(){
    imgbtn.style.scale = 0
})

p8imgsdiv.addEventListener("mousemove", function(dets){
    imgbtn.style.left = `${dets.x - 80}px`
    imgbtn.style.top = `${dets.y - 150}px`
})




// var elems = document.querySelector("#eoverlay")
// var moveimgdiv = document.querySelector("#moveimgdiv")

// elems.addEventListener("mouseenter", function(){
//     moveimgdiv.style.scale = 1
// })

// elems.addEventListener("mouseleave", function(){
//     moveimgdiv.style.scale = 0
// })

// elems.addEventListener("mousemove", function(dets){
//     gsap.to("#moveimgdiv",{
//         left: `${dets.x}px`,
//         top: `${dets.y-300}px`
//     })
//     // moveimgdiv.style.left = `${dets.x}px`
//     // moveimgdiv.style.top = `${dets.y-300}px`
// })

// var image = document.querySelector("#image")
// var imgbtn = document.querySelector("#imgbtn")

// image.addEventListener("mouseenter", function(){
//     imgbtn.style.scale = 1
// })

// image.addEventListener("mouseleave", function(){
//     imgbtn.style.scale = 0
// })

// image.addEventListener("mousemove", function(dets){
//     imgbtn.style.left = `${dets.x-105}px`
//     imgbtn.style.top = `${dets.y-185}px`
// })

// var image2 = document.querySelector("#image2")
// var imgbtn2 = document.querySelector("#imgbtn2")

// image2.addEventListener("mouseenter", function(){
//     imgbtn2.style.scale = 1
// })

// image2.addEventListener("mouseleave", function(){
//     imgbtn2.style.scale = 0
// })

// image2.addEventListener("mousemove", function(dets){
//     imgbtn2.style.left = `${dets.x}px`
//     imgbtn2.style.top = `${dets.y}px`
// })

// var image3 = document.querySelector("#image3")
// var imgbtn3 = document.querySelector("#imgbtn3")

// image3.addEventListener("mouseenter", function(){
//     imgbtn3.style.scale = 1
// })

// image3.addEventListener("mouseleave", function(){
//     imgbtn3.style.scale = 0
// })

// image3.addEventListener("mousemove", function(dets){
//     imgbtn3.style.left = `${dets.x}px`
//     imgbtn3w.style.top = `${dets.y}px`
// })

var tl = gsap.timeline()

tl
    .to("body>svg",{
        scale:1,
        top:"5%",
        fill:"#111",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav",
            // markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:3,
        }
    })

    .to("body>svg",{
        fill:"white",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav",
            // markers:true,
            start:"top -298%",
            end:"top -298%",
            scrub:3,
        }
    })
    .to("#nav",{
        background: "linear-gradient(#111111,#1111117a,#11111137,#11111100)",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav",
            // markers:true,
            start:"top -40%",
            end:"top -40%",
            scrub:3,
        }
    })

    .to("#nav",{
        background: " linear-gradient(#ffffffa5,#11111182,#11111138,transparent)",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav",
            // markers:true,
            start:"top -98%",
            end:"top -98%",
            scrub:3,
            }
    })

    .to("#nav h3",{
        color: "#111",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav h3",
            // markers:true,
            start:"top -98%",
            end:"top -98%",
            scrub:3,
        }
    })

    .to("#nav h3",{
        color: "#fff",
        scrollTrigger:{
            scroller:"#main",
            trigger:"#nav h3",
            // markers:true,
            start:"top -280%",
            end:"top -280%",
            scrub:3,
        }
    })

gsap.to("#page2 img",{
    rotate:5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        // markers:true,
        start:"top 55%",
        end:"top 20%",
        scrub:3,
    }
})

var tl2 = gsap.timeline()

tl2
    .from("#p6div1",{
        y:60,
        rotate:-5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#p6div1",
            // markers:true,
            start:"top 60%",
            end:"top 45%",
            scrub:3
        }
    })

    .to("#page6",{
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page6",
            // markers:true,
            start:"top 0%",
            scrub:3,
            pin:true
        }
    })

gsap.from("#p6div2",{
    top:"120%",
    opacity:0,
    rotate:-25,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p6div2",
        // markers:true,
        start:"top 20%",
        end:"top 0%",
        scrub:3
    }
})



// var elem = document.querySelectorAll(".elems")
// elem.forEach(function (e) {
//     var a = e.getAttribute("data-img")
//     e.addEventListener("mouseenter", function () {
//         document.querySelector("#page4>img").setAttribute("src", a)
//     })
// })






var line4 = document.querySelectorAll("#line-4")
var line5 = document.querySelector("#line-4:nth-child(5)")
var lineoverlay1 = document.querySelector("#lineoverlay1")
var lineoverlay2 = document.querySelector("#lineoverlay2")
var lineoverlay3 = document.querySelector("#lineoverlay3")
var lineoverlay4 = document.querySelector("#lineoverlay4")
var lineoverlay5 = document.querySelector("#lineoverlay5")
var page3img1 = document.querySelector("#p4-img1")
var page3img2 = document.querySelector("#p4-img2")
var page3img3 = document.querySelector("#p4-img3")
var page3img4 = document.querySelector("#p4-img4")
var page3img5 = document.querySelector("#p4-img5")
var lineh1 = document.querySelectorAll("#line h1")
var lineh2 = document.querySelectorAll("#line h2")
var b1 = document.querySelector("#p4-b1")
var b2 = document.querySelector("#p4-b2")
var b3 = document.querySelector("#p4-b3")
var b4 = document.querySelector("#p4-b4")
var b5 = document.querySelector("#p4-b5")

line4.forEach(function(o){
    o.addEventListener("mouseenter",function(){
        o.childNodes[1].style.opacity = "1"
        o.childNodes[1].style.animationName = "h1"
        o.childNodes[3].style.opacity = "0"
        // document.querySelector("#line4>h2").style.opacity = 0
        o.style.borderTopColor = "white"
        o.style.borderBottomColor = "white"
        o.style.borderTopWidth = "3px"
        o.style.borderBottomWidth = "3px"
        // console.log(o.childNodes)
    })
})

line4.forEach(function(o){
    o.addEventListener("mouseleave",function(){
        o.childNodes[1].style.opacity = 0
        o.childNodes[1].style.animationName = "h"
        o.childNodes[3].style.opacity = 1
        o.style.borderTopColor = "grey"
        o.style.borderTopWidth = "1.5px"
        o.style.borderBottomColor = "grey"
        o.style.borderBottomWidth = "0px"
        line5.style.borderBottomWidth = "1.5px"
        // console.log(o.childNodes)
    })
})





lineoverlay1.addEventListener("mousemove",function(dets){
    page3img1.style.top =`${dets.y-80}px`
    page3img1.style.left = `${dets.x-20}px`
    b1.style.top = dets.y + "px"
    b1.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay1.addEventListener("mouseenter",function(){
    page3img1.style.opacity = 1  
    b1.style.opacity = 1
    // console.log("hey")
})

lineoverlay1.addEventListener("mouseleave",function(){
    page3img1.style.opacity = 0 
    b1.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay2.addEventListener("mousemove",function(dets){
    page3img2.style.top = `${dets.y-30}px`
    page3img2.style.left = `${dets.x}px`
    b2.style.top = dets.y + "px"
    b2.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay2.addEventListener("mouseenter",function(){
    page3img2.style.opacity = 1  
    b2.style.opacity = 1
    // console.log("hey")
})

lineoverlay2.addEventListener("mouseleave",function(){
    page3img2.style.opacity = 0 
    b2.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay3.addEventListener("mousemove",function(dets){
    page3img3.style.top = dets.y + "px"
    page3img3.style.left = dets.x + "px" 
    b3.style.top = dets.y + "px"
    b3.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay3.addEventListener("mouseenter",function(){
    page3img3.style.opacity = 1  
    b3.style.opacity = 1
    // console.log("hey")
})

lineoverlay3.addEventListener("mouseleave",function(){
    page3img3.style.opacity = 0 
    b3.style.opacity = 0

    // console.log("heyaaa")
})



lineoverlay4.addEventListener("mousemove",function(dets){
    page3img4.style.top = `${dets.y+10}px`
    page3img4.style.left = `${dets.x}px`
    b4.style.top = dets.y + "px"
    b4.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay4.addEventListener("mouseenter",function(){
    page3img4.style.opacity = 1
    b4.style.opacity = 1  
    // console.log("hey")
})

lineoverlay4.addEventListener("mouseleave",function(){
    page3img4.style.opacity = 0 
    b4.style.opacity = 0
    // console.log("heyaaa")
})



lineoverlay5.addEventListener("mousemove",function(dets){
    page3img5.style.top = dets.y + "px"
    page3img5.style.left = dets.x + "px" 
    b5.style.top = dets.y + "px"
    b5.style.left = dets.x + "px"
    // console.log("heeeeey")
})

lineoverlay5.addEventListener("mouseenter",function(){
    page3img5.style.opacity = 1  
    b5.style.opacity = 1  
    // console.log("hey")
})

lineoverlay5.addEventListener("mouseleave",function(){
    page3img5.style.opacity = 0 
    b5.style.opacity = 0
    // console.log("heyaaa")
})

var rnavcontent = document.querySelector("#rnavcontent")
var responsiveNav = document.querySelector("#responsiveNav")
var nline1 = document.querySelector("#nline1")
var nline2 = document.querySelector("#nline2")
var nline3 = document.querySelector("#nline3")

var click = 0;
responsiveNav.addEventListener("click", function () {
    if (click == 0) {
        rnavcontent.style.top = "0%";
        nline1.style.rotate = "44deg";
        nline2.style.opacity = 0;
        nline3.style.rotate = "-44deg";
        nline1.style.backgroundColor = "#111";
        nline3.style.backgroundColor = "#111";
        click++;
    }
    else if(click == 1){
        rnavcontent.style.top = "-100%";
        nline1.style.rotate = "0deg";
        nline2.style.opacity = 1;
        nline3.style.rotate = "0deg";
        nline1.style.backgroundColor = "#c55403";
        nline3.style.backgroundColor = "#c55403";
        click--;
    }
})