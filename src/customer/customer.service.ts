import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>){}

    // Get All Customer
    async getAllCustomer(): Promise<Customer[]> {
        const customer = await this.customerModel.find().exec();
        return customer;
    }

    // Get Single Customer
    async getCustomer(customerID): Promise<Customer> {
        const customer = await this.customerModel.findById(customerID).exec();
        return customer;
    }

    // Pagination
    async getCustomerPage(page): Promise<Customer[]> {
        const hal = ( page - 1) * 5;

        const customer = await this.customerModel.find().skip(hal).limit(5).exec();
        return customer;
    }

    // Post Single Customer
    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer>{
        const newCustomer = await new this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }

    // Edit Single Customer
    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer>{
        const updateCustomer = await this.customerModel.findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updateCustomer;
    }

    // Delete Customer
    async deleteCustomer(customerID): Promise<any> {
        const deleteCustomer = await this.customerModel.findByIdAndRemove(customerID);
        return deleteCustomer;
    }

    // Get Total Data
    async getTotalCustomer(): Promise<any> {
        const totalCustomer = await this.customerModel.countDocuments();
        return totalCustomer;
    }
}
