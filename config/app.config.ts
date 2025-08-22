import { registerAs } from "@nestjs/config"

export default registerAs ('appConfig',()=>({
    envirment:process.env.NODE_ENV||'production'
}))
//dvantages of using custom config. 1. we have access to process.env and we can set default values, when want segrate the conf in diff config in deff module