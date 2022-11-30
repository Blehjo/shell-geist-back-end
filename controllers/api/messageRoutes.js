const router = require('express').Router();
const { Message } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const messageData = await Message.findAll({
            order: [
                ['sent_datetime', 'DESC'],
            ],
        });

        const messages = messageData.map((message) => message.get({ plain: true }))
        res.json(
            messages
        )
        console.log(messages)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/:from_profile/:conversation_id', async (req, res) => {
    try {
        const messageData = await Message.create({
            from_profile: req.params.from_profile,
            message_text: req.body.message_text,
            conversation_id: req.params.conversation_id,
        });
        res.status(200).json(messageData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;