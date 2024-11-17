const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer()

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

server.on('request', app)
server.listen(3000, () => {
    console.log('server started')
})

/** Begin Websocket */

const WebsocketServer = require('ws').Server;


const wss = new WebsocketServer({ server });

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log('Connected clients:', numClients);


    wss.broadcast(`Current clients: ${numClients}`);

    ws.readyState === ws.OPEN && ws.send('Welcome to the chat room!');


    ws.on('close', function close() {
        console.log(`Client disconnected. ${numClients} clients remaining`);
        console.log('A Client has disconnected');
    })

})

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    })
}