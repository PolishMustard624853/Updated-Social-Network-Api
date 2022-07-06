const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await Thought.deleteMany({});

    await User.deleteMany({});

    const users = [];
    const thoughts = [];

    for (let i = 0; i < 20; i++) {

        const thoughtText = getRandomThoughts(20);

        const username = getRandomName();
        const email = `${username}@${username}.com`;
        const friends = getRandomName();

    console.log(username);
    console.log(email);
    console.log(friends)
    console.log(thoughtText);
        thoughts.push({
        thoughtText,
        })

        users.push({
        username,
        email,
        friends,
        friends,
        });    
    }
    

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts)
    console.info('Seeding complete! 🌱');
    process.exit(0);
});