import reflect from './reflect.png';
import espace from './espace-it.png';
import quiz from './quiz.png';
const store = {
    projects: [
        {
            img: [reflect],
            title: 'Reflect',
            description: "Reflect was created as a full stack journal application, where users can add, edit, delete and search through their private journal entries in a blog like interface.",
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            client: 'https://github.com/Esperac25/reflect-client',
            server: 'https://github.com/Esperac25/reflect-server',
            live: 'https://reflect-inhdu56ty-esperac25.vercel.app/',
        },
        {
            img: [espace],
            title: 'Espace-It',
            description: 'Espace-It was created as a full stack language learning application, users can create an account, sign in ans study French using the spaced-repetition revision technique.',
            stack: 'React, HTML5, CSS3, PostgreSQL, Express, Node, Cypress',
            client: 'https://github.com/Esperac25/spaced-rep-client',
            server: 'https://github.com/Esperac25/spaced-rep-server',
            live: 'https://weekly-client-app.vercel.app/',
        },
        {
            img: [quiz],
            title: 'GeoQuiz',
            description: 'GeoQuiz was a group made jQuery application, created to help users study USA states and capitols.',
            stack: 'HTML5, CSS3, jQuery',
            client: 'https://github.com/Esperac25/Geography-Quiz-App',
            live: 'https://jpol95.github.io/quiz-app/',
        },
    ]
};

export default store;
