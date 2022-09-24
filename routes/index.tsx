import { Footer } from "../components/Footer.tsx";
import Mint from "../islands/Mint.tsx";

export default function Home() {
  return (
    <main>
      <section class="text-gray-400 body-font">
        <div class="container px-5 pt-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10  bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 py-4 rounded-l-2xl sm:bg-[rgba(0,0,0,0.20)]">
                <div class="w-28 h-28 rounded-full inline-flex items-center justify-center  ">
                  <img
                    alt="content"
                    class="object-cover object-center rounded-full "
                    src="pixelportrait.png"
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-bold title-font mt-4 text-3xl text-white">
                    ADAM SOBOTKA
                  </h2>
                  <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                  <p class="text-base text-gray-300">
                    Software Development Manager
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:px-8 px-4 sm:py-8 py-4 sm:border-l border-solid border-white border-opacity-20  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-normal mt-3 mb-4">
                  I am a seasoned, value oriented leader with a passion for
                  building and improving product development organizations. I
                  spent last 10+ years in scale-up organizations growing the
                  startup culture while improving processes to keep up with
                  bigger organization demands. Through the struggles and fails I
                  learned a lot and now I am looking to bring my experience and
                  energy to the SaaS organizations in the web3 world.
                </p>
                <Mint address="0x2953399124F0cBB46d2CbACD8A89cF0599974963" id="28868293704924423786108933622408740998705747173761726793052095567437093666916" />
                <a
                  class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mr-3 p-2 border-0 focus:outline-none transition-colors duration-500"
                  href="resume.pdf"
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>

                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 w-full md:w-1/3">
                <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
                  <div class="p-6">
                    <h1 class="title-font text-xl font-bold text-white mb-3">
                      Skills
                    </h1>
                    <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                    <ul class="leading-normal mt-3 mb-3">
                      <li class="pb-1 pt-6 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>

                        Communication
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z" />
                        </svg>

                        Organization Design
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2 "
                        >
                          <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                          <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                        </svg>Mentoring
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                        </svg>
                        Facilitating
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                        </svg>

                        Process Design
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M17 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM17 15.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM3.75 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.5 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM10 11a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 11zM10.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10 6a2 2 0 100 4 2 2 0 000-4zM3.75 10a2 2 0 100 4 2 2 0 000-4zM16.25 10a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>

                        Problem Solving
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                        </svg>

                        Leading the Leaders
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zm7.49-8.931a.75.75 0 01-.175 1.046 19.326 19.326 0 00-3.398 3.098.75.75 0 01-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 115.22 9.72l2.75-2.75a.75.75 0 011.06 0l1.664 1.663a20.786 20.786 0 013.122-2.74.75.75 0 011.046.176z"
                            clipRule="evenodd"
                          />
                        </svg>

                        Establishing Vision
                      </li>
                      <li class="py-3 hover:text-white flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                            clipRule="evenodd"
                          />
                        </svg>

                        Strategy Execution
                      </li>
                    </ul>
                    <div class=" items-center flex-wrap hidden ">
                      <a class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                          </path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-200 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                          </path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 w-full md:w-2/3 ">
                <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
                  <div class="p-6">
                    <h1 class="title-font text-xl font-bold mb-3">
                      Experience
                    </h1>
                    <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                    <article class="text-gray-200 body-font overflow-hidden">
                      <div class="container px-5 py-2 mx-auto">
                        <div class="-my-8 divide-y-1 divide-[rgba(255,255,255,0.5)]">
                          <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                Developer DAO
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                March 2022-Present
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Mentoring, OKRs Initiative
                              </h2>
                              <p class="leading-normal mt-3">
                                Helping initiative to establish OKRs
                              </p>
                              <p class="leading-normal mt-3">
                                Mentoring management practices
                              </p>
                              <p class="leading-normal mt-3">
                                Mentoring fullstack web3 development
                              </p>
                              <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mt-4 border-0 focus:outline-none transition-colors duration-500"
                                href="https://developerdao.com/"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                Zitrone
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                March 2022-Present
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Founder/CTO
                              </h2>
                              <p class="leading-normal mt-3">
                                Event management tool for DAOs
                              </p>
                              <p class="leading-normal mt-3">
                                Easy to use, single source of truth
                              </p>
                              <p class="leading-normal mt-3">Token gating</p>
                              <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mt-4 border-0 focus:outline-none transition-colors duration-500"
                                href="https://zitrone.pages.dev/"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                Emplifi
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                June 2021 - April 2022
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Director of Engineering
                              </h2>
                              <p class="leading-normal mt-3">
                                Helped merging Engineering departments of four
                                companies together
                              </p>
                              <p class="leading-normal mt-3">
                                Established core engineering processes
                              </p>
                              <p class="leading-normal mt-3">
                                Personally led key integration initiatives
                              </p>
                              <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mt-4 border-0 focus:outline-none transition-colors duration-500"
                                href="https://emplifi.io"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                Socialbakers
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                October 2019 - June 2022
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Director of Engineering
                              </h2>
                              <p class="leading-normal mt-3">
                                Created a career development plan
                              </p>
                              <p class="leading-normal mt-3">
                                Developed the planning process
                              </p>
                              <p class="leading-normal mt-3">
                                Reorganized the engineering into the value
                                stream model
                              </p>
                              <p class="leading-normal mt-3">
                                Refined the process of developers contribution
                                to the product discovery
                              </p>
                              <p class="leading-normal mt-3">
                                Established horizontal (tech-stack oriented)
                                guild system
                              </p>

                              <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mt-4 border-0 focus:outline-none transition-colors duration-500"
                                href="https://socialbakers.com"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                2Fresh
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                April 2017 - March 2018
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Delivery Lead
                              </h2>
                              <p class="leading-normal mt-3">
                                Designing and executing operations management
                                strategy
                              </p>
                              <p class="leading-normal mt-3">
                                Part of Innovation Team
                              </p>
                              <p class="leading-normal mt-3">
                                Created and implemented Agile budgeting system
                              </p>
                              <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mt-4 border-0 focus:outline-none transition-colors duration-500"
                                href="https://2fresh.cz"
                              >
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
