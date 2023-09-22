import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    let [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold ">Job Category List</h1>
            <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 gap-5">
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