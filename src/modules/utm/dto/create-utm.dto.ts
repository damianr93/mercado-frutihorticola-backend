import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUtmDto {

    @ApiProperty({
        example: '$17.00',
        description: 'Value of the utm',
    })
    @IsNumber()
    @IsNotEmpty({message:'Utm value is required'})
    public value:number;
};
