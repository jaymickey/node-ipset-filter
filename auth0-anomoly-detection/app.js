const serverless = require('serverless-http')
const express = require('express')
const loadIPset = require('load-ip-set')
const net = require('net')
const app = express()

app.get('/api/ipcheck', (req, res) => {

    let ip = req.query.ipaddr
    if (!ip || !net.isIP(ip)) {
        res.status(400).send('Bad Request')
    }

    // Don't do this for real, relying on a 3rd party service like github is not a good idea.
    // This is just for testing right now!
    loadIPset('https://raw.githubusercontent.com/firehol/blocklist-ipsets/master/firehol_level1.netset',
        (err, ipSet) => {
            if (err) throw err
            let allowed = !ipSet.contains(ip) && ip.substr(-2) === '.0' && ip.substr(-3) === '.255'
            res.setHeader('Content-Type', 'application/json')
            res.json({"allowed": allowed})
    })
})

module.exports.handler = serverless(app)