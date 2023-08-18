import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
    }
    render() {
        const { location } = this.props;
        if (!location || !location.state) {
            return <span>Movie details are not available!</span>;
        }
    
        // location.state가 존재하는 경우, 해당 정보를 사용하여 렌더링
        const { title, year, summary, poster, genres } = location.state;
    
        return (
            <div>
                <img src={poster} alt={title} />
                <h3>{title}</h3>
                <h5>{year}</h5>
                <p>{summary}</p>
                <ul>
                    {genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
        );
        
    }
}

export default Detail;