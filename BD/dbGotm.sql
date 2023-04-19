-- MySQL Workbench Synchronization
-- Generated: 2023-04-19 03:12
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: dell

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `gotm` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `gotm`.`user` (
  `iduser` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `DiscordTag` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phoneN` INT(11) NULL DEFAULT NULL,
  `ProfilePic` BLOB NULL DEFAULT NULL,
  `score` INT(11) NULL DEFAULT 0,
  `profile_idprofile` INT(11) NOT NULL,
  `dept_iddept` INT(11) NOT NULL,
  `pending_idpending` INT(11) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `iduser_UNIQUE` (`iduser` ASC) VISIBLE,
  UNIQUE INDEX `DiscordTag_UNIQUE` (`DiscordTag` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `phoneN_UNIQUE` (`phoneN` ASC) VISIBLE,
  INDEX `fk_user_profile_idx` (`profile_idprofile` ASC) VISIBLE,
  INDEX `fk_user_dept1_idx` (`dept_iddept` ASC) VISIBLE,
  INDEX `fk_user_pending1_idx` (`pending_idpending` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile`
    FOREIGN KEY (`profile_idprofile`)
    REFERENCES `gotm`.`profile` (`idprofile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_dept1`
    FOREIGN KEY (`dept_iddept`)
    REFERENCES `gotm`.`dept` (`iddept`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_pending1`
    FOREIGN KEY (`pending_idpending`)
    REFERENCES `gotm`.`pending` (`idpending`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`pending` (
  `idpending` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `discordTag` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `confirmPassword` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idpending`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `dsicordTag_UNIQUE` (`discordTag` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`account` (
  `idaccount` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idaccount`),
  UNIQUE INDEX `idaccount_UNIQUE` (`idaccount` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`profile` (
  `idprofile` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `account_idaccount` INT(11) NOT NULL,
  PRIMARY KEY (`idprofile`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `fk_profile_account1_idx` (`account_idaccount` ASC) VISIBLE,
  CONSTRAINT `fk_profile_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `gotm`.`account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`assignment` (
  `idassignment` INT(11) NOT NULL AUTO_INCREMENT,
  `asgtitle` VARCHAR(45) NOT NULL,
  `deadline` DATE NOT NULL,
  PRIMARY KEY (`idassignment`),
  UNIQUE INDEX `idassignment_UNIQUE` (`idassignment` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`meeting` (
  `idmeeting` INT(11) NOT NULL AUTO_INCREMENT,
  `meettitle` VARCHAR(45) NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idmeeting`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`event` (
  `idevent` INT(11) NOT NULL AUTO_INCREMENT,
  `eventtitle` VARCHAR(45) NULL DEFAULT NULL,
  `startingdate` DATE NULL DEFAULT NULL,
  `endingdate` DATE NULL DEFAULT NULL,
  `eventbanner` BLOB NULL DEFAULT NULL,
  `eventdescr` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idevent`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`team` (
  `idteam` INT(11) NOT NULL AUTO_INCREMENT,
  `teamn` VARCHAR(45) NULL DEFAULT NULL,
  `player_idplayer` INT(11) NOT NULL,
  PRIMARY KEY (`idteam`),
  INDEX `fk_team_player1_idx` (`player_idplayer` ASC) VISIBLE,
  CONSTRAINT `fk_team_player1`
    FOREIGN KEY (`player_idplayer`)
    REFERENCES `gotm`.`player` (`idplayer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`player` (
  `idplayer` INT(11) NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(45) NOT NULL,
  `profilepic` BLOB NULL DEFAULT NULL,
  `link` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idplayer`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`dept` (
  `iddept` INT(11) NOT NULL AUTO_INCREMENT,
  `deptna` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddept`),
  UNIQUE INDEX `iddept_UNIQUE` (`iddept` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`emailtemplate` (
  `idemailtemplate` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `subject` VARCHAR(45) NULL DEFAULT NULL,
  `body` MEDIUMTEXT NULL DEFAULT NULL,
  `user_iduser` INT(11) NOT NULL,
  PRIMARY KEY (`idemailtemplate`),
  INDEX `fk_emailtemplate_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_emailtemplate_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`user_has_assignment` (
  `user_iduser` INT(11) NOT NULL,
  `assignment_idassignment` INT(11) NOT NULL,
  `timestamp` TIMESTAMP NOT NULL,
  PRIMARY KEY (`user_iduser`, `assignment_idassignment`),
  INDEX `fk_user_has_assignment_assignment1_idx` (`assignment_idassignment` ASC) VISIBLE,
  INDEX `fk_user_has_assignment_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_assignment_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_assignment_assignment1`
    FOREIGN KEY (`assignment_idassignment`)
    REFERENCES `gotm`.`assignment` (`idassignment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `gotm`.`user_has_meeting` (
  `user_iduser` INT(11) NOT NULL,
  `meeting_idmeeting` INT(11) NOT NULL,
  PRIMARY KEY (`user_iduser`, `meeting_idmeeting`),
  INDEX `fk_user_has_meeting_meeting1_idx` (`meeting_idmeeting` ASC) VISIBLE,
  INDEX `fk_user_has_meeting_user1_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_meeting_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_meeting_meeting1`
    FOREIGN KEY (`meeting_idmeeting`)
    REFERENCES `gotm`.`meeting` (`idmeeting`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
