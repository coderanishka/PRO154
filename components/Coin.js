AFRAME.registerComponent("coinTarget", {
    schema: {},
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `coin${i}`
            var px = Math.random()*0.030
            var py = Math.random()*0.30
            var pz = Math.random()*0.30
            var pos = {x: px, y: py, z: pz}
            this.SpawnCoins(id, pos)
        }
    },
    SpawnCoins: function(id, pos){
        var target = document.querySelector('#coin')
        var coin = document.createElement('a-entity')
        coin.setAttribute('material', 'color', 'yellow')
        coin.setAttribute('id', id)
        coin.setAttribute('position', pos)
        coin.setAttribute('geometry', {primitive: 'torus', radius: 10})
        // Set the static body attribute of Physics system. 
        coin.setAttribute('static-body', {shape: 'sphere', sphereRadius: 2})
        coin.setAttribute('gameplay', {elementID: `#${id}`})
        target.appendChild(coin)
    },
})
   
