create table softwares(
    id number primary key,
    serial varchar2(15),
    fabricante varchar2(30),
    nome varchar2(30),
    categoria varchar2(20),
    preco number
);

insert into softwares (id, serial, fabricante, nome, categoria, preco) values(1, 'KJHS89763IA6J39','Steam', 'FEED AND GROW FISH', 'GAME', 26.98);
insert into softwares (id, serial, fabricante, nome, categoria, preco) values(2, 'ALKJAD8938998SS','Google', 'Angular', 'Framework', 126.3);
insert into softwares (id, serial, fabricante, nome, categoria, preco) values(3, '985KHDKJFK98474','Facebook', 'React', 'Framework', 1325.25);