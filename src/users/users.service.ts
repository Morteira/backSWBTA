import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './Users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  // Crear un nuevo usuario
  async create(UsersData: Partial<Users>): Promise<Users> {
    const newUsers = this.UsersRepository.create(UsersData);
    return await this.UsersRepository.save(newUsers);
  }

  // Buscar usuario por email
  async findByEmail(email: string): Promise<Users | undefined> {
    return await this.UsersRepository.findOne({ where: { email } });
  }

  // Buscar usuario por ID
  async findById(id: number): Promise<Users | undefined> {
    return await this.UsersRepository.findOne({ where: { id } });
  }

  // Buscar usuario por email, documento o matrícula (para registro)
  async findByUniqueFields(email: string, documento: string, matricula: string): Promise<Users | undefined> {
    return await this.UsersRepository.findOne({
      where: [
        { email },
        { documento },
        { matricula },
      ],
    });
  }

  // Buscar usuario por documento o matrícula (para login)
  async findByDocumentoOrMatricula(documento?: string, matricula?: string): Promise<Users | undefined> {
    return await this.UsersRepository.findOne({
      where: [
        { documento },
        { matricula },
      ],
    });
  }
}
