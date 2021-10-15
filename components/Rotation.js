// AFRAME.registerComponent('diverRotation', {
//   schema:{
//     rotationSpeed: {type:'number', default: 0}
//   },
//   init: function(){
//     window.addEventListener('keydown', (e) =>{
//       this.data.rotationSpeed = this.el.getAttribute('rotation')
//       var r = this.data.rotationSpeed
//       if(e.key == 'ArrowRight'){
//         if(r.x < 10){
//           r.x += 0.5
//           this.el.setAttribute('rotation', r)
//         }
//       }
//     })
//   }
// })

AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRoation;      
      var diverPosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (diverRotation.y < 90) {
          diverRotation.y += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.y > -90) {
          diverRotation.y -= 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverRotation.z < 0) {
          diverRotation.z += 5;
          this.el.setAttribute("position", diverPosition);
        }
        
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z > -2000) {
          diverRotation.z -= 0.5;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});