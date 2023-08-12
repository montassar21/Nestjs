import { Injectable } from '@nestjs/common';
import { ClientDto } from '../dto/client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.schema';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}
  Add(body: ClientDto) {
    return this.clientModel.create(body);
  }

  FindAll() {
    return this.clientModel.find();
  }

  FindOne(id: string) {
    return this.clientModel.findOne({ _id: id });
  }

  Update(id: string, body: ClientDto) {
    return this.clientModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async Delete(id: string): Promise<any> {
    return this.clientModel.findOneAndRemove({ _id: id });
  }
}
