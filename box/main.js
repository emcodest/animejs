var anim = anime({
    targets: ".box",
    translateY: [
        {value: "80", duration: 500},
        {value: "0", duration: 500, delay: 1000},

    ],
    rotate:{

            value: "2turn",
            easing: "easeInOutSine"
        },
    delay: function(el, i, l){

        return i*2000
    },
    complete: function(){
        // alert("am done")
        anim.restart()

    },
    autoplay: false
      
})
document.querySelector("#start").onclick = function(){
   
    
        anim.restart()
    
}
document.querySelector("#pause").onclick = function(){
   
    
        anim.pause()
    
}
document.querySelector("#resume").onclick = function(){
   
    
        anim.play()
    
}