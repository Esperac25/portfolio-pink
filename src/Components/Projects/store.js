import reflect from ''

const store = {
    projects: [
        {
            img: {reflect},
            title: 'Reflect',
            description: 'Fullstack application designed for users to save private journal entries and view them in their personal blog',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/reflect-client',
            live: 'https://reflect-inhdu56ty-esperac25.vercel.app/',
        },
        {
            img: 'portfolio/src/Components/Projects/weekly.png',
            title: 'Weekly',
            description: 'Fullstack application designed to help users track and organize tasks for their week.',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/weekly-client',
            live: 'https://weekly-client-app.vercel.app/',
        },
        {
            img: 'portfolio/src/Components/Projects/quiz.png',
            title: 'Geography Quiz',
            description: 'A group made jquery application designed as a fun quiz to help users practice geography',
            stack: 'HTML5, CSS3, jQuery',
            repo: 'https://github.com/Esperac25/Geography-Quiz-App',
            live: 'https://jpol95.github.io/quiz-app/',
        },
        
        
    ]
};

export default store;