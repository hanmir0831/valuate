import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = await this.userModel.create(createUserDto);
        return newUser.save();
    }

    async readUsers(): Promise<User[]> {
        const user = await this.userModel.find().exec();
        return user;
      }
}