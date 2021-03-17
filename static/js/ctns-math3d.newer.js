/* Version v7 */
var TML_MATH3D = window.TML_MATH3D || {};
    
(function($, THREE, TML_MATH3D) {

    $(document).ready(function() {

        TML_MATH3D.init = (function(TML_MATH3D, THREE) {
    
            THREE.Object3D.DefaultUp.set(0.0, 0.0, 1.0);

            var buttons = {};
            
            buttons.titles = ["Pick One", "Rotate", "Stop", "Reset", "Show", "Hide"];

            buttons["Pick One"] = "pickOne";
            buttons["Rotate"]   = "start";
            buttons["Stop"]     = "stop";
            buttons["Reset"]    = "reset";
            buttons["Show"]     = "show";
            buttons["Hide"]     = "hide";
            
            return function(options={}) {
            
                options.location = options.location || "ctns-3d-graphic";
                options.camera   = options.camera || {position: {x:40, y:40, z:20}};
                options.buttons  = options.buttons || buttons.titles;//["Pick One", "Start", "Stop", "Reset", "Show", "Hide"]
                options.width    = options.width || 600;
                options.height   = options.height || 400;
                                
                var id = Math.floor(Math.random() * Math.floor(1000000));
            
                TML_MATH3D[id] = TML_MATH3D[id] || {};
            
                (function(TML_MATH3D, id, options) {
            
                    TML_MATH3D.maxDistance = 24;
                    TML_MATH3D.maxCount = 10;
                    TML_MATH3D.maxDelta = TML_MATH3D.maxDistance / TML_MATH3D.maxCount;
            
    
                    TML_MATH3D.clock = new THREE.Clock();
        
                    TML_MATH3D.rotateSet = [];
                    TML_MATH3D.solidSet = [];
                    TML_MATH3D.original = {};

                    // create a render and set the size
                    //TML_MATH3D.webGLRenderer = new THREE.WebGLRenderer({alpha:true});
                    TML_MATH3D.webGLRenderer = new THREE.WebGLRenderer();
                    TML_MATH3D.webGLRenderer.setSize(options.width,options.height);//window.innerWidth/3, window.innerHeight/3);
//                     TML_MATH3D.webGLRenderer.setSize(600,400);//window.innerWidth/3, window.innerHeight/3);
                    TML_MATH3D.webGLRenderer.shadowMap.enabled = true;
                    //TML_MATH3D.webGLRenderer.setClearColor( 0x000000, 0 );

                    // Add the output of the renderer to the html element
                    // RIGHT NOW. I do believe this timing is critical. Also,
                    // GO WITH PURE JAVASCRIPT on this one ...
                    //$("<div id='WebGL-output-"+id+"' class='ctns-3d-canvas'></div>").appendTo("#"+options.location);
                    //document.getElementById("WebGL-output-"+id).appendChild(TML_MATH3D.webGLRenderer.domElement);
                    //var H = $("<div id='WebGL-output-"+"X"+"' class='ctns-3d-canvas'></div>").appendTo("#"+options.location);
                    //var J = $("#"+options.location);
                    document.getElementById("WebGL-output-X").appendChild(TML_MATH3D.webGLRenderer.domElement);

                    // create a scene, that will hold all our elements such as objects, cameras and lights.
                    TML_MATH3D.scene = new THREE.Scene();
                    TML_MATH3D.scene.background = new THREE.Color( "white" );

                    // create a camera, which defines where we're looking at.
                    TML_MATH3D.camera = new THREE.PerspectiveCamera(50, 600/400 /*window.innerWidth / window.innerHeight*/, 1, 2000);
                    TML_MATH3D.camera.zoom = 1;
                    TML_MATH3D.camera.updateProjectionMatrix();
                    TML_MATH3D.camera.lookAt(new THREE.Vector3(0, 0, 0));
                    
                    TML_MATH3D.camera.position.x  = options.camera.position.x;
                    TML_MATH3D.camera.position.y  = options.camera.position.y;
                    TML_MATH3D.camera.position.z  = options.camera.position.z;

                    TML_MATH3D.original.camera = {
                        position: {
                            x:options.camera.position.x,
                            y:options.camera.position.y,
                            z:options.camera.position.z,
                        }};

                    TML_MATH3D.orbitControls = new THREE.OrbitControls(TML_MATH3D.camera, TML_MATH3D.webGLRenderer.domElement);
                    //TML_MATH3D.orbitControls.enablePan = false;
                    
                    TML_MATH3D.lights = [];

                    TML_MATH3D.lights[ 0 ] = new THREE.PointLight( 0x666666, 1, 0 );
                    TML_MATH3D.lights[ 1 ] = new THREE.PointLight( 0x666666, 1, 0 );
                    TML_MATH3D.lights[ 2 ] = new THREE.PointLight( 0x666666, 1, 0 );

                    TML_MATH3D.lights[ 0 ].position.set( 0, 200, 0 );
                    TML_MATH3D.lights[ 1 ].position.set( 100, 200, 100 );
                    TML_MATH3D.lights[ 2 ].position.set( - 100, - 200, - 100 );

                    TML_MATH3D.scene.add( TML_MATH3D.lights[ 0 ] );
                    TML_MATH3D.scene.add( TML_MATH3D.lights[ 1 ] );
                    TML_MATH3D.scene.add( TML_MATH3D.lights[ 2 ] );

                    TML_MATH3D.ambientLight = new THREE.AmbientLight( 0x333333 );
                    TML_MATH3D.scene.add( TML_MATH3D.ambientLight );

                })(TML_MATH3D[id], id, options);
            
                (function(TML_MATH3D, id, options) {

                    TML_MATH3D.stats = (function() {

                        var stats = new Stats();
                        stats.setMode(0); // 0: fps, 1: ms

                        // Align top-left
                        stats.domElement.style.position = 'relative';
//                         stats.domElement.style.left = '0px';
//                         stats.domElement.style.top = '0px';

                        return stats;
                    })();

                    TML_MATH3D.pickOne = (function() {
                    
                        return function(count) {
                            return count/2;
                        };
                        
                    })();
                    
                    // Act on the STATS feature right now.
                    // I doubt I need to do it right now, however.
                    TML_MATH3D.measures = $("<div id='ctns-3d-measures-"+"X"+"' class='ctns-3d-measures'></div>").appendTo("#WebGL-output-"+"X");
                    $("<div id='Stats-output-"+"X"+"' class='ctns-3d-stats'></div>").insertBefore("#WebGL-output-"+"X");
                    //document.getElementById("Stats-output-"+id).appendChild(TML_MATH3D.stats.domElement);
                    document.getElementById("Stats-output-X").appendChild(TML_MATH3D.stats.domElement);

                    TML_MATH3D.makeLine = (function(THREE, camera) {

                        var resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );

                        return function ( geo, color, thickness = 5 ) {

                            var line = {},
                                g = new MeshLine();
                
                            g.setGeometry( geo );

                            line.material = new MeshLineMaterial( {
                                useMap: false,
                                color: new THREE.Color( color ) ,
                                opacity: 1,
                                resolution: resolution,
                                dashArray: 1,
                                dashRatio: 0.5,
                                dashOffset: 0,
                                sizeAttenuation: false,
                                lineWidth: thickness,
                                near: camera.near,
                                far: camera.far
                            });
            
                            line.geometry = g.geometry; // Not sure what 
                            line.mesh     = new THREE.Mesh( line.geometry, line.material );
            
                            return line;
                        }
    
                    })(THREE, TML_MATH3D.camera);

                    TML_MATH3D.createPlane = (function(THREE) {
    
                        var geometry = new THREE.PlaneGeometry(60, 40, 1, 1);
                        var material = new THREE.MeshLambertMaterial({
                            color:"darkgray", 
                            side: THREE.DoubleSide,
                            transparent: true, //was true, 
                            opacity: 0.6,
                            wireframe: true           
                            });

                        return function(rotationX, rotationY, rotationZ) {
    
                            var plane = {};
            
                            // create the ground plane
                            plane.geometry = geometry;
                            plane.material = material;
            
                            plane.mesh = new THREE.Mesh(plane.geometry, plane.material);
                            plane.mesh.name = "plane";

                            //rotate and position the plane
                            plane.mesh.rotation.x = rotationX; // -0.5 * Math.PI;
                            plane.mesh.rotation.y = rotationY; // -0.5 * Math.PI;
                            plane.mesh.rotation.z = rotationZ; // -0.5 * Math.PI;
                            plane.mesh.position.x = 0;
                            plane.mesh.position.y = 0;
                            plane.mesh.position.z = 0;
        
                            return plane;
                        };
        
                    })(THREE);
    
                    TML_MATH3D.createSegment = (function (THREE, scene, makeLine) {

                        return function(start, end, color, thickness = 5) {

                            var resolution = 100,
                                vector = new THREE.Vector3().subVectors(end, start),
                                segment = {},
                                line = new Float32Array( resolution * 3 ),
                                deltaX,
                                deltaY,
                                deltaZ,
                                nextX = start.x,
                                nextY = start.y,
                                nextZ = start.z;
            
                            deltaX = vector.x / resolution;
                            deltaY = vector.y / resolution;
                            deltaZ = vector.z / resolution;
        
                            for( var j = 0; j < resolution * 3; j += 3, nextX += deltaX, nextY += deltaY, nextZ += deltaZ ) {
                                line[ j ]     = nextX;//-30 + .1 * j;
                                line[ j + 1 ] = nextY;//5 * Math.sin( .01 *  j );
                                line[ j + 2 ] = nextZ;//-20;
                            }
            
                            var line = makeLine( line, color, thickness );
            
                            segment.geometry = line.geometry;
                            segment.material = line.material;
            
                            segment.mesh = line.mesh;
                            segment.mesh.name = "segment";
            
                            segment.v = vector;
            
                            return segment;

                        }

                    })(THREE, TML_MATH3D.scene, TML_MATH3D.makeLine);

                    TML_MATH3D.createAxis = (function (THREE, scene, createSegment) {

                        return function( options = {} ) {

                            options.color      = options.color      || "blue";
                            options.addToScene = options.addToScene || false;
                            options.thickness  = options.thickness  || 10;

                            var light = "lightgrey",
                                axes = {};
                
                            axes.mesh = new THREE.Group();
                            axes.mesh.name = "axis";
        
                            var x_axis_pos = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(40,0,0), "red", options.thickness);
                            axes.mesh.add(x_axis_pos.mesh);
            
                            var x_axis_neg = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(-40,0,0), light, options.thickness);
                            axes.mesh.add(x_axis_neg.mesh);
            
                            var y_axis_pos = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(0,40,0), "green", options.thickness);
                            axes.mesh.add(y_axis_pos.mesh);
            
                            var y_axis_neg = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(0,-40,0), light, options.thickness);
                            axes.mesh.add(y_axis_neg.mesh);
            
                            var z_axis_pos = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,40), "blue", options.thickness);
                            axes.mesh.add(z_axis_pos.mesh);
            
                            var z_axis_neg = createSegment(new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,-40), light, options.thickness);
                            axes.mesh.add(z_axis_neg.mesh);
            
                            if ( options.addToScene ) {
                                scene.add(axes.mesh);
                            }
            
                            return axes;

                        }

                    })(THREE, TML_MATH3D.scene, TML_MATH3D.createSegment);

                    TML_MATH3D.createCurve = (function (THREE, rotateSet, scene, makeLine) {

                        return function( options = {} ) {
        
                            options.start         = options.start         || new THREE.Vector3(0,0,0);
                            options.distance      = options.distance      || 10;
                            options.incr          = options.incr          || 0.01;
                            options.funcX         = options.funcX         || function(x){return x;};
                            options.funcY         = options.funcY         || function(y){return Math.sin(y);};
                            options.funcZ         = options.funcZ         || function(z){return 0;};
                            options.color         = options.color         || "blue";
                            options.thickness     = options.thickness     || 5;
                            options.rotation      = options.rotation      || "x-axis";
                            options.addToScene    = options.addToScene    || false;
                            options.addToRotation = options.addToRotation || false;
            
                            var resolution,
                                data,
                                nextX = options.start.x,
                                nextY = options.start.y,
                                nextZ = options.start.z,
                                curve = {};
                
                                resolution = Math.floor(options.distance/options.incr);
            
                            data = new Float32Array( resolution * 3 );

                            for( var j = 0; j < resolution * 3; j += 3, nextX += options.incr, nextY += options.incr, nextZ += options.incr ) {
                                data[ j ]     = options.funcX(nextX);//-30 + .1 * j;
                                data[ j + 1 ] = options.funcY(nextY);//5 * Math.sin( .01 *  j );
                                data[ j + 2 ] = options.funcZ(nextZ);//-20;
                            }

                            var line = makeLine( data, options.color, options.thickness );

                            curve.mesh = line.mesh;
                            curve.mesh.name = "curve";
            
                            curve.geometry = line.geometry;
                            curve.material = line.material;
            
                            curve.rotation = options.rotation;
            
                            if ( options.addToScene ) {
                                scene.add(curve.mesh);
                            }
            
                            if ( options.addToRotation ) {
                                rotateSet.push(curve);
                            }
            
                            return curve;

                        }

                    })(THREE, TML_MATH3D.rotateSet, TML_MATH3D.scene, TML_MATH3D.makeLine);
    
                    TML_MATH3D.createBaseSquare = (function(THREE, createSegment) {

                        var uv = {};
    
                        uv.i = new THREE.Vector3(1, 0, 0),
                        uv.j = new THREE.Vector3(0, 1, 0),
                        uv.k = new THREE.Vector3(0, 0, 1);
        
                        return function(options = {}) {
    
                            options.plane     = options.plane || "xy-plane";
                            options.offset    = options.offset || new THREE.Vector3(0,0,0);
                            options.width     = options.width || 2;
                            options.height    = options.height || 2;
                            options.color     = options.color || "red";
                            options.thickness = options.thickness || 5;
                            options.opacity   = options.opacity || 0.4;                 
            
                            var x, y, z,
                                top, bottom, left, right, fill,
                                topLeft, topRight, bottomLeft, bottomRight,
                                square = {};
            
                            switch(options.plane) {
                                case "yz-plane": 
            
                                    a = new THREE.Vector3().add(uv.j);
                                    b = new THREE.Vector3().add(uv.k);
                                    c = new THREE.Vector3().add(uv.i);
                
                                    w = options.height;
                                    h = options.width;
                                    d = options.height;
                
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                
                                    break;
                
                                case "xz-plane":
            
                                    a = new THREE.Vector3().add(uv.k);
                                    b = new THREE.Vector3().add(uv.i);
                                    c = new THREE.Vector3().add(uv.j);
                
                                    w = options.height;
                                    h = options.height;
                                    d = options.width;
                
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                
                                    break;

                                default:
                                case "xy-plane": 
            
                                    a = new THREE.Vector3().add(uv.i);
                                    b = new THREE.Vector3().add(uv.j);
                                    c = new THREE.Vector3().add(uv.k);
                
                                    w = options.width; // for fill
                                    h = options.height;
                                    d = options.height;
                
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                
                                break;
                            }
        
                            bottomLeft  = options.offset;
                            bottomRight = new THREE.Vector3().addVectors( options.offset, a );
                            topLeft     = new THREE.Vector3().addVectors( options.offset, b );
                            topRight    = new THREE.Vector3().addVectors( topLeft, a );
                            frontLeft   = new THREE.Vector3().addVectors( bottomLeft, c );
                            frontRight  = new THREE.Vector3().addVectors( bottomRight, c );
                            backLeft    = new THREE.Vector3().addVectors( topLeft, c );
                            backRight   = new THREE.Vector3().addVectors( topRight, c );
        
                            frontLeftUp   = createSegment(bottomLeft, frontLeft, options.color, options.thickness);
                            frontRightUp  = createSegment(bottomRight, frontRight, options.color, options.thickness);
                            backLeftUp    = createSegment(topLeft, backLeft, options.color, options.thickness);
                            backRightUp   = createSegment(topRight, backRight, options.color, options.thickness);
                            frontBridge   = createSegment(frontLeft, frontRight, options.color, options.thickness);
                            backBridge    = createSegment(backLeft, backRight, options.color, options.thickness);
                            leftBridge    = createSegment(frontLeft, backLeft, options.color, options.thickness);
                            rightBridge   = createSegment(frontRight, backRight, options.color, options.thickness);
        
                            bottom = createSegment(bottomLeft,  bottomRight, options.color, options.thickness);
                            left =   createSegment(bottomLeft,  topLeft, options.color, options.thickness);
                            top =    createSegment(topLeft,     topRight, options.color, options.thickness);
                            right =  createSegment(bottomRight, topRight, options.color, options.thickness);

                            square.mesh = new THREE.Group();
        
                            square.mesh.add(frontLeftUp.mesh);
                            square.mesh.add(frontRightUp.mesh);
                            square.mesh.add(backLeftUp.mesh);
                            square.mesh.add(backRightUp.mesh);

                            square.mesh.add(frontBridge.mesh);
                            square.mesh.add(backBridge.mesh);
                            square.mesh.add(leftBridge.mesh);
                            square.mesh.add(rightBridge.mesh);

                            square.mesh.add(bottom.mesh);
                            square.mesh.add(top.mesh);
                            square.mesh.add(left.mesh);
                            square.mesh.add(right.mesh);
        
                            square.mesh.name = "baseSquare";

                            var fillOffset;
                            a.multiplyScalar(1/2);
                            b.multiplyScalar(1/2);
                            c.multiplyScalar(1/2);
                            fillOffset = new THREE.Vector3().add(options.offset);
                            fillOffset = new THREE.Vector3().addVectors(fillOffset, a);
                            fillOffset = new THREE.Vector3().addVectors(fillOffset, b);
                            fillOffset = new THREE.Vector3().addVectors(fillOffset, c);
        
                            var bxgeometry = new THREE.BoxGeometry( w, h, d );
                            var bxmaterial = new THREE.MeshLambertMaterial( {color:options.color, transparent:true, opacity: 0.5, side: THREE.DoubleSide} );
                            var fill = new THREE.Mesh( bxgeometry, bxmaterial );
        
                            fill.position.x = fillOffset.x ;//+ options.width/2;
                            fill.position.y = fillOffset.y ;//+ options.height/2;
                            fill.position.z = fillOffset.z;
                            square.mesh.add(fill);
        
                            square.mesh.original = {};
                            
                            return square;
        
                        };
    
                    })(THREE, TML_MATH3D.createSegment);

                    TML_MATH3D.createBaseHemisphere = (function(THREE, createCurve) {
    
                        var uv = {};
        
                        uv.i = new THREE.Vector3(1, 0, 0),
                        uv.j = new THREE.Vector3(0, 1, 0),
                        uv.k = new THREE.Vector3(0, 0, 1);
            
                        return function(options = {}) {
        
                            options.plane     = options.plane || "xy-plane";
                            options.offset    = options.offset || new THREE.Vector3(0,0,0);
                            options.width     = options.width || 2;
                            options.height    = options.height || 2;
                            options.color     = options.color || "red";
                            options.thickness = options.thickness || 5;
                            options.opacity   = options.opacity || 0.4;
                            options.rotation  = options.rotation || "x-axis";               
                
                            var x, y, z,
                                top, bottom, left, right, fill,
                                topLeft, topRight, bottomLeft, bottomRight,
                                hemisphere = {},
                                leftCurve, rightCurve,
                                funcX, funcY, funcZ;
                
                            switch(options.plane) {
                                case "yz-plane": 
                
                                    a = new THREE.Vector3().add(uv.j);
                                    b = new THREE.Vector3().add(uv.k);
                                    c = new THREE.Vector3().add(uv.i);
                    
                                    w = options.thickness;
                                    h = options.width;
                                    d = options.height;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height/2);
                                    c.multiplyScalar(options.height);
                    
                                    funcX = function(x) { return Math.sin(x)*options.height/2; };
                                    funcY = function(x) { return 0; };
                                    funcZ = function(x) { return Math.cos(x)*options.height/2; };

                                    offset = new THREE.Vector3().add(uv.k).multiplyScalar(options.height/2);

                                    break;

                                case "xz-plane":
                
                                    a = new THREE.Vector3().add(uv.k);
                                    b = new THREE.Vector3().add(uv.i);
                                    c = new THREE.Vector3().add(uv.j);
                                            
                                    w = options.height;
                                    h = options.thickness;
                                    d = options.width;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height/2);
                                    c.multiplyScalar(options.height);
                    
                                    funcY = function(x) { return Math.sin(x)*options.height/2; };
                                    funcX = function(x) { return Math.cos(x)*options.height/2; };
                                    funcZ = function(x) { return 0; };

                                    offset = new THREE.Vector3().add(uv.i).multiplyScalar(options.height/2);

                                    break;

                                default:
                                case "xy-plane": 
                
                                    a = new THREE.Vector3().add(uv.i);
                                    b = new THREE.Vector3().add(uv.j);
                                    c = new THREE.Vector3().add(uv.k);
                    
                                    w = options.width;
                                    h = options.height;
                                    d = options.thickness;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height/2);
                                    c.multiplyScalar(options.height);
                    
                                    funcX = function(x) { return 0; };
                                    funcY = function(x) { return Math.cos(x)*options.height/2; };
                                    funcZ = function(x) { return Math.sin(x)*options.height/2; };
                    
                                    offset = new THREE.Vector3().add(uv.j).multiplyScalar(options.height/2);

                                    break;
                            };
                    
                            bottomLeft  = new THREE.Vector3().addVectors( options.offset, b );
                            bottomRight = new THREE.Vector3().addVectors( bottomLeft, a );
                            //topLeft     = new THREE.Vector3().addVectors( options.offset, b );
                            //topRight    = new THREE.Vector3().addVectors( topLeft, a );

                            leftCurve = createCurve({
                                start:new THREE.Vector3(0, 0, 0),
                                distance: Math.PI, 
                                incr: 0.01, 
                                funcX:funcX,  
                                funcY:funcY,
                                funcZ:funcZ, 
                                color:options.color, 
                                thickness:10,
                                rotation:"y-axis", //options.rotation
                                });
                
                            var finalOffset = new THREE.Vector3().addVectors(options.offset, offset);
            
                            leftCurve.mesh.position.x = bottomLeft.x;//finalOffset.x;//options.offset.x;
                            leftCurve.mesh.position.y = bottomLeft.y;//finalOffset.y;//options.height/2 + options.offset.y;
                            leftCurve.mesh.position.z = bottomLeft.z;//finalOffset.z;//options.offset.z;
            
                            rightCurve = createCurve({
                                start:new THREE.Vector3(0, 0, 0),
                                distance: Math.PI, 
                                incr: 0.01, 
                                funcX:funcX,  
                                funcY:funcY,
                                funcZ:funcZ, 
                                color:options.color, 
                                thickness:10,
                                rotation:"y-axis", //options.rotation
                                });
                
                            rightCurve.mesh.position.x = bottomRight.x;//finalOffset.x;//options.offset.x;
                            rightCurve.mesh.position.y = bottomRight.y;//finalOffset.y;//options.height/2 + options.offset.y;
                            rightCurve.mesh.position.z = bottomRight.z;//finalOffset.z;//options.offset.z;
            
                            hemisphere.mesh = new THREE.Group();
            
                            hemisphere.mesh.add(leftCurve.mesh);
                            hemisphere.mesh.add(rightCurve.mesh);
            
                            hemisphere.mesh.name = "baseHemisphere";                

                            hemisphere.mesh.original = {};
                            
                            return hemisphere;
                    
                        };
        
                    })(THREE, TML_MATH3D.createCurve);

                    TML_MATH3D.createBaseRightTriangle = (function(THREE, createSegment) {
    
                        var uv = {};
        
                        uv.i = new THREE.Vector3(1, 0, 0),
                        uv.j = new THREE.Vector3(0, 1, 0),
                        uv.k = new THREE.Vector3(0, 0, 1);
            
                        return function(options = {}) {
        
                            options.plane     = options.plane || "xy-plane";
                            options.offset    = options.offset || new THREE.Vector3(0,0,0);
                            options.width     = options.width || 2;
                            options.height    = options.height || 2;
                            options.color     = options.color || "red";
                            options.thickness = options.thickness || 5;
                            options.opacity   = options.opacity || 0.4;               
                
                            var x, y, z,
                                top, bottom, left, right, fill,
                                topLeft, topRight, bottomLeft, bottomRight,
                                triangle = {};
                
                            switch(options.plane) {
                                case "yz-plane": 
                
                                    a = new THREE.Vector3().add(uv.j);
                                    b = new THREE.Vector3().add(uv.k);
                                    c = new THREE.Vector3().add(uv.i);
                    
                                    w = options.thickness;
                                    h = options.width;
                                    d = options.height;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                    
                                    var rotationFill = new THREE.Vector3(Math.PI/2, 0, 0);
                    
                                    var fillOffset;
                                    fillOffset = new THREE.Vector3().add(options.offset);
                                    fillOffset = new THREE.Vector3().addVectors(fillOffset, a);

                                    break;

                                case "xz-plane":
                
                                    a = new THREE.Vector3().add(uv.k);
                                    b = new THREE.Vector3().add(uv.i);
                                    c = new THREE.Vector3().add(uv.j);
                                            
                                    w = options.height;
                                    h = options.thickness;
                                    d = options.width;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                    
                                    var rotationFill = new THREE.Vector3(0, 0, 0);//Math.PI/2 + Math.PI/2 + Math.PI/2, 0);
                    
                                    var fillOffset;
                                    fillOffset = new THREE.Vector3().add(options.offset);

                                    break;

                                default:
                                case "xy-plane": 
                
                                    a = new THREE.Vector3().add(uv.i);
                                    b = new THREE.Vector3().add(uv.j);
                                    c = new THREE.Vector3().add(uv.k);
                    
                                    w = options.width;
                                    h = options.height;
                                    d = options.thickness;
                    
                                    a.multiplyScalar(options.width);
                                    b.multiplyScalar(options.height);
                                    c.multiplyScalar(options.height);
                    
                                    var rotationFill = new THREE.Vector3(0, -Math.PI/2, 0);
                    
                                    var fillOffset;
                                    fillOffset = new THREE.Vector3().add(options.offset);
                                    fillOffset = new THREE.Vector3().addVectors(fillOffset, a);

                                    break;
                            };
                    
                            bottomLeft  = options.offset;
                            bottomRight = new THREE.Vector3().addVectors( options.offset, a );
                            topLeft     = new THREE.Vector3().addVectors( options.offset, b );
                            topRight    = new THREE.Vector3().addVectors( topLeft, a );
                            frontLeft      = new THREE.Vector3().addVectors( bottomLeft, c );
                            frontRight     = new THREE.Vector3().addVectors( bottomRight, c );
            
                            frontLeftUp  = createSegment(bottomLeft, frontLeft, options.color, options.thickness);
                            frontRightUp = createSegment(bottomRight, frontRight, options.color, options.thickness);
                            diagLeft      = createSegment(frontLeft, topLeft, options.color, options.thickness);
                            diagRight     = createSegment(frontRight, topRight, options.color, options.thickness);
                            bridge        = createSegment(frontLeft, frontRight, options.color, options.thickness);
            
                            bottom = createSegment(bottomLeft,  bottomRight, options.color, options.thickness);
                            left =   createSegment(bottomLeft,  topLeft, options.color, options.thickness);
                            top =    createSegment(topLeft,     topRight, options.color, options.thickness);
                            right =  createSegment(bottomRight, topRight, options.color, options.thickness);

                            triangle.mesh = new THREE.Group();
            
                            triangle.mesh.add(frontLeftUp.mesh);
                            triangle.mesh.add(frontRightUp.mesh);
                            triangle.mesh.add(diagLeft.mesh);
                            triangle.mesh.add(diagRight.mesh);
                            triangle.mesh.add(bridge.mesh);

                            triangle.mesh.add(bottom.mesh);
                            triangle.mesh.add(top.mesh);
                            triangle.mesh.add(left.mesh);
                            triangle.mesh.add(right.mesh);
            
                            triangle.mesh.name = "baseRightTriangle";

                            var extrudeOptions = {
                                depth: options.width, 
                                bevelEnabled: false,
                                curveSegments: 24,
                                steps: 1
                            };
            
                            var fillPath = new THREE.Path();
                            fillPath.lineTo(0,options.height);
                            fillPath.lineTo(options.height,0);
                            fillPath.lineTo(0,0);

                            var fill = new THREE.Shape( fillPath.getPoints() );
            
                            var fillMaterial = new THREE.MeshLambertMaterial( {color:options.color, transparent:true, opacity: 0.5, side: THREE.DoubleSide} );
                            var fillGeometry = new THREE.ExtrudeGeometry( fill, extrudeOptions );

                            var fillMesh = new THREE.Mesh( fillGeometry, fillMaterial );          
            
                            fillMesh.rotation.x = rotationFill.x;
                            fillMesh.rotation.y = rotationFill.y;
                            fillMesh.rotation.z = rotationFill.z;
            
                            fillMesh.position.x = fillOffset.x;
                            fillMesh.position.y = fillOffset.y;
                            fillMesh.position.z = fillOffset.z;
            
                            triangle.mesh.add(fillMesh);
            
                            triangle.mesh.original = {};
                            
                            return triangle;
                    
                        };
        
                    })(THREE, TML_MATH3D.createSegment);
    
                    TML_MATH3D.createRectangle = (function(THREE, createSegment, rotateSet) {
    
                        var uv = {};
        
                        uv.i = new THREE.Vector3(1, 0, 0),
                        uv.j = new THREE.Vector3(0, 1, 0),
                        uv.k = new THREE.Vector3(0, 0, 1);
            
                        return function(options = {}) {
        
                            options.plane         = options.plane || "xy-plane";
                            options.offset        = options.offset || new THREE.Vector3(0,0,0);
                            options.width         = options.width || 2;
                            options.height        = options.height || 2;
                            options.color         = options.color || "red";
                            options.thickness     = options.thickness || 5;
                            options.opacity       = options.opacity || 0.4;
                            options.addToScene    = options.addToScene || false;
                            options.addToRotation = options.addToRotation || false;
                            options.fill          = options.fill || false;
                
                            var x, y, z,
                                top, bottom, left, right, fill,
                                topLeft, topRight, bottomLeft, bottomRight,
                                rectangle = {};
                
                            switch(options.plane) {
                                case "yz-plane": 
                
                                    a = new THREE.Vector3().add(uv.j);
                                    b = new THREE.Vector3().add(uv.k);
                    
                                    w = 0.1;//options.thickness;
                                    h = options.width;
                                    d = options.height;
                    
                                    break;

                                case "xz-plane":
                
                                    a = new THREE.Vector3().add(uv.k);
                                    b = new THREE.Vector3().add(uv.i);
                    
                                    w = options.height;
                                    h = 0.1;//options.thickness;
                                    d = options.width;
                    
                                    break;

                                default:
                                case "xy-plane": 
                
                                    a = new THREE.Vector3().add(uv.i);
                                    b = new THREE.Vector3().add(uv.j);
                    
                                    w = options.width;
                                    h = options.height;
                                    d = 0.1;//options.thickness;
                    
                                   break;
                            } 
                    
                            a.multiplyScalar(options.width);
                            b.multiplyScalar(options.height);
            
                            bottomLeft  = options.offset;
                            bottomRight = new THREE.Vector3().addVectors( options.offset, a );
                            topLeft     = new THREE.Vector3().addVectors( options.offset, b );
                            topRight    = new THREE.Vector3().addVectors( topLeft, a );
            
                            bottom = createSegment(bottomLeft,  bottomRight, options.color, options.thickness);
                            left =   createSegment(bottomLeft,  topLeft, options.color, options.thickness);
                            top =    createSegment(topLeft,     topRight, options.color, options.thickness);
                            right =  createSegment(bottomRight, topRight, options.color, options.thickness);
            
                            rectangle.mesh = new THREE.Group();
            
                            rectangle.mesh.add(bottom.mesh);
                            rectangle.mesh.add(top.mesh);
                            rectangle.mesh.add(left.mesh);
                            rectangle.mesh.add(right.mesh);
            
                            if (options.fill) {
                                var fillOffset;
                                a.multiplyScalar(1/2);
                                b.multiplyScalar(1/2);
                                fillOffset = new THREE.Vector3().add(options.offset);
                                fillOffset = new THREE.Vector3().addVectors(fillOffset, a);
                                fillOffset = new THREE.Vector3().addVectors(fillOffset, b);
        
                                var bxgeometry = new THREE.BoxGeometry( w, h, d );
                                var bxmaterial = new THREE.MeshLambertMaterial( {color:options.color, transparent:true, opacity: 0.5, side: THREE.DoubleSide} );
                                var fill = new THREE.Mesh( bxgeometry, bxmaterial );
        
                                fill.position.x = fillOffset.x ;//+ options.width/2;
                                fill.position.y = fillOffset.y ;//+ options.height/2;
                                fill.position.z = fillOffset.z;
                                rectangle.mesh.add(fill);
                            }

                            if (options.addToScene) {
                                scene.add(rectangle.mesh);
                            }
            
                            if (options.addToRotation) {
                                rotateSet.push(rectangle);
                            }
            
                            rectangle.mesh.original = {};
                            
                            return rectangle;
                        }
        
                    })(THREE, TML_MATH3D.createSegment, TML_MATH3D.rotateSet);
    
    
                    TML_MATH3D.createCylinder = (function(THREE) {

                        return function( options = {} ) {
    
                            options.width    = options.width    || 4;
                            options.height   = options.height   || 4;
                            options.color    = options.color    || "blue";
                            options.opacity  = options.opacity  || 0.5;
                            options.rotation = options.rotation || "x-axis";
                
                            var cylinder = {};
            
                            const material = new THREE.MeshLambertMaterial({ 
                                color:options.color, 
                                //side: THREE.DoubleSide, 
                                transparent: true, 
                                opacity: options.opacity
                            });

                            const geometry = new THREE.CylinderGeometry(options.width, options.width, options.height, 24, false);

                            cylinder.geometry = geometry;
                            cylinder.material = material;
            
                            cylinder.mesh = new THREE.Mesh(cylinder.geometry, cylinder.material);
                            cylinder.mesh.name = "cylinder";
            
                            cylinder.rotation = options.rotation;

                            //const wireframeGeometry = new THREE.WireframeGeometry( geometry );
                            //const wireframeMaterial = new THREE.LineBasicMaterial( { color:"black", transparent:true, opacity:"black" } );
                            //const wireframe = new THREE.LineSegments( wireframeGeometry, wireframeMaterial );
            
                            //cylinder.mesh.add( wireframe );

                            cylinder.mesh.original = {};
                            
                            return cylinder;

                        };

                    })(THREE);
        
                    TML_MATH3D.createRing = (function(THREE) {

                        return function( options = {} ) {

                            options.outerRadius = options.outerRadius || 8;
                            options.innerRadius = options.innerRadius || 0;
                            options.depth       = options.depth       || 4; //
                            options.color       = options.color       || "blue";
                            options.opacity     = options.opacity     || 1;
                            options.rotation    = options.rotation    || "x-axis";
                            options.plane       = options.plane       || "xy-plane";
                            options.offset      = options.offset      || new THREE.Vector3(0, 0, 0);
                            options.radianStart = options.radianStart || 0;
                            options.radianEnd   = options.radianEnd   || 2*Math.PI;
        
                            var extrudeOptions = {
                                depth: options.depth,
                                bevelEnabled: false,
                                curveSegments: 24,
                                steps: 1
                            };

                            var ring = {};
            
                            const material = new THREE.MeshLambertMaterial({ 
                                color:options.color, 
                                side: THREE.DoubleSide, 
                                transparent: true, 
                                opacity: options.opacity
                            });

                            var outerDisk = new THREE.Shape(),
                                innerDisk,
                                rotate, 
                                rotateX, rotateY, rotateZ;

                            // Outer and inner disks
                            outerDisk.ellipse(0, 0, options.outerRadius, options.outerRadius, options.radianStart, options.radianEnd);
            
                            if (options.innerRadius !== 0) {
            
                                // Create our innerDisk, which will be subtracted 
                                // from the outerDisk.
                                //
                                innerDisk = new THREE.Path();
                                innerDisk.ellipse(0, 0, options.innerRadius, options.innerRadius, options.radianStart, options.radianEnd);
                
                                // Outer ring MINUS inner ring.
                                //
                                outerDisk.holes.push(innerDisk);

                            }

                            var extrudedDisk = new THREE.ExtrudeGeometry(outerDisk, extrudeOptions);
    
                            const meshMaterial = new THREE.MeshLambertMaterial({ 
                                color:"grey", //options.color, 
                                //side: THREE.DoubleSide, 
                                transparent: true, 
                                opacity: options.opacity
                            });

                            const meshMaterial2 = new THREE.MeshLambertMaterial({ 
                                color:options.color, 
                                //side: THREE.DoubleSide, 
                                transparent: true, 
                                opacity: options.opacity
                            });

                            // Looks horrible ...
                            //  meshMaterial.side = THREE.DoubleSide;
                            //var wireFrameMat = new THREE.MeshBasicMaterial();
                            //wireFrameMat.wireframe = true;

                            // create a multimaterial
                            ring.mesh = THREE.SceneUtils.createMultiMaterialObject(extrudedDisk, [meshMaterial, meshMaterial2]);
                            ring.mesh.name = "ring";
                            ring.mesh.position.x = options.offset.x;
                            ring.mesh.position.y = options.offset.y;
                            ring.mesh.position.z = options.offset.z;
            
                            var rotate;
                            switch(options.rotation) {
                                case "y-axis":
                                    rotateX = new THREE.Vector3(1, 0, 0).multiplyScalar(Math.PI / 2 );
                                    rotateZ = new THREE.Vector3(0, 0, 1).multiplyScalar(-Math.PI / 2 );
                                    rotate = new THREE.Vector3().addVectors(rotateX, rotateZ);
                    
                                    // Comes in as either xy-plane or yz-plane. In either case, 
                                    // and simply by virtue of HOW a ring is constructed (by extrusion), 
                                    // we need to bump our offset along the y-axis.
                                    //
                                    ring.mesh.position.y += options.depth;
                                    break;
                    
                                case "z-axis":
                                    // We are already good-to-go along the z-axis. No
                                    // rotation is required on either dimension.
                                    rotate = new THREE.Vector3(0, 0, 0);
                    
                                    break;
                    
                                default:
                                case "x-axis":
                                    rotateX = new THREE.Vector3(1, 0, 0).multiplyScalar(Math.PI / 2 );
                                    rotateY = new THREE.Vector3(0, 1, 0).multiplyScalar(Math.PI / 2 );
                                    rotate = new THREE.Vector3().addVectors(rotateX, rotateY);
                                    break;
                            };
            
                            ring.mesh.rotateX( rotate.x );
                            ring.mesh.rotateY( rotate.y );
                            ring.mesh.rotateZ( rotate.z );

                            ring.mesh.original = {};
                            
                            return ring;
                        };
    
                    })(THREE);

                    TML_MATH3D.createCylinderSet = (function(
                        TML_MATH3D,
                        THREE, 
                        scene,
                        createCurve, 
                        createRectangle, 
                        createBaseRightTriangle, 
                        createBaseSquare,
                        createBaseHemisphere,
                        createRing, 
                        solidSet, 
                        rotateSet, 
                        maxDistance,
                        maxDelta) {

                        return function( options = {} ) {

                            options.plane         = options.plane         || "xy-plane";
                            options.rotation      = options.rotation      || "primary";
                            options.color         = options.color         || "beige";
                            options.rectPlane     = options.rectPlane     || "xy-plane";
                            options.count         = options.count         || TML_MATH3D.options.count;
                            options.addToScene    = options.addToScene    || false;
                            options.addToRotation = options.addToRotation || false;
                            options.topF          = options.topF          || function(x) { return 2*Math.sqrt(x); };
                            options.bottomF       = options.bottomF       || function(x) { return x/5; };
                            options.pickOne       = options.pickOne       || false;
                            options.opacity       = options.opacity       || 0.8;
                            options.style         = options.style         || "rectangle";
                            options.fill          = options.fill          || false;

                            var rotateOffset,
                                delta = maxDistance /options.count,
                                cylinderSet = {},
                                top = {},
                                bottom = {},
                                unitOffset,
                                ring;
        
                            cylinderSet.mesh = new THREE.Group();
                            cylinderSet.rotate = true;
            
                            options.opacity = (options.pickOne) ? options.opacity : options.opacity/2;

                            switch (options.plane) {
                                case "xy-plane":
                                    pUnitOffset = new THREE.Vector3(1, 0, 0);
                                    sUnitOffset = new THREE.Vector3(0, 1, 0);
                    
                                    cylinderSet.rotation = (options.rotation === "primary") ? "x-axis" : "y-axis";
                        
                                    top.FX     = function(p){return p;};
                                    top.FY     = function(p){return options.topF(p);};
                                    top.FZ     = function(p){return 0;};
                                    bottom.FX  = function(p){return p;};
                                    bottom.FY  = function(p){return options.bottomF(p);};
                                    bottom.FZ  = function(p){return 0;};
                                    break;
                    
                                case "yz-plane":
                                    pUnitOffset = new THREE.Vector3(0, 1, 0);
                                    sUnitOffset = new THREE.Vector3(0, 0, 1);

                                    cylinderSet.rotation = (options.rotation === "primary") ? "y-axis" : "z-axis";
                        
                                    top.FX     = function(p){return 0;};
                                    top.FY     = function(p){return p;};
                                    top.FZ     = function(p){return options.topF(p);};
                                    bottom.FX  = function(p){return 0;};
                                    bottom.FY  = function(p){return p;};
                                    bottom.FZ  = function(p){return options.bottomF(p);};
                                    break;
                    
                                case "xz-plane":
                                    pUnitOffset = new THREE.Vector3(0, 0, 1);
                                    sUnitOffset = new THREE.Vector3(1, 0, 0);

                                    cylinderSet.rotation = (options.rotation === "primary") ? "z-axis" : "x-axis";
                        
                                    top.FX     = function(p){return options.topF(p);};
                                    top.FY     = function(p){return 0;};
                                    top.FZ     = function(p){return p;};
                                    bottom.FX  = function(p){return options.bottomF(p);};
                                    bottom.FY  = function(p){return 0;};
                                    bottom.FZ  = function(p){return p;};
                            }
            
                            const topCurve = createCurve({
                                start:new THREE.Vector3(0,0,0), 
                                distance: (options.count+1)*(maxDelta+0.25), //new THREE.Vector3(10, 10, 10), 
                                incr: 0.2, 
                                funcX:top.FX, 
                                funcY:top.FY, 
                                funcZ:top.FZ, 
                                color:options.color, 
                                thickness:10,
                                rotation:cylinderSet.rotation
                                });

                            const bottomCurve = createCurve({
                                start:new THREE.Vector3(0,0,0), 
                                distance: (options.count+1)*(maxDelta+0.25), //new THREE.Vector3(10, 10, 10), 
                                incr: 0.2, 
                                funcX:bottom.FX, 
                                funcY:bottom.FY, 
                                funcZ:bottom.FZ, 
                                color:options.color, 
                                thickness:10,
                                rotation:cylinderSet.rotation
                                });

                            cylinderSet.mesh.add(topCurve.mesh);
                            cylinderSet.mesh.add(bottomCurve.mesh);
            
                            // See https://stemkoski.github.io/Three.js/CSG.html
                            for (var i=1, x=delta; i <= options.count; i++, x=i*delta) {

                                // This buys me a new vector, (i*delta, 0, 0)
                                var pOffset = new THREE.Vector3().add(pUnitOffset).multiplyScalar(x);
                                var sOffset = new THREE.Vector3().add(sUnitOffset).multiplyScalar( options.bottomF(x) );
                                var offset = new THREE.Vector3().addVectors(pOffset, sOffset);
                
                                switch (options.style) {
                                    case "rectangle":
                                        var rectangle = createRectangle({fill:options.fill, plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});

                                        cylinderSet.mesh.add( rectangle.mesh );
        
                                        // At this time, I am choosing to ALWAYS show the rectangle.
                                        rectangle.mesh.original = {pickOne:false};
        
                                        if (options.pickOne && i !== TML_MATH3D.pickOne(options.count)) {
                                            break;
                                        }
                
                                        if (options.rotation === "primary") {
                                            var outerRadius = options.topF(x),
                                                innerRadius = options.bottomF(x), 
                                                depth       = delta;
                        
                                                offset = pOffset;
                        
                                        } else {
                                            var outerRadius = x+delta, 
                                                innerRadius = x, 
                                                depth       = options.topF(x)-options.bottomF(x);

                                                offset = sOffset;
                                        }

                                        ring = createRing({offset:offset, 
                                            rotation:cylinderSet.rotation, 
                                            plane:options.plane, 
                                            outerRadius:outerRadius, 
                                            innerRadius:innerRadius, 
                                            depth:depth, 
                                            opacity:options.opacity, 
                                            color:"cyan"});
                            
                                        if (i === TML_MATH3D.pickOne(options.count)) {
                                            ring.mesh.pickOne = true;
                                            ring.mesh.original.pickOne = true;
                                        } else {
                                            ring.mesh.pickOne = false;
                                            ring.mesh.original.pickOne = false;
                                        }

                                        cylinderSet.mesh.add( ring.mesh );
                                        break;
                        
                                    case "baseSquare":
                                        var rectangle = createRectangle({fill:options.fill, plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});

                                        cylinderSet.mesh.add( rectangle.mesh );
        
                                        // At this time, I am choosing to ALWAYS show the rectangle.
                                        rectangle.mesh.original.pickOne = false;
        
                                        if (options.pickOne && i !== TML_MATH3D.pickOne(options.count)) {
                                            break;
                                        }
                
                                        var baseSquare = createBaseSquare({plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});
                    
                                        cylinderSet.mesh.add( baseSquare.mesh );
        
                                        if (i === TML_MATH3D.pickOne(options.count)) {
                                            baseSquare.mesh.pickOne = true;
                                            baseSquare.mesh.original.pickOne = true;
                                        } else {
                                            baseSquare.mesh.pickOne = false;
                                            baseSquare.mesh.original.pickOne = false;
                                        }

                                        break;                    
                        
                                    case "baseRightTriangle":
                                        var rectangle = createRectangle({fill:options.fill, plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});

                                        cylinderSet.mesh.add( rectangle.mesh );
        
                                        // At this time, I am choosing to ALWAYS show the rectangle.
                                        rectangle.mesh.original.pickOne = false;
        
                                        if (options.pickOne && i !== TML_MATH3D.pickOne(options.count)) {
                                            break;
                                        }
                
                                        var baseRightTriangle = createBaseRightTriangle({plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});
                    
                                        cylinderSet.mesh.add( baseRightTriangle.mesh );
        
                                        if (i === TML_MATH3D.pickOne(options.count)) {
                                            baseRightTriangle.mesh.pickOne = true;
                                            baseRightTriangle.mesh.original.pickOne = true;
                                        } else {
                                            baseRightTriangle.mesh.pickOne = false;
                                            baseRightTriangle.mesh.original.pickOne = false;
                                        }

                                        break;                    
                        
                                    case "baseHemisphere":
                                        var rectangle = createRectangle({fill:options.fill, plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});

                                        cylinderSet.mesh.add( rectangle.mesh );
                                        
                                        // At this time, I am choosing to ALWAYS show the rectangle.
                                        rectangle.mesh.original.pickOne = false;
        
                                        if (options.pickOne && i !== TML_MATH3D.pickOne(options.count)) {
                                            break;
                                        }
                
                                        var baseHemisphere = createBaseHemisphere({plane:options.plane, offset:offset, width:delta, height:options.topF(x)-options.bottomF(x), color:options.color, opacity:1});
                    
                                        cylinderSet.mesh.add( baseHemisphere.mesh );
        
                                        if (i === TML_MATH3D.pickOne(options.count)) {
                                            baseHemisphere.mesh.pickOne = true;
                                            baseHemisphere.mesh.original.pickOne = true;
                                        } else {
                                            baseHemisphere.mesh.pickOne = false;
                                            baseHemisphere.mesh.original.pickOne = false;
                                        }

                                        ring = createRing({
                                            offset:new THREE.Vector3().addVectors(offset, new THREE.Vector3().add(sUnitOffset).multiplyScalar( (options.topF(x)-options.bottomF(x))/2 )),
                                            rotation:cylinderSet.rotation, 
                                            plane:options.plane, 
                                            outerRadius:(options.topF(x)-options.bottomF(x))/2, 
                                            //innerRadius:innerRadius, 
                                            depth:delta, 
                                            opacity:options.opacity, 
                                            color:options.color,
                                            radianStart: 0,
                                            radianEnd: Math.PI
                                        });

                                        if (i === TML_MATH3D.pickOne(options.count)) {
                                            ring.mesh.pickOne = true;
                                            ring.mesh.original.pickOne = true;
                                        } else {
                                            ring.mesh.pickOne = false;
                                            ring.mesh.original.pickOne = false;
                                        }

                                        cylinderSet.mesh.add( ring.mesh );

                                        break;                    
                        
                                }
                
                            }

                            if ( options.addToScene ) {
                                scene.add(cylinderSet.mesh);
                            }

                            if ( options.addToRotation ) {
                                rotateSet.push(cylinderSet);
                            }

                            cylinderSet.mesh.name = "cylinderSet";
                            
                            cylinderSet.mesh.original = {pickOne:options.pickOne};
                            
                            solidSet.push(cylinderSet);
            
                            // BTW, all other creates (so far) are low-level, and
                            // do not motivate return TML_MATH3D.
                            return TML_MATH3D;
                            //return cylinderSet;
        
                        }

                    })( TML_MATH3D,
                        THREE,
                        TML_MATH3D.scene,
                        TML_MATH3D.createCurve, 
                        TML_MATH3D.createRectangle, 
                        TML_MATH3D.createBaseRightTriangle, 
                        TML_MATH3D.createBaseSquare,
                        TML_MATH3D.createBaseHemisphere,
                        TML_MATH3D.createRing, 
                        TML_MATH3D.solidSet, 
                        TML_MATH3D.rotateSet, 
                        TML_MATH3D.maxDistance,
                        TML_MATH3D.maxDelta);
    
                    TML_MATH3D.options = (function(TML_MATH3D) {
        
                        return {
                            rotate: false,
                            rotate_reset: false,
                            velx: 0,
                            vely: 0,
                            count: 10,
                            quadrant: 1,
                            camera: {
                                speed: 0.0001
                            },
                            position_1: function() {
                                TML_MATH3D.camera.position.x = +40;
                                TML_MATH3D.camera.position.y = +40;
                                TML_MATH3D.camera.position.z = +20;
                                TML_MATH3D.options.show();
                            },
                            position_2: function() {
                                TML_MATH3D.camera.position.x = +40;
                                TML_MATH3D.camera.position.y = -40;
                                TML_MATH3D.camera.position.z = +20;
                                TML_MATH3D.options.hide();
                            },
                            position_3: function() {
                                TML_MATH3D.camera.position.x = +40;
                                TML_MATH3D.camera.position.y = +40;
                                TML_MATH3D.camera.position.z = +10;
                                TML_MATH3D.options.hide();
                            },
                            pickOne: function() {
                                TML_MATH3D.solidSet.forEach(function(solid) {
                                    solid.mesh.children.forEach(function(ele) {
                                        if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                            if ( !ele.pickOne ) {
                                                ele.visible = false;
                                            }
                                        }
                                    });
                                });
                            },
                            hide: function() {
                                TML_MATH3D.solidSet.forEach(function(solid) {
                                    solid.mesh.children.forEach(function(ele) {
                                        if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                            ele.visible = false;
                                        }
                                    });
                                });
                            },
                            show: function() {
                                TML_MATH3D.solidSet.forEach(function(solid) {
                                    solid.mesh.children.forEach(function(ele) {
                                        if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                            ele.visible = true;
                                        }
                                    });
                                });
                            },
                            start: function() {
                                this.rotate = true;
                            },
                            stop: function() {
                                this.rotate = false;
                            },
                            reset: function() {

                                TML_MATH3D.camera.position.x  = TML_MATH3D.original.camera.position.x;
                                TML_MATH3D.camera.position.y  = TML_MATH3D.original.camera.position.y;
                                TML_MATH3D.camera.position.z  = TML_MATH3D.original.camera.position.z;

                                TML_MATH3D.solidSet.forEach(function(solid) {
                                    
                                    if (solid.mesh.name !== "cylinderSet") {
                                        return;
                                    }
                                    
                                    // Reset pickOne.
                                    solid.mesh.pickOne = solid.mesh.original.pickOne;
                                    
                                    solid.mesh.children.forEach(function(ele) {
                                        if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                            ele.pickOne = ele.original.pickOne;
                                        }
                                    });
                                    
                                    // Turn everyone ON again
                                    solid.mesh.children.forEach(function(ele) {
                                        if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                            ele.visible = true;
                                        }
                                    });

                                    // Now, turn everyone OFF save for the pickOne, IF and ONLY IF
                                    // pickOne was engaged ORIGINALLY for this solid.
                                    if (solid.mesh.pickOne) {
                                    
                                        solid.mesh.children.forEach(function(ele) {
                                            if (ele.name === "ring" || ele.name === "baseHemisphere" || ele.name === "baseSquare" || ele.name === "baseRightTriangle") {
                                                if ( !ele.pickOne ) {
                                                    ele.visible = false;
                                                }
                                            }
                                        });
                                        
                                    }
                                    
                                });

                                this.rotate_reset = true;
                                
                            }
                        };

                    })(TML_MATH3D);
                        
                TML_MATH3D.render = (function(
                    THREE, 
                    scene, 
                    camera, 
                    stats, 
                    clock, 
                    orbitControls, 
                    webGLRenderer, 
                    rotateSet, 
                    options, 
                    TML_MATH3D) {
            
                        var step = 0;

                        return function () {
                            stats.update();

                            var pace = 0.02,
                                delta = clock.getDelta();

                            orbitControls.update(delta);

                            $(TML_MATH3D.measures).html("x,y,z:"
                                + parseFloat(Math.round(camera.position.x * 100) / 100).toFixed(0) + ", "
                                + parseFloat(Math.round(camera.position.y * 100) / 100).toFixed(0) + ", "
                                + parseFloat(Math.round(camera.position.z * 100) / 100).toFixed(0));
                                
                            if (options.rotate) {

                                step += pace;

                                rotateSet.forEach(function(rs) {
                    
                                    if (typeof rs.rotation !== "undefined") {
                                        switch(rs.rotation) {
                                            case "x-axis": rs.mesh.rotation.x = step; break;
                                            case "y-axis": rs.mesh.rotation.y = step; break;
                                            case "z-axis": rs.mesh.rotation.z = step; break;
                                        }
                                    }
                        
                                });
                                
                            }
                    
                            if (options.rotate_reset) {

                                step = 0;

                                rotateSet.forEach(function(rs) {
                
                                    if (typeof rs.rotation !== "undefined") {
                                        switch(rs.rotation) {
                                            case "x-axis": rs.mesh.rotation.x = step; break;
                                            case "y-axis": rs.mesh.rotation.y = step; break;
                                            case "z-axis": rs.mesh.rotation.z = step; break;
                                        }
                                    }
                    
                                });
                                
                                options.rotate_reset = false;
                                options.rotate = false;
                            
                            }

                            // render using requestAnimationFrame
                            requestAnimationFrame(TML_MATH3D.render);
                            webGLRenderer.render(scene, camera);
                        };

                    })(THREE, TML_MATH3D.scene, TML_MATH3D.camera, TML_MATH3D.stats, TML_MATH3D.clock, TML_MATH3D.orbitControls, TML_MATH3D.webGLRenderer, TML_MATH3D.rotateSet, TML_MATH3D.options, TML_MATH3D);

                    TML_MATH3D.command = (function(TML_MATH3D) {
                    
                        return function(cmd) {
                            switch (cmd) {
                                case "pickOne":
                                    TML_MATH3D.options.pickOne();
                                    break;
                                case "start":
                                    TML_MATH3D.options.start();
                                    break;
                                case "stop":
                                    TML_MATH3D.options.stop();
                                    break;
                                case "show":
                                    TML_MATH3D.options.show();
                                    break;
                                case "hide":
                                    TML_MATH3D.options.hide();
                                    break;
                                case "reset":
                                    TML_MATH3D.options.reset();
                                    break;
                            }
                        }
                    
                    })(TML_MATH3D);
                    
                    TML_MATH3D.createButton = (function(command, id) {
                    
                        return function(name, cmd) {

                            $("<button class='ctns-button ctns-3d-controls ctns-3d-controls-"+cmd+"'>"+name+"</button>")
                                .appendTo("#WebGL-output-"+"X")
                                .on("click", function() { command(cmd); });

                        };
                        
                    })(TML_MATH3D.command, id);
 
                })(TML_MATH3D[id], id, options);
            

                (function(TML_MATH3D, id, options, buttons) {

                    options.axis = options.axis || {};
                    options.axis.thickness = options.axis.thickness || 10;
                    
                    TML_MATH3D.createAxis( {thickness: options.axis.thickness, addToScene: true} );
        
                    //TML_MATH3D.options.position_1();

//                     buttons.titles.forEach(function(e) {
//                         if ( options.buttons.includes(e) ) {
//                             TML_MATH3D.createButton(e, buttons[e]);
//                         }
//                     });
                    
                    options.buttons.forEach(function(e) {
                    
                        // Make sure such a button even exists
                        if ( buttons.titles.includes(e) ) {
                            TML_MATH3D.createButton(e, buttons[e]);                        
                        }
                        
                    });

//                     TML_MATH3D.createButton("Pick One", "pickOne");
//                     TML_MATH3D.createButton("Start", "start");
//                     TML_MATH3D.createButton("Stop", "stop");
//                     TML_MATH3D.createButton("Show", "show");
//                     TML_MATH3D.createButton("Hide", "hide");
//                     TML_MATH3D.createButton("Reset", "reset");
                    
                })(TML_MATH3D[id], id, options, buttons);
            
                return TML_MATH3D[id];
                
            };

        })(TML_MATH3D, THREE);
        
        const event = new Event('THREE');
        document.dispatchEvent(event);
    });
    
})(jQuery, THREE, TML_MATH3D);



//         var controls = new function () {
//                     
//             // we need the first child, since it's a multimaterial
// 
//             this.rotation = 0;
//         
//             this.redraw = function () {
//         
//                 var x = camera.position.x,
//                     y = camera.position.y,
//                     z = camera.position.z;
//                 
//                 camera.position.x = x * Math.cos( Math.PI*controls.rotation/180 ) + z * Math.sin( Math.PI*controls.rotation/180 );
//                 camera.position.z = z * Math.cos( Math.PI*controls.rotation/180 ) - x * Math.sin( Math.PI*controls.rotation/180 );
// 
//                 camera.updateProjectionMatrix();
// 
// 
//                 return;
//             
//                 while(cylinderSet.length > 0) {
//                     c = cylinderSet.pop();
//                     scene.remove(c);    
//                 }
//     
//                 for (i = 1; i <= options.count; i++) {
//                     cylinderSet.push( c = cylinder(f(i*deltaX), deltaX) );
// 
//                     //scene.add(c);
//                     c.position.set((i*deltaX), (i*0), (i*0));
// 
//                     c.rotateZ( Math.PI / 2 );
//                 }
//     
//             };
//         };

