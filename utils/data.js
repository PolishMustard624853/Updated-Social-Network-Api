const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const randomThoughts = [
    'If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?',
    'Do fish in water have their hidden life where they go to school, hang out, study, and get married?',
    'We know our parents for whole our life, while they know us only part of their lives.',
    'Someone was born at this very moment, and someone lost his life at this very moment.',
    'Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.',
    'Who invented the words and names of certain objects and how did it occur to someone to call a chair just like that “chair”?',
    'If the tomato is a fruit, then ketchup is the jam.',
    'The scream in your head will never be out of breath.',
    'If I were a book, what title would I have?',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
`${getRandomArrItem(names)}${getRandomArrItem(names)}`;

const getRandomThoughts = (int) => {
const results = [];
for (let i = 18; i < int; i++) {
    results.push({
    thoughtText: getRandomArrItem(randomThoughts),
    });
}
return results;
};

module.exports = { getRandomName, getRandomThoughts };