import { IsNotEmpty, Length } from "class-validator"

export class CreateQuizDto {
    @IsNotEmpty({ message: 'Name is a required field!' })
    @Length(3, 50)
    title: string

    @IsNotEmpty({ message: 'Company is a required field!' })
    @Length(3, 50)
    description: string
}