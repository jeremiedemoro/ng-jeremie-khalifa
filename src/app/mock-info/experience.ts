import { ExperienceArticles, SkillsArticles } from '../interfaces/experience.model';

export const EXPERIENCEARTICLES: ExperienceArticles[] = [
    {
        fa: '', company: 'Pivotal Solution Ltd.', title: 'Front-End (Angular) Developer', date: '2019-Present', city: 'Jerusalem',
        info: {
            about: [
                "Pivotal Solutions Ltd. is a company specializing in web and mobile apps development."
            ],
            projects: [
                "Zenplans - Platform to save everything important.",
                "SafeGuard - Dashboard for safety management system.",
                "VDX Diagram - Platform for doctors to make rapid diagnosis.",
                "Pivotal Solutions - Official company’s web app."
            ],
            responsabilities: [
                "In charge of the whole UI development.",
                "Use reusable components, observable services, reactive forms & template binding syntax.",
                "Transform UX designs and wireframes into high quality code, pixel perfect & fully responsive."
            ],
            technologies: [
                "Angular, Javascript/TypeScript, HTML, CSS/SASS, Bootstrap/Angular Material.",
                "Node/Express, MongoDB.",
                "Git."
            ],
            environment: [
                "Agile."
            ]
        }
    },
    {
        fa: '', company: 'Altria Ltd.', title: 'Front-End (Vue) Developer', date: '2018-2019', city: 'Bet Shemesh',
        info: {
            about: [
                "Altria Israel, Ltd. was an israeli subsidiary of Altria Group, a U.S. Fortune 200 company that owns the premier tobacco companies in the United States (Marlboro, Parliament etc)."
            ],
            projects: ["Verve - Web app to sell electronic cigarettes."],
            responsabilities: [
                "Build from scratch a new platform using Vue and modern tools.",
                "Translate UX designs and wireframes into high quality code, pixel perfect & fully responsive."
            ],
            technologies: [
                "Vue, Javascript/TypeScript, HTML, CSS/SASS, Bootstrap/Material/Vuetify.",
                "Git."
            ],
            environment: [
                "Agile."
            ]
        }
    },
    {
        fa: '', company: 'Les Echos Ltd.', title: 'Front-End & UI Developer', date: '2016-2018', city: 'Jerusalem',
        info: {
            about: [
                "Echos Partners Industrie provided digital marketing, websites & communication."
            ],
            projects: ["Many small projects for clients."],
            responsabilities: [
                "Creation of websites, landing pages and many small projects for clients respecting all web standards."
            ],
            technologies: [
                "JavaScript, jQuery, AJAX, JSON, HTML, CSS/SASS, Bootstrap.",
                "Git."
            ],
        }
    },
]

export const SKILLSARTICLES: SkillsArticles[] = [
    { fa: 'fab fa-angular', title: 'Angular', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fab fa-js-square', title: 'JavaScript', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fab fa-js-square', title: 'TypeScript', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fas fa-css3', title: 'CSS', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fab fa-sass', title: 'SASS', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fab fa-bootstrap', title: 'Bootstrap', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fab fa-google', title: 'Angular Material', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fa-html5', title: 'HTML', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fas fa-code', title: 'Responsive Web Design', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fas fa-code', title: 'Web Standards', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { fa: 'fa fas fa-code', title: 'UI Frameworks', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
]