window.addEventListener('hashchange', function () {
     var currentLocation = window.location.hash ;
     var triggerPages= ['#origin','#destination','#calender','#review'];
     if(currentLocation.indexOf(triggerPages)>-1){
          console.log('changed'); 
          teal.updateDataLayer()
     utag.view(utag_data) 
     }
    });

    //to-do: need to map URL's to page names

  