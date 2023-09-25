import { Request, Response } from 'express';
import {visionaiDao} from '../dao/visionaiDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let visionai = new visionaiDao();

export class visionaiService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into visionaiService.ts: GpCreate')
     let  visionaiData = req.body;
     visionai.GpCreate(visionaiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from visionaiService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into visionaiService.ts: GpGetNounCreatedBy')
     let  visionaiData = { created_by: req.query.createdby };
     visionai.GpGetNounCreatedBy(visionaiData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from visionaiService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}