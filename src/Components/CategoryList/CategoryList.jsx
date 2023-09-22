import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center ">
                <h1 className="text-4xl font-bold ">Job Category List</h1>
                <p className="text-sm mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-4">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}>
                    </Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;