//import JXG from 'jsxgraphcore';

JXG.extend(JXG.Board.prototype, {

    getMousePosition: function(t, e) {

        var h = this.getCoordsTopLeftCornerByDocument(t), // mr
            f,
            z,
            bodyStyleZoomAmount,
            loginBar,
            loginBarAmount; //mr
    
        f = JXG.getPosition(t, e);
        z = JXG.getOffsetByObject(t, this.containerObj);

        // mr
        if ("" !== document.body.style.zoom) {
            bodyStyleZoomAmount = parseInt(document.body.style.zoom.replace("%",""))/100;
        } else {
            bodyStyleZoomAmount = 1.0;
        }
        loginBar = document.getElementById("wpadminbar");

        if (null !== loginBar) {
            loginBarAmount = parseFloat(loginBar.clientHeight);
        } else {
            loginBarAmount = 0;
        }

        return [
            Math.max(0, f[0]/bodyStyleZoomAmount-z[0]), 
            Math.max(0, (f[1]-loginBarAmount)/bodyStyleZoomAmount-z[1])
        ]
    },
    
    getCoordsTopLeftCornerByDocument: function (e) { 
        var h = this.containerObj,
            f = JXG.getOffsetByDocument(e);
    
            this.cPos = f;
            return f
    }
});

JXG.extend(JXG, {

    getOffsetByDocument: function (e) { 

      //from https://nerdparadise.com/programming/javascriptmouseposition
      //
      var xpos,
          ypos;
  
      if (e)
      {
        //FireFox
        xpos = e.pageX;
        ypos = e.pageY;
      }
      else
      {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
      }

        return [xpos, ypos]
    },
    
    getOffsetByObject: function (e, obj) { // mr e is mouseevent

        //from https://nerdparadise.com/programming/javascriptmouseposition
        //
        var obj_left = 0,
            obj_top = 0,
            xpos = 0,
            ypos = 0;
        while (obj.offsetParent)
        {
            obj_left += obj.offsetLeft;
            obj_top += obj.offsetTop;
            obj = obj.offsetParent;
        }
        
        return[obj_left, obj_top]
    },

    getPosition: function(i, r, s) {
        var o, n, a, h = 0, l = 0;
        if (i || (i = window.event),
        s = s || document,
        a = i[JXG.touchProperty],
        JXG.exists(a) && 0 === a.length && (a = i.changedTouches),
        JXG.exists(r) && JXG.exists(a))
            if (-1 === r) {
                for (n = a.length,
                o = 0; o < n; o++)
                    if (a[o]) {
                        i = a[o];
                        break
                    }
            } else
                i = a[r];

        return i.pageX && (h = i.pageX,
        l = i.pageY),
        [h, l]
    },

    addEvent: function(t, i, r, s) {
        var o = function() {
            return r.apply(s, arguments)
        };
        o.origin = r,
        s["x_internal" + i] = s["x_internal" + i] || [],
        s["x_internal" + i].push(o),
        // See https://stackoverflow.com/questions/46542428/warning-added-non-passive-event-listener-to-a-scroll-blocking-touchstart-even
        //e.exists(t) && e.exists(t.addEventListener) && t.addEventListener(i, o, !1),
        JXG.exists(t) && JXG.exists(t.addEventListener) && t.addEventListener(i, o, {passive: true}),
        JXG.exists(t) && JXG.exists(t.attachEvent) && t.attachEvent("on" + i, o)
    }
});

