import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Skill } from './interfaces/skill.interface';
import { CreateSkillDTO } from './dto/create-skill.dto';

@Injectable()
export class SkillService {
    constructor(@InjectModel('Skill') private readonly skillModel: Model<Skill>){}

    // Get All Skill
    async getAllSkill(): Promise<Skill[]> {
        const skill = await this.skillModel.find().exec();
        return skill;
    }

    // Add Skill
    async AddSkill(createSkillDTO: CreateSkillDTO): Promise<Skill>{
        const newSkill = await new this.skillModel(createSkillDTO);
        return newSkill.save();
    }

}
