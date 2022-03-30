create database if not exists ITCS241;
use ITCS241;
create table user(
	UID int primary key not null auto_increment,
    fname varchar(50) not null,
    lname varchar(50) not null,
    Email varchar(50) not null,
    address varchar(150) not null,
    pnumber varchar(10) not null,
    DOB date not null,
	username varchar(15) not null,
    pword varchar(20) not null,
	urole varchar(10) not null
);
create table product(
	PID int primary key not null auto_increment,
    pic varchar(2000) not null,
    Pname varchar(500) not null,
    pinfo varchar(2000),
    price int not null
    
);
/*create table login(
	username varchar(15) not null primary key,
    pword varchar(20) not null
  
);*/
insert into user values
('1','Phuwanat','Meeyutem','phuwanat.mee@student.mahidol.ac.th','123 Nakhronpathom','089XXXXXXX','2000-06-30','phukao','123456789','admin');

insert into product values
('1','https://www.metalbridges.com/wp-content/uploads/2016/06/zelda-breath-of-the-wild-review.jpg','Legend of Zelda: Breath of the Wild','Step into a world of discorvery, exploration, and adventure in The Legend of Zelda.','1680'),
('2','https://fn.lnwfile.com/3448mu.jpg','Pokemon Shield','Pokemon Shield introduce the Galar region and more Pokemon to discover!','1690'),
('3','https://s1.gaming-cdn.com/images/products/2208/orig/overwatch-cover.jpg','Overwatch','The World Needs Heros Slow down time, rain destruction from above in a jet-powered armor suit, or pilot superpower hamster in ball.','1200'),
('4','https://images-na.ssl-images-amazon.com/images/I/81rLtmfYG2L._SL1500_.jpg','Detroit: Become Human','Puts the destiny of both mankind and androids in your hands, taking you to a future where machines have become more intelligent than human.','1200'),
('5','https://images-na.ssl-images-amazon.com/images/I/81ptcMaPW6L._SX522_.jpg','Monster Hunter World: Iceborne','Iceborne expands the possibilities of Monster Hunter: World is vast breathtaking universe.','1200'),
('6','https://gamespot1.cbsistatic.com/uploads/scale_medium/mig/9/7/7/8/2219778-box_rfafhm.png','Rune Factory','Rune Factory (ルーンファクトリー, Rūn Fakutorī) is a role-playing simulation video game series developed by Neverland Co., Ltd. for the Nintendo DS, Nintendo 3DS, Nintendo Switch, Wii and the PlayStation 3 video game consoles, and a spin-off of the Harvest Moon/Story of Season video game series.','1200'),
('7','https://images-na.ssl-images-amazon.com/images/I/519LgOv9z7L.jpg','ZELDA: Twilight Princess','In the tallest tower, he and Midna find a cloaked young woman. She immediately explains to Link how Hyrule came to be shrouded in Twilight, and reveals her true ...','1200'),
('8','https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SL1500_.jpg','Minecarft','Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape.','1200'),
('9','https://images-na.ssl-images-amazon.com/images/I/81-QH2Lyy4L._SL1500_.jpg','Pokemon Sword','Pokemon Sword introduce the Galar region and more Pokemon to discover!','1690'),
('10','https://target.scene7.com/is/image/Target/GUEST_fd476c2c-b4ec-41f6-8c9d-a628fa7d24c3?wid=488&hei=488&fmt=pjpeg','Luigi s Mansion 3','Luigi’s invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save ...','1800'),
('11','https://images-na.ssl-images-amazon.com/images/I/71w18E60zzL._SY445_.jpg','Pokemon: Let go Pikachu!','The next step in your Pokémon™ journey starts here, Take a Pokémon™ journey to the Kanto region with your energetic partner, Pikachu! Become the best ...','1800'),
('12','https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1235&h=1647&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F03%2F81q1P5JmkL._AC_SL1500_.jpg','Animal Crossing: New Horizons','Animal Crossing: New Horizons is a 2020 life simulation game developed and published by Nintendo for the Nintendo Switch; it is the fifth main game in the Animal Crossing series.','1800'),
('13','https://static2.raru.co.za/cover/2017/01/14/5390386-l.jpg?v=1500110779','Mario Kart 8 Deluxe','Mario Kart 8 Deluxe is an expanded version of the Wii U racing game, Mario Kart 8, for the Nintendo Switch, Released on April 28, 2017.','1800'),
('14','https://aumento.officemate.co.th/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-images17b517b578293131aacf10cf81bf2b4709c4dd8f8d6d_bfd77011e2cf4f7ea74bce4db1974d33dummy.jpg?imwidth=640','Super Mario Party','Super Mario Party is a party video game developed by NDcube and published by Nintendo for the Nintendo Switch.','1800'),
('15','https://s3.gaming-cdn.com/images/products/4808/orig/the-legend-of-zelda-links-awakening-switch-cover.jpg','The Legend of Zelda: Link s Awakening Switch ','The Legend of Zelda: Link’s Awakening is a remake of the 1993 game that was released for the Game Boy. In keeping with the game’s origins, the ...','1800'),


;
select * from user;