INSERT INTO TB_ROLE (AUTHORITY) VALUES ('VISITOR');
INSERT INTO TB_ROLE (AUTHORITY) VALUES ('MEMBER');

INSERT INTO TB_USER (NAME, EMAIL, PASSWORD) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO TB_USER (NAME, EMAIL, PASSWORD) VALUES ('Ana Azure', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO TB_USER (NAME, EMAIL, PASSWORD) VALUES ('Carlos Crimson', 'carlos@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO TB_USER (NAME, EMAIL, PASSWORD) VALUES ('John Doe', 'john@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);

INSERT INTO TB_GENRE (NAME) VALUES ('Ação');
INSERT INTO TB_GENRE (NAME) VALUES ('Drama');
INSERT INTO TB_GENRE (NAME) VALUES ('Aventura');
INSERT INTO TB_GENRE (NAME) VALUES ('Fantasia');

INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (1, 'Vingadores: ', 'Ultimato', 2019, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg', 'Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (4, 'SCOOBY!: ', 'O Filme', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg', 'Scooby e a gangue enfrentam seu mistério mais desafiador de todos os tempos: um plano para libertar o cão fantasma Cerberus no mundo. Enquanto eles correm para parar esse caopocalypse, a gangue descobre que Scooby tem um destino épico maior do que se imaginava.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (2, 'O Poderoso Chefão', '', 1972, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/AbgEQO2mneCSOc8CSnOMa8pBS8I.jpg', 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (4, 'O Rei Leão', '', 1994, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/3vSpvbyxkjtMSkVvl7gadIspQR4.jpg', 'Mufasa, o Rei Leão, e a rainha Sarabi apresentam ao reino o herdeiro do trono, Simba. O recém-nascido recebe a bênção do sábio babuíno Rafiki, mas ao crescer é envolvido nas artimanhas de seu tio Scar, o invejoso e maquiavélico irmão de Mufasa, que planeja livrar-se do sobrinho e herdar o trono.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (3, 'Manual de Caça a Monstros', '', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/ezLKohe4HKsHQbwQwhv0ARo83NC.jpg', 'Recrutada por uma sociedade secreta de babás, uma adolescente enfrenta o Bicho-Papão e os monstros que sequestram um garotinho no Halloween.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (3, 'Mulan', '', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg', 'Hua Mulan é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (1, 'Demon Slayer: ', 'O Trem Infinito', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg', 'Tanjiro Kamado, junto com Inosuke Hashibira, um garoto criado por javalis que usa uma cabeça de javali, e Zenitsu Agatsuma, um garoto assustado que revela seu verdadeiro poder quando dorme, embarca no Trem Infinito em uma nova missão com o Hashira de Fogo, Kyojuro Rengoku, para derrotar um demônio que tem atormentado o povo e matado os caçadores de oni que se opõem a ele!');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (1, 'Arthur and Merlin: ', 'Knights of Camelot', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/jRp9gWTqVixyfUAncW4vZm2qZZZ.jpg', 'King Arthur returns home after fighting the Roman Empire. His illegitimate son has corrupted the throne of Camelot and King Arthur must reunite with the wizard Merlin and the Knights of the Round Table to fight to get back his crown.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (1, 'Aves de Rapina: ', 'Arlequina e sua Emancipação Fabulosa', 2020, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg', 'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (1, 'X-Men: ', 'Apocalipse', 2016, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/2ex2beZ4ssMeOduLD0ILzXKCiep.jpg', 'Apocalipse, o primeiro mutante de todos, consegue retornar à vida após milhares de anos. Agora, ele sai à procura de seguidores para dominar o mundo. Caberá aos X-Men se unirem para impedir os planos do vilão e evitar uma catástofre mundial.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (4, 'Homem-Aranha ', 'no Aranhaverso', 2018, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg', 'Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras variações do Homem-Aranha.');
INSERT INTO TB_MOVIE (MOVIE_GENRE, TITLE, SUBTITLE, YEAR, IMG_URL, SYNOPSIS) VALUES (2, 'John Wick 3: ', 'Parabellum', 2019, 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg', 'Após assassinar o chefe da máfia Santino no Hotel Continental, John Wick passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência.');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 1, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 1, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 1, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 2, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 2, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 2, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 3, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 3, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 3, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 4, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 4, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 4, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 5, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 5, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 5, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 6, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 6, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 6, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 7, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 7, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 7, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 8, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 8, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 8, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 9, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 9, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 9, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 10, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 10, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 10, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 11, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 11, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 11, 'Galera esse filme é show!! Assistam é incrível!!!');

INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 2, 12, 'Filme fantástico, recomendo muito!');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 3, 12, 'Filme legal, mas o final foi um pouco previsivel.');
INSERT INTO TB_REVIEW (USER_REVIEW, MOVIE_REVIEW, TEXT) VALUES ( 4, 12, 'Galera esse filme é show!! Assistam é incrível!!!');
