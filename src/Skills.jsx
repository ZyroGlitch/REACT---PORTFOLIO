export function Skills() {
    return (
        <>
            <div className="bg-[#7469B6] text-white h-screen homepage">
                <div className="text-center py-[2rem]">
                    <h2 className="text-[2rem] text-white font-bold">TOOLS AND</h2>
                    <h2 className="text-[2rem] text-cyan-200 font-bold">FRAMEWORKS</h2>
                </div>


                <div className="grid justify-center sm:grid-cols-12">
                    <div className="flex justify-center items-center sm:col-span-6">
                        <img src="programming.svg" alt="programming" className="object-contain w-[350px] h-[350px]" />
                    </div>

                    <div className="sm:col-span-6">
                        <div className="mb-[2rem]">
                            <h4 className="text-[1.25rem] font-bold mb-[1rem]">EXPERTISE</h4>

                            <div className="flex items-center gap-x-[2rem]">
                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/html.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">HTML</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/css.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">CSS</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/js.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">JAVASCRIPT</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/laravel.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">LARAVEL 11</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/bootstrap.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">BOOTSTRAP 5</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h4 className="text-[1.25rem] font-bold mb-[1rem]">OTHERS</h4>

                            <div className="flex items-center gap-x-[2rem] mb-[2rem]">
                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/react.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">REACT</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/php.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">PHP</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/tailwind.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">TAILWIND</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/git.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">GIT</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/flutter.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">FLUTTER</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-[2rem] mb-[2rem]">
                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/firebase.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">FIREBASE</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/mysql.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">MYSQL</p>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <img src="tech stack/sql.svg" alt="html" className="object-contain w-[40px] h-[40px]" />
                                    <p className="text-[1rem] font-semibold">SQL</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}