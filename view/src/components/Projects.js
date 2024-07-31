import React from "react";

const Projects = () => {
    return (
      <section>
        <h2>Projects</h2>
        <div>
          <h3>Image Processing Tool</h3>
          <p>React.js, Amazon S3, AWS (Lambda, Gateways, Step Functions, CloudFormation) | <a href="https://github.com/dhruvil-a-patel/IPT" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          <ul>
            <li>Developed a web-based tool for compression, conversion, and resizing of images, utilizing React.js and AWS for a serverless architecture.</li>
            <li>Used AWS Lambda to perform image processing tasks and managed the application flow using AWS Step Functions.</li>
            <li>Streamlined deployment using AWS CloudFormation.</li>
          </ul>
        </div>
        <div>
          <h3>Centralized Health System</h3>
          <p>Express.js, MySQL, Node.js, React.js, Chai, Mocha, Joi, JWT | <a href="https://github.com/dhruvil-a-patel/CHS" target="_blank" rel="noopener noreferrer">GitHub Link</a></p>
          <ul>
            <li>Led backend development for a term project at Dalhousie University, guiding and collaborating with a teammate new to backend development.</li>
            <li>Achieved 87% test coverage for backend code, including integrated API tests and unit tests.</li>
            <li>Designed a relational database structure for efficient data storage.</li>
          </ul>
        </div>
      </section>
    );
};

export default Projects;