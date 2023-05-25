import {Module} from '@nestjs/common';
import {EmpireService} from './empire.service';
import {EmpireController} from './empire.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Empire, EmpireSchema} from "@stellarismeta24.com/types";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Empire.name,
        schema: EmpireSchema,
      },
    ])
  ],
  controllers: [EmpireController],
  providers: [EmpireService],
})
export class EmpireModule {
}
