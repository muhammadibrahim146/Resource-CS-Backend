// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "./Navbar";
// import video from '../assets/140578-775389242_small.mp4'
// import tech2 from '../assets/tech2.jpg'
// import pic0 from '../assets/pic0.jpg'
// import WhyChoose from "./WhyChoose";
// import { NavLink, useNavigate } from "react-router-dom";
// gsap.registerPlugin(ScrollTrigger);
// export default function LandingPage() {

//     useEffect(() => {
//         const link = document.createElement("link");
//         link.rel = "stylesheet";
//         link.href = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
//         document.head.appendChild(link);
//         gsap.to("#main", {
//             backgroundColor: "black",
//             scrollTrigger: {
//                 trigger: "#main",
//                 scroller: "body",
//                 start: "top -10%",
//                 end: "top -80%",
//                 scrub: 1,
//             },
//         });
//     }, []);
//     const navigate = useNavigate()
//     return (
//         <div className="w-full text-white overflow-x-hidden" >
//             <video
//                 className="vidtop h-[100%] w-[100%] fixed object-cover z-[-1]"
//                 autoPlay
//                 muted
//                 loop
//             >
//                 <source
//                     src={video}
//                     type="video/mp4"
//                 />
//             </video>
//             <div id="main" className="overflow-hidden relative bg-[rgba(0,0,0,0.466)] h-full w-full m-0 p-0">
//                 {/* Page 1 */}
//                 <div className="page1 h-screen w-full relative flex justify-center items-center flex-col text-center z-[10]">
//                     <h1 id="tophead1" className="tophead font-[900] text-[7rem] m-0 text-white absolute top-[220px]">
//                         LEARN.TRANSFORM.
//                     </h1>
//                     <h1 id="tophead2" className="tophead font-[900] text-[7rem] m-0 text-white absolute top-[330px]">
//                         ACHIEVE.
//                     </h1>
//                     <h3 id="subtophead" className="text-[2rem] font-[900] absolute mt-[30px] text-white top-[440px]">YOUR ULTIMATE COMPUTER SCIENCE LEARNING HUB!</h3>
//                     <p className="toppara m-0 text-[1.5rem] text-white absolute top-[530px] w-[70%]">
//                         Discover curated learning resources, stay updated with tech events, and accelerate your Computer Science journey with our comprehensive platform designed for students.
//                     </p>
//                 </div>
//                 <div className="page2 w-full z-[10]">
//                     <div id="scroller" className="whitespace-nowrap overflow-x-auto overflow-y-hidden relative z-[10]">
//                         <div id="scroller-in" className="inline-block whitespace-nowrap">
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">CAREER PATHS</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">ROADMAPS</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">RESOURCES</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">TECH EVENTS</h4>
//                         </div>
//                         <div id="scroller-in" className="inline-block whitespace-nowrap">
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">CAREER PATHS</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">ROADMAPS</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">RESOURCES</h4>
//                             <h4 className="inline-block text-[120px] font-[900] mt-0 mb-[30px] mr-[100px]">TECH EVENTS</h4>
//                             {/* <h4>LEAGUES</h4> */}
//                         </div>
//                     </div>

//                     <div id="about" className="flex w-full relative h-[420px] top-[30px] z-[12]">
//                         <img
//                             id="aboutpic1"
//                             className="aboutpics h-[260px] w-[230px] rounded-[10px] object-cover my-[75px] mx-10 z-[15]]"
//                             src={pic0}
//                             alt="about 1"
//                         />
//                         <div className="aboutcontent text-center">
//                             <h2 className="abouthead mt-0 text-[3rem] font-[900]">ABOUT US</h2>
//                             <p className="abouttxt text-[1.5rem] my-[45px] mx-[90px]">
//                                 We are dedicated to guiding students and professionals in exploring Computer Science career paths. Our platform provides structured roadmaps, curated resources, and updates on upcoming tech events to help learners stay ahead in the fast-evolving tech world. Whether you aim to become a software developer, data scientist, AI engineer, or cybersecurity expert, we make the journey clearer and easier. Our mission is to empower learners with the right knowledge, tools, and opportunities to build successful careers in technology.
//                             </p>
//                         </div>
//                         <img
//                             id="aboutpic2"
//                             className="aboutpics h-[260px] w-[230px] rounded-[10px] object-cover my-[75px] mx-10 z-[15]]"
//                             src={tech2}
//                             alt="about 2"
//                         />
//                     </div>

