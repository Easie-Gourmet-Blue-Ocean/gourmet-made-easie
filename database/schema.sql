--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

-- Started on 2021-12-11 11:31:59 CST

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
-- TOC entry 3022 (class 1262 OID 33788)
-- Name: easie_gourmet_blue_ocean; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE easie_gourmet_blue_ocean WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


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
-- TOC entry 7 (class 2615 OID 33789)
-- Name: base_schema; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA base_schema;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 206 (class 1259 OID 33799)
-- Name: ingredient_list; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.ingredient_list (
    macro_ingredient_id integer NOT NULL,
    ingredient_name character varying(255)
);


--
-- TOC entry 213 (class 1259 OID 33851)
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
-- TOC entry 3023 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredient_list_macro_ingredient_id_seq OWNED BY base_schema.ingredient_list.macro_ingredient_id;


--
-- TOC entry 205 (class 1259 OID 33796)
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
-- TOC entry 210 (class 1259 OID 33831)
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
-- TOC entry 3024 (class 0 OID 0)
-- Dependencies: 210
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_ingredient_id_seq OWNED BY base_schema.ingredients.ingredient_id;


--
-- TOC entry 212 (class 1259 OID 33843)
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
-- TOC entry 3025 (class 0 OID 0)
-- Dependencies: 212
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_macro_ingredient_id_seq OWNED BY base_schema.ingredients.macro_ingredient_id;


--
-- TOC entry 211 (class 1259 OID 33837)
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
-- TOC entry 3026 (class 0 OID 0)
-- Dependencies: 211
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.ingredients_recipe_id_seq OWNED BY base_schema.ingredients.recipe_id;


