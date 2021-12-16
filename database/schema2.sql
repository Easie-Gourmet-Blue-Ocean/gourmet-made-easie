--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-15 15:15:20 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE easie_gourmet_blue_ocean;
--
-- TOC entry 3642 (class 1262 OID 16384)
-- Name: easie_gourmet_blue_ocean; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE easie_gourmet_blue_ocean WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


\connect easie_gourmet_blue_ocean

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16385)
-- Name: base_schema; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA base_schema;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16386)
-- Name: ingredient_list; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.ingredient_list (
    macro_ingredient_id integer NOT NULL,
    ingredient_name character varying(255)
);


--
-- TOC entry 211 (class 1259 OID 16389)
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.ingredient_list_macro_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3643 (class 0 OID 0)
-- Dependencies: 211
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredient_list_macro_ingredient_id_seq OWNED BY base_schema.ingredient_list.macro_ingredient_id;


--
-- TOC entry 212 (class 1259 OID 16390)
-- Name: ingredients; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.ingredients (
    ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    amount_int real,
    measurement_unit character varying(255),
    macro_ingredient_id integer NOT NULL
);


--
-- TOC entry 213 (class 1259 OID 16393)
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.ingredients_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3644 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_ingredient_id_seq OWNED BY base_schema.ingredients.ingredient_id;


--
-- TOC entry 214 (class 1259 OID 16394)
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.ingredients_macro_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3645 (class 0 OID 0)
-- Dependencies: 214
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_macro_ingredient_id_seq OWNED BY base_schema.ingredients.macro_ingredient_id;


--
-- TOC entry 215 (class 1259 OID 16395)
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.ingredients_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3646 (class 0 OID 0)
-- Dependencies: 215
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_recipe_id_seq OWNED BY base_schema.ingredients.recipe_id;


--
-- TOC entry 216 (class 1259 OID 16396)
-- Name: recipes; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.recipes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    favorited_amt integer,
    recipe_name character varying(255),
    description character varying(10000),
    active_time integer,
    total_time integer,
    photo character varying(500),
    instructions text[],
    meal_type boolean[],
    protein boolean[],
    serving_size integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 217 (class 1259 OID 16402)
-- Name: recipes_recipe_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.recipes_recipe_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3647 (class 0 OID 0)
-- Dependencies: 217
-- Name: recipes_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_recipe_id_seq OWNED BY base_schema.recipes.id;


--
-- TOC entry 218 (class 1259 OID 16403)
-- Name: recipes_user_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.recipes_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3648 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_user_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_user_id_seq OWNED BY base_schema.recipes.user_id;


--
-- TOC entry 221 (class 1259 OID 16468)
-- Name: sessions; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.sessions (
    id integer NOT NULL,
    hash character varying(64),
    user_id integer
);


--
-- TOC entry 222 (class 1259 OID 16473)
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

ALTER TABLE base_schema.sessions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME base_schema.sessions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16404)
-- Name: users; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.users (
    id integer NOT NULL,
    favorites integer[] DEFAULT ARRAY[]::integer[] NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(64) NOT NULL,
    salt character varying(64) NOT NULL
);


--
-- TOC entry 220 (class 1259 OID 16409)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3649 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.users_user_id_seq OWNED BY base_schema.users.id;


--
-- TOC entry 3455 (class 2604 OID 16458)
-- Name: ingredient_list macro_ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list ALTER COLUMN macro_ingredient_id SET DEFAULT nextval('base_schema.ingredient_list_macro_ingredient_id_seq'::regclass);


--
-- TOC entry 3456 (class 2604 OID 16459)
-- Name: ingredients ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN ingredient_id SET DEFAULT nextval('base_schema.ingredients_ingredient_id_seq'::regclass);


--
-- TOC entry 3457 (class 2604 OID 16460)
-- Name: ingredients recipe_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN recipe_id SET DEFAULT nextval('base_schema.ingredients_recipe_id_seq'::regclass);


--
-- TOC entry 3458 (class 2604 OID 16461)
-- Name: ingredients macro_ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN macro_ingredient_id SET DEFAULT nextval('base_schema.ingredients_macro_ingredient_id_seq'::regclass);


--
-- TOC entry 3460 (class 2604 OID 16462)
-- Name: recipes id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN id SET DEFAULT nextval('base_schema.recipes_recipe_id_seq'::regclass);


--
-- TOC entry 3461 (class 2604 OID 16463)
-- Name: recipes user_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN user_id SET DEFAULT nextval('base_schema.recipes_user_id_seq'::regclass);


--
-- TOC entry 3462 (class 2604 OID 16464)
-- Name: users id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users ALTER COLUMN id SET DEFAULT nextval('base_schema.users_user_id_seq'::regclass);


--
-- TOC entry 3624 (class 0 OID 16386)
-- Dependencies: 210
-- Data for Name: ingredient_list; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredient_list VALUES (1, 'Chicken');
INSERT INTO base_schema.ingredient_list VALUES (2, 'Rice');
INSERT INTO base_schema.ingredient_list VALUES (3, 'Salt');
INSERT INTO base_schema.ingredient_list VALUES (4, 'Pepper');
INSERT INTO base_schema.ingredient_list VALUES (6, 'ice');
INSERT INTO base_schema.ingredient_list VALUES (7, 'chocolate ice cream');


