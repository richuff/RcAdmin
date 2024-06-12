export const getTime = function():string{
    const time:number = new Date().getHours();
    let message:string ='';
    if (time <= 9){
        message='早上'
    }else if (time > 9 && time <14){
        message='上午'
    }else if (time >= 14 && time <18){
        message='下午'
    }else{
        message='晚上'
    }
    return message;
}