import {
  PublisherAbstract,
  SubjectsEnum,
  TicketCreatedEventInterface,
} from '@ldtickets/common';

export class TicketCreatedPublisher extends PublisherAbstract<
  TicketCreatedEventInterface
> {
  subject: SubjectsEnum.TicketCreated = SubjectsEnum.TicketCreated;
}
