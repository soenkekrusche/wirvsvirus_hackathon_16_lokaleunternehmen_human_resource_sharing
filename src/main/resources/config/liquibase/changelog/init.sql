------------------------------------------------------------------------------------------------------------------------
--------------------------------------- Tabellen -----------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------

-- Create Employment Style Table
create table employment_style (
id number not null primary key,
employment_style varchar(200 char)
);

-- Create Professional Experience Table
create table professional_experience (
id number not null primary key,
professional_experience varchar(200 char)
);

-- Create Working Style Table
create table working_style (
id number not null primary key,
working_style varchar(200 char)
);

-- Create Interests Table
create table interests (
id number not null primary key,
interest varchar(200 char)
);

-- Create Company Table
create table company(
id number not null primary key,
name varchar(150 char),
profile_picture blob
);

-- Create Offer Table
create table offer (
id number not null primary key,
title varchar(200 char),
address varchar(300 char),
description varchar(500 char),
telefon_number varchar(20 char)
);

-- Create mapping table offer company name
create table offer_company_name(
id number not null primary key,
offer number references offer(id),
company_name number references company(id)
);

-- Create mapping table company working style
create table company_working_style (
id number not null primary key,
company number references company(id),
working_style number references working_style(id)
);

-- Create mapping table  company employment style
create table company_employment_style(
id number not null primary key,
company number references company(id),
employment_style number references employment_style(id)
);

-- Create mapping table  company professional experience
create table company_professional_experience(
id number not null primary key,
company number references company(id),
professional_experience number references professional_experience(id)
);

-- Create User Profile Table
create table user_profile (
id number not null primary key,
firstname varchar(20 char),
lastname varchar(20 char),
address varchar(300 char),
experience_in_years number,
about_me varchar(500 char),
telefon_number varchar(20 char),
jhi_user_id number references jhi_user(id)
);

-- Create mapping table  user working style
create table user_working_style (
id number not null primary key,
user number references user_profile(id),
working_style number references working_style(id)
);

-- Create mapping table  user employment style
create table user_employment_style(
id number not null primary key,
user number references user_profile(id),
employment_style number references employment_style(id)
);

-- Create mapping table  user professional experience
create table user_professional_experience(
id number not null primary key,
user number references user_profile(id),
professional_experience number references professional_experience(id)
);

-- Create mapping table  user interests
create table user_interests(
id number not null primary key,
user number references user_profile(id),
interest number references interests(id)
);


------------------------------------------------------------------------------------------------------------------------
--------------------------------------- Testdaten ----------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------

insert into employment_style (id, employment_style) values (1, 'Vollzeit');
insert into employment_style (id, employment_style) values (2, 'Teilzeit');
insert into employment_style (id, employment_style) values (3, 'Befristet');

insert into professional_experience (id, professional_experience) values (1, 'IT');
insert into professional_experience (id, professional_experience) values (2, 'Marketing');
insert into professional_experience (id, professional_experience) values (3, 'Medizin/Gesundheitswesen');

insert into working_style (id, working_style) values (1, 'Home Office');
insert into working_style (id, working_style) values (2, 'Büro');
insert into working_style (id, working_style) values (3, 'Unterwegs');

insert into interests (id, interest) values (1, 'Landwirtschaft');
insert into interests (id, interest) values (2, 'Handwerk');
insert into interests (id, interest) values (3, 'Soziales & Ehrenamt');

insert into company (id, name) values (1, 'Tante Emmaladen');
insert into company (id, name) values (2, 'Rudolfs Kiosk');
insert into company (id, name) values (3, 'Ludwigs Landwirtschaftsbetrieb');

insert into offer (id, title, address, description, telefon_number) values (1, 'Erdbeeren pflücken', 'Sonnenstraße 1, 12345 Sonnenhausen', 'Lasst uns gemeinsam Erdbeeren pflücken!', '12345/43521');
insert into offer (id, title, address, description, telefon_number) values (2, 'Schafe streicheln', 'Auf der Weide 55, 00090 Graslandschaft', 'Wir haben ein paar süße Schafe, die gern gestreichelt werden wollen', '89745/0987654');
insert into offer (id, title, address, description, telefon_number) values (3, 'Wände streichen', 'Hinter dem Berg 92, 76503 Karlshausen', 'Wir sind ein kleines Unternehmen, das Wände streicht', '20948/12946');

insert into offer_company_name (id, offer, company_name) values (1, 1, 3);
insert into offer_company_name (id, offer, company_name) values (1, 2, 2);
insert into offer_company_name (id, offer, company_name) values (1, 3, 1);

insert into company_employment_style (id, company, employment_style) values (1, 1, 1);
insert into company_employment_style (id, company, employment_style) values (2, 2, 2);
insert into company_employment_style (id, company, employment_style) values (3, 3, 3);

insert into company_professional_experience (id, company, professional_experience) values (1, 3, 1);
insert into company_professional_experience (id, company, professional_experience) values (2, 1, 2);
insert into company_professional_experience (id, company, professional_experience) values (3, 2, 3);

insert into company_working_style (id, company, working_style) values (1, 1, 3);
insert into company_working_style (id, company, working_style) values (2, 2, 1);
insert into company_working_style (id, company, working_style) values (3, 3, 2);

insert into user_profile (id, firstname, lastname, address, experience_in_years, about_me, telefon_number, jhi_user_id) values (1, 'Max', 'Mustermann', 'Musterstraße 1, 1234 Musterhausen', 2, 'Ich lese gern und arbeite gern mit Menschen', '73592/02345', 3);
insert into user_profile (id, firstname, lastname, address, experience_in_years, about_me, telefon_number, jhi_user_id) values (2, 'Elfriede', 'Elfenbein', 'Auf der Mauer 12, 87341 Hanshausen', 34, 'Ich bin ganz nett', '92052/01630', 3);
insert into user_profile (id, firstname, lastname, address, experience_in_years, about_me, telefon_number, jhi_user_id) values (3, 'Anton', 'Austirol', 'Eine Insel 23, 73029 Mitzweibergen', 8, 'Ich höre gern Musik', '86205/01361', 3);

insert into user_employment_style (id, user, employment_style) values (1, 1, 1);
insert into user_employment_style (id, user, employment_style) values (2, 2, 2);
insert into user_employment_style (id, user, employment_style) values (3, 3, 3);

insert into user_interests (id, user, interest) values (1, 3, 1);
insert into user_interests (id, user, interest) values (2, 2, 2);
insert into user_interests (id, user, interest) values (3, 1, 3);

insert into user_professional_experience (id, user, professional_experience) values (1, 2, 3);
insert into user_professional_experience (id, user, professional_experience) values (2, 1, 2);
insert into user_professional_experience (id, user, professional_experience) values (3, 3, 1);

insert into user_working_style(id, user, working_style) values (1, 1, 2);
insert into user_working_style(id, user, working_style) values (2, 2, 3);
insert into user_working_style(id, user, working_style) values (3, 3, 1);







