const Homepage = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-24 py-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                <div>
                    <h1 className="text-5xl font-bold">Hi, Arin here</h1>
                    <p className="text-gray-400 text-lg">21 year old guy; playing around with cool stuffs</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <img
                        src="https://i.pinimg.com/736x/a5/95/4d/a5954dcb62b8bf6bb9af3bc9964f6945.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border border-gray-700"
                    />
                </div>
            </div>

            {/* About Section */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-400">
                    <strong>tldr;</strong> building projects and learning.
                </p>
                <p className="text-gray-400">
                    I break things so you don’t have to.
                </p>
            </section>

            {/* Cool Places I Worked At */}
            <section className="section mb-10" id="experience">
                <h2 className="text-xl font-semibold mb-2">Cool places I worked at</h2>

                {[
                    {
                        logo: "https://media.licdn.com/dms/image/v2/D560BAQG8Se0yW0_Z_A/company-logo_200_200/B56ZkK_bhgG0AM-/0/1756826026815/nexus_hub_cnxiter_logo?e=1761782400&v=beta&t=HQxXMVBwEwsPI7k4AVC-MVerwy4rutYacmpQKVXY3VI",
                        company: "Nexus-E1",
                        title: "Open source contributor",
                        duration: "August 2025 - present",
                    },
                ].map((job, idx) => (
                    <div
                        key={idx}
                        className="job-entry flex items-center justify-between bg-black p-4 rounded-lg mb-4"
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src={job.logo}
                                alt={`${job.company} Logo`}
                                className="w-8 h-8 rounded"
                            />
                            <div className="job-details">
                                <p className="company font-semibold">{job.company}</p>
                                <p className="title text-gray-400 mb-2">{job.title}</p>
                            </div>
                        </div>
                        <div className="job-duration text-gray-400 mb-2">{job.duration}</div>
                    </div>
                ))}
            </section>

            {/**/}
            <section className="section mb-10" id="experience">
                <h2 className="text-xl font-semibold mb-2">Engineered</h2>

                {[
                    {
                        title: "AlgoLogs",
                        description: "An all-in-one problem-solving companion that auto-saves solutions into your linked github repository, lets you jot quick notes, organizes content with conceptual tags, provides a searchable dashboard, and tracks your progress.",
                        link: ""

                    },
                    {
                        title: "Mechanical-Turks",
                        description: "A fully-typed task management platform with JWT authentication, image uploads via Cloudinary, Solana blockchain payments with Phantom and Backpack wallet support, backend transaction verification, and a dashboard for tracking task statuses, built with Prisma ORM and PostgreSQL/MySQL.",
                        link: "https://github.com/Arin004joshi/Mechanical_Turks"
                    }
                ].map((projects, idx) => (
                    <div
                        key={idx}
                        className="job-entry flex items-center justify-between bg-black p-4 rounded-lg mb-4"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="job-details">
                                <a href={projects.link} target="_blank" className="company font-semibold">{projects.title}</a>
                                <p className="title text-gray-400 mb-2">{projects.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Education Section */}
            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Education</h2>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/1510405002757-FP2W9HV8ZA0HP2IF3O6A/SOA-PNG.png"
                            alt="SOA"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h3 className="font-semibold">Siksha O Anusandhan, Bhubaneswar</h3>
                            <p className="text-gray-400 text-sm">Computer Science and Engineering</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">2023 - 2027</p>
                </div>
            </section>

            {/* Footer / Stay Updated */}
            <footer className="border-t border-gray-700 pt-6 mt-12 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
                <p className="text-gray-400 mb-4 text-center">Subscribe to my email list. I do not spam, ever.</p>
                <div className="flex max-w-md w-full mb-6">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-l bg-gray-900 border border-gray-700 text-white focus:outline-none"
                    />
                    <button className="px-4 py-2 rounded-r bg-white text-black font-semibold">
                        Subscribe
                    </button>
                </div>
                {/* GitHub logo centered */}
                <a href="https://github.com/Arin004joshi" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                        alt="Github"
                        className="w-10 h-10 rounded-full border border-gray-700"
                    />
                </a>
                <a href="https://x.com/arin4427" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png"
                        alt="Github"
                        className="w-10 h-10 rounded-full border border-gray-700"
                    />
                </a>
            </footer>
        </div>

    );
};

export default Homepage;
