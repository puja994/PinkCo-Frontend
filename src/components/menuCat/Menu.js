import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../pages/category/categoryAction";
import { Link } from "react-router-dom";
import './menu.css'


export const Menu = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const { categoryList } = useSelector((state) => state.category);
    return (
        <div className="menu">
             {categoryList?.map((item, i) => {
        return (
          <div key={i}>
            
            <Link to={`/category/${item.slug}/${item._id}`}>{item?.name}</Link>
          </div>
        );
      })}
        </div>
    )
}
