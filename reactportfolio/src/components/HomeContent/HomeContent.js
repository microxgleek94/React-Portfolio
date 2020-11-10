import React from "react";
import AboutPic from "../../assets/images/Black_Girl_With_Laptop.jpg"

function AboutMeContent() {
    return (
        <div class="container-fluid">
            <div class="row" id="main-row">
                <div class="col-sm-7" id="bodyContent">
                    <h3> Welcome to my Website!</h3>
                    <div id="border" width="400px"></div>
                    <img id="AboutPic" src={AboutPic}
                        className="rounded float-left img-fluid" alt="JPG of Black Girl With Laptop" />
                    <div id="styleText">
                        <p>
                            Full-stack software developer with a background in English Creative Writing interested in creating video games with complex characters and universal storylines.  Recent graduate in Columbia University’s Full-Stack Coding Boot Camp to solidify skills in frontend and backend Javascript, HTML, CSS, React,js, Node.js.
                            I thoroughly enjoy working on a team, and believe overcoming obstacles with patience, clear, concise communication, and supporting one another's strengths and leveraging those skills will have the best outcomes. I consider myself a very organized and methodical individual that values efficiency to reach my goals. On all 3 of my collaborative team projects during the boot camp, I was the project manager for the team. Recently, I honed my backend skills by utilizing passport.js and Twitter authentication for my team’s final project, which is a user-data driven TikTok-styled website to assist users in finding apartments in their area.
                            Currently, I am taking Udemy courses to learn C# and familiarize myself with the basics of Unity’s gaming engine so I may build upon my portfolio with personal gaming projects.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMeContent;