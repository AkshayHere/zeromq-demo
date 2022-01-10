const zmq = require("zeromq");

// const sock = new zmq.Push();
var sock = zmq.socket('pub');

run();

async function run() {
    await sock.bind("tcp://127.0.0.1:7000");
    console.log("Server is running at 7000....");
    console.log("Press any key to start sending jobs....");
    process.stdin.once("data", send);
}

async function send() {
    console.log("About to send some jobs!");
    for (let i = 0; i < 100; i++) {
        await sock.send(`sending job ${i}`);
        // wait for 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}