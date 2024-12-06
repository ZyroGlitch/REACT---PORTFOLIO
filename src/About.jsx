
import TypewriterEffect from "./TypeWriter";

export function About() {
    return (
        <>
            <section className="grid justify-center items-center sm:grid-cols-2 bg-white text-slate-950 homepage">
                <div className="flex justify-center items-center">
                    <img src="profile.png" alt="profile" className="object-contain bg-slate-400 w-[350px] h-[350px] shadow-2xl border-2 border-white rounded-full" />
                </div>

                <div className="">
                    <h4 className="text-[1.5rem] font-bold">Every story has a chapter</h4>
                    <h1 className="text-[2.5rem] font-bold mb-[2rem]">WRITE YOURS</h1>

                    <p className="text-[1.25rem] font-bold">Hi! I'm John Ford Buliag</p>
                    <TypewriterEffect />

                    <div className="flex items-between gap-x-[1rem] mt-[1.5rem]">
                        <div className="text-center border-2 border-slate-300 rounded-full shadow-2xl hover:bg-blue-600 hover:border-blue-600">
                            <a href="https://www.facebook.com/johnford.buliag.2" target="_blank">
                                <img src="facebook.png" alt="facebook" className="object-contain w-[50px] h-[50px] p-3" />
                            </a>
                        </div>

                        <div className="text-center border-2 border-slate-300 rounded-full shadow-2xl hover:bg-pink-500 hover:border-pink-500">
                            <a href="https://www.instagram.com/johnfordbuliag/?hl=en" target="_blank">
                                <img src="instagram.png" alt="instagram" className="object-contain w-[50px] h-[50px] p-3" />
                            </a>
                        </div>

                        <div className="text-center border-2 border-slate-300 rounded-full shadow-2xl hover:bg-blue-400 hover:border-blue-400" target="_blank">
                            <a href="#">
                                <img src="linkedin.png" alt="linkedin" className="object-contain w-[50px] h-[50px] p-3" />
                            </a>
                        </div>

                        <div className="text-center border-2 border-slate-300 rounded-full shadow-2xl hover:bg-slate-900 hover:border-slate-900">
                            <a href="https://github.com/ZyroGlitch" target="_blank">
                                <img src="github.png" alt="github" className="object-contain w-[50px] h-[50px] p-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}