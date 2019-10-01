
-- Table: public."LEAGUES"

-- DROP TABLE public."LEAGUES";

CREATE TABLE public."LEAGUES"
(
    id integer NOT NULL DEFAULT nextval('"LEAGUES_id_seq"'::regclass),
    "NAME" character varying(255) COLLATE pg_catalog."default",
    "CODE" character varying(255) COLLATE pg_catalog."default",
    "DESCRIPTION" character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "LEAGUES_pkey" PRIMARY KEY (id)
);


-- Table: public."USERS"

-- DROP TABLE public."USERS";

CREATE TABLE public."USERS"
(
    id integer NOT NULL DEFAULT nextval('"USERS_id_seq"'::regclass),
    "USER_NAME" character varying(255) COLLATE pg_catalog."default",
    "FIRST_NAME" character varying(255) COLLATE pg_catalog."default",
    "LAST_NAME" character varying(255) COLLATE pg_catalog."default",
    "PASSWORD" character varying(255) COLLATE pg_catalog."default",
    "EMAIL" character varying(255) COLLATE pg_catalog."default",
    "IS_ADMIN" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "USERS_pkey" PRIMARY KEY (id)
)


-- Table: public."TEAMS"

-- DROP TABLE public."TEAMS";

CREATE TABLE public."TEAMS"
(
    id integer NOT NULL DEFAULT nextval('"TEAMS_id_seq"'::regclass),
    "TEAM_NAME" character varying(255) COLLATE pg_catalog."default",
    "LEAGUE_ID" integer,
    "MAX_TEAM_MEMBERS" integer,
    "MIN_AGE" integer,
    "MAX_AGE" integer,
    "TEAM_GENDER" character varying(255) COLLATE pg_catalog."default",
    "MANAGER_NAME" character varying(255) COLLATE pg_catalog."default",
    "MANAGER_PHONE" character varying(255) COLLATE pg_catalog."default",
    "MANAGER_EMAIL" character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "TEAMS_pkey" PRIMARY KEY (id)
)


INSERT INTO "LEAGUES" ("id","NAME","CODE","DESCRIPTION","createdAt","updatedA VALUES (DEFAULT,'U6 Curriculum','U6Curriculum','This curriculum will provide you activities that ch DRIBBLING, SHIELDING, and MOVING the BALL FORWARD.','2019-10-01 13:01:10.237 +00:00','2019-10-03:01:10.237 +00:00'),(DEFAULT,'U8 Curriculum','U8Curriculum','These technical topics include, dribng passing, receiving, shooting, and shot s , topping. ','2019-10-01 13:01:10.237 +00:00','2019-10 13:01:10.237 +00:00'),(DEFAULT,'U10 Curriculum','U10Curriculum','The curriculum guidelines are me to be flexible as all players of the same age are certainly not at the same developmental level. 2019-10-01 13:01:10.237 +00:00','2019-10-01 13:01:10.237 +00:00'),(DEFAULT,'U12 Curriculum','U12Cuculum','This curriculum has been specifically designed to support coaches with the delivery of soc activities that are specific and relatable to the developmental needs.','2019-10-01 13:01:10.237 :00','2019-10-01 13:01:10.237 +00:00'),(DEFAULT,'U15 Curriculum','U15Curriculum','This curriculum uses on empowering players to make their own decisions and express themselves within a broader tacal plan.','2019-10-01 13:01:10.237 +00:00','2019-10-01 13:01:10.237 +00:00')
INSERT INTO "USERS" ("id","USER_NAME","FIRST_NAME","LAST_NAME","PASSWORD","EM","IS_ADMIN","createdAt","updatedAt") VALUES (DEFAULT,'Admin','Adam','Gilchrist','password','Adminail.com',true,'2019-10-01 13:01:06.129 +00:00','2019-10-01 13:01:06.129 +00:00'),(DEFAULT,'NonAdmi'Adam','Gilchrist','password','Admin@gmail.com',false,'2019-10-01 13:01:06.129 +00:00','2019-10-01:01:06.129 +00:00'),(DEFAULT,'Randy','Randy','Mcgine','password','RandyMcgine@gmail.com',false,'2010-01 13:01:06.129 +00:00','2019-10-01 13:01:06.129 +00:00'),(DEFAULT,'Foo','Foo','Bar','password'ooBar@gmail.com',true,'2019-10-01 13:01:06.129 +00:00','2019-10-01 13:01:06.129 +00:00'),(DEFAULT,kash','Vikash','Zha','password','VikashZhar@gmail.com',false,'2019-10-01 13:01:06.129 +00:00','2010-01 13:01:06.129 +00:00'),(DEFAULT,'Mike','Mikhel','Smith','password','FooBar@gmail.com',false,'2-10-01 13:01:06.129 +00:00','2019-10-01 13:01:06.129 +00:00') 
INSERT INTO "TEAMS" ("id","TEAM_NAME","LEAGUE_ID","MAX_TEAM_MEMBERS","MIN_AGE","MAX_AGE","TEAM_GENDER","MANAGER_NAME","MANAGER_PHONE","MANAGER_EMAIL","createdAt","updatedAt") VALUES (DEFAULT,'Team Holland',1,5,50,100,'Male','Bill','123-456-7869','Bill@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'TEAM USA',2,5,50,100,'Male','Jim Craimer','123-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'TEAM Italy',3,5,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'TEAM China',3,5,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'TEAM China',3,5,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'France',3,11,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'India',3,5,50,100,'Male','Harry','800-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'S.Koria',3,5,50,100,'Female','Wao Chook','801-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'Denmark',3,5,50,100,'Male','Arthur','877-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00'),(DEFAULT,'Poland',3,5,50,100,'Female','Frank','860-456-7869','JimCraimer@gmail.com','2019-10-01 14:44:44.917 +00:00','2019-10-01 14:44:44.917 +00:00')