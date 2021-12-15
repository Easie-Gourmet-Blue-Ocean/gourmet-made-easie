--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-15 13:41:01 CST

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


-- Completed on 2021-12-15 13:41:01 CST

--
-- PostgreSQL database dump complete
--

