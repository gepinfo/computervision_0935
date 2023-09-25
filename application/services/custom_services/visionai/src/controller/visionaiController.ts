import { Request, Response } from 'express';
import { visionaiService } from '../service/visionaiService';
import { CustomLogger } from '../config/Logger'
let visionai = new visionaiService();

export class visionaiController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    visionai.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into visionaiController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from visionaiController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    visionai.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into visionaiController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from visionaiController.ts: GpGetNounCreatedBy');
    })}


}