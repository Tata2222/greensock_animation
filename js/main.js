/*  Autumn Greeting Card -- js */

(function(){
  'use strict';

  const backFallingLeaves = document.querySelectorAll("#brownLeaf, #orangeLeaf, #redLeaf");
  const textLine1 = document.querySelectorAll(".text-line-1");
  const textLine2 = document.querySelectorAll(".text-line-2");
  const textGreeting = document.querySelectorAll(".text-greeting");
  const treeLeaves = document.querySelectorAll("[id^=treeleaf]");
  const floorLeaves = document.querySelectorAll("[id^=floorleaf]");
  const bird = document.querySelector("#Bird");
  const birdHat = bird.querySelector("#BirdHat");
  const birdEyes = bird.querySelectorAll('#leftEye, #rightEye');
  const nest = document.querySelector("#NestAndLeaves");
  const tree = document.querySelector("#tree_trunk");
  const container = document.querySelector(".card");
  const body = document.querySelector("body");
//   gsap.registerEffect({
//     name: "fade",
//     effect: (targets, config) => {
//         return gsap.to(targets, {duration: config.duration, opacity: 0});
//     },
//     defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
//     extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
// });

// document.querySelectorAll(".s0").forEach(function(leaf) {
//   leaf.addEventListener("click", function() {
//     gsap.effects.fade(this);
//   });
// });
function clearStage() {
  const clearTl = new TimelineMax();  
  clearTl
    .set(backFallingLeaves, {autoAlpha: 0})
    .set(textLine1, {autoAlpha: 0})
    .set(textLine2, {autoAlpha: 0})
    .set(textGreeting, {autoAlpha: 0})
    .set(treeLeaves, {autoAlpha: 0})
    .set(bird, {y:"+=65", autoAlpha: 0})
    .set(nest, {autoAlpha: 0})
    .set(tree, {autoAlpha: 0})
    .set(floorLeaves, {y:"+=275", onComplete: showContainer});

    function showContainer() {
      container.style.display = 'block'; 
    }
    
  return clearTl;
}

function enterFloorVegetation() {
  const fLeavesTl = new TimelineMax(); 

  fLeavesTl
    .staggerTo(floorLeaves, 1, {y: 0}, 0.01)
    .fromTo(tree, 1.1, {scaleY: 0.2, autoAlpha: 0, transformOrigin: "center bottom"}, {scaleY: 1, autoAlpha: 1, transformOrigin: "center bottom", ease: Back.easeInOut})
    .fromTo(tree, 0.9, {scaleX: 0.2, autoAlpha: 0, transformOrigin: "center bottom"}, {scaleX: 1, autoAlpha: 1, transformOrigin: "center bottom", ease: Back.easeInOut}, "-=0.9");

  return fLeavesTl;
}

function enterTreeStuff() {
  const treeStuffTl = new TimelineMax(); 

  treeStuffTl
    .staggerFromTo(treeLeaves, 0.5, {scale: 0.2, autoAlpha: 0, transformOrigin: "center bottom"}, {scale: 1, autoAlpha: 1, transformOrigin: "center bottom"}, 0.02)
    .fromTo(nest, 1, {y:0, scale: 0.2, autoAlpha: 0, transformOrigin: "center center"}, {y:"-=15", scale: 1, autoAlpha: 1, transformOrigin: "center center", ease: Elastic.easeOut}, "+=0.1")
    .to(nest, 0.3, {y: "+=15", ease: Bounce.easeOut}, "-=0.2")
    .add("nest-pop-in")
    .set(birdHat, {rotation: 12, x:"+=6"})
    .to(bird, 1.4, {y:"-=39", autoAlpha: 1, ease: Power4.easeInOut}, "nest-pop-in+=0.1")
    .add("bird-picking")
    .set(birdEyes, {autoAlpha: 0})
    .set(birdEyes, {autoAlpha: 1}, "+=0.2")
    .set(birdEyes, {autoAlpha: 0}, "+=0.3")
    .set(birdEyes, {autoAlpha: 1}, "+=0.2")
    .add("bird-blinks")
    .to(bird, 0.8, {y:"-=34", ease: Power4.easeInOut})
    .to(bird, 0.3, {y:"+=8", ease: Back.easeOut})
    .to(birdHat, 0.4, {y:"-=12"}, "-=0.6")
    .to(birdHat, 0.3, {y:0, rotation:0, x:0, onComplete: startBlinking}, "-=0.2")
    ;

    function startBlinking() {
      let birdBlinkTl = new TimelineMax({repeat: -1, repeatDelay: 5});

      birdBlinkTl
        .set(birdEyes, {autoAlpha: 0})
        .set(birdEyes, {autoAlpha: 1}, "+=0.2")
        .set(birdEyes, {autoAlpha: 0}, "+=1.2")
        .set(birdEyes, {autoAlpha: 1}, "+=0.2")
    }

  return treeStuffTl;
}

function enterGreeting() {
  const greetingTl = new TimelineMax(); 

  greetingTl
    .fromTo(textLine1, 1, {y: "-=50", autoAlpha: 0}, {y: 0, autoAlpha: 1, onComplete: startLoops})
    .fromTo(textLine2, 1, {y: "-=25", autoAlpha: 0}, {y: 0, autoAlpha: 1})
    .staggerFromTo(textGreeting, 0.5, {scale: 2, autoAlpha: 0, transformOrigin: "center center"}, {scale: 1, autoAlpha: 1, transformOrigin: "center center"}, 0.2);

    function startLoops(){
      const colors = ["#edcc93", "#f7e3ae", "#f3ebcc", "#edcc93"];
      const bfTl = new TimelineMax();

      bfTl
        .to(body, 3, {backgroundColor: colors[0]})
        .to(body, 3, {backgroundColor: colors[1]}, "+=2")
        .to(body, 3, {backgroundColor: colors[2]}, "+=2")
        .to(body, 3, {backgroundColor: colors[3]}, "+=2");

        TweenMax.set(backFallingLeaves, {y:"-=100", autoAlpha: 0.2});
        TweenMax.to('#brownLeaf', 10+Math.random()*10, {y:"+=1200", autoAlpha: 1, onComplete: repeatFall, onCompleteParams: ['#brownLeaf'], ease: Linear.easeNone})
        TweenMax.to('#orangeLeaf', 10+Math.random()*10, {y:"+=1200", autoAlpha: 1, onComplete: repeatFall, onCompleteParams: ['#orangeLeaf'], ease: Linear.easeNone})
        TweenMax.to('#redLeaf', 10+Math.random()*10, {y:"+=1200", autoAlpha: 1, onComplete: repeatFall, onCompleteParams: ['#redLeaf'],  ease: Linear.easeNone})

        function repeatFall(leafId){
          let range = Math.random * 800;
          let offset = 400;
          let newXPosition = range - offset;

          TweenMax.set(leafId, {x: newXPosition, y:"-100", autoAlpha: 0.2, rotation: Math.random()*360})
          TweenMax.to(leafId , 10 + Math.random()*10, {y:"+=1200", autoAlpha: 1, onComplete: repeatFall, onCompleteParams: [leafId], ease: Linear.easeNone})
        }  
    }

  return greetingTl;
}

function go(){
  console.log('....go');
  const masterTl = new TimelineMax();

  masterTl
    .add(clearStage(), 'scene-clear-stage')
    .add(enterFloorVegetation(), 'scene-floor-vegetation')
    .add(enterTreeStuff(), 'scene-tree-stuff')
    .add(enterGreeting(), 'scene-greeting');    
  
 // gsap.effects.fade ( backFallingLeaves , { duration: 3}); 
};

go()
	

})();


