import {INCREMENT,DECREMENT,RESET} from '../constant/counterConstant'

const initialCount={
    count:0
}

export const counterReducer=(state=initialCount,action)=>{
    switch (action.type) {

        case INCREMENT:
            
            return{
                count:state.count+1
            }
        
        case DECREMENT:

            if(state.count<1){
                return {
                    count:0
                }
            }
            
            return{
                count:state.count-1
            }
        
        case RESET:
            
            return{
                count:0
            }
        default:
            return state;
    }
}

export default counterReducer;