--
-- TOC entry 3626 (class 0 OID 16390)
-- Dependencies: 212
-- Data for Name: ingredients; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredients VALUES (1, 1, 1, 'lb', 1);
INSERT INTO base_schema.ingredients VALUES (2, 1, 2, 'cup', 2);
INSERT INTO base_schema.ingredients VALUES (3, 1, 1, 'tsp', 3);
INSERT INTO base_schema.ingredients VALUES (4, 1, 1, 'tbsp', 4);
INSERT INTO base_schema.ingredients VALUES (5, 2, 5, 'lb', 1);
INSERT INTO base_schema.ingredients VALUES (6, 2, 1, 'cup', 2);


--
-- TOC entry 3630 (class 0 OID 16396)
-- Dependencies: 216
-- Data for Name: recipes; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.recipes VALUES (1, 2, 0, 'Testerman''s Chicken and Rice', 'Matthew''s chicken is Dry so try this recipe instead!', 30, 90, NULL, '{"Don''t be Matthew","Cook chicken","eat rice"}', '{f,f,t,f,t,f}', '{t,f,f,f,f,f}', 5, '2021-12-11 11:05:12.795652-06');
INSERT INTO base_schema.recipes VALUES (2, 1, 0, 'Matthew''s Chicken and Rice', 'I make Dry chicken. Now you know.', 5, 180, 'http://3.bp.blogspot.com/_CZo9BuHHfqE/S9CGyVM7mII/AAAAAAAAFJw/oX9DmYNJQe8/s1600/Popcorn+chicken+scenes+002.jpg', '{"Overcook Chicken","Make dry rice","on your way to bland town"}', '{f,f,t,f,t,f}', '{t,f,f,f,f,f}', 2, '2021-12-11 11:12:42.733574-06');


--
-- TOC entry 3635 (class 0 OID 16468)
-- Dependencies: 221
-- Data for Name: sessions; Type: TABLE DATA; Schema: base_schema; Owner: -
--



--
-- TOC entry 3633 (class 0 OID 16404)
-- Dependencies: 219
-- Data for Name: users; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.users VALUES (1, '{}', 'Patrick', 'patrick@gmail.com', 'a96d9b28613b742f54d9e923eca87dc9a7de66551f3793f64d89ed91e6d60d53', 'd0486686afff6c1ef072b20ba0fd05830547e0751db01435003759c1963d1a99');
INSERT INTO base_schema.users VALUES (2, '{}', 'Sam', 'sam@gmail.com', 'd72b0f4c6857546bf9348f21498f8e983175502a402a8db3b66f169787b602f1', 'dbf4c506bfd9efbf00515a84a643fe48e1e95ab2cf7975acc5e75690337a6155');
INSERT INTO base_schema.users VALUES (3, '{}', 'Matthew', 'matt@gmail.com', '23d1e04aba6e9c97ecf2e0872486fea579ef4b033d9cbcf61bd1f7582d4b1794', '2b2cfe0453f2d1437c8a9f1d27cf9a65164dc286c915c91db99360a7d18e8e1c');


--
-- TOC entry 3650 (class 0 OID 0)
-- Dependencies: 211
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredient_list_macro_ingredient_id_seq', 7, true);


--
-- TOC entry 3651 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_ingredient_id_seq', 1, false);


--
-- TOC entry 3652 (class 0 OID 0)
-- Dependencies: 214
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_macro_ingredient_id_seq', 1, false);


--
-- TOC entry 3653 (class 0 OID 0)
-- Dependencies: 215
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_recipe_id_seq', 1, false);


--
-- TOC entry 3654 (class 0 OID 0)
-- Dependencies: 217
-- Name: recipes_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_recipe_id_seq', 1, false);


--
-- TOC entry 3655 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_user_id_seq', 1, false);


--
-- TOC entry 3656 (class 0 OID 0)
-- Dependencies: 222
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.sessions_id_seq', 43, true);


--
-- TOC entry 3657 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.users_user_id_seq', 3, true);


--
-- TOC entry 3475 (class 2606 OID 16467)
-- Name: users email; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users
    ADD CONSTRAINT email UNIQUE (email);


--
-- TOC entry 3479 (class 2606 OID 16475)
-- Name: sessions hash; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.sessions
    ADD CONSTRAINT hash UNIQUE (hash);


--
-- TOC entry 3465 (class 2606 OID 16418)
-- Name: ingredient_list ingredient_list_ingredient_name_key; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key UNIQUE (ingredient_name);


--
-- TOC entry 3467 (class 2606 OID 16420)
-- Name: ingredient_list ingredient_list_ingredient_name_key1; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key1 UNIQUE (ingredient_name);


--
-- TOC entry 3469 (class 2606 OID 16422)
-- Name: ingredient_list ingredient_list_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_pkey PRIMARY KEY (macro_ingredient_id);


--
-- TOC entry 3471 (class 2606 OID 16424)
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingredient_id);


--
-- TOC entry 3473 (class 2606 OID 16426)
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- TOC entry 3481 (class 2606 OID 16472)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 3477 (class 2606 OID 16428)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3482 (class 2606 OID 16429)
-- Name: ingredients ingredients_macro_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_macro_ingredient_id_fkey FOREIGN KEY (macro_ingredient_id) REFERENCES base_schema.ingredient_list(macro_ingredient_id) NOT VALID;


--
-- TOC entry 3483 (class 2606 OID 16434)
-- Name: ingredients ingredients_recipe_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES base_schema.recipes(id) NOT VALID;


--
-- TOC entry 3484 (class 2606 OID 16484)
-- Name: recipes user_id_fk; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES base_schema.users(id) NOT VALID;


-- Completed on 2021-12-15 15:15:20 CST

--
-- PostgreSQL database dump complete
--

