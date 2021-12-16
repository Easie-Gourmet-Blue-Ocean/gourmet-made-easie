--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-16 03:53:46 CST

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
-- TOC entry 3642 (class 1262 OID 16725)
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
-- TOC entry 6 (class 2615 OID 16726)
-- Name: base_schema; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA base_schema;


--
-- TOC entry 211 (class 1259 OID 16730)
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE; Schema: base_schema; Owner: -
--

CREATE SEQUENCE base_schema.ingredient_list_macro_ingredient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16727)
-- Name: ingredient_list; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.ingredient_list (
    macro_ingredient_id integer DEFAULT nextval('base_schema.ingredient_list_macro_ingredient_id_seq'::regclass) NOT NULL,
    ingredient_name character varying(255)
);


--
-- TOC entry 212 (class 1259 OID 16731)
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
-- TOC entry 213 (class 1259 OID 16734)
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
-- TOC entry 3643 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_ingredient_id_seq OWNED BY base_schema.ingredients.ingredient_id;


--
-- TOC entry 214 (class 1259 OID 16735)
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
-- TOC entry 3644 (class 0 OID 0)
-- Dependencies: 214
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_macro_ingredient_id_seq OWNED BY base_schema.ingredients.macro_ingredient_id;


--
-- TOC entry 215 (class 1259 OID 16736)
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
-- TOC entry 3645 (class 0 OID 0)
-- Dependencies: 215
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_recipe_id_seq OWNED BY base_schema.ingredients.recipe_id;


--
-- TOC entry 216 (class 1259 OID 16737)
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
-- TOC entry 217 (class 1259 OID 16743)
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
-- TOC entry 3646 (class 0 OID 0)
-- Dependencies: 217
-- Name: recipes_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_recipe_id_seq OWNED BY base_schema.recipes.id;


--
-- TOC entry 218 (class 1259 OID 16744)
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
-- TOC entry 3647 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_user_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_user_id_seq OWNED BY base_schema.recipes.user_id;


--
-- TOC entry 219 (class 1259 OID 16745)
-- Name: sessions; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.sessions (
    id integer NOT NULL,
    hash character varying(64),
    user_id integer
);


--
-- TOC entry 220 (class 1259 OID 16748)
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
-- TOC entry 222 (class 1259 OID 16755)
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
-- TOC entry 221 (class 1259 OID 16749)
-- Name: users; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.users (
    id integer DEFAULT nextval('base_schema.users_user_id_seq'::regclass) NOT NULL,
    favorites integer[] DEFAULT ARRAY[]::integer[] NOT NULL,
    username character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(64) NOT NULL,
    salt character varying(64) NOT NULL
);


--
-- TOC entry 3456 (class 2604 OID 16757)
-- Name: ingredients ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN ingredient_id SET DEFAULT nextval('base_schema.ingredients_ingredient_id_seq'::regclass);


--
-- TOC entry 3457 (class 2604 OID 16758)
-- Name: ingredients recipe_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN recipe_id SET DEFAULT nextval('base_schema.ingredients_recipe_id_seq'::regclass);


--
-- TOC entry 3458 (class 2604 OID 16759)
-- Name: ingredients macro_ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN macro_ingredient_id SET DEFAULT nextval('base_schema.ingredients_macro_ingredient_id_seq'::regclass);


--
-- TOC entry 3460 (class 2604 OID 16760)
-- Name: recipes id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN id SET DEFAULT nextval('base_schema.recipes_recipe_id_seq'::regclass);


--
-- TOC entry 3461 (class 2604 OID 16761)
-- Name: recipes user_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN user_id SET DEFAULT nextval('base_schema.recipes_user_id_seq'::regclass);


--
-- TOC entry 3624 (class 0 OID 16727)
-- Dependencies: 210
-- Data for Name: ingredient_list; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredient_list (macro_ingredient_id, ingredient_name) VALUES (2, 'fage yogurt');
INSERT INTO base_schema.ingredient_list (macro_ingredient_id, ingredient_name) VALUES (3, 'berries mix');
INSERT INTO base_schema.ingredient_list (macro_ingredient_id, ingredient_name) VALUES (4, 'granola');


