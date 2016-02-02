// npm install mqtt log4js

var log4js = require('log4js'),
    log = log4js.getLogger('aqe-averages-publisher');
log.setLevel('INFO');
log4js.configure({
    appenders: [{type: 'console'}]});

var mqtt  = require('mqtt'),
    broker = 'mqtt://mqtt.opensensors.io',
    port = 1883,
    clientId = '1752',
    topic = '/users/martint/test',
    job = null;

var mqtt_client = mqtt.connect(broker,{
    clientId: clientId,
    username: "martint",
    password: "PASSWORD"
});

mqtt_client.on('connect', function () {
    log.info('Connected');
    job = setInterval( function () {publish_data('test'); }, 10 * 1000);
    publish_data('test');
});

mqtt_client.on('close', function () {
    if (job != null) {
        clearInterval(job);
        job = null;
    }
    log.info('Connection closed');

});

function publish_data(data) {
    log.info('Publishing... '+data);
    mqtt_client.publish(topic, data);
}
