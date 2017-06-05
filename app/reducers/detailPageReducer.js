/**
 * Created by Administrator on 2017/6/3.
 */
import {START_FETCH_DETAIL_PAGERDATA,COMPLETE_FETCH_DETAIL_PAGERDATA} from '../contants/type';

//定义要主页要使用到的数据结构
let initState = {
    array:[],
    isLoading:true,
    isSuccess:false,
    error:null
}

let DetailPageReducer = (state = initState ,action = {})=>{
    switch(action.type){
        case START_FETCH_DETAIL_PAGERDATA:
            return Object.assign({},state,{
                isLoading:action.isLoading
            }); //赋值到的新对象,init的state数据对象，改变的数据对象（应该变就会引去view的属性刷新）
        case COMPLETE_FETCH_DETAIL_PAGERDATA:
            return  Object.assign({},state,{
                isLoading:false,
                isSuccess:action.isSuccess,
                array:action.data,
                error:action.error
            });
        default :
            return state;
    }
}
export default DetailPageReducer;
