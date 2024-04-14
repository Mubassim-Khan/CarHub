# CarHub

![Preview Image](https://github.com/Mubassim-Khan/CarHub/blob/master/public/Preview.png)

<div align="center">
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
     <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Features](#features)
2. [Tech Stack](#tech-stack)
4. [Getting Started](#quick-start)
5. [Contributing](#contributing)
6. [Acknowledgements](#acknowledgements)
7. [Contact](#contact)

## <a name="introduction">Introduction</a>

This repository contains the code of a car rental website, made using Next.js, TypeScript, Tailwind CSS & Headless UI. The project contains the visual designs, animations, cards, API data fetching, SSR (Server-Side Rendering) & all other parts and components which are required and necessary for building a modern website.

## <a name="features">Features</a>

👉 **Home Page**: Showcases a visually appealing display of cars fetched from a third-party API, providing a captivating introduction to the diverse range of vehicles available.

👉 **Exploration and Filtering**: Explore a wide variety of cars from around the world, utilizing a search and filter system based on criteria such as model, manufacturer, year, fuel type, and make.

👉 **Transition to Server-Side Rendering**: A seamless transition from client-side rendering to server-side rendering, enhancing performance and providing a smoother browsing experience.

👉 **Pagination**: For easy navigation through a large dataset of cars, allowing users to explore multiple pages effortlessly.

👉 **Metadata Optimization and SEO**: Optimize metadata for car listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

## <a name="tech-stack">Tech Stack 🛠️</a>

- [React.js](https://reactjs.org/) - JavaScript Library
- [Next.js](https://nextjs.org/) - Web Development Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Prettier](https://prettier.io/) - Code Formatter
- [Headless UI](https://headlessui.com/) - UI Components
- [Imagin Cars](https://www.imagin.studio/solutions/api) - Car Images
- [Rapid API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/) - Cars Data

## <a name="#quick-start">Getting Started</a>

To get started with this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Mubassim-Khan/CarHub.git
```

2. Open the project in your preferred code editor.

3. Install the project dependencies using npm:

```bash
npm install
```

4. Set Up Environment Variables by creating a new file named `.env` in the root of your project and add the following variables:

```env
RAPID_API_KEY = "your credentials"
RAPID_API_HOST = "your credentials"
NEXT_PUBLIC_IMAGIN_API_KEY = "your credentials"
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from [Rapid API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/) and [Imagin Cars](https://www.imagin.studio/solutions/api)

5. Run the project

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## <a name="contributing">Contributing</a>

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## <a name="acknowledgements">Acknowledgements</a>

* Copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
* This project is a task from TechnoHacks Edu Tech, as a part of Internship Program.

## <a name="contact">Contact</a>

If you have any questions, suggestions, or feedback, you can reach out to the project maintainer:

- LinkedIn : [Mubassim Ahmed Khan](https://www.linkedin.com/in/mubassim-ahmed-khan/)
- Email: [mubassimkhan@gmail.com](mailto:mubassimkhan@gmail.com)

---

<!----->

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
