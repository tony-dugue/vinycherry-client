## Présentation du projet

IHM en Nextjs13 de VinyCherry, une application de type mediathèque pour les supports musicaux et plus particulièrement les vinyles (techno utilisées : NextJS, TypeScript, TailwindCss, Shadcn-ui, Redux, RTK-query, storybook)

Le client du projet a été initialisé avec le starter de la CLI [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Installation du projet

<br>

> 🚨 Attention: Ce projet require Node >=18 et le package Manager utilisé est obligatoirement yarn !

<br>

- récupération du projet sur Github par HTTPS :

```shell script
$ git clone https://github.com/tony-dugue/vinycherry-client.git
```

- installer les packages :
```bash
yarn install
```

## Démarrer l'application

Démarrer le serveur de développement (à la racine du projet) :
```bash
yarn dev
```

Le projet sera visible dans le navigateur à l'adresse (en mode développeur) :
[http://localhost:3000](http://localhost:3000)

(la page se rechargera lors des modifications.
Les lint Errors seront visible dans le terminal.)

## Autres commandes

Vérification des erreurs EsLint :
```bash
yarn lint
```

Formatter tous les fichiers de l'application avec Prettier :
```bash
yarn prettier
```

## Mise en production

Préparer le projet pour le déploiement :

```bash
yarn build
```

## Ressources utilisées dans le projet

### Librairies utilisées :

Framework react : [NextJS](https://nextjs.org/)<br />
Langage : [TypeScript](https://www.typescriptlang.org/)<br />
Framework utility-first CSS  : [TailwindCss](https://tailwindcss.com/)<br />
Librairie de composants : [Shadcn-ui](https://ui.shadcn.com/)<br />
State Manager : [Redux-toolkit](https://redux-toolkit.js.org)<br />
Data-fetching : [RTK-query](https://redux-toolkit.js.org/tutorials/rtk-query)<br />
workshop to build UIs in isolation : [Storybook](https://storybook.js.org/)<br />
Linter : [EsLint](https://eslint.org/)<br />
Code Formatter : [Prettier](https://prettier.io/)<br />
Git Hooks : [Husky](https://typicode.github.io/husky/)<br />
Gestionnaire de dépendances : [Yarn](https://yarnpkg.com/)<br />





## Learn More

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
