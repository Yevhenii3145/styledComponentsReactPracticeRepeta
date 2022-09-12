import { PageTitle } from "components/PageTitle/PageTitle";
import {EventBoard} from 'components/EventBoard/EventBoard'
import upcomingEvents from './upcoming.json'
import { Container } from "components/Container/Container.styled";


export const App = () => {
  return (
    <Container >
     <PageTitle text="24th Core Worlds Coalition Conference gg" />
    <EventBoard events={upcomingEvents} />
    </Container>
  );
}
