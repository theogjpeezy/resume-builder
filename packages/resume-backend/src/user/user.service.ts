import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { User } from 'src/user/entities/user';
import { UserDto } from 'src/dto/user-dto';
import { ObjectID, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

    public async createUser(userDTO: UserDto) {
        const user = this.usersRepository.create(userDTO);
        await this.usersRepository.insert(user);

        return user;
    }

    public getUser(id: string) {
        return this.usersRepository.findOne(new ObjectID(id));
    }

    public getUsers() {
        return this.usersRepository.find();
    }

    public deleteUser(id: string) {
        return this.usersRepository.delete({id: new ObjectID(id)});
    }

    public async updateUser(id: string, user: UserDto) {
        await this.usersRepository.update({id: new ObjectID(id)}, user);
    }
}
