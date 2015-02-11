function MessageBroker() {
  this.messageHandler = undefined;
  this.init();
}

MessageBroker.prototype.init = function() {
  console.log("MessageBroker started");

  //hook for callbacks
  var self = this;
  
  // The websocketURI we received from the server
  console.log("websocketURI = ", websocketURI);
  this.ws = new WebSocket('ws://' + websocketURI);

  this.ws.onmessage = function (event) {
    console.log("received message:", event);
    document.getElementById('system-messages').innerHTML += "<br />Received message:"+ JSON.parse(event.data);
  };

  this.ws.onerror = function (event) {
    console.log("websocket failed");
    document.getElementById('system-messages').innerHTML += "<br />Websocket failed";
  };

  this.ws.onopen = function (event) {
    console.log("websocket connected");
    document.getElementById('system-messages').innerHTML += "<br />Websocket connected";
  };

  this.ws.onclose = function (event) {
    console.log("websocket disconnected");
    document.getElementById('system-messages').innerHTML += "<br />Websocket disconnected";

  };
},

MessageBroker.prototype.attachHandler = function(messageHandler) {
  this.messageHandler = messageHandler;
},

MessageBroker.prototype.send = function(msg){
  //use json.stringify() to serialize message to a javascript object
  this.ws.send(JSON.stringify(msg));
}