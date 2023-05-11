import { Link } from 'react-router-dom';

function PageNumbers() {
    return (
        <>
            <Link to={'/1'}>Page 1</Link> {' '}
            <Link to={'/2'}>Page 2</Link> {' '}
            <Link to={'/3'}>Page 3</Link> {' '}
            <Link to={'/4'}>Page 4</Link> {' '}
            <Link to={'/5'}>Page 5</Link> {' '}
            <Link to={'/6'}>Page 6</Link> {' '}
            <Link to={'/7'}>Page 7</Link> {' '}
            <Link to={'/8'}>Page 8</Link> {' '}
            <Link to={'/9'}>Page 9</Link> {' '}
            <Link to={'/10'}>Page 10</Link> {' '}
            <Link to={'/11'}>Page 11</Link> {' '}
            <Link to={'/12'}>Page 12</Link>
        </>
    )
}

export default PageNumbers;