import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  // Puedes agregar más campos según tu modelo de usuario
  @IsNotEmpty()
  name: string; // Este es un ejemplo si tienes un campo 'name'

  // No incluyas la contraseña en el DTO para la respuesta
}
