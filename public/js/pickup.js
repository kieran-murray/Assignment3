AFRAME.registerComponent('pickup', {
    init: function() {
        
        var context = this;
        context.player = document.querySelector('#player');  //this is our player/camera
        context.selected = false;
        context

        console.log()
        context.el.addEventListener('click', () => {
            if (context.selected === true) {
                //drop
                context.el.sceneEl.object3D.attach(context.el.object3D); //threejs attach adds the object back to the scene
                context.selected = false;

            }
            else {
                //pick up
                context.player.object3D.attach(context.el.object3D); //attach object to the player/camera
                context.el.removeAttribute('dynamic-body')
                context.selected = true
            }
      });
    }
  });