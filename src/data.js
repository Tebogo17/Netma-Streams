export const API_KEY = 'AIzaSyA56bTdlDSfKWd1zsFGn8S3c73qWV0W4Tk';

export const value_converter = (value) =>{
    if (value >= 1000000){
        return Math.floor(value/1000000) + "M"
    }
    else if (value >= 1000){
        return Math.floor(value/1000) + "K"
    }
    else {
        return value
    }   
}