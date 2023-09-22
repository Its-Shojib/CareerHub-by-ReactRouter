import PropTypes from 'prop-types';
const Category = ({ category }) => {
    let { logo, category_name, availability } = category;

    return (
        <div>
            <div className="card">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category_name}</h2>
                    <p>{availability}</p>
                </div>
            </div>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
};
export default Category;