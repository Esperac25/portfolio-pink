import reflect from './reflect.png';
import weekly from './weekly.png';
import quiz from './quiz.png';
const store = {
    projects: [
        {
            img: [reflect],
            title: 'Reflect',
            description: "Reflect was created as a full stack journal app, where users can add, edit, delete and search through their private journal entries in a blog like interface.",
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/reflect-client',
            live: 'https://reflect-inhdu56ty-esperac25.vercel.app/',
        },
        {
            img: [weekly],
            title: 'Weekly',
            description: 'Weekly was created as a full stack application to help users keep track of to-do items for their week, users can add, delete and view items in their weekly view.',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repo: 'https://github.com/Esperac25/weekly-client',
            live: 'https://weekly-client-app.vercel.app/',
        },
        {
            img: [quiz],
            title: 'GeoQuiz',
            description: 'GeoQuiz was a group made jQuery application, created to help users study USA states and capitols.',
            stack: 'HTML5, CSS3, jQuery',
            repo: 'https://github.com/Esperac25/Geography-Quiz-App',
            live: 'https://jpol95.github.io/quiz-app/',
        },
    ]
};

export default store;