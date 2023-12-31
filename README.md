> _I have worked on this project on a short period of time so that I can learn about how NextJS work overall. It was a fun experience and I'm super happy with the result. You might noticed a delayed response on initial load which may take from under 100ms to over 1s as stated in this [link](https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/#:~:text=According%20to%20an%20analysis%20of,ms%20to%20over%201%20second.) **due to Vercel's Serverless Function having to spin up for the first time (Cold Boot) because of inactive traffic of the website**._

#### Introduction

Prompt.io is a place where people can upload and explore other people AI prompts!

**Features**
<small>

- Upload your own prompts<br/>
- Explore other people prompts <br/>
- Create, edit, and delete your own prompts <br/>
- Authentication with Google using NextAuth.js <br/>
- Search for prompts by user, description, or tags <br/>
- Copy and paste prompts to clipboard<br/>
- Website is mobile friendly

</small>

**Frameworks**

- [Next.JS](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [NextAuth.js](https://next-auth.js.org/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.

**Platforms**

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [MongoDb](https://www.mongodb.com/) - Database for storing user data and prompts

**UI**

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [DaisyUi](https://daisyui.com/) – Component library for Tailwind CSS
- [React SVG Icon](https://reactsvgicons.com/) – Beautifully simple, pixel-perfect icons
- [react-if](https://www.npmjs.com/package/react-if) – Simple React component that makes if else statement on React component more readable
- [react-content-loader](https://skeletonreact.com/) - SVG component to create placeholder loading, like Facebook cards loading or also known as skeleton UI

**Hooks and Utilities**

- [use-debounce](https://github.com/xnimorz/use-debounce) – Debounce a function call / state update

**Code Structure**

- [React Atomic Design](https://danilowoz.com/blog/atomic-design-with-react) - Popularly known within the design world, Atomic Design helps to build consistent, solid and reusable design systems

**Code Quality**

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