//                     <div className="cardscont bg-black h-[90vh] flex items-center justify-evenly mt-[90px]">
//                         <div
//                             onClick={() => (window.location.href = "")}
//                             className="cards ancr bg-[url('./assets/pic2.jpg')] bg-no-repeat bg-center bg-cover group relative"
//                             id="card1"
//                         >
//                             <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-[9px] py-2.5 opacity-[0] gap-[15px] z-[10] rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
//                                 <h4 className="text-[1.6rem] font-[900]">CAREER PATHS</h4>
//                                 <p className="text-[1.1rem] font-[500]">
//                                     Explore diverse career paths in Computer Science, from software development and data science to cybersecurity, AI, and cloud computing. Each path offers unique opportunities, skills, and growth potential. Whether you’re starting as a beginner or planning your next move, our detailed guides and resources help you understand roles, required skills, and industry demand.
//                                 </p>
//                             </div>
//                         </div>
//                         <div
//                             onClick={() => (window.location.href = "")}
//                             className="cards ancr bg-[url('./assets/tech1.png')] bg-no-repeat bg-center bg-cover group relative"
//                             id="card2"
//                         >
//                             <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-[9px] py-2.5 opacity-[0] gap-[15px] z-[10] rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
//                                 <h4 className="text-[1.6rem] font-[900]">RESOURCES</h4>
//                                 <p className="text-[1.1rem] font-[500]">
//                                     Access a wide range of curated resources to boost your Computer Science journey. From beginner-friendly tutorials and coding challenges to advanced books, tools, and frameworks, we’ve got everything to support your learning. Stay updated with the latest technologies and explore practical guides, open-source projects, and community platforms.
//                                 </p>
//                             </div>
//                         </div>
//                         <div
//                             onClick={() => (window.location.href = "")}
//                             className="cards ancr bg-[url('./assets/pic1.jpeg')] bg-no-repeat bg-center bg-cover group relative"
//                             id="card3"
//                         >
//                             <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-[9px] py-2.5 opacity-[0] gap-[15px] z-[10] rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
//                                 <h4 className="text-[1.6rem] font-[900]">COMMUNITY</h4>
//                                 <p className="text-[1.1rem] font-[500]">
//                                     Join a vibrant community of learners, developers, and tech enthusiasts passionate about Computer Science. Connect, collaborate, and share knowledge through discussions, forums, and events. Our community is a space where you can ask questions, get guidance, and support others in their learning journey. From beginners to professionals, everyone is welcome to exchange ideas, explore opportunities, and grow together.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                         <WhyChoose/>
//                 </div>
//                 <div id="page3">
//                     <div className="waitingcont mt-[100px]">
//                         <div className="question text-center font-[900] text-[3.1rem] mb-[50px] text-white">WHAT ARE YOU WAITING FOR?</div>
//                         <div className="optionscont flex justify-evenly">
//                             <div
//                                 onClick={() => navigate('')}
//                                 id="option1"
//                                 className="options ancr text-black bg-[#155dfc] h-[150px] text-[2rem] box-border pt-[50px] text-center font-[900] w-[420px] rounded-[20px] transition-all ease-in-out duration-[0.8s] hover:text-transparent hover:cursor-pointer"
//                             >
//                                 CAREER PATHS
//                             </div>
//                             <div
//                                 onClick={() => navigate('')}
//                                 id="option2"
//                                 className="options ancr text-black bg-[#155dfc] h-[150px] text-[2rem] box-border pt-[50px] text-center font-[900] w-[420px] rounded-[20px] transition-all ease-in-out duration-[0.8s] hover:text-transparent hover:cursor-pointer"
//                             >
//                                 ROADMAPS
//                             </div>
//                             <div
//                                 onClick={() => navigate('')}
//                                 id="option3"
//                                 className="options ancr text-black bg-[#155dfc] h-[150px] text-[2rem] box-border pt-[50px] text-center font-[900] w-[420px] rounded-[20px] transition-all ease-in-out duration-[0.8s] hover:text-transparent hover:cursor-pointer"
//                             >
//                                 TECH EVENTS
//                             </div>
//                         </div>
//                     </div>

