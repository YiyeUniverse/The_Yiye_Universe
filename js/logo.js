 // revolutions per second
 var angularSpeed = 0.2;
 var lastTime = 0;

 // this function is executed on each animation frame
 function animate() {
     // update
     var time = (new Date()).getTime();
     var timeDiff = time - lastTime;
     var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
     cube.rotation.y += angleChange;
     lastTime = time;

     // render
     renderer.render(scene, camera);

     // request new frame
     requestAnimationFrame(function () {
         animate();
     });
 }

 // renderer
var container = document.getElementById("container");
var renderer = new THREE.WebGLRenderer();
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

 // camera
 var camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 1000);
 camera.position.z = 700;

 // scene
 var scene = new THREE.Scene();

 // cube (Lenght, Height, Width)
 var cube = new THREE.Mesh(new THREE.CubeGeometry(400, 200, 200), new THREE.MeshNormalMaterial());
 //cube.overdraw = false;
 scene.add(cube);

 // start animation
 animate();