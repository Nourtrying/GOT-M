-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gotm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gotm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gotm` DEFAULT CHARACTER SET utf8 ;
USE `gotm` ;

-- -----------------------------------------------------
-- Table `gotm`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`account` (
  `idaccount` INT NOT NULL AUTO_INCREMENT,
  `is_admin` TINYINT NOT NULL,
  PRIMARY KEY (`idaccount`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `idaccount_UNIQUE` ON `gotm`.`account` (`idaccount` ASC) VISIBLE;

CREATE UNIQUE INDEX `username_UNIQUE` ON `gotm`.`account` (`is_admin` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`assignment` (
  `idassignment` INT NOT NULL AUTO_INCREMENT,
  `asgtitle` VARCHAR(45) NOT NULL,
  `deadline` DATE NOT NULL,
  PRIMARY KEY (`idassignment`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `idassignment_UNIQUE` ON `gotm`.`assignment` (`idassignment` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`dept`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`dept` (
  `iddept` INT NOT NULL AUTO_INCREMENT,
  `deptna` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddept`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `iddept_UNIQUE` ON `gotm`.`dept` (`iddept` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `DiscordTag` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phoneN` VARCHAR(12) NULL DEFAULT NULL,
  `ProfilePic` LONGTEXT NULL DEFAULT NULL,
  `score` INT NULL DEFAULT '0',
  `dept_iddept` INT NOT NULL,
  `account_idaccount` INT NOT NULL,
  PRIMARY KEY (`iduser`),
  CONSTRAINT `fk_user_dept1`
    FOREIGN KEY (`dept_iddept`)
    REFERENCES `gotm`.`dept` (`iddept`),
  CONSTRAINT `fk_user_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `gotm`.`account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `iduser_UNIQUE` ON `gotm`.`user` (`iduser` ASC) VISIBLE;

CREATE UNIQUE INDEX `DiscordTag_UNIQUE` ON `gotm`.`user` (`DiscordTag` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `gotm`.`user` (`email` ASC) VISIBLE;

CREATE UNIQUE INDEX `phoneN_UNIQUE` ON `gotm`.`user` (`phoneN` ASC) VISIBLE;

CREATE INDEX `fk_user_dept1_idx` ON `gotm`.`user` (`dept_iddept` ASC) VISIBLE;

CREATE INDEX `fk_user_account1_idx` ON `gotm`.`user` (`account_idaccount` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`emailtemplate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`emailtemplate` (
  `idemailtemplate` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  `subject` VARCHAR(45) NULL DEFAULT NULL,
  `body` MEDIUMTEXT NULL DEFAULT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idemailtemplate`),
  CONSTRAINT `fk_emailtemplate_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_emailtemplate_user1_idx` ON `gotm`.`emailtemplate` (`user_iduser` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`event` (
  `idevent` INT NOT NULL AUTO_INCREMENT,
  `eventtitle` VARCHAR(45) NULL DEFAULT NULL,
  `startingdate` DATE NULL DEFAULT NULL,
  `endingdate` DATE NULL DEFAULT NULL,
  `eventbanner` BLOB NULL DEFAULT NULL,
  `eventdescr` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idevent`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `gotm`.`meeting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`meeting` (
  `idmeeting` INT NOT NULL AUTO_INCREMENT,
  `meettitle` VARCHAR(45) NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`idmeeting`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `gotm`.`pending`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`pending` (
  `idpending` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `discordTag` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `confirmPassword` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idpending`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `username_UNIQUE` ON `gotm`.`pending` (`username` ASC) VISIBLE;

CREATE UNIQUE INDEX `dsicordTag_UNIQUE` ON `gotm`.`pending` (`discordTag` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `gotm`.`pending` (`email` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`team` (
  `idteam` INT NOT NULL AUTO_INCREMENT,
  `teamn` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idteam`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `gotm`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`player` (
  `idplayer` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(45) NOT NULL,
  `profilepic` BLOB NULL DEFAULT NULL,
  `link` MEDIUMTEXT NULL DEFAULT NULL,
  `team_idteam` INT NOT NULL,
  PRIMARY KEY (`idplayer`),
  CONSTRAINT `fk_player_team1`
    FOREIGN KEY (`team_idteam`)
    REFERENCES `gotm`.`team` (`idteam`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_player_team1_idx` ON `gotm`.`player` (`team_idteam` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`profile` (
  `idprofile` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `account_idaccount` INT NOT NULL,
  PRIMARY KEY (`idprofile`),
  CONSTRAINT `fk_profile_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `gotm`.`account` (`idaccount`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE UNIQUE INDEX `username_UNIQUE` ON `gotm`.`profile` (`username` ASC) VISIBLE;

CREATE INDEX `fk_profile_account1_idx` ON `gotm`.`profile` (`account_idaccount` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`user_has_assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`user_has_assignment` (
  `user_iduser` INT NOT NULL,
  `assignment_idassignment` INT NOT NULL,
  `timestamp` TIMESTAMP NOT NULL,
  PRIMARY KEY (`user_iduser`, `assignment_idassignment`),
  CONSTRAINT `fk_user_has_assignment_assignment1`
    FOREIGN KEY (`assignment_idassignment`)
    REFERENCES `gotm`.`assignment` (`idassignment`),
  CONSTRAINT `fk_user_has_assignment_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_has_assignment_assignment1_idx` ON `gotm`.`user_has_assignment` (`assignment_idassignment` ASC) VISIBLE;

CREATE INDEX `fk_user_has_assignment_user1_idx` ON `gotm`.`user_has_assignment` (`user_iduser` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`user_has_meeting`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`user_has_meeting` (
  `user_iduser` INT NOT NULL,
  `meeting_idmeeting` INT NOT NULL,
  PRIMARY KEY (`user_iduser`, `meeting_idmeeting`),
  CONSTRAINT `fk_user_has_meeting_meeting1`
    FOREIGN KEY (`meeting_idmeeting`)
    REFERENCES `gotm`.`meeting` (`idmeeting`),
  CONSTRAINT `fk_user_has_meeting_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `gotm`.`user` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE INDEX `fk_user_has_meeting_meeting1_idx` ON `gotm`.`user_has_meeting` (`meeting_idmeeting` ASC) VISIBLE;

CREATE INDEX `fk_user_has_meeting_user1_idx` ON `gotm`.`user_has_meeting` (`user_iduser` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `gotm`.`Registry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gotm`.`Registry` (
  `idRegistry` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `teamN` VARCHAR(45) NULL,
  `discordTag` VARCHAR(45) NOT NULL,
  `event_idevent` INT NOT NULL,
  PRIMARY KEY (`idRegistry`),
  CONSTRAINT `fk_Registry_event1`
    FOREIGN KEY (`event_idevent`)
    REFERENCES `gotm`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE UNIQUE INDEX `email_UNIQUE` ON `gotm`.`Registry` (`email` ASC) VISIBLE;

CREATE UNIQUE INDEX `discordTag_UNIQUE` ON `gotm`.`Registry` (`discordTag` ASC) VISIBLE;

CREATE INDEX `fk_Registry_event1_idx` ON `gotm`.`Registry` (`event_idevent` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