//                      <section className="py-28">
//       <div className="max-w-4xl mx-auto text-center px-4">
//         <h2 className="text-4xl md:text-5xl font-[900] leading-16 text-white mb-4">
//           Ready to Supercharge Your Learning?
//         </h2>
//         <p className="text-lg md:text-xl text-white/90 font-medium mb-8">
//           Join thousands of Computer Science students who trust <span className="font-bold text-[#155dfc]">Resource.CS </span> 
//           to level up their skills, stay updated, and unlock new career opportunities.
//         </p>
//         {/* <div className="flex justify-center gap-4"> */}
//           <button className="bg-white text-[#155dfc] font-[600] px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200 cursor-pointer">
//             Join Free Today
//           </button>
//       </div>
//     </section>
//                 </div>
//             </div>
//         </div >
//     );
// }


// --------------


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import video from "../assets/140578-775389242_small.mp4";
import tech2 from "../assets/tech2.jpg";
import pic0 from "../assets/pic0.jpg";
import WhyChoose from "./WhyChoose";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
    document.head.appendChild(link);

    gsap.to("#main", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -10%",
        end: "top -80%",
        scrub: 1,
      },
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full text-white overflow-x-hidden">
      <video
        className="vidtop h-full w-full fixed object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        id="main"
        className="overflow-hidden relative bg-[rgba(0,0,0,0.466)] h-full w-full m-0 p-0"
      >
        {/* Page 1 */}
        <div className="page1 h-screen w-full relative flex justify-center items-center flex-col text-center z-[10] px-4">
          <h1
  id="tophead1"
  className="headline font-[900] text-white text-center 
             text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] mb-[-24px] sm:mb-[-70px] sm:mt-16"
  data-text="LEARN. TRANSFORM."
>
  LEARN. TRANSFORM.
</h1>

<h1
  id="tophead2"
  className="headline font-[900] text-white text-center mt-6
             text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem]"
  data-text="ACHIEVE."
>
  ACHIEVE.