--
-- TOC entry 203 (class 1259 OID 33790)
-- Name: recipes; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.recipes (
    recipe_id integer NOT NULL,
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
-- TOC entry 208 (class 1259 OID 33813)
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
-- TOC entry 3027 (class 0 OID 0)
-- Dependencies: 208
-- Name: recipes_recipe_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_recipe_id_seq OWNED BY base_schema.recipes.recipe_id;


--
-- TOC entry 209 (class 1259 OID 33819)
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
-- TOC entry 3028 (class 0 OID 0)
-- Dependencies: 209
-- Name: recipes_user_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.recipes_user_id_seq OWNED BY base_schema.recipes.user_id;


--
-- TOC entry 204 (class 1259 OID 33793)
-- Name: users; Type: TABLE; Schema: base_schema; Owner: -
--

CREATE TABLE base_schema.users (
    user_id integer NOT NULL,
    favorites integer[],
    username character varying(100),
    email character varying(100)
);


--
-- TOC entry 207 (class 1259 OID 33802)
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
-- TOC entry 3029 (class 0 OID 0)
-- Dependencies: 207
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: base_schema; Owner: -
--

ALTER SEQUENCE base_schema.users_user_id_seq OWNED BY base_schema.users.user_id;


--
-- TOC entry 2864 (class 2604 OID 33853)
-- Name: ingredient_list macro_ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list ALTER COLUMN macro_ingredient_id SET DEFAULT nextval('base_schema.ingredient_list_macro_ingredient_id_seq'::regclass);


--
-- TOC entry 2861 (class 2604 OID 33833)
-- Name: ingredients ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN ingredient_id SET DEFAULT nextval('base_schema.ingredients_ingredient_id_seq'::regclass);


--
-- TOC entry 2862 (class 2604 OID 33839)
-- Name: ingredients recipe_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN recipe_id SET DEFAULT nextval('base_schema.ingredients_recipe_id_seq'::regclass);


--
-- TOC entry 2863 (class 2604 OID 33845)
-- Name: ingredients macro_ingredient_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients ALTER COLUMN macro_ingredient_id SET DEFAULT nextval('base_schema.ingredients_macro_ingredient_id_seq'::regclass);


--
-- TOC entry 2857 (class 2604 OID 33815)
-- Name: recipes recipe_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN recipe_id SET DEFAULT nextval('base_schema.recipes_recipe_id_seq'::regclass);


--
-- TOC entry 2858 (class 2604 OID 33821)
-- Name: recipes user_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes ALTER COLUMN user_id SET DEFAULT nextval('base_schema.recipes_user_id_seq'::regclass);


--
-- TOC entry 2860 (class 2604 OID 33804)
-- Name: users user_id; Type: DEFAULT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users ALTER COLUMN user_id SET DEFAULT nextval('base_schema.users_user_id_seq'::regclass);


--
-- TOC entry 3009 (class 0 OID 33799)
-- Dependencies: 206
-- Data for Name: ingredient_list; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredient_list VALUES (1, 'Chicken');
INSERT INTO base_schema.ingredient_list VALUES (2, 'Rice');
INSERT INTO base_schema.ingredient_list VALUES (3, 'Salt');
INSERT INTO base_schema.ingredient_list VALUES (4, 'Pepper');


--
-- TOC entry 3008 (class 0 OID 33796)
-- Dependencies: 205
-- Data for Name: ingredients; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.ingredients VALUES (1, 1, 1, 'lb', 1);
INSERT INTO base_schema.ingredients VALUES (2, 1, 2, 'cup', 2);
INSERT INTO base_schema.ingredients VALUES (3, 1, 1, 'tsp', 3);
INSERT INTO base_schema.ingredients VALUES (4, 1, 1, 'tbsp', 4);
INSERT INTO base_schema.ingredients VALUES (5, 2, 5, 'lb', 1);
INSERT INTO base_schema.ingredients VALUES (6, 2, 1, 'cup', 2);


--
-- TOC entry 3006 (class 0 OID 33790)
-- Dependencies: 203
-- Data for Name: recipes; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.recipes VALUES (1, 2, 0, 'Testerman''s Chicken and Rice', 'Matthew''s chicken is Dry so try this recipe instead!', 30, 90, NULL, '{"Don''t be Matthew","Cook chicken","eat rice"}', '{f,f,t,f,t,f}', '{t,f,f,f,f,f}', 5, '2021-12-11 11:05:12.795652-06');
INSERT INTO base_schema.recipes VALUES (2, 1, 0, 'Matthew''s Chicken and Rice', 'I make Dry chicken. Now you know.', 5, 180, 'http://3.bp.blogspot.com/_CZo9BuHHfqE/S9CGyVM7mII/AAAAAAAAFJw/oX9DmYNJQe8/s1600/Popcorn+chicken+scenes+002.jpg', '{"Overcook Chicken","Make dry rice","on your way to bland town"}', '{f,f,t,f,t,f}', '{t,f,f,f,f,f}', 2, '2021-12-11 11:12:42.733574-06');


--
-- TOC entry 3007 (class 0 OID 33793)
-- Dependencies: 204
-- Data for Name: users; Type: TABLE DATA; Schema: base_schema; Owner: -
--

INSERT INTO base_schema.users VALUES (1, '{}', 'test', 'test@test.com');
INSERT INTO base_schema.users VALUES (2, '{}', 'Tina Testerman', 'tina@testerman.com');


--
-- TOC entry 3030 (class 0 OID 0)
-- Dependencies: 213
-- Name: ingredient_list_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredient_list_macro_ingredient_id_seq', 1, false);


--
-- TOC entry 3031 (class 0 OID 0)
-- Dependencies: 210
-- Name: ingredients_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_ingredient_id_seq', 1, false);


--
-- TOC entry 3032 (class 0 OID 0)
-- Dependencies: 212
-- Name: ingredients_macro_ingredient_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_macro_ingredient_id_seq', 1, false);


--
-- TOC entry 3033 (class 0 OID 0)
-- Dependencies: 211
-- Name: ingredients_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.ingredients_recipe_id_seq', 1, false);


--
-- TOC entry 3034 (class 0 OID 0)
-- Dependencies: 208
-- Name: recipes_recipe_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_recipe_id_seq', 1, false);


--
-- TOC entry 3035 (class 0 OID 0)
-- Dependencies: 209
-- Name: recipes_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.recipes_user_id_seq', 1, false);


--
-- TOC entry 3036 (class 0 OID 0)
-- Dependencies: 207
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: base_schema; Owner: -
--

SELECT pg_catalog.setval('base_schema.users_user_id_seq', 2, true);


--
-- TOC entry 2872 (class 2606 OID 33858)
-- Name: ingredient_list ingredient_list_ingredient_name_key; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key UNIQUE (ingredient_name);


--
-- TOC entry 2874 (class 2606 OID 33888)
-- Name: ingredient_list ingredient_list_ingredient_name_key1; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_ingredient_name_key1 UNIQUE (ingredient_name);


--
-- TOC entry 2876 (class 2606 OID 33862)
-- Name: ingredient_list ingredient_list_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredient_list
    ADD CONSTRAINT ingredient_list_pkey PRIMARY KEY (macro_ingredient_id);


--
-- TOC entry 2870 (class 2606 OID 33850)
-- Name: ingredients ingredients_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (ingredient_id);


--
-- TOC entry 2866 (class 2606 OID 33830)
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (recipe_id);


--
-- TOC entry 2868 (class 2606 OID 33812)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 2878 (class 2606 OID 33863)
-- Name: ingredients ingredients_macro_ingredient_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_macro_ingredient_id_fkey FOREIGN KEY (macro_ingredient_id) REFERENCES base_schema.ingredient_list(macro_ingredient_id) NOT VALID;


--
-- TOC entry 2879 (class 2606 OID 33868)
-- Name: ingredients ingredients_recipe_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.ingredients
    ADD CONSTRAINT ingredients_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES base_schema.recipes(recipe_id) NOT VALID;


--
-- TOC entry 2877 (class 2606 OID 33873)
-- Name: recipes recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: base_schema; Owner: -
--

ALTER TABLE ONLY base_schema.recipes
    ADD CONSTRAINT recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES base_schema.users(user_id) NOT VALID;


-- Completed on 2021-12-11 11:31:59 CST

--
-- PostgreSQL database dump complete
--

