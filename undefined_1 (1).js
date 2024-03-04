import {three} from 'https://unpkg.com/three@<version>/build/three.module.js';
SnapExtensions.primitives.set(
    'three_start()',
    function () {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    }
);
SnapExtensions.primitives.set(
    'three_addcube()',
    function (geo,color) {
        var items = geo.split(",")
        var geometry = new THREE.BoxGeometry(items.at(0)
, items.at(1), items.at(2) );
        var material = new THREE.MeshBasicMaterial(color);
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    }
);
SnapExtensions.primitives.set(
    'three_setCamZ()',
    function (z) {
        camera.position.z = z;
    }
);
SnapExtensions.primitives.set(
    'three_render()',
    function () {
        renderer.render( scene, camera );
    }
);
