# MEAN-Final-Project
This is a MEAN project using Express, PostgreSQL, Angular and ORM tool Sequelize

## Creating User Model
$ sequelize model:create --name USERS --attributes USER_NAME:string,FIRST_NAME:string,LAST_NAME:string,PASSWORD:string,EMAIL:string,IS_ADMIN:boolean

## Creating LEGUES Model
$ sequelize model:create --name LEAGUES --attributes NAME:string,CODE:string,DESCRIPTION:string

## Creating TEAMS Model
$ sequelize model:create --name TEAMS --attributes TEAM_NAME:string,LEAGUE_ID:number,MAX_TEAM_MEMBERS:number,MIN_AGE:number,MAX_AGE:number,TEAM_GENDER:string,MANAGER_NAME:string,MANAGER_PHONE:string,MANAGER_EMAIL:string