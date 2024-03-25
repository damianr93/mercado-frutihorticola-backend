import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateProductDto {

    @ApiProperty({
        example: 'Zanahorias X KG',
        description: 'Product',
    })
    @IsNotEmpty({ message: 'The Product is required' })
    public product: string

    @ApiProperty({
        example: 'Moño azul',
        description: 'brand of the product',
    })
    @IsNotEmpty({ message: 'The brand of the product is required' })
    public marca: string

    @ApiProperty({
        example: '0.7',
        description: 'utm value',
    })
    @IsNotEmpty({ message: 'The utm value is required' })
    public utmValue: number

    @ApiProperty({
        example: '3216513',
        description: 'Id of the corresponding category',
    })
    @IsNotEmpty({ message: 'The Category Id is required' })
    public category: string
}
