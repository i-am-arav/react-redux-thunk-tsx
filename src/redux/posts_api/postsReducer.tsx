import { Ipost } from "../../basic_api";

interface postsState {
    data:Ipost[];
    loading:boolean;
    errorMessage:string;
}
const initialState : postsState = {
    data:[],
    loading:false,
    errorMessage:''

}
interface Iaction {
    type:string;
    payload?:any;
}

export default function postsReducer(state:postsState = initialState, action:Iaction) {

    switch(action.type) {
        case 'FETCHING' : {
            return ({...state,loading:true})
        }
        case 'FETCH_FAILIURE' : {
            const errorMessage:string = action.payload
            return ({...state,errorMessage,loading:false})
        }
        case 'FETCH_SUCCESS' : {
            const posts:Ipost[] = action.payload;
            return({...state,data:posts,loading:false,errorMessage:''})
        }
        default: return state;
    }
}