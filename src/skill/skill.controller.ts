import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDTO } from './dto/create-skill.dto';

@Controller('skill')
export class SkillController {
    constructor(private skillService: SkillService){}

    // Add Skill
    @Post('/create')
    async addSkill(@Res() res, @Body() createSkillDTO: CreateSkillDTO){
        const skill = await this.skillService.AddSkill(createSkillDTO);
        return res.status(HttpStatus.OK).json({
            message: "Skill Succesfully Added",
            skill
        });
    }

    // Get Skill
    @Get('skill')
    async getSkill(@Res() res){
        const skill = await this.skillService.getAllSkill();
        return res.status(HttpStatus.OK).json(skill);
    }
}
