create database dorecipe;
-- use recipes;
use dorecipe;
-- user

create table member2( -- 회원테이블
member_id varchar(20) not null unique  primary key,
   member_nickname varchar(20) not null unique, -- 회원 닉네임
    member_name varchar(20) not null,
    member_gender varchar(4) not null,
    member_birth datetime(6) not null ,
    member_phone varchar(11) not null,
    member_joinDate datetime(6) not null,
   member_imagePath varchar(100) default "데이터베이스에 업로드한 프로필 이미지경로.png", -- 프로필 이미지 경로 
		foreign key (member_id)  references users(username)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

drop table if exists recipe;
create table recipe(  -- 레시피테이블
    recipe_num int auto_increment  primary key default 0, -- 1 :레시피 번호 
    recipe_title varchar(100) not null,   -- 2: 레시피 제목
    recipe_savetype int, -- 3: 저장 타입 (저장 :0, 임시저장 : 1) 
    recipe_introduce varchar(1000), -- 4:레시피 소개
    recipe_url varchar(40), -- 5: 이미지 영상 url
    recipe_rpath varchar(200),   -- 6: 대표이미지 경로
    category_kind varchar(20) default '전체',   -- 8: 레시피 종류
    category_theme varchar(20) default '전체', -- 9 : 레시피 테마
    category_way varchar(20)  default '전체', -- 10 : 레시피 방법 
    category_ing varchar(20) default '전체', -- 11 : 레시피 재료
    information_person varchar(10) default '전체', -- 12 : 요리 정보 (인원)
    information_time varchar(10)  default '전체', -- 13: 요리 정보 (시간)
    information_level varchar(10) default '전체', -- 14: 요리 정보 (난이도)
    completion_path1 varchar(200), -- 15: 완성 사진 경로1
    completion_path2 varchar(200), -- 16: 완성 사진 경로2
    completion_path3 varchar(200), -- 17: 완성 사진 경로3
    completion_path4 varchar(200), -- 18: 완성 사진 경로4
    completion_tip varchar(200), -- 19: 레시피 팁(요령)
    recipe_creDate datetime(6) not null, -- 20: 레시피 팁(요령)
    member_id varchar(20) not null, -- 21: 멤버 아이디 (fk)
    foreign key (member_id) 
    references member(member_id)
    -- 자동 변경/삭제
      ON UPDATE CASCADE
      ON DELETE CASCADE
);
create table r_order( -- 레시피요리순서테이블
   recipe_num int, -- 레시피 번호
    order_num int, -- 순서 번호 
    order_explain varchar(200), -- 설명
    order_path varchar(200), -- 이미지 경로
    primary key(recipe_num,order_num),                         
    foreign key (recipe_num) references recipe(recipe_num)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);

create table r_ingredient( -- 재료테이블
   recipe_num int,
    ing_num int,
    ing_ingredient varchar(40),
    ing_amount varchar(40),   
    primary key(recipe_num,ing_num),               
    foreign key (recipe_num) references recipe(recipe_num)
   ON UPDATE CASCADE
    ON DELETE CASCADE
);

drop table if exists event;
create table event( -- 이벤트테이블
   event_num int auto_increment primary key,
    member_id varchar(20) not null,
   event_title varchar(100) not null,
    event_content TEXT not null,
    event_path varchar(100),
    event_creDate date not null,
    event_finDate date not null,
    foreign key (member_id) references member(member_id) 
       ON UPDATE CASCADE
      ON DELETE CASCADE
);

drop table if exists r_like;
create table r_like( -- 레시피좋아요테이블
   member_id varchar(20),
    recipe_num int not null,
    likes int,
    primary key(member_id,recipe_num),                
    foreign key (member_id) references member(member_id)
      ON UPDATE CASCADE
      ON DELETE CASCADE, 
    foreign key (recipe_num) references recipe(recipe_num)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');