--
-- TOC entry 3626 (class 0 OID 16731)
-- Dependencies: 212
-- Data for Name: ingredients; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredients (ingredient_id, recipe_id, amount_int, measurement_unit, macro_ingredient_id) VALUES (1, 1, 1, 'cup', 2);
INSERT INTO base_schema.ingredients (ingredient_id, recipe_id, amount_int, measurement_unit, macro_ingredient_id) VALUES (2, 1, 1, 'cup', 3);
INSERT INTO base_schema.ingredients (ingredient_id, recipe_id, amount_int, measurement_unit, macro_ingredient_id) VALUES (3, 1, 1, 'cup', 4);


--
-- TOC entry 3630 (class 0 OID 16737)
-- Dependencies: 216
-- Data for Name: recipes; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.recipes (id, user_id, favorited_amt, recipe_name, description, active_time, total_time, photo, instructions, meal_type, protein, serving_size, created_at) VALUES (1, 2, 1, 'Alex Yogurt', 'This is a meal designed for Alex specifically', 5, 10, NULL, '{"add yogurt","add berries","add granola"}', '{t,t,f,f,f,f}', '{f,f,f,f,t,f}', 1, '2021-12-16 03:37:39.848008-06');


--
-- TOC entry 3633 (class 0 OID 16745)
-- Dependencies: 219
-- Data for Name: sessions; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.sessions (id, hash, user_id) VALUES (44, 'e36e77dd919c5f2ae7f52e5742c2466511254311db63bc5247e0f29350a394bb', 2);


--
-- TOC entry 3635 (class 0 OID 16749)
-- Dependencies: 221
-- Data for Name: users; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.users (id, favorites, username, email, password, salt) VALUES (2, '{1}', 'Morris', 'morris@gmail.com', 'fa2565b3a5fe7bdaf9e0fd1179a7f73679e728241f52207b55f3f14579d0139f', '5eb1848fcb1a8794318644cd580c2e0341cf0e6197b69de819c732b7219edb9d');


--
-- TOC entry 3648 (class 0 OID 0)
-- Dependencies: 211
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredient_list_macro_ingredient_id_seq', 4, true);


--
-- TOC entry 3649 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_ingredient_id_seq', 3, true);


--
-- TOC entry 3650 (class 0 OID 0)
-- Dependencies: 214
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_macro_ingredient_id_seq', 1, false);


--
-- TOC entry 3651 (class 0 OID 0)
-- Dependencies: 215
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_recipe_id_seq', 1, false);


--
-- TOC entry 3652 (class 0 OID 0)
-- Dependencies: 217
-- Name: recipes_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_recipe_id_seq', 1, true);


--
-- TOC entry 3653 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_user_id_seq', 1, false);


--
-- TOC entry 3654 (class 0 OID 0)
-- Dependencies: 220
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.sessions_id_seq', 44, true);


--
-- TOC entry 3655 (class 0 OID 0)
-- Dependencies: 222
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.users_user_id_seq', 2, true);


--
-- TOC entry 3479 (class 2606 OID 16764)
-- Name: users email; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users
    ADD CONSTRAINT email UNIQUE (email);


--
-- TOC entry 3475 (class 2606 OID 16766)
-- Name: sessions hash; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.sessions
    ADD CONSTRAINT hash UNIQUE (hash);


--
-- TOC entry 3465 (class 2606 OID 16768)
-- Name: ingredient_list ingredient_list_ingredient_name_key; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key UNIQUE (ingredient_name);


--
-- TOC entry 3467 (class 2606 OID 16770)
-- Name: ingredient_list ingredient_list_ingredient_name_key1; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key1 UNIQUE (ingredient_name);


--
-- TOC entry 3469 (class 2606 OID 16772)
-- Name: ingredient_list ingredient_list_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_pkey PRIMARY KEY (macro_ingredient_id);


--
-- TOC entry 3471 (class 2606 OID 16774)
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingredient_id);


--
-- TOC entry 3473 (class 2606 OID 16776)
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- TOC entry 3477 (class 2606 OID 16778)
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 3481 (class 2606 OID 16780)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3482 (class 2606 OID 16781)
-- Name: ingredients ingredients_macro_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_macro_ingredient_id_fkey FOREIGN KEY (macro_ingredient_id) REFERENCES base_schema.ingredient_list(macro_ingredient_id) NOT VALID;


--
-- TOC entry 3483 (class 2606 OID 16786)
-- Name: ingredients ingredients_recipe_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES base_schema.recipes(id) NOT VALID;


--
-- TOC entry 3484 (class 2606 OID 16791)
-- Name: recipes user_id_fk; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES base_schema.users(id) NOT VALID;


-- Completed on 2021-12-16 03:53:46 CST

--
-- PostgreSQL database dump complete
--

