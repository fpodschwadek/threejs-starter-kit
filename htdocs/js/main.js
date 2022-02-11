// three.js uses modules, that why we import it this way.
// Ideally, we would use a build system like Webpack to handle this, but that
// would mean learning even more new tech.
//
// As almost all relevant modern browsers can handle import statements nowadays,
// so we can live with this for now.
import * as THREE from 'https://cdn.skypack.dev/three@0.137.5';

// This is similar in the official scene creation intro:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
//
// However, we do not use the complete browser window for the stage but only
// a smaller container, so we can have other content on the page as well.

const
		// Reference to the canvas element on our page where the 3D stuff is
		// displayed.
		modelDisplay 	= document.getElementById('model-display'),

		// This is the scene, basically the space where all the things are
		// happening.
		scene 			= new THREE.Scene(),
		camera 			= new THREE.PerspectiveCamera(75, 2, 0.1, 1000), // 2 for aspect ratio is apparently the canvas default value and can be used for responsive canvasses.
		renderer 		= new THREE.WebGLRenderer({canvas: modelDisplay, alpha: true, antialias: true}),

		// This is a thing we want to display.
		geometry 		= new THREE.BoxGeometry(),
		material 		= new THREE.MeshNormalMaterial({color: 0x00ff00}), // We use a different material to make it look less hideous.
		cube 			= new THREE.Mesh(geometry, material),

		// This is our rendering loop function.
		//
		// We constantly repeat rendering our mesh, so we can continuously update
		// values and get an animation.
		//
		// For a static view, it would be enough to run the rendering call once.
		animate 		= function() {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render(scene, camera);
		};

// Note that we can already add a thing (a mesh, to be precise) to the scene if
// it is not rendered yet.
scene.add(cube);

// Same goes for setting values for the camera.
camera.position.z = 2;

// Although our 3D canvas is fluidly responsive, we need to set the size
// initially, otherwise the rendered mesh will appear blurry.
//
// Maybe I'm missing something here and we could achieve crisp rendering
// without setting size, but for now let's go with this.
renderer.setSize(modelDisplay.clientWidth, modelDisplay.clientHeight, false);

// Start the rendering loop.
animate();
