

const Job = ({job}) => {
    let {logo} = job;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default Job;