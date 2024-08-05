import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRentalDto } from './create-rental.dto';
import { IsDate, IsNumber, IsString, IsUUID } from 'class-validator';
import { RentalStatus } from '@prisma/client';

export class UpdateRentalDto extends PartialType(CreateRentalDto) {
    @ApiProperty()
    @IsUUID()
    userId: string

    @ApiProperty()
    @IsUUID()
    carId: string

    @ApiProperty()
    @IsDate()
    start_date: Date

    @ApiProperty()
    @IsDate()
    end_date: Date

    @ApiProperty()
    @IsNumber()
    total_price: number

    @ApiProperty({enum:[  'active', 'completed', 'cancelled']})
    @IsString()
    status: RentalStatus
}