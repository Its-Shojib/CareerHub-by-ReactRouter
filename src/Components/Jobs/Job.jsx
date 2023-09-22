import PropTypes from 'prop-types';

const Job = ({job}) => {
    let {logo} = job;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
  };
export default Job;