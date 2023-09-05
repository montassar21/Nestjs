import { Injectable } from '@nestjs/common';
import { ClientDto } from '../dto/client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.schema';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}
  async add(currentUser: any, body: ClientDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.clientModel.create(data);
  }

  findAll(currentUser: any) {
    return this.clientModel.find({ owner: currentUser._id });
  }

  findOne(currentUser: any, id: string) {
    return this.clientModel.findOne({ owner: currentUser._id, _id: id });
  }

  update(id: string, body: ClientDto) {
    return this.clientModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return this.clientModel.findOneAndRemove({ _id: id });
  }
}
