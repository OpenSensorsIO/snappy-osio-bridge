// npm install mqtt log4js

// Config
var broker = 'mqtt://mqtt.opensensors.io',
    port = 1883,
    clientId = 'client-id',
    topic = 'topic',
    username = 'username',
    password = 'password';

var log4js = require('log4js'),
    log = log4js.getLogger('osio-bridge');
log.setLevel('INFO');
log4js.configure({
    appenders: [{type: 'console'}]});

var mqtt  = require('mqtt'),
    job = null;

var mqtt_client = mqtt.connect(broker,{
    clientId: clientId,
    username: username,
    password:  password
});

mqtt_client.on('connect', function () {
    log.info('Connected');
    job = setInterval(publish_data, 10 * 1000);
    publish_data('test');
});

mqtt_client.on('close', function () {
    if (job != null) {
        clearInterval(job);
        job = null;
    }
    log.info('Connection closed');
});

var exec = require('child_process').exec;

function publish_data() {
    exec("usr/local/bin/pcsensor", function(error,stdout,stderr) {
	if (error != null) {
	    log.error(error);
	    log.error(stderr);
	} else {
	    log.info('Publishing... '+stdout);
	    mqtt_client.publish(topic, stdout);
	}	    
    });
}
