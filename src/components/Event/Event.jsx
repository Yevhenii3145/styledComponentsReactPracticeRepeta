
import PropTypes from 'prop-types'
import {AiFillDislike, AiFillAmazonCircle, AiFillCodeSandboxCircle, AiFillBug } from 'react-icons/ai'
import {formatEventDuration, formatEventStart} from '../utils'
// import { formatEventStart } from '../utils/formatEventStart'
// import { formatEventDuration } from '../utils/formatEventDuration'
// import css from './Event.module.css'
import { iconSize } from '../constants'
import {Card, EventName,Info,Chip} from './Event.styled'


export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)

    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                <AiFillDislike size={iconSize.sm} />
                {location}
            </Info>
            <Info>
                <AiFillAmazonCircle size={iconSize.sm} />
                {speaker}
            </Info>
            <Info>
                <AiFillCodeSandboxCircle size={iconSize.sm} />
                {formattedStart}
            </Info> 
            <Info>
                <AiFillBug size={iconSize.sm} />
                {duration}
            </Info>
            <Chip eventType={type}>{type}</Chip>
        </Card>
    )
}
Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

