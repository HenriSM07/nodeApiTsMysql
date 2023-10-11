CREATE DATABASE ECOMMERCE;
USE ECOMMERCE;
DROP DATABASE ECOMMERECE; /*Deleta todo o schema*/

create table clients_ecommerce (
	id_client int not null auto_increment,
    ds_name varchar(255),
    nm_cpf int,
    fl_status enum('A', 'I') default 'A', /*Ativo ou Inativo, default 'A' é padrão de criação*/
    dt_created_at datetime default CURRENT_TIMESTAMP,
    primary key (id_client)
);
select * from clients_ecommerce;

create table products (
	id_product int not null auto_increment,
    ds_name varchar(120) not null,
    ds_description varchar(255),
    nm_value float not null, /*Pode ser usado também o "decimal(X1.X2)", onde X1 são o número de casas antes da vírgula*/
    ds_brand varchar(120),   /*e X2 são o número de casas depois da vírgula. Ex.: decimal(4.2)*/
    ds_status enum('A', 'I') default 'A',
    dt_created_at datetime default CURRENT_TIMESTAMP,
    primary key (id_product)
);
select * from products;

create table cart (
	id_cart int not null auto_increment,
    id_client int,
    id_product int,
    primary key (id_cart),
    foreign key (id_client) references clients_ecommerce (id_client),
    foreign key (id_product) references products (id_product)
);
select * from cart;
drop table cart;

/*Inserts:*/
insert into clients_ecommerce (ds_name, nm_cpf, fl_status) values ('Henri', 123456789, 'A');
insert into products (ds_name, ds_description, nm_value, ds_brand, ds_status) values ('Maionese', 'Produto vegano', 5.00, 'Heinz', 'A');
insert into cart (id_client, id_product) values (1, 1);