// was assingments.js
const { Schema, Types } = require('mongoose');

let timeSince = (date) => {
        let seconds = Math.floor((Date.now() - date) / 1000);

        let interval = seconds / 31536000; // years

        let n;

        if (interval > 1) {
                n = Math.floor(interval);
                return `${n} year${n - 1 ? 's' : ''} ago`;
        }

        interval = seconds / 2592000; // months
        if (interval > 1) {
                n = Math.floor(interval);
                return `${n} month${n - 1 ? 's' : ''} ago`;
        }

        interval = seconds / 86400; // days
        if (interval > 1) {
                n = Math.floor(interval);
                return `${n} day${n - 1 ? 's' : ''} ago`;
        }

        interval = seconds / 3600; // hours
        if (interval > 1) {
                n = Math.floor(interval);
                return `${n} hour${n - 1 ? 's' : ''} ago`;
        }

        interval = seconds / 60; // minutes
        if (interval > 1) {
                n = Math.floor(interval);
                return `${n} minute${n - 1 ? 's' : ''} ago `;
        }

        n = Math.floor(seconds);
        return `${n} second${n - 1 ? 's' : ''} ago`;
        };

        const reactionSchema = new Schema(
        {
        reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId(),
        },
        reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        },
        username: {
        type: String,
        required: true,
        },
        createdAt: {
        type: Date,
        default: Date.now,
        },
        updatedAt: {
        type: Date,
        get: (date) => timeSince(date),
        },
        id: false,
        },
        {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        }
);

module.exports = reactionSchema;