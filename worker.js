const zmq = require("zeromq");

// const sock = new zmq.Pull();
var sock = zmq.socket('sub')

run();

async function run() {
    await sock.connect("tcp://127.0.0.1:7000");
    console.log("Connected to server....");

    // for await (const msg of sock) {
    //     console.log(`worker received ${msg.toString()}`);
    // }

    sock.subscribe("");
    sock.on("message", function(reply) {
        console.log('Received message: ', reply.toString());
    })
}