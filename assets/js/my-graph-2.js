(function($, THREE, TML_MATH3D) {
  $(document).ready(function() {
    var TML_MATH3D = window.TML_MATH3D || {};
    var handleQ = $('#MY_GRAPH');

    TML_MATH3D.init({handle:handleQ, name:"TMPL_GRAPHIC3DID_2"})
        .createCylinderSet({
            style:"baseSquare", 
            plane:"xy-plane", 
            rotation:"primary", 
            color:"red", 
            addToScene:true, 
            addToRotation:true, 
            pickOne:false})
        .createCylinderSet({
            style:"baseSquare", 
            plane:"yz-plane", 
            rotation:"primary", 
            color:"green", 
            addToScene:true, 
            addToRotation:true, 
            pickOne:false})
        .createCylinderSet({
            style:"baseSquare", 
            plane:"xz-plane", 
            rotation:"primary", 
            color:"blue", 
            addToScene:true, 
            addToRotation:true, 
            pickOne:false})
        .render();

  });
})(jQuery, THREE, TML_MATH3D);

