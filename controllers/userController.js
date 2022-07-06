const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : Thought.deleteMany({ _id: { $in: user.thoughts } })
        )
        .then(() => res.json({ message: 'User and thoughts deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        console.log('------------------------')
        console.log('You are adding a friend');
        console.log(req.body);
        console.log('------------------------')
        console.log('userId below');
        console.log(req.params.userId);
        console.log('------------------------')
        console.log('friendId below');
        console.log(req.params.friendId);
        console.log('------------------------')
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        )
        .then((user) =>
            !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(`User with ID '${req.params.friendId}' is now a friend to UserID ${req.params.userId}`)
        )
        .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        console.log('------------------------')
        console.log('You are deleting a friend');
        console.log(req.body);
        console.log('------------------------')
        console.log('userId below');
        console.log(req.params.userId);
        console.log('------------------------')
        console.log('delete friendId below');
        console.log(req.params.friendId);
        console.log('------------------------')
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId  } },
        console.log(req.body)
        )
        .then((user) =>
            !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID :(' })
            : res.json(`Friend with ID '${req.params.friendId}' Deleted from UserID ${req.params.userId}`)
            
        )
        .catch((err) => res.status(500).json(err));
    },
};