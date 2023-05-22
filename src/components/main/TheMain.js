import Playlist from "./playlist/Playlist";

function TheMain() {
  return (
        <main className="relative text-white">
            <div className="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute top-0 w-full"></div>
            <div className="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
                <div>
                    <div className="flex flex-wrap justify-between items-end mb-[18px] gap-x-6">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit.</a>
                            </h2>
                        </div>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
                    </div>
                    
                    <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <Playlist />

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>                       
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap justify-between items-end mb-[18px] gap-x-6">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit.</a>
                            </h2>

                            <p className='text-sm text-[#b3b3b3]'>Lorem ipsum dolor sit.</p>
                        </div>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
                    </div>
                    
                    <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a href="/" className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group cursor-default">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7df192/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>

                            <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] divide-y divide-[#3e3e3e] text-sm p-1 rounded shadow-xl whitespace-nowrap z-10 hidden group-hover:block">
                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library</button>
                                </li>

                                <li className="relative">
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                                        Share

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                                    <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl">
                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist</button>
                                        </li>

                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist</button>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations</button>
                                </li>

                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop App</button>
                                </li>
                            </ul>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>                       
                    </div>
                </div>

                <div>
                    <div className="flex flex-wrap justify-between items-end mb-[18px] gap-x-6">
                        <div>
                            <h2 className="text-2xl font-semibold hover:underline capitalize">
                                <a href="/">Lorem ipsum dolor sit.</a>
                            </h2>

                            <p className='text-sm text-[#b3b3b3]'>Lorem, ipsum.</p>
                        </div>
                        <a href="/" className="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
                    </div>
                    
                    <div className="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
                        <a href="/" className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group cursor-default">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/7df192/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>

                            <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] divide-y divide-[#3e3e3e] text-sm p-1 rounded shadow-xl whitespace-nowrap z-10 hidden group-hover:block">
                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library</button>
                                </li>

                                <li className="relative">
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                                        Share

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                                    <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl">
                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist</button>
                                        </li>

                                        <li>
                                            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist</button>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations</button>
                                </li>

                                <li>
                                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop App</button>
                                </li>
                            </ul>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/1f9d9d/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/8f0d12/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>

                        <a href="/" className="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                            <div className="relative">
                                <img src="https://fakeimg.pl/600/123456/fff?text=Cover&font=lobster" alt="#" className="rounded shadow-lg" />

                                <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist Title</h3>

                            <p className="text-sm text-[#b3b3b3] line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, consectetur?</p>
                        </a>                       
                    </div>
                </div>
            </div>
        </main>
  );
}

export default TheMain;