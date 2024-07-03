
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
    let user = users.find((u)=>u.email == email && u.password == password);
    return user;
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
    userName : 'tester1',
    email: 'tester1@gmail.com',
    password: 'tester1'
},{
    id:2,
    userName:'tester2',
    email:'tester2@gmail.com',
    password:'tester2'
}]