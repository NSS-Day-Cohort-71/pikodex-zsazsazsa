const database = [
    {
        id: 1,
        name: 'Crouchy',
        imageUrl: './assets/crouchy.png',
        category: 'Hunch',
        abilities: 'Crouch',
        weakness: 'Posture',
        audio: './assets/crouchy.wav'
    },
    {
        id: 2,
        name: 'Flink',
        imageUrl: './assets/flink.png',
        category: 'Small and Angry',
        abilities: 'Quick Reflexes',
        weakness: 'Impatience',
        audio: "./assets/flink.wav"
    },
    {
        id: 3,
        name: 'Putron',
        imageUrl: './assets/putron.png',
        category: 'Stinky',
        abilities: 'Toxic Gas Emission',
        weakness: 'Air Freshener',
        audio: "./assets/putron.mp3"
    },
    {
        id: 4,
        name: 'Sherton',
        imageUrl: './assets/sherton.png',
        category: 'Kind of Stupid',
        abilities: 'Extraordinary Clumsiness',
        weakness: 'Sharp Objects',
        audio: "./assets/sherton.wav"
    },
    {
        id: 5,
        name: 'Gobojomo',
        imageUrl: './assets/gobojomo.png',
        category: 'Monkee',
        abilities: 'Banana Telekinesis',
        weakness: 'Peeling Bananas',
        audio: "./assets/gobojomo.wav"
    },
    {
        id: 6,
        name: 'Pete',
        imageUrl: './assets/pete.png',
        category: 'Business',
        abilities: 'PowerPoint Mastery',
        weakness: 'Paper Cuts',
        audio: "./assets/pete.mp3"
    },   
    {
        id: 7,
        name: 'Tarmus',
        imageUrl: './assets/tarmus.png',
        category: 'Rocks',
        abilities: 'Rock Solid Defense',
        weakness: 'Moss Growth',
        audio: "./assets/tarmus.wav"
    },
    {
        id: 8,
        name: 'Throrugg',
        imageUrl: './assets/throrugg.png',
        category: 'Throw Rug',
        abilities: 'Tangle Trap',
        weakness: 'Vacuum Cleaners',
        audio: "./assets/throrugg.mp3"
    },
    {
        id: 9,
        name: 'Skunch',
        imageUrl: './assets/skunch.png',
        category: 'Mischievous',
        abilities: 'Master of Pranks',
        weakness: 'Close Talkers',
        audio: "./assets/skunch.wav"
    }
];

export const getPikomon = () => {
    return database.map((pikoman) => ({...pikoman}))
}
