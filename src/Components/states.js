let Data = {
    username:'',
    server:'http://192.168.1.101:5001'
}

export const SetUsername = (val) =>{
    Data.username = String(val)
}

export const GetData = () =>{
    return Data
}