"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

  // Pixel Tracker by Edward Guertin -----------------------------------------------------------
      
      var pixelTracker = {
        debug: false, // Set this to false before pushing live
        /*
        Set your own IDs here to map with tracker pixel urls (the actual url will be updated by ad ops - these are
       placeholders)
        */ 
       //actual urls yet to be recieved
        urls: {
        'click_shop_now_topLeft':  [ 'https://jp-testanyxyz123url.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord=' ],
        'click_women_left1':       [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_women_left2':       [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_logo_btmLeft':      [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_group_centerTop':   [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_shop_now_topRight': [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_man_right1':        [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_man_right2':        [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        'click_logo_btmRight':     [ 'https://track.adform.net/adfserve/?bn=ADFORM-TRACKER-NUMBER-HERE;1x1inv=1;srctype=3;ord='        ],
        },
       
       
        track: function(elemID) {
          var trackerUrls = pixelTracker.urls[elemID];
          if (!trackerUrls) {
           if (pixelTracker.debug) {
           console.log('Trackers not found for id ' + elemID + '!');
           }
          return;
          }

           for (var i = 0; i < trackerUrls.length; i++) {
            var trackerUrl = trackerUrls[i] + Date.now();
            new Image().src = trackerUrl;
              if (pixelTracker.debug)  {
                 console.log('track', elemID)
                 console.log(trackerUrl)
              }
            }

        }// end track function

    
     }
  // end initiate tracker
      
   // -----------------------------------------------------------------------------

		switch (document.body.id) {
			case "body_top":
				// top panel code here

				/*********************************************************************
				 * Premium.addon.topExpandable(expandedHeight);
				 * @desc Sets top panel to expand on hover
				 * @param {integer} [expandedHeight=560] - height of expanded panel
				 *********************************************************************/
				// try {
				// 	jpxApi.expandTop(560);
				// } catch (e) {
				// 	Premium.addon.topExpandable(560);
				// }

    //click_group_centerTop
    document.querySelector( "#top_group-photo" ).addEventListener("click", function() {
      pixelTracker.track("click_group_centerTop" )});
    break;
    
    //GSAP by Leroy Andrade
			case "body_left":
				// left panel code here
			
    var timelineLeft = gsap.timeline();
   
    timelineLeft.to  ( "#female1", {opacity: 1 }, 1    )
    timelineLeft.to  ( "#female2", {opacity: 1 }, 3    )  
    timelineLeft.set ( "#female1", {opacity: 0 }, 3.1  ) 
 
    timelineLeft.to  ( "#female1", {opacity: 1 }, 4.5  ) 
    timelineLeft.set ( "#female2", {opacity: 0 }, 4.6  )
    timelineLeft.set ( "#female1", {opacity: 0 }, 6.6  )  
    timelineLeft.to  ( "#female2", {opacity: 1 }, 6.6  )  

    //db click

    document.querySelector( "#cta-Left"     ).addEventListener("click", function() { pixelTracker.track( "click_shop_now_topLeft"  )});
     
    document.querySelector( "#female1"      ).addEventListener("click", function() { pixelTracker.track( "click_women_left1"       )});

    document.querySelector( "#female2"      ).addEventListener("click", function() { pixelTracker.track( "click_women_left2"       )});

    document.querySelector( "#logo_btmLeft" ).addEventListener("click", function() { pixelTracker.track( "click_logo_btmLeft"      )});


				break;

			case "body_right":
				// right panel code here
    var timelineright = gsap.timeline();

    timelineright.to  ( "#male1", {opacity: 1 }, 1    )
    timelineright.to  ( "#male2", {opacity: 1 }, 3    )  
    timelineright.set ( "#male1", {opacity: 0 }, 3.1  ) 
 
    timelineright.to  ( "#male1", {opacity: 1 }, 4.5  ) 
    timelineright.set ( "#male2", {opacity: 0 }, 4.6  )
    timelineright.set ( "#male1", {opacity: 0 }, 6.6  )  
    timelineright.to  ( "#male2", {opacity: 1 }, 6.5  )  


    //db click
    document.querySelector( "#cta-Right"     ).addEventListener("click", function() { pixelTracker.track( "click_shop_now_Right"  )});
 
    document.querySelector( "#male1"         ).addEventListener("click", function() { pixelTracker.track( "click_man_right1"      )});

    document.querySelector( "#male2"         ).addEventListener("click", function() { pixelTracker.track( "click_man_right2"      )});

    document.querySelector( "#logo_btmRight" ).addEventListener("click", function() { pixelTracker.track( "click_logo_btmRight"   )});

    

				break;

			case "body_back":
				// back panel code here
				break;
		}

		/* END OF CUSTOM JS */
	}
}