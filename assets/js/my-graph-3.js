(function($, THREE, TML_MATH3D) {
  $(document).ready(function() {
    var TML_MATH3D = window.TML_MATH3D || {};
    var handleQ = $('#MY_GRAPH');

    // My-Graph-3
    //
    TML_MATH3D.init({handle:handleQ, name:"TMPL_GRAPHIC3DID_9"})
        .createCylinderSet({
            style:"rectangle", 
            plane:"xy-plane", 
            rotation:"primary", 
            color:"red", 
            addToScene:true, 
            addToRotation:true, 
            pickOne:false})
        .render();

  });
})(jQuery, THREE, TML_MATH3D);

