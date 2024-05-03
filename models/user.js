import { v4 as uuidv4} from 'uuid' 
import connection from '../databaseConn.js'

class User {
    constructor(name,surname,thirdname,login,phone, password){
        this.username = name;
        this.password = password;
        this.surname = surname;
        this.thirdname = thirdname;
        this.login = login;
        this.phone = phone;
        this.id = uuidv4();
    }

    toJSON() {
        return {
            name: this.username,
            password: this.password,
            id: this.id
        }
    }

    async save(){
        try{
            console.log('connection open')
            return new Promise((res, rej) => {
                connection.query(`insert into user_data (id,name,surname,thirdname,login,phone,password) VALUES ('${this.id}','${this.username}','${this.surname}','${this.thirdname}','${this.login}','${this.phone}','${this.password}')`,err => {
                    if(err){
                        rej(err)
                    } else {
                        console.log('user saved')
                        res()
                    }
                })
            })
        } catch (e){
            console.error('error while saving user', e)
        }
    }

    async checkUser(){

    }
}

export default User