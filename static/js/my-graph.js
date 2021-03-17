(function($, THREE, TML_MATH3D) {
  $(document).ready(function() {
    var TML_MATH3D = window.TML_MATH3D || {};
    var handleQ = $('#MY_GRAPH');
    TML_MATH3D.init({handle:handleQ, name:"TMPL_GRAPHIC3DID_1", camera: {position: {x:20, y:-30, z:20}}})
        .createCylinderSet({
            style:"baseSquare", 
            plane:"yz-plane", 
            rotation:"primary", 
            color:"green", 
            addToScene:true, 
            addToRotation:true, 
            pickOne:true})
        .render();
  });
})(jQuery, THREE, TML_MATH3D);

