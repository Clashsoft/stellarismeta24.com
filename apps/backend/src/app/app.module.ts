import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {environment} from "../environments/environment";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongo.uri),
  ],
})
export class AppModule {
}
