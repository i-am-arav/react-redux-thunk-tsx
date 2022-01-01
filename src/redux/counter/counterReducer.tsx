
interface Iaction {
    type:string;
    payload?: any;
}
const counterReducer = (state:number = 0, action:Iaction)  => {
    switch(action.type) {
        case 'INCREMENT' : 
                return state+1
        case 'DECREMENT' : 
                return state-1;
        case 'RESET' : 
                return (state=0)
        default :
            return state;
    }

}

export default counterReducer;