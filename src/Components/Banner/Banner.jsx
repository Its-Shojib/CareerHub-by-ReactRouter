
const Banner = () => {
    return (
        <div className="flex justify-between items-center my-10">
            <div className="text-left space-y-3">
                <h2 className="text-5xl font-bold max-w-sm">One Step Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h2>
                <p >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-5 py-2 rounded-md">Get Started</button>
            </div>
            <img className="w-3/6" src="./../../../public/images/user.png" alt="" />
        </div>
    );
};

export default Banner;