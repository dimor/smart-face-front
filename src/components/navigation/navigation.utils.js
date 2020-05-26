export const userExist =(user)=>{

    if(user !== undefined)
        if (Object.keys(user).length !== 0)
            return true
        else 
            return false
    else
        return false

}
