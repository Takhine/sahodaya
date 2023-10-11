import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white py-2">
         <div className="container">
            <div className="row align-items-center pb-5">
               {/* <div className="col-md-4 text-center text-md-start">
                  <img src="img/sahodaya-logo.png" alt="footer" className="footer-logo opacity-6" />
               </div> */}
               <div className="col-md-8">
                  <ul className="footer-icon-social mb-0 mt-4 p-0 text-center text-md-end title-xs-small title-medium d-none">
                     <li className="list-inline-item">
                        <a href="https://www.facebook.com/singhaniaquestplus" className="text-gray-600"><i className="fa fa-facebook"></i></a>
                     </li>
                     <li className="list-inline-item pl-4">
                        <a href="https://www.linkedin.com/company/singhaniaonline/mycompany/?viewAsMember=true" className="text-gray-600"><i className="fa fa-linkedin"></i></a>
                     </li>
                     
                     <li className="list-inline-item pl-4">
                        <a href="https://www.instagram.com/singhaniaquestplus/?next=%2F" className="text-gray-600"><i className="fa fa-instagram"></i></a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-12 text-center">
                  <div className="border-gray-300 border-top pt-5">
                     <span className="font-alt font-w-600 letter-spacing-1 text-extra-small text-gray-700 text-uppercase">&copy; Mumbai Sahodaya Association and Metropolitan Regions. All Rights Reserved.</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  )
}
