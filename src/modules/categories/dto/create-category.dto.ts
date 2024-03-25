import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCategoryDto {

    @ApiProperty({
        example: 'Tuberculos',
        description: 'Category that groups some products',
    })
    @IsNotEmpty({ message: 'The category name is required' })
    public name: string;

    @ApiProperty({
        example: 'Todos aquellos productos de crecimiento subterráneo',
        description: 'description of the category',
    })
    @IsNotEmpty({ message: 'The category description is required' })
    public description: string;

}
