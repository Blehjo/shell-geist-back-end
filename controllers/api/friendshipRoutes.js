const router = require('express').Router();
const { UserPost, UserProfile, Friendship } = require('../../models');

router.get('/', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const postData = await Friendship.findAll({
                include: [
                    {
                        model: UserProfile,
                        where: {
                            id: req.session.user_id
                        }
                    }
                ],
                order: [
                    ['id', 'DESC']
                ]
            });
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

// router.get('/:id', async (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//         try {
//             const postData = await UserPost.findAll({
//                 where: {
//                     // profile_id: req.session.user_id,
//                     profile_request: req.params.id
//                 },
//                 include: [
//                     {
//                         model: PostComment
//                     }
//                 ],
//                 order: [
//                     ['id', 'DESC']
//                 ]
//             });
//             res.json(postData);
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

router.post('/:id', async (req, res) => {
    try {
        const postData = await Friendship.create({
            profile_request: req.session.user_id,
            profile_accept: req.params.id
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.put('/:id', async (req, res) => {
//     try {
//         const postData = await UserPost.findAll({
//             where: {
//                 profile_id: req.session.user_id,
//                 id: req.params.id
//             }
//         });
//         postData.set(req.body);
//         await postData.save();
//         res.status(200).json(postData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Friendship.destroy({
            where: {
                profile_request: req.session.user_id,
                id: req.params.id
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;