import { Controller, Get, Post, Body, Param, Redirect, UseFilters } from '@nestjs/common';
import { IsEmail, IsNotEmpty, IsIn, MaxLength, Equals } from 'class-validator';
import { AppService } from './app.service';
import { RegisterExceptionFilter } from './register-exception.filter';
const packageJSON = require('../package.json');
import timezones from './data/timezones';

export class CreateUserDto {
  @IsNotEmpty()
  publicBadgeName: string;
  @IsEmail()
  privateEmail: string;
  @IsIn(timezones)
  timezone: string;
  @MaxLength(7)
  availableFrom: string;
  @MaxLength(7)
  availableTo: string;
  /*
  @MaxLength(200)
  TalkProposal: string;
  @MaxLength(1600)
  TalkProposalSummary: string;
  */
  @MaxLength(200)
  BofProposal: string;
  @MaxLength(1600)
  BofProposalSummary: string;
  @MaxLength(800)
  publicBadgeByline: string;
  @MaxLength(400)
  privateName: string;
  @MaxLength(800)
  org: string;
  @MaxLength(400)
  website: string;
  @MaxLength(800)
  ActivityPub: string;
  @Equals('agreed')
  codeOfConduct: 'agreed';
  confirmed: '';
  helpsVideoRecording: boolean;
  helpsVideoEdit: boolean;
  helpsModeration: boolean;
  helpsWebdesign: boolean;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string { return this.appService.getHello() }

  @Get('confirm/:id')
  @Redirect(`${packageJSON.redaktor.base||'http://localhost'}/#register/confirmed`)
  async getConfirm(@Param('id') id: string) {
    await this.appService.getConfirm(id)
  }

  @Post()
  @UseFilters(new RegisterExceptionFilter())
  @Redirect(`${packageJSON.redaktor.base||'http://localhost'}/#register/sent`)
  async create(@Body() createUserDto: CreateUserDto) {
    await this.appService.postRegistration(createUserDto);
  }

}
