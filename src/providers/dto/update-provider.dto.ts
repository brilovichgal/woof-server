import { CreateProviderDto } from './create-provider.dto';

export type UpdateProviderDto = Partial<Omit<CreateProviderDto, 'id'>>