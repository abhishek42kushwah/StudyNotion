const BASE_URL =    process.env.REACT_APP_BASE_URL 


export const endpoints = {
    LOGIN_API:BASE_URL +"/auth/login",
    RESETPASSTOKEN_API :  BASE_URL+"/auth/reset-Password-token",
    
}

export const categories ={
    CATEGORIES_API: BASE_URL +  "/course/showAllCategory"
};
  