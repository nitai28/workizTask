let queueNames = [];

exports.saveQueueName = (req, res) => {
    queueNames.push(req.body.message);
    res.sendStatus(200)
}

exports.getNextMessage = (req, res) => {
    const timout = +req.query.timeout || 10000;
    setTimeout(() => {
        const queueName = queueNames.pop();
        if (!!queueName) {
            res.json(queueName)
        } else {
            res.sendStatus(204)
        }
    }, timout)
}

exports.getAllMessages = (req, res) => {
    if (queueNames.length > 0) {
        res.json(queueNames)
    } else {
        res.send('There no new messages')
    }
}
