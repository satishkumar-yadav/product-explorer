import '../../styles/footer.css';

function Footer() {

  return ( 

    <footer className='p-[20px] w-full h-[100px] shadow-sm bg-[#da222] text-center' style={{color: 'black'}}>
        <div className="flex items-center px-5 py-2.5 bg-[#002147] text-white ">
              <p className="pt-[35px] text-center mr-[15px]" >Designed & Developed By</p>
              <p className="text-3xl font-bold">
                &copy; {new Date().getFullYear()} Satish Kumar Yadav
              </p>
              <p className='pl-24 ml-20'>All rights reserved.</p>
        </div>
               
    </footer> 
    
    //  <footer className="bg-white dark:bg-black w-full">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    //     <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
    //       <p className="text-sm text-gray-500 dark:text-gray-400">
    //         © 2024 YourBrand. All rights reserved.
    //       </p>

    //       <div className="flex items-center gap-6">
    //         <a
    //           href="#"
    //           className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
    //         >
    //           Privacy 
    //         </a>
    //         <a
    //           href="#"
    //           className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
    //         >
    //           Terms
    //         </a>
    //         <a
    //           href="#"
    //           className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
    //         >
    //           Contact
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    
  )
}

export default Footer



 