import css from './PageTitle.module.css'
import {Title} from './PageTitle.styled'

export const PageTitle = ({ text }) => {
    return <Title className={css.title}>{text}</Title>
}