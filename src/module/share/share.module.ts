import { Module } from '@nestjs/common';
import { BaseService } from './service/base/base.service';

@Module({
  providers: [BaseService],
  exports:[BaseService] //想让其他模块能够使用这个模块的服务必须在这个地方暴露出去

})
export class ShareModule {}
