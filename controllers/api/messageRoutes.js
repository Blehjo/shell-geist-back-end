const router = require('express').Router();
const { Message } = require('../../models');

router.get('/:conversation_id', async (req, res) => {
    try {
        const messageData = await Message.findAll({
            where: {
                conversation_id: req.params.conversation_id
            },
            order: [
                ['sent_datetime', 'DESC'],
            ],
        });

        const messages = messageData.map((message) => message.get({ plain: true }))
        res.json(
            messages
        );
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/:conversation_id', async (req, res) => {
    try {
        const messageData = await Message.create({
            from_profile: req.session.user_id,
            conversation_id: req.params.conversation_id,
            message_text: req.body.message_text,
        });
        res.status(200).json(messageData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;