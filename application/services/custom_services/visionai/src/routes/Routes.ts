import { Request, Response, NextFunction } from "express";
import { visionaiController } from '../controller/visionaiController';


export class Routes {
    private visionai: visionaiController = new visionaiController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/visionai').post(this.visionai.GpCreate);
app.route('/visionai/userid/created_by').get(this.visionai.GpGetNounCreatedBy);
     }

}