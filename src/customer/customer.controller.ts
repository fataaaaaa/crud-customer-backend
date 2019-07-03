import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException, Put, Query, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import { AuthGuard } from "../login/guard/auth.guard";

@Controller('customer')
//@UseGuards(AuthGuard)
export class CustomerController {
    constructor(private customerService: CustomerService){}

    // Add a Customer
    @Post('/create')
    async addCustomer(@Res() res, @Body() createCustomerDTO: CreateCustomerDTO){
        const customer = await this.customerService.addCustomer(createCustomerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Customer has been add successfully",
            customer
        })
    }

    
    // Retrieve Customer
    @Get('customer')
    async getAllCustomer(@Res() res){
        const customer = await this.customerService.getAllCustomer();
        return res.status(HttpStatus.OK).json(customer);
    }

    // Retrieve Customer by Page
    @Get('page/:page')
    async getCustomerPage(@Res() res, @Param('page') page){
        const customer = await this.customerService.getCustomerPage(page);
        return res.status(HttpStatus.OK).json(customer);
    }

    // Fetch Single Customer by Id
    @Get('customer/:customerID')
    async getCustomer(@Res() res, @Param('customerID') customerID){
        const customer = await this.customerService.getCustomer(customerID);
        if (!customer){
            throw new NotFoundException('Customer doesnt exist!');
        }else{
            return res.status(HttpStatus.OK).json(customer);
        }
    }

    // Get Total Data
    @Get('totalData')
    async getTotalCustomer(@Res() res){
        const customer = await this.customerService.getTotalCustomer();
        return res.status(HttpStatus.OK).json(customer);
    }

    // Update Customer
    @Put('/update')
    async updateCustomer(@Res() res, @Query('customerID') customerID, @Body() createCustomerDTO: CreateCustomerDTO){
        const customer = await this.customerService.updateCustomer(customerID, createCustomerDTO);
        if(!customer){
            throw new NotFoundException('Customer does not exist');
        }else{
            return res.status(HttpStatus.OK).json({
                message: 'Customer has been successfully updated',
                customer 
            });
        }
    }

    @Delete('/delete')
    async deleteCustomer(@Res() res, @Query('customerID') customerID){
        const customer = await this.customerService.deleteCustomer(customerID);
        if(!customer){
            throw new NotFoundException('Customer does not exist');
        }else{
            return res.status(HttpStatus.OK).json({
                message: 'Customer has been deleted',
                customer
            });
        }
    }
}
