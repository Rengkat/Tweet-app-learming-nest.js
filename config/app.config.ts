export const appConfig =()=>{
return {
    envirment:{}
    database:{
        host:process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) ||5432,
        name:process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        syncronize:process.env.SYNC_DB ==='true'? true: false
    }
}
}