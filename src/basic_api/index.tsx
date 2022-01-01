import React from 'react';
import { fetchPosts } from '../redux/posts_api/postsAction';
import {useSelector,useDispatch,connect} from 'react-redux';

export interface Ipost {
    userId : number;
    id:number;
    title:string;
    body:string;
}
const PostList = () => {
    const post = useSelector((state:any) => {console.log('post',state.post); return state.post})
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPosts());
    },[])

    return (
        <>
        {post.loading ? <h1>Loading</h1> : post.errorMessage.length ?  <h1>Error Occured {post.errorMessage}</h1> : <>  {post.data.map((v:Ipost) => {

return <li key={v.id}>{v.title}</li>
} )}</> }
      
        
        </>
    )
}

export default PostList;