import connection from '../databaseConn.js'

class UserService {

    static  getAllUsers(){     
        try{
            return new Promise((res, rej) => {
                connection.query('SELECT * FROM user_data', (err, data) => {
                    if(err){
                        rej(err)
                    } else {
                        res(data)
                        console.log(data)
                    }
                })
            })
        } catch (e){
            console.error('error while getting users', e)
            return []
        }
    }

    static checkIfUserExist(login, password){

        try {
            return new Promise((res, rej) => {
                connection.query(`SELECT * FROM user_data WHERE login = '${login}' AND password = '${password}'`, (err, data) => {
                    if(err){
                        rej(err)
                    } else {
                        res(data)
                    }
                })
            })
        } catch (e){
            console.error('error while checking user', e)
            throw Error(e)
        }
    }
}

export default UserService


