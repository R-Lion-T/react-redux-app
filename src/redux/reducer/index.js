import { combineReducers } from "redux"

const dis = (state=[],action)=>{
    switch(action.type){
        case"TEST":{
            return state
        }default:{
            return state
        }
    }
}

const rootReducer = combineReducers({
    dis:dis
})

export default rootReducer