import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col w-screen z-50">
        {/* Footer Background transition */}
        <div className="flex w-screen h-20 bg-gradient-to-b from-transparent to-cyan-995 text-cyan-" />
        <div className="flex w-screen bg-cyan-995">
            {/* Footer Content */}
            <div className="flex flex-col w-full max-w-7xl p-4 mx-auto text-cyan-950 dark:text-cyan-200 text-center gap-5">
                {/* not sure if copyright is necessary, so commenting it out until it's needed */}
                {/* <p>Copyright &copy; {new Date().getFullYear()} Kaoushik Murugan - All rights reserved</p> */}
                
                <p>Built with Next.js, Tailwind CSS, and Framer Motion in TypeScript</p>

                <p>Source code and credits can be found on my 
                <a href="https://github.com/KaoushikMurugan/personal-website"
                    target="_blank" rel="noopener noreferrer"> <u>GitHub</u></a></p>

                <div className="flex justify-center space-x-4"/>
            </div>
        </div>
    </div>
  )
}

export default Footer