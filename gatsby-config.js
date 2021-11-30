module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://thailaidevport.netlify.app/`,
    // Your Name
    name: 'Thai Lai',
    // Main Site Title
    title: `Thai Lai | Full-Time Software Engineer Student`,
    // Description that goes under your name in main bio
    description: `Full-Time Software Engineer Student at The University of Texas at Arlington`, 
    location: `Located in Dallas/Fort-Worth Metroplex`,
    // Optional: Twitter account handle
    author: `https://stackoverflow.com/users/14517192/watusshi`,
    // Optional: Github account URL
    github: `https://github.com/watusshi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thai-lai/`,
    // Content of the About Me section
    about: `Greetings! My name is Thai Lai. I'm a Software Engineering student at the University of Texas at Arlington, due to graduate May 2022. I've loved computers and coding from an early age, and I'm excited to pursue it as a field both academically and professionally.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Java and Donut Express (JADE)',
        description:
          'An application which allows business to run more effectively (easier communicate between customers and sellers)',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      /**{
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },**/
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Cyber Security at UTA',
        description: 'Active member, September 2021 - Present',
        link: 'https://mavorgs.campuslabs.com/engage/organization/csec',
      },
      {
        name: 'Mobi',
        description: 'Active developer, September 2021 - Present',
        link: 'https://utamobi.com/#about',
      },
      /**{
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },**/
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Flutter, HTML, C, C++, C#, Java, Python (Numpy, Pandas), SwiftUI',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Linux/Unix, MacOS, Microsoft Offices, Microcontrollers, , Agile / Scrum',
      },
    ],
    //others section to add self interest and stuff
    others: [
      {
        name: 'Human Languages',
        description:
          'English, Vietnamese',
      },
    ],
  },
  plugins: [
    /**`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },**/
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thailaidevport`,
        short_name: `thailaidevport`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
