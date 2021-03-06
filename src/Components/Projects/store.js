import reflect from './reflect.png';
import weekly from './weekly.png';
import quiz from './quiz.png';
const store = {
    projects: [
        {
            img: [reflect],
            title: 'Reflect',
            description: 'A Fullstack application designed for users to save private journal entries and view them in their personal blog',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/reflect-client',
            live: 'https://reflect-inhdu56ty-esperac25.vercel.app/',
        },
        {
            img: [weekly],
            title: 'Weekly',
            description: 'A Fullstack application designed to help users track and organize tasks for their week.',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/weekly-client',
            live: 'https://weekly-client-app.vercel.app/',
        },
        {
            img: [quiz],
            title: 'GeoQuiz',
            description: 'A group made jquery application designed as a fun quiz to help users practice geography',
            stack: 'HTML5, CSS3, jQuery',
            repo: 'https://github.com/Esperac25/Geography-Quiz-App',
            live: 'https://jpol95.github.io/quiz-app/',
        },
    ]
};

export default store;