</h1>
          <h3 id="subtophead" className="text-xl sm:text-2xl md:text-3xl font-[900] text-white mt-6">
            YOUR ULTIMATE COMPUTER SCIENCE LEARNING HUB!
          </h3>
          <p className="m-0 text-base sm:text-lg md:text-xl lg:text-[1.5rem] text-white mt-6 max-w-3xl">
            Discover curated learning resources, stay updated with tech events,
            and accelerate your Computer Science journey with our comprehensive
            platform designed for students.
          </p>
        </div>

        {/* Page 2 */}
        <div className="page2 w-full z-[10]">
          {/* Horizontal Scroller */}
          <div
            id="scroller"
            className="whitespace-nowrap overflow-x-auto overflow-y-hidden relative z-[10]"
          >
            <div id="scroller-in" className="inline-block whitespace-nowrap">
              {["CAREER PATHS", "ROADMAPS", "RESOURCES", "TECH EVENTS"].map(
                (item, i) => (
                  <h4
                    key={i}
                    className="inline-block text-5xl sm:text-6xl md:text-8xl lg:text-[120px] font-[900] mt-0 mb-8 mr-12"
                  >
                    {item}
                  </h4>
                )
              )}
            </div>
          </div>

          {/* About Section */}
          <div
            id="about"
            className="flex flex-col lg:flex-row w-full relative min-h-[420px] top-8 z-[12] items-center px-4 justify-center"
          >
            <img
              className="h-40 sm:h-52 md:h-64 w-40 sm:w-52 md:w-56 rounded-[10px] object-cover my-6 mx-auto lg:mx-10"
              src={pic0}
              alt="about 1"
            />
            <div className="text-center lg:text-left max-w-3xl px-4">
              <h2 className="mt-0 text-3xl text-center sm:text-4xl md:text-5xl font-[900]">
                ABOUT US
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center my-6">
                We are dedicated to guiding students and professionals in exploring Computer Science career paths. Our platform provides structured roadmaps, curated resources, and updates on upcoming tech events to help learners stay ahead in the fast-evolving tech world. Whether you aim to become a software developer, data scientist, AI engineer, or cybersecurity expert, we make the journey clearer and easier. Our mission is to empower learners with the right knowledge, tools, and opportunities to build successful careers in technology.
              </p>
            </div>
            <img
              className="h-40 sm:h-52 md:h-64 w-40 sm:w-52 md:w-56 rounded-[10px] object-cover my-6 mx-auto lg:mx-10"
              src={tech2}
              alt="about 2"
            />
          </div>

          {/* Cards Section */}
          <div className="cardscont bg-black min-h-[80vh] flex flex-col lg:flex-row items-center justify-evenly mt-16 sm:mb-0 mb-16 gap-6 px-4">
            {[
              {
                title: "CAREER PATHS",
                text: "Explore diverse career paths in Computer Science, from software development and data science to cybersecurity, AI, and cloud computing. Each path offers unique opportunities, skills, and growth potential. Whether you’re starting as a beginner or planning your next move, our detailed guides and resources help you understand roles, required skills, and industry demand.",
                bg: "./assets/pic2.jpg",
              },
              {
                title: "RESOURCES",
                text: "Access a wide range of curated resources to boost your Computer Science journey. From beginner-friendly tutorials and coding challenges to advanced books, tools, and frameworks, we’ve got everything to support your learning. Stay updated with the latest technologies and explore practical guides, open-source projects, and community platforms.",
                bg: "./assets/tech1.png",
              },
              {
                title: "COMMUNITY",
                text: "Join a vibrant community of learners, developers, and tech enthusiasts passionate about Computer Science. Connect, collaborate, and share knowledge through discussions, forums, and events. Our community is a space where you can ask questions, get guidance, and support others in their learning journey. From beginners to professionals, everyone is welcome to exchange ideas, explore opportunities, and grow together.",
                bg: "./assets/pic1.jpeg",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`cards ancr bg-[url('${card.bg}')] bg-no-repeat bg-center bg-cover group relative w-full sm:w-[90%] md:w-[70%] lg:w-[30%] h-[390px] rounded-[20px]`}
              >
                <div className="overlay h-full w-full flex flex-col bg-[#1d1d1dc7] justify-center items-center text-white px-3 py-2 opacity-0 gap-3 z-10 rounded-[20px] transition-all ease-in-out duration-700 text-center group-hover:opacity-100">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-[900]">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-[500]">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <WhyChoose />
        </div>

        {/* Page 3 */}
        <div id="page3" className="px-4">
          {/* Waiting Section */}
          <div className="waitingcont mt-16">
            <div className="text-center font-[900] text-2xl sm:text-3xl md:text-4xl lg:text-[3.1rem] mb-12 text-white">
              WHAT ARE YOU WAITING FOR?
            </div>
            <div className="optionscont flex flex-col sm:flex-row gap-6 justify-center items-center">
              {["CAREER PATHS", "ROADMAPS", "TECH EVENTS"].map((opt, i) => (
                <div
                id={`option${i+1}`}
                  key={i}
                  onClick={() => navigate("")}
                  className="options ancr text-black bg-[#155dfc] h-[120px] sm:h-[150px] text-lg sm:text-xl md:text-2xl font-[900] w-[90%] sm:w-[300px] md:w-[350px] lg:w-[420px] flex justify-center items-center rounded-[20px] transition-all ease-in-out duration-700 hover:text-transparent cursor-pointer"
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4">
                Ready to Supercharge Your Learning?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-6">
                Join thousands of Computer Science students who trust{" "}
                <span className="font-bold text-[#155dfc]">Resource.CS</span> to
                level up their skills, stay updated, and unlock new career
                opportunities.
              </p>
              <button className="bg-white text-[#155dfc] font-[600] px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-200 cursor-pointer">
                Join Free Today
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}




