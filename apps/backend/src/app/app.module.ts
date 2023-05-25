import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {environment} from "../environments/environment";
import {EmpireModule} from "./empire/empire.module";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongo.uri),
    EmpireModule,
  ],
})
export class AppModule {
}
