// global session
var session = new QiSession(function(session) {
                // document.getElementById('typed').innerHTML = "Connection esterblished!";
              }, function() {
                // document.getElementById('typed').innerHTML = "Could not connect to the robot";
              });


// Subscribe to ALMemory Service
session.service("ALMemory").then(function(ALMemory) {
  // document.getElementById('typed').innerHTML = "ALMemory proxy subscription successful!";
  ALMemory.getData('mail_list_all').then(function(mail_list_all){

    var x = mail_list_all;
    // number of mail in the list
    var len_list_mail = x.length;

    var img_database = [["Jaakko","porokuokka.jpg"], ["Linh","linh.jpg"]];

   for (var i = 0; i < len_list_mail ; i++)
	{
    if(x[i][1] != "0") {
  		var div1 = document.createElement("div");
      		div1.className = "responsive";

  		var div2 = document.createElement("div");
      		div2.className = "gallery";

  		var div3 = document.createElement("div");
  		div3.className = "desc";
      if (x[i][1] == "1"){
        div3.innerHTML =  String(x[i][1]) + " uusi sähköposti";
      } else {div3.innerHTML = String(x[i][1]) + " uutta sähköpostia";}

      var div4 = document.createElement("div");
      div4.className = "name";
      div4.innerHTML = String(x[i][0]);

   		var img = document.createElement("img");
  		img.src = img_database[i][1];


      		div2.appendChild(img);
      		div2.appendChild(div4);
  		div2.appendChild(div3);

  		div1.appendChild(div2);
  		document.body.appendChild(div1);
  }
  else { continue; }

	}
  });

});
