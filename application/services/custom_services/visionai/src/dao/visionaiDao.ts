import * as mongoose from 'mongoose';
import visionaiModel from '../models/daomodels/visionai';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class visionaiDao {
    private visionai = visionaiModel;
    constructor() { }
    
    public async GpCreate(visionaiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into visionaiDao.ts: GpCreate');

    let temp = new visionaiModel(visionaiData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from visionaiDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(visionaiData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into visionaiDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.visionai.aggregate(([
                        { $match: { $and: [{ created_by: visionaiData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from visionaiDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}