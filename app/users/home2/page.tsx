import React from "react";
import Link from "next/link";

const Home2 = () => {
  return (
    <main
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/beauti.jpg')" }}
    >
      <section className="about-me">
        <h1 className="font-bold p-6 btn-neutral">
          Hello Everyone I am Adwin T Sunil
        </h1>
        <h2 className="py-5  btn-neutral">
          To get started I am a passionate computer science student who looks
          for every opportunity and likes coding very much
        </h2>
        <Link href="/users/new" className="btn btn-secondary py-5">
          To know about the coding languages I know
        </Link>
      </section>

      <section className="drawer-section">
        <div className="drawer">
          <h1 className="pr-6 btn-neutral">To get more info about me</h1>
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle py-9"
          />
          <div className="drawer-content pr-425">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button pr-14"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>{" "}
             
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a href="/users/new/contact">To get contact</a>
              </li>
              <li>
                <a href="/users/new/contact/my-projects">
                  View the projects I did
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="education pt-7">
        <div
          tabIndex={0}
          className="collapse border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            To know where I am studying click me
          </div>
          <div className="collapse-content">
            <p>
              I am currently pursuing btech computer science at Model
              Engineering College Thrikkara
            </p>
            <p>
              I studied my classes from lkg to 12th standard in Jai Rani Public
              School Thodupuzha
            </p>
            <p>I got 1725 rank in keam and 90.3 percentile in jee mains</p>
          </div>
        </div>
      </section>

      <section className="interests">
        <div
          tabIndex={0}
          className="collapse border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            My habits and interests
          </div>
          <div className="collapse-content">
            <p>I like creating exciting projects</p>
            <p>I also in my free times read books etc</p>
            <p>I have interest in basketball</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <div
          tabIndex={0}
          className="collapse border-base-300 bg-base-200 border"
        >
          <div className="collapse-title text-xl font-medium">
            My Major Skills
          </div>
          <div className="collapse-content">
            <p>I know Next.js and React.js</p>
            <p>
              I have got certificate from IBM skillsbuild which was a big
              achievement for me
            </p>
            <p>
              I also know C++ and I majorly use Python for backend with help of
              different modules
            </p>
          </div>
        </div>
      </section>
      <label className="swap swap-flip text-9xl">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>

      {/* Commented out sections are preserved */}
      {/* <ProductCard/> */}
    </main>
  );
};

export default Home2;
//     <main
//   className="bg-cover bg-center h-screen"
//   style={{
//     backgroundImage: "url('/Motivation Quotes.jpg')",
//   }}
// >
//         <h1 className='font-bold p-6 btn btn-neutral'>Hello Everyone I am Adwin T Sunil</h1>
//     <h2 className='py-5 btn btn-neutral'>To get started I am passionate computer science student who looks for every oportuinties and like coding very much</h2>
//     {/* <img src="adwin t sunil 01 (1)a.jpg" alt="img" /> */}
//     <Link href="/users/new" className='btn btn-secondary py-5'>To know about the coding languages i know</Link>
//     <div className="drawer">
//       <h1 className='pr-6'>To get more info about me</h1>
//   <input id="my-drawer" type="checkbox" className="drawer-toggle py-9" />
//   <div className="drawer-content">
//     {/* Page content here */}
//     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
//   </div>
//   <div className="drawer-side">
//     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
//     <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//       {/* Sidebar content here */}
//       <li><a href="/users/new/contact">To get contact</a></li>
//       <li><a href="/users/new/contact/my-projects">View the projects i did</a></li>
//     </ul>
//   </div>
// </div>
// <div tabIndex={0} className="collapse border-base-300 bg-base-200 border">
//   <div className="collapse-title text-xl font-medium">To know where i am studying click me</div>
//   <div className="collapse-content">
//     <p>I am currectly pursuing btech computer science at Model Engineering College Thrikkara</p>
//     <p>I studied my classes from lkg to 12th standard in Jai Rani Public School Thodupuzha</p>
//     <p>I got 1725 rank in keam and 90.3 percentile in jee mains</p>
//   </div>
// </div>
// <div tabIndex={0} className="collapse border-base-300 bg-base-200 border">
//   <div className="collapse-title text-xl font-medium">My habits and interest</div>
//   <div className="collapse-content">
//     <p>I like creating exciting projects </p>
//     <p>I also in my free times read books etc</p>
//     <p>I have interest in basketball</p>
//   </div>
// </div>
// <div tabIndex={0} className="collapse border-base-300 bg-base-200 border">
//   <div className="collapse-title text-xl font-medium">My Major Skills</div>
//   <div className="collapse-content">
//     <p>I know next.js and react.js </p>
//     <p>I have got certificate from IBM skillsbuild which was a big achievement for me</p>
//     <p>I also c++ and i major use python for backend with help of different modules</p>
//   </div>
// </div>

//     {/* <ProductCard/> */}
//     </main>
//     // <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//     //       Get started by editing&nbsp;
//     //       <code className="font-mono font-bold">app/page.tsx</code>
//     //     </p>
//     //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//     //       <a
//     //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         By{' '}
//     //         <Image
//     //           src="/vercel.svg"
//     //           alt="Vercel Logo"
//     //           className="dark:invert"
//     //           width={100}
//     //           height={24}
//     //           priority
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>

//     //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     //     <Image
//     //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js Logo"
//     //       width={180}
//     //       height={37}
//     //       priority
//     //     />
//     //   </div>

//     //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     //     <a
//     //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Docs{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Find in-depth information about Next.js features and API.
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Learn{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Learn about Next.js in an interactive course with&nbsp;quizzes!
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Templates{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Explore the Next.js 13 playground.
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Deploy{' '}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//     //       </p>
//     //     </a>
//     //   </div>
//     // </main>
//   )
