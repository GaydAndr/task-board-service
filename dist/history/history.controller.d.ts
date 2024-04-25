import { RawBodyRequest } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { Request } from "express";
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    create(createHistoryDto: CreateHistoryDto, req: RawBodyRequest<Request>): Promise<import("./entities/history.entity").History>;
    findAll(id: string): Promise<import("./entities/history.entity").History[]>;
    findOne(id: string): string;
}
