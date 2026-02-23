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
After cloning the repo, just enter your portfolio directory.

```bash
cd cloned_folder
rm -rf .git  #removes the .git folder, if or when you move all the files necessary for the portfolio, it will be connected to my repo, and if you try to create a git repo it will cause conflit
```

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

I used this source for my tech stack, if you are a software developer i recommend you using it too:
```JavaScript

 const skills = [
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Tailwindcss", icon: "devicon-tailwindcss-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Bash", icon: "devicon-bash-plain" },
    { name: "Vercel", icon: "devicon-vercel-plain" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "FileZilla", icon: "devicon-filezilla-plain colored" },
    { name: "Windows Server", icon: "devicon-windows8-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Apache", icon: "devicon-apache-plain colored" },
    { name: "WordPress", icon: "devicon-wordpress-plain colored" },
    { name: "Peer-to-Peer", icon: null },
    { name: "Computer Networks", icon: null },
    { name: "Problem Solving", icon: null },
    { name: "System Administration", icon: null },
    { name: "Email Automation", icon: null },
  ];

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
```

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
      name: "PAP 2025",
      description: "Rede Social/Aplicação Web similar ao Reddit criada para conectar alunos da minha escola secundária",
      tech: [
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "Apache", icon: "devicon-apache-plain colored" },
      ],
      downloadUrl: "https://github.com/sylvzzz/PAP_2025",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419835227658936320/?originTrackingId=yc7dzwh%2F41pFciTsk2pnJw%3D%3D"
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


**If you really intend to deploy your portfolio follow the next commands, else you just want to run it locally just enter your project folder in a terminal window and type **npm install** and **npm run dev**, then just enter your browser and access <a href="https://localhost:5173">localhost:5173</a>"**

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