const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

const thoughtCount = async () =>
Thought.aggregate()
    .count('thoughtCount')
    .then((numberOfThoughts) => numberOfThoughts);

module.exports = {
    getThoughts(req, res) {
    Thought.find()
        .then(async (thoughts) => {
        const thoughtObj = {
            thoughts,
            thoughtcount: await thoughtCount(),
        };
        return res.json(thoughtObj);
        })
        .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
        });
    },
    getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought,
                // grade: await grade(req.params.thoughtId),
            })
        )
        .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
        });
    },
    createThought(req, res) {
    console.log(req.body);
    Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No such thought exists' })
            : User.findOneAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            )
        )
        .then((user) =>
        !user
            ? res.status(404).json({
                message: 'Thought deleted, but no users found',
            })
            : res.json({ message: 'Thought successfully deleted' })
        )
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
    },
    addReaction(req, res) {
    console.log('------------------------')
    console.log('You are adding a reaction');
    console.log(req.body);
    console.log('------------------------')
    console.log('thoughtId below');
    console.log(req.params.thoughtId);
    console.log('------------------------')
    console.log('reaactionId below');
    console.log(req.params.reactionId);
    console.log('------------------------')
    Thought.findOneAndUpdate( 
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
    )
        .then((thought) =>
        !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    removeReaction(req, res) {
    console.log('------------------------')
    console.log('You are removing a reaction');
    console.log(req.body);
    console.log('------------------------')
    console.log('thoughtId below');
    console.log(req.params.thoughtId);
    console.log('------------------------')
    console.log('reaactionId below');
    console.log({ reactionId: req.params.reactionId });
    console.log('------------------------')
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
    )
        .then((thought) =>
        !thought
            ? res
                .status(404)
                .json({ message: 'No thought found with that ID :(' })
            : res.json(`Reaction with ID '${req.params.reactionId}' Deleted from ThoughtID ${req.params.thoughtId}`)
        )
        .catch((err) => res.status(500).json(err));
    },
};