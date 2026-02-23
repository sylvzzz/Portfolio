*MyPortfolio*

## Description

**MyPortfolio** is a simple project that consists on a simple website that acts like a **hub** for my projects, social media, and tech stack/skills, overall just who i am as a developer.

---


## Tech Stack used

This website was built using:

### React.js
- **React.js** is a **JavaScript framework** that is used to build websites using components to efficiently build better UI/UX.

### Tailwindcss
- **Tailwindcss** is a **CSS framework** to reduce bulky .css files and have better styled websites

### Vercel

- **Vercel** is a simple **deplowment service** that allows developers to deploy lightweight Web Applications and users to access this page as a regular website


## Using this project as a Template

If you found this Website intersting and want to use it for your own portfolio please leave credit for my work and leave a link for my GitHub profile or this repoistory saying "I took inspiration from "link"..." or "I used this template "link"..." and follow the tutorial bellow.

First open up a terminal:

## Cloning this repository

If you clone using SSH

```bash
git clone git@github.com:sylvzzz/Portfolio.git cloned_folder
```

Or if you use HTTPS:

```bash
git clone https://github.com/sylvzzz/Portfolio.git cloned_folder
```

This will get all the neccessary files for the portfolio.

## Customize your portfolio

Here, around line 121, you can write your bio, just switch mine by yours:

```JavaScript
<p className="text-lg text-gray-700 leading-relaxed">
                  Olá, sou o Diogo. Tenho 19 anos e sou super apaixonado por tecnologia e desenvolvimento web.
                  Neste momento sou estudante da 42 Lisboa, onde estou a aprender Python e C principalmente e adquirindo skills importantes como peer-to-peer e alto rigor.
                  Fora da 42 procuro melhorar o meu desenvolvimento web, ultimamente tenho me focado em React, Node.js e Tailwindcss.
</p>
```

Around line 74, you can insert your skills, on javascript you´ll need to insert a comma between every "skill", and after the last one no comma, follow this example:

```JavaScript
  const skills = [
    "skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7"
  ];

```
Around line 80, same as the last example, follow this example
```JavaScript
 const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/your_username" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/your_username" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/your_username" }
  ];
```

To costumize the project´s section, around line 5 customize the projects data:

```JavaScript
const projects = [
    {
      id: 1,
      name: "name_of_your_project",
      description: "Description",
      tech: ["tech_stack", "used", "or", "what_you_used", "for_the_project"], 
      downloadUrl: "link_to_demonstration_of_your_project, if not available just type #",
      demoUrl: "link_to_demonstration_of_your_project, if not available just type #"
    },
```
If you put # on the links, there will be a notification alerting that there isn´t a demo/download available:

```JavaScript
if (project.demoUrl === '#') 
{
    e.preventDefault();
    alert('A Demonstração deste projeto não está disponível');
}
```

Finally on line 262, change my name to yours:

```JavaScript
<p className="text-gray-600 font-medium">
              © 2025 Diogo Silva
</p>
```


**If you really intend to deploy your portfolio follow the next commands, else you just want to run it locally just enter your project folder in a terminal window and type npm run dev, then just enter your browser and access <a href="https://localhost:5173">localhost:5173</a>"**

## Moving files to the deployment repository

For this part you will need to create a GitHub repository, private if you want, or public (If public please tag my repository or my profile).

First create the git repository, and then login/create an account in <a href="https://vercel.com">vercel.com</a>

Once that is done, type the following commands on a terminal window:

```bash
cd ..
git clone git@github.com:your_username/your_repo.git your_portfolio #if you´re using ssh
git clone https://github.com/your_username/your_repo.git your_portfolio #if you´re using https
cp -r cloned_folder/* your_portfolio/ #copy all the portfolio files
cd your_portfolio #enter your portfolio directory
git add . #upload your files to the repository
git commit -m "Your notes for this upload" #confirms changes in the repo
git push #pushes the uploads
```
if everything went well, got to <a href="https://vercel.com">vercel.com</a> and create a new project, the platform will ask to put the link for your project repository, once you insert it and confirm, the platform will build your portfolio and it should be live.