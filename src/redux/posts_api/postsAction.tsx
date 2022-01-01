import { Ipost } from "../../basic_api"
import React from 'react'
import Axios from 'axios';


export const fetchPosts =  ()  => {
    console.log("I am Excecuted")
    return async (dispatch: React.Dispatch<any>, getState:any)  => {
        dispatch(fetchPostsRequest());
       try {
           const result = await Axios.get('https://jsonplaceholder.typicode.com/posts');
           dispatch(fetchPostsSuccess(result.data));
       }
       catch(e) {
            dispatch(fetchPostsFailiure('FETCH GOT FAILIURE'));
       }
        
    }
}

export const fetchPostsRequest = () => {
    return ({type:'FETCHING'})
}
export const fetchPostsFailiure = (errorMessage:string) => {
    return ({type:'FETCH_FAILIURE', payload:errorMessage});

}
export const fetchPostsSuccess = (posts:Ipost[]) => { 
    return ({type:'FETCH_SUCCESS', payload:posts});
}