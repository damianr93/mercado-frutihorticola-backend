import { ApiProperty } from "@nestjs/swagger"
import { IsMongoId, IsNotEmpty } from "class-validator"

export class CreateRemitoDto {

    @ApiProperty({
        example: '35165163251',
        description: 'Remito number',
    })
    @IsNotEmpty({ message: 'The remito is required' })
    public remitoNumber: string;

    @ApiProperty({
        example: '35165163251',
        description: 'User id',
    })
    @IsNotEmpty({ message: 'The User id is required' })
    @IsMongoId({ message: 'The assigned value is not valid' })
    public introductor: string;

    @ApiProperty({
        example: '35165163251',
        description: 'Products id',
    })
    @IsNotEmpty({ message: 'The Products id is required' })
    @IsMongoId({ message: 'The assigned value is not valid' })
    public products: [string];

    @ApiProperty({
        example: '$15.32',
        description: 'total price',
    })
    public totalPrice: number;

    @ApiProperty({
        example: '35165163251',
        description: 'User id',
    })
    @IsNotEmpty({ message: 'The User is required' })
    @IsMongoId({ message: 'The assigned value is not valid' })
    public addressee: string;

    @ApiProperty({
        example: '02/01/2024',
        description: 'Date of reception',
        maxLength: 50,
        minLength: 4,
    })
    public createdAt: string;
}
