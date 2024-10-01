import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto p-6 bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/ok3445.jpg')" }}>
      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center btn-secondary text-yellow-500">About Me</h2>
        <p className="text-lg text-center max-w-2xl mx-auto text-yellow-500">
          Hello! I’m a web developer with a passion for creating interactive and responsive websites. 
          I love coding and solving problems through technology.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-500"> My Previous Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Blog Interface</h3>
            <p className="mb-4">
              A blog interface for creating,removing and editing blogs
              <a href="https://github.com/AdwinTS/Blog_interface-original" target="_blank" className="text-blue-500 ml-1 underline">GitHub</a>.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Pig game</h3>
            <p className="mb-4">
              A funny game played between two members
              <a href="https://github.com/prithvi1236/FossHack" target="_blank" className="text-blue-500 ml-1 underline">GitHub</a>.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Resume Builder</h3>
            <p className="mb-4">
              A Resume builder app which uses github for extracting data.
              <a href="https://github.com/prithvi1236/FossHack" target="_blank" className="text-blue-500 ml-1 underline">GitHub</a>.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Guess-the-number</h3>
            <p className="mb-4">
              A number guessing game 
              <a href="https://github.com/AdwinTS/Guess-the-number" target="_blank" className="text-blue-500 ml-1 underline">GitHub</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-8 text-center ">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">JavaScript</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">React.js</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">Node.js</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">Next.js</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">Express.js</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">flask</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">HTML/CSS</li>
          <li className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-lg">Git & GitHub</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
        <p className="text-lg text-center"> Data Analyst Intern at IBM SkillsBuild (July 2024 - August 2024)</p>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center">Education</h2>
        <p className="text-lg text-center">Bachelor of Science in Computer Science and Technology, Model Engineering College Thrikkakara (2023 - 2027)</p>
      </section>

      {/* Contact Section */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-4">
          Feel free to reach out via 
          <a href="mailto:adwintsunil8@gmail.com" className="text-blue-500 ml-1 underline">email</a> or connect with me on 
          <a href="https://linkedin.com/adwintsunil" className="text-blue-500 ml-1 underline">LinkedIn</a>.
        </p>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2" htmlFor="message">Your Message</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Write your message" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default page