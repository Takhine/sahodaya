import React from 'react'
import { Headerslider } from "./Headerslider";
import { Form } from "./Form"
import { Player } from 'video-react';

export const Home = () => {
   return (
      <>
         <Headerslider />
         <div id="intro" className="bg-white">
            <div className="container-fluid p-xl-0">
               <div className="row justify-content-center g-0">
                  <div className="col-lg-10 col-xl-12 text-center pt-5">
                     <span className="d-block font-alt font-w-700 letter-spacing-2 text-blue text-uppercase title-small">WHAT YOU'LL DISCOVER AT NATIONAL SAHODAYA CONFERENCE 2023</span>
                  </div>
               </div>
               <div className="row justify-content-center g-0">
                  <div className="col-lg-10 col-xl-6 text-center py-5">
                     <Player autoPlay preload='metadata' muted>
                        <source src="https://mumbaisahodaya.com/static/media/nsc-23.mp4" />
                     </Player>
                  </div>
               </div>
               <div className="row justify-content-center g-0">
                  <div className="col-lg-10 col-xl-4 bg-overlay-black-5 my-2 my-xl-0 position-relative">
                     <img src="images/intro-1.jpg" alt="true" className="img-fluid" />
                     <div className="d-flex align-items-center h-100 justify-content-center left-0 position-absolute top-0 w-100">
                        <span className="font-alt font-w-600 letter-spacing-1 text-gray-100 text-small text-uppercase">‘08’ Sessions</span>
                     </div>
                  </div>
                  <div className="col-lg-10 col-xl-4 bg-overlay-black-5 my-2 my-xl-0 position-relative">
                     <img src="images/intro-2.jpg" alt="true" className="img-fluid" />
                     <div className="d-flex align-items-center h-100 justify-content-center left-0 position-absolute top-0 w-100">
                        <span className="font-alt font-w-600 letter-spacing-1 text-gray-100 text-small text-uppercase">‘03’ Panel Discussions </span>
                     </div>
                  </div>
                  <div className="col-lg-10 col-xl-4 bg-overlay-black-5 my-2 my-xl-0 position-relative">
                     <img src="images/intro-3.jpg" alt="true" className="img-fluid" />
                     <div className="d-flex align-items-center h-100 justify-content-center left-0 position-absolute top-0 w-100">
                        <span className="font-alt font-w-600 letter-spacing-1 text-gray-100 text-small text-uppercase" style={{ textAlign: 'center' }}>Exquisite Experiences Only At NSC-2023</span>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center g-0">
                  <div className="col-lg-10 col-xl-12 border-bottom border-gray-400 text-center py-4">
                     <span className="font-alt font-w-600 letter-spacing-1 text-extra-small text-uppercase">Immerse Yourself in the Grandeur of the Year's Biggest CBSE Event - <span className="text-blue text-underline"><a href='https://docs.google.com/forms/d/1W4tPfESYdAwjVhypxDPNgPiRKd_I8iBPKsTujKXDndU/edit' target='_blank'>Register Now!</a></span></span>
                  </div>
               </div>
            </div>
         </div>

         <section id="about" className="bg-white">
            <div className="container">
               <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center mb-3 mb-lg-5">
                     <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">29th National Annual Conference for Sahodaya Schools Complexes</h3>
                     <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-xl-5 text-center text-lg-start">
                     <p className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase">Charting the Course for Tomorrow's Education at 29th NSC 2023!</p>
                     <p className="text-medium">Prepare for a two-day educational adventure at the  29th National Annual Conference for Sahodaya Schools Complexes</p>
                     <p className="text-medium">Get ready to be wowed by interactive Sessions , announcements, and a goldmine of best practices. We've handpicked a dream team of trailblazers, including educators, tech gurus, and forward-thinking leaders to ignite your imagination.</p>
                     <p className="text-medium">In a world where traditional schooling no longer fits the bill, we're diving headfirst into the future of education. Imagine a fusion of ancient Gurukul wisdom with cutting-edge technology, all on a global scale.</p>
                     <p className="text-medium">Sure, we are on the mission to redefine education .There will be hurdles along the way but the possibilities are boundless: equitable education, tailored learning, and seamless tech integration </p>
                     <p className="text-medium">Buckle up for an exhilarating journey towards a brighter tomorrow!</p>

                     <a href="#venue" className="page-scroll btn btn-outline-black btn-small border-thick mt-2 mx-0">Event Venue</a>
                  </div>
                  <div className="col-lg-6 offset-xl-1">
                     <div className="row">
                        <div className="col-sm-6 mt-5 mt-lg-0 text-center text-lg-start">
                           <i className="fa fa-map-marker fa-3x text-blue"></i>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-3 text-medium text-uppercase">The Westin Mumbai Powai Lake</span>
                           <p className="mb-0 mt-2 text-medium">
                              2 & 3B, near Chinmayanand Ashram
                              <br /> Powai, Mumbai, Maharashtra 400087
                           </p>
                        </div>
                        <div className="col-sm-6 mt-5 mt-lg-0 text-center text-lg-start">
                           <i className="fa fa-calendar-check-o fa-3x text-blue"></i>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-3 text-medium text-uppercase">Date & Time</span>
                           <p className="mb-0 mt-2 text-medium">
                              07th Dec. 2023
                              <br />08th Dec. 2023
                              <br />09th Dec. 2023
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="row justify-content-center">
               <div className="col-sm-12 text-center text-lg-start">
                           <i className="fa fa-bullhorn fa-3x text-blue mt-5"></i>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-3 text-medium text-uppercase">Speakers</span>
                        </div>
                        <div className="col-sm-6 text-center text-lg-start">
                           <p className="mb-0 mt-2 text-medium">Dr Joseph Emmanuel, Director (Academics), Central Board of Secondary Education, New Delhi</p>
                           <p className="mb-0 mt-2 text-medium">Ms Niddhi Chhibber, Chairperson, Central Board of Secondary Education, New Delhi</p>
                           <p className="mb-0 mt-2 text-medium">Mr Sanjay Kumar, Secretary (Education), Ministry of Education, Govt of India</p>
                           <p className="mb-0 mt-2 text-medium">Ms Shashikala Wanjari, VC, NIEPA</p>
                           <p className="mb-0 mt-2 text-medium">Mr Manoj Joshi, Noted Film Actor and Theatre Personality</p>
                           <p className="mb-0 mt-2 text-medium">Dr Tushar Guha, Founder Chairperson, Nrityanjali</p>
                           <p className="mb-0 mt-2 text-medium">Dr Milind Naik, Principal, Jnana Probodhini Prashala</p>
                           <p className="mb-0 mt-2 text-medium">Ms Manjushree Patil, Founder Director, Aatman Academy</p>
                           <p className="mb-0 mt-2 text-medium">Dr Reeta Sonawat, Former Dean, Professor, HoD Human Development, SNDT University, Mumbai</p>
                           <p className="mb-0 mt-2 text-medium">Prof Marc Nowacki, Singapore University and Co-Founder LogicMills</p>
                           <p className="mb-0 mt-2 text-medium">Prof Suniti Sanwal,  NCERT</p>
                           <p className="mb-0 mt-2 text-medium">Dr Geetanjali Kumar, National resource person for Nationwide Adolescent Education Program (AEP) run by Ministry of Human Resource Development  in partnership with MHRD-NCERT-UNFPA.</p>
                           <p className="mb-0 mt-2 text-medium">Dr Senthil Kumaran A, Chief Confluencer, Co- Founder- Learners Confluence, Chief Mentor & Director, ExcelOne.</p>
                           <p className="mb-0 mt-2 text-medium">Dr. Binay Patnaik, Senior Education Consultant, World Bank</p>
                           <p className="mb-0 mt-2 text-medium">Dr. Brijesh Karia, Distinguished Educational Leader and  COO Singhania Education</p>

                        </div>
                        <div className="col-sm-6 text-center text-lg-start">
                           <p className="mb-0 mt-2 text-medium">Dr. A.P. Jayaraman, Principal Scientific Advisor, HSNC University, Mumbai.</p>
                           <p className="mb-0 mt-2 text-medium">Dr. Vasudha Kamat, Chairperson, Governing Body of CEC (Consortium of Educational Communication), Former Vice Chancellor of SNDT Women University,Mumbai</p>
                           <p className="mb-0 mt-2 text-medium">Dr. Chinu Agrawal Psychologist and Psychotherapist Director : Feeling Minds®</p>
                           <p className="mb-0 mt-2 text-medium">Dr. Anand Lakshman, CEO of AddressHealth,</p>
                           <p className="mb-0 mt-2 text-medium">Ms. Sarita Jadav, National Programme Officer, UNESCO, Delhi</p>
                           <p className="mb-0 mt-2 text-medium">Shree Gauri Sawant - A Champion for Transgender Rights and Social Welfare, Founder of the Sai Savi Foundation Trust.</p>
                           <p className="mb-0 mt-2 text-medium">Mr Ramesh Sippy, Chairman, Media & Entertainment Skill Council</p>
                           <p className="mb-0 mt-2 text-medium">Mr Aditya Gupta, Head, Global Data n Analytics Products, Mercer Digital</p>
                           <p className="mb-0 mt-2 text-medium">Dr Rakshit Tandon, National Cyber Security Expert, and Crime Investigator on Cyber Forensics and Ethical Hacking</p>
                           <p className="mb-0 mt-2 text-medium">Ms Deepti Sawhney- CEO and Founder, Mahattattva</p>
                           <p className="mb-0 mt-2 text-medium">Ms. MONICA PATEL,  CEO, “First in Math India Pvt. Ltd.”,</p>
                           <p className="mb-0 mt-2 text-medium">Mr Jignesh Oza, Digital Trust (Cyber Security)</p>
                           <p className="mb-0 mt-2 text-medium">Dr Radhakrishnan Pillai, founder and Director of Chanakya International Institute of Leadership Studies (CIILS) at the University of Mumbai.</p>
                           <p className="mb-0 mt-2 text-medium">Mr Girish Dalvi, Chief Administrator, Open Forum For Principals</p>
                           <p className="mb-0 mt-2 text-medium">Mr Kavish, Stone2 Milestone</p>


                        </div>
               </div>
            </div>
         </section>

         <section id="venue" className="bg-img-cover bg-overlay-black-7">
            <div className="container">
               <div className="row justify-content-center justify-content-lg-end g-0">
                  <div className="col-lg-6 col-xl-5">
                     <div className="bg-white p-5 position-relative rounded">
                        <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Event Venue</h3>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">The Westin Mumbai Powai Lake
                           2 & 3B, near Chinmayanand Ashram, Powai, Mumbai, Maharashtra 400087</span>
                        <span className="bg-blue d-block mt-4 sep-line-medium-thick-long"></span>
                        <p className="mt-4 text-medium">A Distinguished Gathering: The 29th National Sahodaya Conference 2023 finds its home at The Westin Mumbai Powai Lake, a Marriott Luxury & Lifestyle Hotel. Located by the peaceful Powai Lake in Mumbai, it offers a tranquil setting just a short distance from the airport, ensuring accessibility with ease.</p>
                        <p className="mt-4 text-medium"></p>
                        <a href="#schedule" className="page-scroll btn btn-outline-black btn-small border-thick mx-0">Check Schedule</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="hotels" className="bg-gray-100">
            <div className="container">
               <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center mb-3 mb-lg-5">
                     <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">HOTELS</h3>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">HERE ARE A FEW YOU MIGHT BE INTERESTED IN</span>
                     <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-xl-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">The Westin Mumbai Powai Lake</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">00 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel1.jpg" alt="The Westin Mumbai Powai Lake" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4 mt-md-0">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Ramada by Wyndham Powai Hotel </span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">1 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel2.jpg" alt="Ramada by Wyndham Powai Hotel " className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4 mt-xl-0">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Click Hotel Caliph</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">2.4 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel3.jpg" alt="Click Hotel Caliph" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Meluha The Fern</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">3.9 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel4.jpg" alt="Meluha The Fern" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">The Beatle</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">4.4 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel5.jpg" alt="The Beatle" className="img-fluid rounded" />
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Goldfinch Hotel</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">4.8 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel7.jpg" alt="Goldfinch Hotel" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Ginger Mumbai Andheri</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">5 KM FROM VENUE</span>
                        </div>
                        <img src="images/hotel/hotel6.jpg" alt="Ginger Mumbai Andheri" className="img-fluid rounded" />
                     </div>
                  </div>


               </div>
            </div>
         </section>

         <section id="nsc-theme" className="bg-white">
            <div className="container">
               <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center mb-3 mb-lg-5">
                     <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Mumbai Sahodaya Welcomes You to the 29<sup>Th</sup> National Sahodaya Conference 2023</h3>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">Reimagining the Changing Landscape - Quality Transformation in School
                        Education</span>
                     <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-xl-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Reimagining Learning Spaces</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Shifting to Student-Centered, Biophilic Designs</span>
                        </div>
                        <img src="images/theme1.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4 mt-md-0">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Evolving and Emerging School Systems</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">From Recipients to Partners in Education</span>
                        </div>
                        <img src="images/theme2.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4 mt-xl-0">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Rethinking the education workforce</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Motivating Teachers and Professional Development</span>
                        </div>
                        <img src="images/theme3.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Lead The Change</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Vision, Planning, and Equitable Innovation</span>
                        </div>
                        <img src="images/theme4.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Education in digital age-opportunities and challenges</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Opportunities and Challenges</span>
                        </div>
                        <img src="images/theme5.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>

                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Curriculum design and assessment</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Rigorous and Engaging Learnin</span>
                        </div>
                        <img src="images/theme6.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Education for resilience, protection and well-being</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase"> Protection, and Well-being</span>
                        </div>
                        <img src="images/theme7.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>
                  <div className="col-md-6 col-xl-4 mt-4">
                     <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between p-4 position-relative rounded" data-mh="mh-hotels">
                        <div className="pr-3">
                           <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Vocational Education for Global Citizenship</span>
                           <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Skills and Social Responsibility</span>
                        </div>
                        <img src="images/theme8.jpg" alt="true" className="img-fluid rounded" />
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* <section id="speakers" className="bg-gray-100">
         <div className="container">
            <div className="row justify-content-center mb-5">
               <div className="col-lg-6 text-center mb-3 mb-lg-5">
                  <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Event Speakers</h3>
                  <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">Hear from The Most Audacious & Thought-Provoking Speakers</span>
                  <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                  <a href="#gallery-1" className="btn-gallery">
                     <img src="images/speakers-1.jpg" alt="sdfsdf" className="img-fluid img1" />
                     </a>
                     <figcaption className="label label-small bg-orange bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Main Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Rano Karno</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">Deft Digital Solution</span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                     <img src="images/speakers-2.jpg" alt="true"
                      className="img-fluid" />
                     <figcaption className="label label-small bg-orange bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Main Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Andik Firmansyah</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">Marketing Insider Group</span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                     <img src="images/speakers-3.jpg" alt="true" className="img-fluid" />
                     <figcaption className="label label-small bg-blue bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Guest Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Kevin Siregar</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">Vertical Measures</span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                     <img src="images/speakers-4.jpg" alt className="img-fluid" />
                     <figcaption className="label label-small bg-blue bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Guest Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Luna Maya</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">BOLD Worldwide</span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                     <img src="images/speakers-5.jpg" alt="true" className="img-fluid" />
                     <figcaption className="label label-small bg-blue bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Guest Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Abdul Muiz</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">Elevate My Brand</span>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4">
                  <figure className="m-0 position-relative">
                     <img src="images/speakers-6.jpg" alt="true" className="img-fluid" />
                     <figcaption className="label label-small bg-blue bottom-0 m-3 position-absolute right-0 text-uppercase text-white">Guest Speaker</figcaption>
                  </figure>
                  <div className="py-4 text-center">
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Ridwan Kamil</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">Social Savvy Society</span>
                  </div>
               </div>
            </div>
            
         </div>
      </section> */}

         <div id="promo" className="bg-img-cover bg-overlay-black-7" style={{ 'display': 'none' }}>
            <div className="container">
               <div className="row py-5">
                  <div className="col-12 position-relative py-5 text-center">
                     <span className="font-alt font-w-700 letter-spacing-2 text-uppercase text-white title-small">Interested in speaking at a Digital Marketing Conference?</span>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 mt-3 text-gray-300 text-small text-uppercase">We are always looking to be at the forefront of the industry with the <span className="text-orange">highest quality</span> content.</span>
                     <a href="#contact" className="page-scroll btn btn-blue btn-small btn-lg-large mt-5 mx-0">Submit a Speaker Request</a>
                  </div>
               </div>
            </div>
         </div>

         <section id="schedule" className="bg-white">
            <div className="container">
               <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center mb-3 mb-lg-5">
                     <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Event Schedule</h3>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">General overview of the conference schedule</span>
                     <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="text-center">
                        <ul id="tab-schedule" role="tablist" className="nav nav-tabs tabs-blue font-alt text-center text-small">
                           <li className="nav-item d-table-cell" role="presentation">
                              <button className="nav-link active font-w-600 letter-spacing-1 text-uppercase" id="day-1" data-bs-toggle="tab" data-bs-target="#tab-day-1" type="button" role="tab" aria-controls="day-1" aria-selected="true">DAY 01</button>
                           </li>
                           <li className="nav-item d-table-cell" role="presentation">
                              <button className="nav-link font-w-600 letter-spacing-1 text-uppercase" id="day-2" data-bs-toggle="tab" data-bs-target="#tab-day-2" type="button" role="tab" aria-controls="day-2" aria-selected="false">DAY 02</button>
                           </li>
                           <li className="nav-item d-table-cell" role="presentation">
                              <button className="nav-link font-w-600 letter-spacing-1 text-uppercase" id="day-3" data-bs-toggle="tab" data-bs-target="#tab-day-3" type="button" role="tab" aria-controls="day-3" aria-selected="false">DAY 03</button>
                           </li>
                        </ul>
                     </div>
                     <div id="tab-content-schedule" className="tab-content">
                        <div className="tab-pane fade show active" id="tab-day-1" role="tabpanel" aria-labelledby="day-1">
                           <div className="mb-4 mt-5 text-center">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-small text-uppercase">Day 1: Networking Evening*</span>
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">December 07, 2023</span>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>6:30 – 7:30 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Registration</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">1 Hour</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:30 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Lighting of the lamp (Mrs Varsha Deshpande)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">5 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:35 – 7:40 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Saraswati Vandana (Rajhans Vidyalaya)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">5 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:40 – 7:45 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Welcome Song (Airoli Node CBSE Music Teachers)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">5 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:45 – 7:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Jai Jai Maharashtra Geet (Shri Nandesh Umap and Teachers)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">5 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:50 – 8:10 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Powada (Shri Nandesh Umap)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">20 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:10 - 9:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Musical Evening Live Orchestraby Mumbai CBSE School Teachers (Sheth Karamshi Kanji) (Mrs Varsha Deshpande)</span>
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">50 Minutes</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>9:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Proceed for dinner</span>
                              </div>
                           </div>
                           *limited seats for first 350 delegates on a first come first serve basis
                        </div>
                        <div className="tab-pane fade" id="tab-day-2" role="tabpanel" aria-labelledby="day-2">
                           <div className="mb-4 mt-5 text-center">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-small text-uppercase">Day 02: Inaugural day</span>
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">December 08, 2023</span>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:30 - 11:15 AM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Inaugural Session</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>11:15 - 11:40 AM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Networking/tea Break/ stall visits</span>
                                 {/* <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-extra-small text-uppercase">TECHSPO Hall & Dining Room</span> */}
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>11:40 AM - 1:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session - 1 Lead the change</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>1:00 - 2:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 2- Quality transformation in Education: Curriculum-Design &amp; Assessment</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>2:00 - 2:40 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Networking &amp; stalls visit/lunch break</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>2:40 - 3:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 3 - Reimagining learning spaces</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>3:50 - 4:30 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 4 - Rethinking educational workforce</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>4:30 - 4:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Networking &amp; Tea break</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Arrival of Guests</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:05 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Lighting of the Lamp and Saraswati Vandana (By Ramsheth Thakur Public School, Kharghar) (Mrs. Raj Aloni)</span>
                              </div>
                           </div>

                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:05 - 7:10 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Welcome Song (By Ramsheth Thakur Public School, Kharghar) (Mrs. Raj Aloni)</span>

                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:10 - 7:20 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Ganesh Vandana Dance (Deva shri Ganesha) (25 students) (By Ramsheth Thakur Public School, Kharghar) (Mrs. Raj Aloni)</span>

                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:20 - 7:30 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Yeh hai Mumbai meri jaan (Song in English)(22students) (By Nalanda Public School) (Mrs. Nandita Khanna)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:30 - 7:40 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Varkari nritya (mauli mauli) (28 participants) (By Muljibhai Mehta Intl School) (Mrs. Manisha Karekar)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:40 - 7:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Shetkari nritya (bhalgari dada) (By SSL Eng School, Parel)(Ms.Apeksha Chaudhari)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>7:50 - 8:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Koli Dance (By Matrix Academy)(Mrs. Seema Behl)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:00 - 8:10 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Dahi handi (mach gaya shor sari nagari mein) (18 students) (By Lodha World School) (Mrs. Rashmirekha Saha)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:10 - 8:20 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Gondhal (dar ugad baya) (By DAV Public School Airoli) (Principal Suman Pradhan)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:30 - 8:40 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Shivaji Maharaj (Indrajimi Jambhapar/ Jai Bhawani Jai Shivaji) (By New Horizon Public school) (Mrs. Mani Srivastava)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:40 - 8:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Bollywood (joota hai Japani; Yeh hai Bambai nagaria; Dekho dekho yeh shyam badi mastani…Om shanti om) (By Datta Meghe World Academy) (Mr. Rajeev Garg)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>8:50 - 9:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Mile sur mera tumhara (students represent the various states carrying the logo placard of various Sahodaya Groups) (By DAV, Thane) (Mrs. Simi Juneja)</span>
                              </div>
                           </div>

                           <div className="align-items-top d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>9:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">National Song (Mrs Simi Juneja)</span>
                              </div>
                           </div>
                        </div>

                        <div className="tab-pane fade" id="tab-day-3" role="tabpanel" aria-labelledby="day-3">
                           <div className="mb-4 mt-5 text-center">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-small text-uppercase">Day 03: Valedictory Day</span>
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-800 text-extra-small text-uppercase">December 09, 2023</span>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>9:00 - 9:10 AM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Prayer and Welcome</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>9:10 - 10:15 AM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session - 5 Evolving and Emerging School Systems</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>10:15 - 10:35 AM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Networking &amp; tea break/stall visit</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>10:35 AM - 12:00 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 6 - Education for Resilience, Protection &amp; Well-being: Inclusion and Integration in Schools</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>12:00 - 12:50 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 7 -Vocational Education- Global Perspective</span>

                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>12:50 - 1:45 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Session 8 - Education in digital age-opportunities and challenges</span>

                              </div>
                           </div>

                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>1:45 - 2:30 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Open house by CBSE officials</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>2:30 - 4:15 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Valedictory session</span>
                              </div>
                           </div>
                           <div className="align-items-top border-bottom d-md-flex py-3">
                              <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-700 text-small text-uppercase" style={{ 'width': "200px", 'maxWidth': "200px", 'minWidth': "200px" }}>4:15 - 4:40 PM</span>
                              <div className="d-block ms-md-5 mt-2 mt-md-0 ">
                                 <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Tea (25 Minutes)</span>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* 
      <section id="gallery" className="bg-gray-100">
         <div className="container">
            <div className="row justify-content-center mb-5">
               <div className="col-lg-6 text-center mb-3 mb-lg-5">
                  <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Places to visit</h3>
                  <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">What’s in Mumbai?</span>
                  <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="gallery-wrapper">
                     <Ourgalliry/>
                  </div>
               </div>
            </div>
         </div>
      </section> */}

         {/* <section id="sponsors" className="bg-white">
         <div className="container">
            <div className="row justify-content-center mb-5">
               <div className="col-lg-6 text-center mb-3 mb-lg-5">
                  <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Sponsors & Partners</h3>
                  <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">Digital Marketing Conference wouldn't be possible without our amazing sponsors</span>
                  <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="row">
                     <div className="col-sm-6 col-md-4 text-center">
                        <img width="200" src="images/sponsors-1.jpg" alt="true" />
                     </div>
                     <div className="col-sm-6 col-md-4 text-center mt-4 mt-sm-0">
                        <img width="200" src="images/sponsors-2.jpg" alt="true" />
                     </div>
                     <div className="col-sm-6 col-md-4 text-center mt-4 mt-md-0">
                        <img width="200" src="images/sponsors-3.jpg" alt="true" />
                     </div>
                     <div className="col-sm-6 col-md-4 text-center mt-4">
                        <img width="200" src="images/sponsors-4.jpg" alt="true" />
                     </div>
                     <div className="col-sm-6 col-md-4 text-center mt-4">
                        <img width="200" src="images/sponsors-5.jpg" alt="true" />
                     </div>
                     <div className="col-sm-6 col-md-4 text-center mt-4">
                        <img width="200" src="images/sponsors-6.jpg" alt="true" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}

         {/* <div id="ticket" className="bg-img-cover bg-overlay-black-7 section">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-xl-7 position-relative">
                  <span className="d-block font-alt font-w-600 letter-spacing-1 text-gray-200 text-small text-uppercase">Register now to save your seat!</span>
                  <span className="d-block font-alt font-w-700 letter-spacing-1 mt-2 title-small title-md-extra-large-2 text-uppercase text-white">Get inspired by the headlining speakers at Digital Marketing Conference</span>
                  <span className="bg-blue d-block mt-3 sep-line-medium-thick-long"></span>
               </div>
               <div className="col-md-6 col-lg-5 col-xl-4 mt-4 mt-md-0 offset-lg-1">
                  <div className="card bg-white border-0 box-shadow-wide">
                     <div className="card-header bg-white border-0 pb-0 pt-5 text-center">
                        <span className="label label-small bg-orange m-3 position-absolute right-0 text-uppercase text-white top-0">Early Bird</span>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-4 text-gray-700 text-small text-uppercase">All Access</span>
                        <div className="mt-3">
                           <span className="pricing-dollar font-alt font-w-700 text-uppercase title-large">$</span>
                           <span className="font-alt font-w-700 text-uppercase title-extra-large-4">432</span>
                        </div>
                        <span className="bg-gray-200 d-block mt-4 sep-line-thin-full"></span>
                     </div>
                     <div className="card-body px-5 py-4">
                        <ul className="list-unstyled text-medium">
                           <li className="checkmark checkmark-blue my-1">Conference Kit</li>
                           <li className="checkmark checkmark-blue my-1">All Sessions</li>
                           <li className="checkmark checkmark-blue my-1">Photo Shooting</li>
                           <li className="checkmark checkmark-blue my-1">Free Food & Drinks</li>
                           <li className="checkmark checkmark-blue my-1">After Party</li>
                        </ul>
                        <p className="mt-4 text-center text-small">Ticket prices are $432.00 if you reserve early, otherwise general admission will cost $532.00.</p>
                     </div>
                     <div className="card-footer bg-blue border-0 p-0 text-center">
                        <a href="#register" className="page-scroll btn btn-block rounded-bottom text-white">Purchase Ticket</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> */}

         <section id="faq" className="bg-white" style={{ 'display': 'none' }}>
            <div className="container">
               <div className="row justify-content-center mb-5">
                  <div className="col-lg-6 text-center mb-3 mb-lg-5">
                     <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Event FAQs</h3>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">Lorem Ipsum has been the standard dummy text.</span>
                     <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-4 text-center text-lg-start">
                     <p className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase">Got questions? We have an answer.</p>
                     <p className="text-medium">Here is a list of answers to frequently asked questions about the conference. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                     <a href="#contact" className="page-scroll btn btn-outline-black btn-small border-thick mt-2 mx-0">Contact Us</a>
                  </div>
                  <div className="col-lg-7 offset-lg-1 mt-5 mt-lg-0">
                     <div id="accordion-faq" className="accordion" role="tablist">
                        <div className="card">
                           <div className="card-header" role="tab" id="heading1">
                              <a className="font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                 When will the conference program details be announced?
                              </a>
                           </div>
                           <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">Lorem Ipsum has been the digital marketing conference standard dummy text. As they become available, information can be found on the lorem ipsum page.</p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading2">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                 Can I view the sessions I registered for online?
                              </a>
                           </div>
                           <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">The confirmation email you receive at the time you register will include a link to your registration record. You can also log in to view lorem Ipsum has been the digital marketing conference standard dummy text.</p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading3">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                 Will a packet be mailed to us before the conference?
                              </a>
                           </div>
                           <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">The confirmation email you receive at the time you register will include a link to your registration record. You can also log in to view lorem Ipsum has been the digital marketing conference standard dummy text.</p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading4">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                 Is video of speakers from digital marketing conference available?
                              </a>
                           </div>
                           <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">Lorem Ipsum has been standard dummy text. To share the content from the conference with a wider audience and allow attendees to relive the experience, we will make every effort to post video of all the main stage presentations
                                    on the website.
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading5">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                 How do you select speakers for the conference?
                              </a>
                           </div>
                           <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">Lorem Ipsum has been the digital marketing conference standard dummy text. Over time we have drawn further afield in seeking speakers who are inspirational, informative, and provocative.</p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading6">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                 Can we get a discount for group registrations?
                              </a>
                           </div>
                           <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">At this time, there are no discounted group rates for the Digital Marketing Conference.</p>
                              </div>
                           </div>
                        </div>
                        <div className="card">
                           <div className="card-header" role="tab" id="heading7">
                              <a className="collapsed font-alt font-w-700 letter-spacing-1 text-extra-small text-gray-900 text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                 What do registration fees cover and how are they set?
                              </a>
                           </div>
                           <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion-faq">
                              <div className="card-body">
                                 <p className="m-0 text-small">Continental breakfast and light refreshment breaks will be provided, lunch and dinner are on your own. The fees are set to make the experience both memorable and affordable.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="row justify-content-center mt-5">
               <div className="col-lg-10 text-center mt-3 mt-lg-5">
                  <span className="font-alt font-w-700 letter-spacing-2 text-uppercase title-small">If you still have unanswered questions after reading this page, please <a href="#contact" className="page-scroll text-blue">contact us</a>.</span>
               </div>
            </div> */}
            </div>
         </section>

         {/* <div id="milestones" className="bg-white pb-5">
         <div className="container py-5">
            <div className="row">
               <div className="col-md-3 border-gray-200 border-md-right text-center">
                  <span className="timer d-block font-alt font-w-700 letter-spacing-1 title-extra-large-2" data-from="0" data-to="27" data-speed="1500">0</span>
                  <span className="bg-blue d-block mt-2 mx-auto sep-line-thick"></span>
                  <span className="d-block font-alt font-w-600 letter-spacing-2 mt-3 text-gray-800 text-large text-uppercase">Sessions</span>
               </div>
               <div className="col-md-3 border-gray-200 border-md-right mt-5 mt-md-0 text-center">
                  <span className="timer d-block font-alt font-w-700 letter-spacing-1 title-extra-large-2" data-from="0" data-to="33" data-speed="1500">0</span>
                  <span className="bg-blue d-block mt-2 mx-auto sep-line-thick"></span>
                  <span className="d-block font-alt font-w-600 letter-spacing-2 mt-3 text-gray-800 text-large text-uppercase">Topics</span>
               </div>
               <div className="col-md-3 border-gray-200 border-md-right mt-5 mt-md-0 text-center">
                  <span className="timer d-block font-alt font-w-700 letter-spacing-1 title-extra-large-2" data-from="0" data-to="17" data-speed="1500">0</span>
                  <span className="bg-blue d-block mt-2 mx-auto sep-line-thick"></span>
                  <span className="d-block font-alt font-w-600 letter-spacing-2 mt-3 text-gray-800 text-large text-uppercase">Speakers</span>
               </div>
               <div className="col-md-3 mt-5 mt-md-0 text-center">
                  <span className="timer d-block font-alt font-w-700 letter-spacing-1 title-extra-large-2" data-from="0" data-to="53" data-speed="1500">0</span>
                  <span className="bg-blue d-block mt-2 mx-auto sep-line-thick"></span>
                  <span className="d-block font-alt font-w-600 letter-spacing-2 mt-3 text-gray-800 text-large text-uppercase">Sponsors</span>
               </div>
            </div>
         </div>
      </div> */}

         <section id="register" className="bg-img-cover bg-overlay-black-7">

            <Form />

         </section>
         {/* 
      <section id="contact" className="bg-white">
         <div className="container">
            <div className="row justify-content-center mb-5">
               <div className="col-lg-6 text-center mb-3 mb-lg-5">
                  <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Contact Us</h3>
                  <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">We'd love to hear from you!</span>
                  <span className="bg-blue d-block mt-4 mx-auto sep-line-medium-thick-long"></span>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 col-xl-5">
                  <h3 className="font-alt font-w-700 letter-spacing-2 m-0 text-uppercase title-small">Attending Digital Marketing Conference World and have question or comments?</h3>
                  <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-small text-uppercase">Please contact us using the form below</span>
                  <span className="bg-blue d-block mt-4 sep-line-medium-thick-long"></span>
                  <form action="https://demo.lucky-roo.com/denada-v3.0/html/contact/send_mail.php" method="post" id="form-contact" className="mt-4">
                     <div className="form-group">
                        <input type="text" name="name" className="font-alt form-control required" id="contact-name" placeholder="Your Name" />
                     </div>
                     <div className="form-group">
                        <input type="email" name="email" className="font-alt form-control required email" id="contact-email" placeholder="Your Email" />
                     </div>
                     <div className="form-group">
                        <select name="subject" className="font-alt form-control required" id="contact-subject">
                           <option value>- Select Your Subject -</option>
                           <option value="Volunteer Applications">Volunteer Applications</option>
                           <option value="Speaker Requests">Speaker Requests</option>
                           <option value="Registration Inquiries">Registration Inquiries</option>
                           <option value="Sponsorship Inquiries">Sponsorship Inquiries</option>
                           <option value="Feedback">Feedback</option>
                        </select>
                     </div>
                     <div className="form-group">
                        <textarea name="message" className="font-alt form-control required" id="contact-message" rows="6" placeholder="Your Message"></textarea>
                     </div>
                     <span className="d-block font-alt font-w-600 letter-spacing-1 text-extra-small text-uppercase">*Please complete all fields correctly</span>
                     <button type="submit" id="btn-form-contact" className="btn btn-small btn-lg-medium btn-blue mt-4">Send Message</button>
                  </form>
               </div>
               <div className="col-lg-6 offset-xl-1">
                  <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between mt-4 mt-lg-0 p-4 position-relative rounded">
                     <div className="pr-md-4">
                        <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">E: <a href="https://demo.lucky-roo.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="36535847435f444f765253585752571855595b">[email&#160;protected]</a></span>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-small text-uppercase">P: +0264 123 4567</span>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">We endeavour to answer all enquiries within 24 hours on business days.</span>
                     </div>
                     <img src="images/contact-1.jpg" alt className="img-fluid rounded d-none d-md-block" />
                  </div>
                  <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between mt-4 p-4 position-relative rounded">
                     <div className="pr-md-4">
                        <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Visit Us: 157 Sunset Road, Cikampek Utara, Jawa Barat</span>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">We are open from 8.30 AM — 4.00 PM week days.</span>
                     </div>
                     <img src="images/contact-2.jpg" alt className="img-fluid rounded d-none d-md-block" />
                  </div>
                  <div className="align-items-center bg-white border border-gray-300 box-shadow d-flex justify-content-between mt-4 p-4 position-relative rounded">
                     <div className="pr-md-4">
                        <span className="d-block font-alt font-w-600 letter-spacing-1 text-small text-uppercase">Management & Venue Operations</span>
                        <span className="d-block font-alt font-w-600 letter-spacing-1 mt-2 text-gray-800 text-extra-small text-uppercase">Anies Baswedan – Event Manager & Conference Host – <a href="https://demo.lucky-roo.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="bcddd2d5d9cfe3deddcfcbd9d8ddd2fcd8d9d2ddd8dd92dfd3d1">[email&#160;protected]</a></span>
                     </div>
                     <img src="images/contact-3.jpg" alt="" className="img-fluid rounded d-none d-md-block" />
                  </div>
               </div>
            </div>
         </div>
      </section> */}
      </>
   )
}
