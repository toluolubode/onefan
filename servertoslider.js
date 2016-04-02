 ref.parent().child(authData.uid.toString()).once('value', function(dataSnapshot) {
    var mydata = dataSnapshot.val();
    var username = mydata.username;
    var ip = mydata.ip_address;
    var tvshows = mydata.content.tv_shows;
    var games = mydata.content.games;
    var music = mydata.content.music;
    //initialize front end update of mdl sliders according to intrest
    var drake = music.drake.intrest;
    var acdc =  music.acdc.intrest;
    var kendricklamar = music.kendricklamar.intrest;
    var taylorswift = music.taylorswift.intrest;
    
    var americanhorrorstory = tvshows.americanhorrorstory.intrest;
    var arrow = tvshows.arrow.intrest;
    var bojackhorseman = tvshows.bojackhorseman.intrest;
    var daredevil = tvshows.daredevil.intrest;
    var gameofthrones =  tvshows.gameofthrones.intrest;
    var gotham = tvshows.gotham.intrest;
    var houseofcards = tvshows.houseofcards.intrest;
    var narcos = tvshows.narcos.intrest;
    var newgirl = tvshows.newgirl.intrest;
    var orangeisthenewblack = tvshows.orangeisthenewblack.intrest;
    var scream = tvshows.scream.intrest;
    var suits  = tvshows.suits.intrest;
    var supernatural = tvshows.supernatural.intrest;
    var truedetective = tvshows.truedetective.intrest;
    var walkingdead = tvshows.walkingdead.intrest;
    ///
    var batmanarkhamknight = games.batmanarkhamknight.intrest;
    var bloodborne  = games.bloodborne.intrest;
    var fallout4 = games.fallout4.intrest;
    var watchdogs = games.watchdogs.intrest;
    
    //after pulling intrest from server, we set the mdl slider bars to these vals
    //@games
   document.getElementById("fallout4_slider").value = fallout4;
   document.getElementById("batmanarkhamknight_slider").value = batmanarkhamknight;
   document.getElementById("watchdogs_slider").value = watchdogs;
   document.getElementById("bloodborne_slider").value = bloodborne;
   //@tvshows
   
    document.getElementById("gameofthrones_slider").value = gameofthrones;
    document.getElementById("truedetective_slider").value = truedetective;
    document.getElementById("walkingdead_slider").value = walkingdead;
    document.getElementById("suits_slider").value = suits;
    document.getElementById("arrow_slider").value = arrow;
    document.getElementById("supernatural_slider").value = supernatural;
    document.getElementById("americanhorrorstory_slider").value = americanhorrorstory;
    document.getElementById("daredevil_slider").value = daredevil;
    document.getElementById("houseofcards_slider").value = houseofcards;
    document.getElementById("orangeisthenewblack_slider").value = orangeisthenewblack;
    document.getElementById("bojackhorseman_slider").value = bojackhorseman;
    document.getElementById("narcos_slider").value = narcos;
    document.getElementById("scream_slider").value = scream;
    //@music
    document.getElementById("acdc_slider").value = acdc;
    document.getElementById("drake_slider").value = drake;
    document.getElementById("kendricklamar_slider").value = kendricklamar;
    document.getElementById("taylorswift_slider").value = taylorswift;
    
    
    


 });