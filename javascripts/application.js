var clubData = {"categories":["Arts","Economics","Environmental","Multicultural"],"clubs":[{"name":"International Club (iClub)","board":{"CAMD Liason":["Adrienne Allen"],"Co-Heads of NISO":["Marcello Rossi","Rosa Morona"],"Administrative Secretary":["Mofopefoluwa Olarinmoye"],"Publicity and Outreach Director":["Michael Shen"],"Upper Board":["Malika Dia","Tucker Drew","Moe Sunami"],"Lower Board":["Serena Ren"],"Faculty Advisor:":["L. Springer"]},"day":["Wednesday"],"time":"5:30","location":"CAMD","description":"Main purpose of this club is to provide support for PA international students and to advance knowledge and understanding of foreign cultures within the school community.  We talk about customs, describe holidays, try to find solutions to cultural incidents, talk about countries, etc.  We play cultural simulation games or volleyball games with other groups from Diversity Alliance.","website":"","categories":[]},{"name":"Phillipian","board":{"Editor in Chief":["Sara J. Luzuriaga"],"Managing Editors":["Skylar-Bree E. Takyi","Erica S. Shin","Avery J. Jonas"],"Executive Digital Editor":["Pranav K. Tadikonda"],"Faculty Advisor":["N. Scott"]},"day":["Monday","Tuesday","Wednesday","Thursday"],"time":"8:00","location":"Newsroom","description":"The Phillipian is an independent student run weekly newspaper.  The paper is always working to improve its content to better serve the Andover community while staying conscious of the responsibilities of producing an entirely uncensored publication.","website":"","categories":[]},{"name":"Art Exchange","board":{"President":["Corissa Hollenbeck"],"Head of Photography":["Lauren Luo"],"Head of Painting and Drawing":["Sabrina Lu"],"Head of Mixed Media":["Jessica Lee"],"Faculty Advisor":["E. Crivelli"]},"day":["Tuesday"],"time":"5:45","location":"Elson Art Center","description":"Our goal is to create an environment for dedicated artists outside of the classroom, in order to learn from each other artistically as well as educate others about global and Andover-specific issues. We aim to gather a group of dedicated artists who will create pieces that send a message or address a cause that applies both to our campus community as well as the world beyond Andover.","website":"","categories":["Arts", ""]}]}

var currentClub;

$(document).ready(function(){

  // Include parse inside!!
  Parse.initialize("nhetQrvqKNFE5veguHPycojrCoyJA87zrxzg1wQ2", "KRqpMHMwUjDIahX9pOMSNnqaPOSbFDxPaksRpCfx");

  // Test Object
  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
  });

  $(".feedCell").click(function(){
    $(currentClub).find('h3').css("font-weight", "normal")
    currentClub = $(this)
    $(this).find('h3').css("font-weight", "bold")
    $("#clubTitle").text($(this).find('h3').text())
  })

  $("#subscribeButton").click(function(){
    var emailAddress = $("#emailBox").val()
    var listID = "0438fd50bb"
    var data = {
      "apikey": "50c41848bcc4c81b561e474b30f4d41a-us11",
      "id": listID,
      "email": {
          "email": emailAddress
      },
      "merge_vars": {
          "mc_language": "en ",
      },
      "email_type": "text"
      }

    $.post("https://us11.api.mailchimp.com/2.0/lists/subscribe.json", data, function(){
      alert("success")
    }).done(function(){

    }).fail(function(){

    }).always(function(){

    })
  })

})