
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

 INSERT INTO "TEAMS" ("id","TEAM_NAME","LEAGUE_ID","MAX_TEAM_MEMBERS","MIN_AGE","MAX_AGE","TEAM_GENDER","MANAGER_NAME","MANAGER_PHONE","MANAGER_EMAIL","createdAt","updatedAt") VALUES (DEFAULT,'Team Holland',1,5,50,100,'Male','Bill','123-456-7869','Bill@gmail.com','2019-10-01 02:17:49.635 +00:00','2019-10-01 02:17:49.635 +00:00'),(DEFAULT,'TEAM USA',2,5,50,100,'Male','Jim Craimer','123-456-7869','JimCraimer@gmail.com','2019-10-01 02:17:49.635 +00:00','2019-10-01 02:17:49.635 +00:00'),(DEFAULT,'TEAM Italy',3,5,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 02:17:49.635 +00:00','2019-10-01 02:17:49.635 +00:00'),(DEFAULT,'TEAM China',3,5,50,100,'Female','Jim Craimer','860-456-7869','JimCraimer@gmail.com','2019-10-01 02:17:49.635 +00:00','2019-10-01 02:17:49.635 +00:00')