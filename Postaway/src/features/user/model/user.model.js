
export default class UserModel {
    constructor(userName, email, password, id) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.id = id;
    }
};

export const confirmLogin = (data) => {
    const { email, password } = data;
    let userResult = null;
    users.forEach((user) => {
      if (user.email === email && user.password === password){
        userResult = user;
      } 
    });
    return userResult;
};

export const addUser = (data)=>{
    const {userName, email, password} = data;
    const newUser = new UserModel(userName, email, password, users.length + 1);
    users.push(newUser);
    return newUser;
}
  
export const getAllUsers = () => {
    return users;
};

let users = [{
    id:1,
    userName : "test",
    email: 'test@gmail.com',
    password: 'test123'
}]