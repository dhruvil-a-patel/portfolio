import React from "react";

const Experience = () => {
    return (
      <section>
        <h2>Experience</h2>
        <div>
          <h3>Tulip.io Inc</h3>
          <p>Software Developer Co-op, Kitchener, Canada</p>
          <p>January 2024 – April 2024</p>
          <ul>
            <li>Integrated a third-party payment processor for a major multi-national retailer, developing and documenting REST APIs for balance inquiry, issuing new gift cards, and processing refunds using PHP.</li>
            <li>Migrated the checkout API project to an existing project and worked on DevOps deployment tasks using Terraform.</li>
            <li>Participated in code reviews, maintaining high standards and providing constructive feedback.</li>
          </ul>
        </div>
        <div>
          <h3>ZURU Tech India Pvt Ltd</h3>
          <p>Software Developer, Ahmedabad, India</p>
          <p>April 2021 – August 2022</p>
          <ul>
            <li>Developed and maintained the back-end for ZURU Edge influencer management platform using Node.js.</li>
            <li>Created, documented, and maintained over 25 REST APIs using Express.js, with Chai and Mocha for testing and PostgreSQL for the database.</li>
            <li>Developed a JavaScript script to clean, format, and import approximately 25,000 influencer records from an Excel sheet into the database.</li>
            <li>Integrated Microsoft Mail into the influencer management module using Azure, enabling email functionality with OAuth2.0 authentication.</li>
          </ul>
        </div>
        <div>
          <h3>Kiran Infosoft</h3>
          <p>Junior Software Developer, Ahmedabad, India</p>
          <p>July 2020 – March 2021</p>
          <ul>
            <li>Worked on over 20 business and management apps using the Odoo ERP system, managing backend processes with Python and frontend design with XML.</li>
            <li>Independently developed a desktop application for Windows OS using Python and Tkinter for financial reporting, designed for small businesses.</li>
          </ul>
        </div>
      </section>
    );
};

export default Experience;