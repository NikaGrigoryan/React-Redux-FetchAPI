import Card from "../Card/Card";
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loadData } from "../../redux/catRedux/cat.actions";
import { CAT_KEY } from "../../redux/catRedux/cat.reducer";
import { StyledPage } from "./Page.styled";

const Page = ({url}) => {
    let dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(loadData(url))
    }, [dispatch,url])
    
    let viewCat = useSelector((state) =>{
        return state[CAT_KEY]
    })
    
  return<StyledPage>
    {
        viewCat.data.length === 0? null : viewCat.data.map((item)=>{
            return <div key = {item.id}>
                <Card mainImg={item.url}/>
            </div>
        })
    }
  </StyledPage>
};

export default Page;
