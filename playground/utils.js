
const myLuckyNumber = () => {
    let num = Math.round(Math.random() * 1000);
    if(num >200 && num < 500){
        return num;
    }else{
        return "Try your luck again";
    }
}

const giveMeNumber = () => {
    return myLuckyNumber();
}

module.exports = {
    giveMeNumber
}