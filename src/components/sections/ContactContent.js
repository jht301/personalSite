import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactContent() {
  return (
    <div className="w-full h-full flex flex-col px-6 pb-6 overflow-y-auto text-console-screen-dark space-y-4">
      <h2 className="font-pixel text-lg uppercase border-b-2 border-console-screen-mid pb-2 mb-2 sticky top-0 bg-console-dark-gray z-10 w-[calc(100%+48px)] -mx-6 px-6 pt-6 text-console-red">
        Contact
      </h2>
      
      <div className="font-sans text-base space-y-6 pb-6 flex flex-col flex-grow justify-center">
        <p className="text-center italic text-zinc-200 px-4 leading-relaxed">
          "Available for selected consulting, product, and creative projects."
        </p>

        <div className="space-y-4 pt-2 max-w-sm mx-auto w-full">
          
          <a href="mailto:jhterzi@gmail.com" className="flex items-center space-x-4 p-4 hover:bg-console-screen-light rounded cursor-pointer transition-colors group">
            <div className="bg-console-red p-2 rounded-full text-white">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-pixel text-sm text-white">Email Me</span>
          </a>
          
          <a href="https://www.linkedin.com/in/jht301/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 hover:bg-console-screen-light rounded cursor-pointer transition-colors group">
            <div className="bg-blue-600 p-2 rounded-full text-white">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="font-pixel text-sm text-white">LinkedIn</span>
          </a>

          <a href="https://github.com/jht301" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 hover:bg-console-screen-light rounded cursor-pointer transition-colors group">
            <div className="bg-console-mid-gray p-2 rounded-full text-white mt-1">
              <Github className="w-5 h-5" />
            </div>
            <span className="font-pixel text-sm text-white">GitHub</span>
          </a>

        </div>
      </div>
    </div>
  );
}
