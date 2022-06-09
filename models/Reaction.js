const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
{
    reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    },
    reactionBody: {
    type: String,
    required: true,
    maxLength: 300,
    validate: [
        ({ length }) => length <= 300,
        "Reactions must be 300 characters long!",
    ],
    },
    username: {
    type: String,
    required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm:a"),
    },
},
{
    toJSON: {
    getters: true,
    },
    id: false,
}
);

module.exports = reactionSchema;
